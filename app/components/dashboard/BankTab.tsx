import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/context/UserContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Banks from "@/app/data/bank.json";

const accountInfoSchema = z.object({
  nomor_rekening: z.string(),
  nama_pemilik_rekening: z.string(),
  nama_bank: z.string(),
  no_sid: z.string().optional(),
  nomor_rekening_custodian: z.string().optional(),
  nama_rekening_custodian: z.string().optional(),
  nama_ibu_kandung: z.string().min(2, "Name must be at least 2 characters"),
});

type AccountInfoFormData = z.infer<typeof accountInfoSchema>;

export const BankTab = () => {
  const { user, updateUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  console.log(user);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountInfoFormData>({
    resolver: zodResolver(accountInfoSchema),
    defaultValues: {
      nomor_rekening: user?.profile?.nomor_rekening || "",
      nama_pemilik_rekening: user?.profile?.nama_pemilik_rekening || "",
      nama_bank: user?.profile?.nama_bank || "",
      no_sid: user?.profile?.no_sid || "",
      nomor_rekening_custodian: user?.profile?.nomor_rekening_custodian || "",
      nama_rekening_custodian: user?.profile?.nama_rekening_custodian || "",
      nama_ibu_kandung: user?.profile?.nama_ibu_kandung || "",
    },
  });

  const onSubmit = async (data: AccountInfoFormData) => {
    if (user) {
      setIsLoading(true);
      try {
        const token = Cookies.get("authToken");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const changedData = new FormData();
        changedData.append("nomor_rekening", data.nomor_rekening);
        changedData.append("nama_pemilik_rekening", data.nama_pemilik_rekening);
        changedData.append("nama_bank", data.nama_bank);
        changedData.append(
          "no_sid",
          data.no_sid || user?.profile?.no_sid || ""
        );
        changedData.append(
          "nomor_rekening_custodian",
          data.nomor_rekening_custodian ||
            user?.profile?.nomor_rekening_custodian ||
            ""
        );
        changedData.append(
          "nama_rekening_custodian",
          data.nama_rekening_custodian ||
            user?.profile?.nama_rekening_custodian ||
            ""
        );
        changedData.append("nama_ibu_kandung", data.nama_ibu_kandung);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/pemodal/${user.pemodal_id}?_method=PUT`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: changedData,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update profile");
        }

        updateUser({
          ...user,
          profile: {
            ...user.profile,
            nomor_rekening: data.nomor_rekening,
            nama_pemilik_rekening: data.nama_pemilik_rekening,
            nama_bank: data.nama_bank,
            no_sid: data.no_sid || user?.profile?.no_sid || "",
            nomor_rekening_custodian:
              data.nomor_rekening_custodian ||
              user?.profile?.nomor_rekening_custodian ||
              "",
            nama_rekening_custodian:
              data.nama_rekening_custodian ||
              user?.profile?.nama_rekening_custodian ||
              "",
            nama_ibu_kandung: data.nama_ibu_kandung,
          },
        });
        toast({
          title: "Profile Updated",
          description: "Your profile has been successfully updated.",
        });
      } catch (error) {
        console.error("Error updating profile:", error);
        toast({
          title: "Error",
          description: "Failed to update profile. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Card className="border-none shadow-none">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Controller
              name="nomor_rekening"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="nomor_rekening">Nomor Rekening</Label>
                  <Input {...field} />
                </>
              )}
            />
            <Controller
              name="nama_pemilik_rekening"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="nama_pemilik_rekening">
                    Nama Pemilik Rekening
                  </Label>
                  <Input {...field} />
                </>
              )}
            />
            <Controller
              name="nama_bank"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="nama_bank">Nama Bank</Label>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || user?.profile?.nama_bank || ""}
                  >
                    <SelectTrigger>
                      <SelectValue>
                        {field.value || user?.profile?.nama_bank
                          ? field.value || user?.profile?.nama_bank
                          : "Select Bank"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {Banks.map((option) => (
                        <SelectItem key={option.code} value={option.name}>
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </>
              )}
            />
            <Controller
              name="no_sid"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="no_sid">Nomor SID</Label>
                  <Input {...field} />
                </>
              )}
            />
            <Controller
              name="nomor_rekening_custodian"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="nomor_rekening_custodian">
                    Nomor Rekening Custodian
                  </Label>
                  <Input {...field} />
                </>
              )}
            />
            <Controller
              name="nama_rekening_custodian"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="nama_rekening_custodian">
                    Nama Rekening Custodian
                  </Label>
                  <Input {...field} />
                </>
              )}
            />
            <Controller
              name="nama_ibu_kandung"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="nama_ibu_kandung">Nama Ibu Kandung</Label>
                  <Input {...field} />
                </>
              )}
            />
            {errors.nama_ibu_kandung && (
              <p className="text-red-500">{errors.nama_ibu_kandung.message}</p>
            )}
          </div>
          <CardFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

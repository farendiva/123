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
import { DatePicker } from "@/components/ui/datepicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const accountInfoSchema = z.object({
  email: z.string().email().optional(),
  no_handphone: z.string().optional(),
  no_ktp: z.string().optional(),
  tanggal_lahir: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  nama_kontak_darurat: z.string().min(2, "Name must be at least 2 characters"),
  agama: z.string(),
  kewarganegaraan: z.string(),
});

type AccountInfoFormData = z.infer<typeof accountInfoSchema>;

const agamaOptions = [
  { value: "1", label: "Islam" },
  { value: "2", label: "Kristen" },
  { value: "3", label: "Katolik" },
  { value: "4", label: "Hindu" },
  { value: "5", label: "Budha" },
  { value: "6", label: "Konghucu" },
];

const kewarganegaraanOptions = [
  { value: "1", label: "wni tinggal di indonesia" },
  { value: "2", label: "wni tinggal di luar negeri" },
  { value: "3", label: "wna tinggal di indonesia" },
];

const getIdFromLabel = (
  options: { value: string; label: string }[],
  label: string
) => {
  const option = options.find((opt) => opt.label === label);
  return option ? option.value : "";
};

const getLabelFromId = (
  options: { value: string; label: string }[],
  id: string
) => {
  const option = options.find((opt) => opt.value === id);
  return option ? option.label : "";
};

export const AccountInfoTab = () => {
  const { user, updateUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountInfoFormData>({
    resolver: zodResolver(accountInfoSchema),
    defaultValues: {
      email: user?.email || "",
      no_handphone: user?.profile?.no_handphone || "",
      no_ktp: user?.profile?.no_ktp || "",
      tanggal_lahir: user?.profile?.tanggal_lahir || "",
      nama_kontak_darurat: user?.profile?.nama_kontak_darurat || "",
      // Convert label from backend into value
      agama: getIdFromLabel(agamaOptions, user?.profile?.agama || ""),
      kewarganegaraan: getIdFromLabel(
        kewarganegaraanOptions,
        user?.profile?.kewarganegaraan || ""
      ),
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
        changedData.append("tanggal_lahir", data.tanggal_lahir);
        changedData.append("nama_kontak_darurat", data.nama_kontak_darurat);
        // Send value to the backend
        changedData.append("agama", data.agama);
        changedData.append("kewarganegaraan", data.kewarganegaraan);

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
            tanggal_lahir: data.tanggal_lahir,
            nama_kontak_darurat: data.nama_kontak_darurat,
            agama: data.agama,
            kewarganegaraan: data.kewarganegaraan,
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
    <Card>
      <CardHeader>
        <CardTitle>Account Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Existing fields */}
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="email">Email</Label>
                  <Input {...field} disabled />
                </>
              )}
            />
            <Controller
              name="no_handphone"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="no_handphone">Nomor Handphone</Label>
                  <Input {...field} disabled />
                </>
              )}
            />
            <Controller
              name="no_ktp"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="no_ktp">Nomor KTP</Label>
                  <Input {...field} disabled />
                </>
              )}
            />
            <Controller
              name="tanggal_lahir"
              control={control}
              rules={{ required: "Tanggal lahir diperlukan." }}
              render={({ field }) => (
                <>
                  <Label htmlFor="tanggal_lahir">Tanggal Lahir</Label>
                  <DatePicker
                    value={field.value}
                    onChange={(date) => field.onChange(date)}
                  />
                </>
              )}
            />
            {errors.tanggal_lahir && (
              <p className="text-red-500">{errors.tanggal_lahir.message}</p>
            )}
            <Controller
              name="nama_kontak_darurat"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="nama_kontak_darurat">
                    Nama Kontak Darurat
                  </Label>
                  <Input {...field} />
                </>
              )}
            />
            {errors.nama_kontak_darurat && (
              <p className="text-red-500">
                {errors.nama_kontak_darurat.message}
              </p>
            )}

            {/* Updated fields */}
            <Controller
              name="agama"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="agama">Agama</Label>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || user?.profile?.agama || ""}
                  >
                    <SelectTrigger>
                      <SelectValue>
                        {field.value || user?.profile?.agama
                          ? getLabelFromId(agamaOptions, field.value)
                          : "Select religion"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {agamaOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </>
              )}
            />
            <Controller
              name="kewarganegaraan"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="kewarganegaraan">Kewarganegaraan</Label>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || user?.profile?.kewarganegaraan || ""}
                  >
                    <SelectTrigger>
                      <SelectValue>
                        {field.value || user?.profile?.kewarganegaraan
                          ? getLabelFromId(kewarganegaraanOptions, field.value)
                          : "Select citizenship"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {kewarganegaraanOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </>
              )}
            />
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

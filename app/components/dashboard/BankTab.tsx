import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/context/UserContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
import { CircleX, SquarePen } from "lucide-react";
import { cn } from "@/lib/utils";
import Banks from "@/app/data/bank.json";

const accountInfoSchema = z.object({
  nama_ibu_kandung: z.string().min(1, "Nama Ibu Kandung Harus Diisi."),
  nama_bank: z.string().min(1, "Nama Bank Harus Diisi."),
  nomor_rekening_custodian: z.string().optional(),
  nama_rekening_custodian: z.string().optional(),
  nomor_rekening: z.string().min(1, "Nomor rekening Harus Diisi."),
  nama_pemilik_rekening: z
    .string()
    .min(1, "Nama pemilik rekening Harus Diisi."),
  no_sid: z.string().optional(),
});

type AccountInfoFormData = z.infer<typeof accountInfoSchema>;

export const BankTab = () => {
  const { user, updateUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
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
        changedData.append("no_sid", data.no_sid || "");
        changedData.append(
          "nomor_rekening_custodian",
          data.nomor_rekening_custodian || ""
        );
        changedData.append(
          "nama_rekening_custodian",
          data.nama_rekening_custodian || ""
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
            ...data,
          },
        });
        toast({
          className: cn(
            "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
          ),
          variant: "success",
          title: "Berhasil Edit Profile",
          description: "Anda Berhasil Edit Profile.",
        });
      } catch (error) {
        console.error("Error updating profile:", error);
        toast({
          className: cn(
            "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
          ),
          variant: "destructive",
          title: "Terjadi Kesalahan dalam Edit Profile",
          description: "Silakan coba lagi.",
        });
      } finally {
        setIsLoading(false);
        setIsEditMode(false);
      }
    }
  };

  const toggleEditMode = () => {
    if (isEditMode) {
      reset();
    }
    setIsEditMode(!isEditMode);
  };

  const renderField = (
    name: keyof AccountInfoFormData,
    label: string,
    isSelect = false
  ) => (
    <div className="space-y-1 pt-1 relative">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            {isSelect ? (
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={!isEditMode}
              >
                <SelectTrigger
                  className={`!cursor-auto !opacity-100 ${
                    isEditMode ? "border border-input" : "!border-none"
                  }`}
                  disabled={!isEditMode}
                >
                  <SelectValue>{field.value || `Pilih ${label}`}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {Banks.map((option) => (
                    <SelectItem key={option.code} value={option.name}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Input
                {...field}
                disabled={!isEditMode}
                className={`!cursor-auto !opacity-100 ${
                  isEditMode ? "border border-input" : "!border-none"
                }`}
              />
            )}
            {!isEditMode && (
              <SquarePen
                className="absolute right-2 top-9 h-5 w-5 cursor-pointer"
                onClick={toggleEditMode}
              />
            )}
          </>
        )}
      />
      {errors[name] && <p className="text-red-500">{errors[name]?.message}</p>}
    </div>
  );

  return (
    <Card className="border-none shadow-none">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2 divide-y divide-gray-300">
            {renderField("nomor_rekening", "Nomor Rekening")}
            {renderField("nama_pemilik_rekening", "Nama Pemilik Rekening")}
            {renderField("nama_bank", "Nama Bank", true)}
            {renderField("no_sid", "Nomor SID")}
            {renderField(
              "nomor_rekening_custodian",
              "Nomor Rekening Custodian"
            )}
            {renderField("nama_rekening_custodian", "Nama Rekening Custodian")}
            {renderField("nama_ibu_kandung", "Nama Ibu Kandung")}
          </div>
          {isEditMode && (
            <CardFooter className="flex justify-end space-x-2 mt-4 p-0">
              <Button
                className="bg-red-600 hover:bg-red-700 rounded-xl"
                type="button"
                onClick={toggleEditMode}
              >
                <CircleX size={18} className="mr-1" /> Batalkan
              </Button>
              <Button
                className="bg-emerald hover:bg-emerald-700 rounded-xl"
                type="submit"
                disabled={isLoading}
              >
                <img
                  className="scale-75"
                  src="/icons/save.svg"
                  alt="Save Icon"
                />{" "}
                {isLoading ? "Menyimpan..." : "Simpan"}
              </Button>
            </CardFooter>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

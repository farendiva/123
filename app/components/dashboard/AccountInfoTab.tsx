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
import { DatePicker } from "@/components/ui/datepicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CircleX, SquarePen } from "lucide-react";
import { cn } from "@/lib/utils";

const accountInfoSchema = z.object({
  email: z.string().email().optional(),
  no_handphone: z.string().optional(),
  no_ktp: z.string().optional(),
  tanggal_lahir: z.string().min(2, "Tanggal Lahir Harus Diisi."),
  nama_kontak_darurat: z.string().min(2, "Ahli waris Harus Diisi."),
  agama: z.string().min(1, "Agama Harus Diisi."),
  kewarganegaraan: z.string().min(1, "Kewarganegaraan Harus Diisi."),
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
  const option = options.find(
    (opt) => opt.label.toLowerCase() === label.toLowerCase()
  );
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
  const [isEditMode, setIsEditMode] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AccountInfoFormData>({
    resolver: zodResolver(accountInfoSchema),
    defaultValues: {
      email: user?.email || "",
      no_handphone: user?.profile?.no_handphone || "",
      no_ktp: user?.profile?.no_ktp || "",
      tanggal_lahir: user?.profile?.tanggal_lahir || "",
      nama_kontak_darurat: user?.profile?.nama_kontak_darurat || "",
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
            agama: getLabelFromId(agamaOptions, data.agama),
            kewarganegaraan: getLabelFromId(
              kewarganegaraanOptions,
              data.kewarganegaraan
            ),
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
      }
    }
    setIsEditMode(false);
  };

  const toggleEditMode = () => {
    if (isEditMode) {
      // If cancelling, reset form to original values
      reset();
    }
    setIsEditMode(!isEditMode);
  };

  const renderField = (
    name: keyof AccountInfoFormData,
    label: string,
    isEditable: boolean
  ) => (
    <div className="space-y-1 pt-1 relative">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Input
              {...field}
              disabled={!isEditMode || !isEditable}
              className={`!cursor-auto !opacity-100 ${
                isEditMode && isEditable
                  ? "border border-input"
                  : "!border-none"
              }`}
            />
            {isEditable && !isEditMode && (
              <SquarePen
                className="absolute right-2 top-9 h-5 w-5  cursor-pointer"
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
          <div className={`space-y-2 divide-y divide-gray-300`}>
            {renderField("email", "Email", false)}
            {renderField("no_handphone", "Nomor Handphone", false)}
            {renderField("no_ktp", "Nomor KTP", false)}

            <div className="space-y-1 pt-1 relative">
              <Label htmlFor="tanggal_lahir">Tanggal Lahir</Label>
              <Controller
                name="tanggal_lahir"
                control={control}
                render={({ field }) => (
                  <>
                    <DatePicker
                      value={field.value}
                      onChange={(date) => field.onChange(date)}
                      bgColor={`bg-white !py-4 !cursor-auto !opacity-100 ${
                        isEditMode ? "!border !border-input" : "!border-none"
                      }`}
                      disabled={!isEditMode}
                    />
                    {!isEditMode && (
                      <SquarePen
                        className="absolute right-2 top-9 h-5 w-5  cursor-pointer"
                        onClick={toggleEditMode}
                      />
                    )}
                  </>
                )}
              />
              {errors.tanggal_lahir && (
                <p className="text-red-500">{errors.tanggal_lahir.message}</p>
              )}
            </div>

            {renderField("nama_kontak_darurat", "Nama Kontak Darurat", true)}

            <div className="space-y-1 pt-1 relative">
              <Label htmlFor="agama">Agama</Label>
              <Controller
                name="agama"
                control={control}
                render={({ field }) => (
                  <>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || user?.profile?.agama || ""}
                      disabled={!isEditMode}
                    >
                      <SelectTrigger
                        className={`!cursor-auto !opacity-100 ${
                          isEditMode ? "border border-input" : "!border-none"
                        }`}
                        disabled={!isEditMode}
                      >
                        {" "}
                        <SelectValue>
                          {field.value || user?.profile?.agama
                            ? getLabelFromId(agamaOptions, field.value)
                            : "Pilih Agama"}
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
                    {!isEditMode && (
                      <SquarePen
                        className="absolute right-2 top-9 h-5 w-5  cursor-pointer"
                        onClick={toggleEditMode}
                      />
                    )}
                  </>
                )}
              />
            </div>

            <div className="space-y-1 pt-1 relative">
              <Label htmlFor="kewarganegaraan">Kewarganegaraan</Label>
              <Controller
                name="kewarganegaraan"
                control={control}
                render={({ field }) => (
                  <>
                    <Select
                      onValueChange={field.onChange}
                      value={
                        field.value || user?.profile?.kewarganegaraan || ""
                      }
                      disabled={!isEditMode}
                    >
                      <SelectTrigger
                        className={`!cursor-auto !opacity-100 ${
                          isEditMode ? "border border-input" : "!border-none"
                        }`}
                        disabled={!isEditMode}
                      >
                        {" "}
                        <SelectValue>
                          {field.value || user?.profile?.kewarganegaraan
                            ? getLabelFromId(
                                kewarganegaraanOptions,
                                field.value
                              )
                            : "Pilih Kewarganegaraan"}
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
                    {!isEditMode && (
                      <SquarePen
                        className="absolute right-2 top-9 h-5 w-5  cursor-pointer"
                        onClick={toggleEditMode}
                      />
                    )}
                  </>
                )}
              />
            </div>
          </div>
          {isEditMode && (
            <CardFooter className="flex justify-end space-x-2 mt-4 p-0">
              <Button
                className="bg-red-600  hover:bg-red-700 rounded-xl"
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

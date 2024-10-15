import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/context/UserContext";
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

const jobSchema = z.object({
  pekerjaan: z.string().min(1, "Pekerjaan Harus Diisi."),
  pendapatan: z.string().min(1, "Pendapatan Harus Diisi."),
  industri_pekerjaan: z.string().min(1, "Industri Pekerjaan Harus Diisi."),
});

type JobFormData = z.infer<typeof jobSchema>;

const pekerjaanOptions = [
  {
    value: "1",
    label: "Karyawan Swasta",
  },
  {
    value: "2",
    label: "wiraswasta",
  },
  {
    value: "3",
    label: "ASN",
  },
  {
    value: "4",
    label: "pegawai bumn",
  },
  {
    value: "5",
    label: "pensiunan",
  },
  {
    value: "6",
    label: "guru atau dosen",
  },
];

const industriPekerjaanOptions = [
  {
    value: "1",
    label: "retail",
  },
  {
    value: "2",
    label: "otomotif",
  },
  {
    value: "3",
    label: "finansial",
  },
  {
    value: "4",
    label: "travel",
  },
  {
    value: "5",
    label: "pendidikan",
  },
  {
    value: "6",
    label: "makanan dan minuman",
  },
  {
    value: "7",
    label: "kesehatan dan gaya hidup",
  },
  {
    value: "8",
    label: "penginapan",
  },
  {
    value: "9",
    label: "agriculture",
  },
  {
    value: "10",
    label: "pertambangan",
  },
  {
    value: "11",
    label: "teknologi",
  },
  {
    value: "12",
    label: "kontraktor",
  },
  {
    value: "13",
    label: "konstruksi",
  },
  {
    value: "14",
    label: "konsultan",
  },
  {
    value: "15",
    label: "elektronik",
  },
  {
    value: "16",
    label: "transportasi",
  },
  {
    value: "17",
    label: "perumahan",
  },
  {
    value: "18",
    label: "logistik",
  },
  {
    value: "19",
    label: "manufaktur",
  },
  {
    value: "20",
    label: "hiburan",
  },
  {
    value: "61",
    label: "software dev",
  },
  {
    value: "63",
    label: "tani",
  },
];

const pendapatanOptions = [
  {
    value: "1",
    label: "< 5 juta",
  },
  {
    value: "2",
    label: "5 juta - 10 juta",
  },
  {
    value: "3",
    label: "10 juta - 50 juta",
  },
  {
    value: "4",
    label: "50 juta - 100 juta",
  },
  {
    value: "5",
    label: "100 juta - 500 juta",
  },
  {
    value: "6",
    label: "500 juta - 1 M",
  },
  {
    value: "7",
    label: "> 1 M",
  },
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

export const JobTab = () => {
  const { user, updateUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      pekerjaan: getIdFromLabel(
        pekerjaanOptions,
        user?.profile?.pekerjaan || ""
      ),
      pendapatan: getIdFromLabel(
        pendapatanOptions,
        user?.profile?.pendapatan || ""
      ),
      industri_pekerjaan: getIdFromLabel(
        industriPekerjaanOptions,
        user?.profile?.industri_pekerjaan || ""
      ),
    },
  });

  const onSubmit = async (data: JobFormData) => {
    if (user) {
      setIsLoading(true);
      try {
        const token = Cookies.get("authToken");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const changedData = new FormData();
        changedData.append("pendapatan_per_bulan", data.pendapatan);
        changedData.append("pekerjaan", data.pekerjaan);
        changedData.append("industri_pekerjaan", data.industri_pekerjaan);

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
            pendapatan: getLabelFromId(pendapatanOptions, data.pendapatan),
            pekerjaan: getLabelFromId(pekerjaanOptions, data.pekerjaan),
            industri_pekerjaan: getLabelFromId(
              industriPekerjaanOptions,
              data.industri_pekerjaan
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
      reset();
    }
    setIsEditMode(!isEditMode);
  };

  const renderField = (
    name: keyof JobFormData,
    label: string,
    options: any[]
  ) => (
    <div className="space-y-1 pt-1 relative">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
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
                <SelectValue>
                  {field.value
                    ? getLabelFromId(options, field.value)
                    : `Pilih ${label}`}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
            {renderField("pekerjaan", "Pekerjaan", pekerjaanOptions)}
            {renderField(
              "industri_pekerjaan",
              "Industri Pekerjaan",
              industriPekerjaanOptions
            )}
            {renderField("pendapatan", "Pendapatan", pendapatanOptions)}
          </div>
          {isEditMode && (
            <CardFooter className="flex justify-end space-x-2 mt-4 p-0 ">
              <Button
                className="bg-red-600 hover:bg-red-700 rounded-xl"
                type="button"
                onClick={toggleEditMode}
              >
                <CircleX size={18} className="mr-1" /> Batalkan
              </Button>
              <Button
                className="bg-emerald hover:bg-emerald-700 rounded-xl "
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

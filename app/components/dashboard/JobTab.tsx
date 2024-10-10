import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/context/UserContext";
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

const jobSchema = z.object({
  pekerjaan: z.string(),
  pendapatan: z.string(),
  industri_pekerjaan: z.string(),
});

type AccountInfoFormData = z.infer<typeof jobSchema>;

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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountInfoFormData>({
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

  const onSubmit = async (data: AccountInfoFormData) => {
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
              name="pekerjaan"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="pekerjaan">pekerjaan</Label>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue>
                        {field.value
                          ? getLabelFromId(pekerjaanOptions, field.value)
                          : "Select Pekerjaan"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {pekerjaanOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={String(option.value)}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </>
              )}
            />
            <Controller
              name="industri_pekerjaan"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="industri_pekerjaan">industri_pekerjaan</Label>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue>
                        {field.value
                          ? getLabelFromId(
                              industriPekerjaanOptions,
                              field.value
                            )
                          : "Select Industries"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {industriPekerjaanOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={String(option.value)}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </>
              )}
            />
            <Controller
              name="pendapatan"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="pendapatan">pendapatan</Label>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue>
                        {field.value
                          ? getLabelFromId(pendapatanOptions, field.value)
                          : "Select citizenship"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {pendapatanOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={String(option.value)}
                        >
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

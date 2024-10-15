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
import { Checkbox } from "@/components/ui/checkbox";
import usePreferences from "@/hooks/usePreferences";
import provinces from "@/app/data/provinces.json";
import { City, District, PostalCode, Subdistrict } from "@/lib/types";
import { CircleX, SquarePen } from "lucide-react";
import { cn } from "@/lib/utils";

const addressSchema = z.object({
  alamat_ktp: z.string().min(1, "Alamat Harus Diisi."),
  provinsi_ktp: z.string().min(1, "Provinsi Harus Diisi."),
  kabupaten_ktp: z.string().min(1, "Kota/Kabupaten Harus Diisi."),
  kecamatan_ktp: z.string().min(1, "Kecamatan Harus Diisi."),
  kelurahan_ktp: z.string().min(1, "Kelurahan Harus Diisi."),
  kodepos_ktp: z
    .string()
    .min(5, "Kode Pos harus terdiri dari 5 digit.")
    .regex(/^[0-9]+$/, "Kode Pos harus berupa angka."),
  rt_rw_ktp: z
    .string()
    .min(1, "RT/RW KTP Harus Diisi")
    .regex(
      /^\d{1,3}\/\d{1,3}$/,
      "Format harus dalam bentuk RT/RW dan hanya boleh berisi angka, contoh: 001/001"
    ),
  sama_dengan_ktp: z.boolean(),
  alamat_domisili: z.string().min(1, "Alamat Harus Diisi."),
  provinsi_domisili: z.string().min(1, "Provinsi Harus Diisi."),
  kabupaten_domisili: z.string().min(1, "Kota/Kabupaten Harus Diisi."),
  kecamatan_domisili: z.string().min(1, "Kecamatan Harus Diisi."),
  kelurahan_domisili: z.string().min(1, "Kelurahan Harus Diisi."),
  kodepos_domisili: z
    .string()
    .min(5, "Kode Pos harus terdiri dari 5 digit.")
    .regex(/^[0-9]+$/, "Kode Pos harus berupa angka."),
  rt_rw_domisili: z
    .string()
    .min(1, "RT/RW Domisili Harus Diisi")
    .regex(
      /^\d{1,3}\/\d{1,3}$/,
      "Format harus dalam bentuk RT/RW dan hanya boleh berisi angka, contoh: 001/001"
    ),
});

type AddressFormData = z.infer<typeof addressSchema>;

const getIdFromLabel = (
  options: { value: string; label: string }[],
  label: string
) => {
  const option = options.find((opt) => opt.label === label);
  return option ? option.value : "";
};

const createMap = <T, K extends keyof T, V extends keyof T>(
  array: T[],
  keyProp: K,
  valueProp: V
): { [key: string]: T[V] } => {
  return array.reduce((map, item) => {
    map[item[keyProp] as string] = item[valueProp];
    return map;
  }, {} as { [key: string]: T[V] });
};

// Optimized functions
export const getIdFromCity = (cities: City[], cityName: string): string => {
  const cityMap = createMap(cities, "city", "city_code");
  return cityMap[cityName] || "";
};

export const getDistrictCode = (
  districts: District[],
  districtName: string
): string => {
  const districtMap = createMap(districts, "district", "district_code");
  return districtMap[districtName] || "";
};

export const getSubDistrictCode = (
  subDistricts: Subdistrict[],
  subDistrictName: string
): string => {
  const subDistrictMap = createMap(
    subDistricts,
    "sub_district",
    "sub_district_code"
  );
  return subDistrictMap[subDistrictName] || "";
};

export const getPostalCode = (
  postalCodes: PostalCode[],
  postalCodeValue: string
): string => {
  const postalCodeMap = createMap(postalCodes, "postal_code", "postal_code");
  return postalCodeMap[postalCodeValue] || "";
};

export const AddressTab = () => {
  const { user, updateUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [useSameAddress, setUseSameAddress] = useState(false);
  const {
    cities,
    districts,
    subdistricts,
    postalCodes,
    domisiliCities,
    domisiliDistricts,
    domisiliSubdistricts,
    domisiliPostalCodes,
    fetchCities,
    fetchDistricts,
    fetchSubDistricts,
    fetchPostalCodes,
    fetchDomisiliCities,
    fetchDomisiliDistricts,
    fetchDomisiliSubDistricts,
    fetchDomisiliPostalCodes,
  } = usePreferences();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      alamat_ktp: user?.profile?.alamat_ktp || "",
      provinsi_ktp: user?.profile?.provinsi_ktp || "",
      kabupaten_ktp: user?.profile?.kabupaten_ktp || "",
      kecamatan_ktp: user?.profile?.kecamatan_ktp || "",
      kelurahan_ktp: user?.profile?.kelurahan_ktp || "",
      kodepos_ktp: user?.profile?.kodepos_ktp || "",
      rt_rw_ktp: user?.profile?.rt_rw_ktp || "",
      sama_dengan_ktp: false,
      alamat_domisili: user?.profile?.alamat_domisili || "",
      provinsi_domisili: user?.profile?.provinsi_domisili || "",
      kabupaten_domisili: user?.profile?.kabupaten_domisili || "",
      kecamatan_domisili: user?.profile?.kecamatan_domisili || "",
      kelurahan_domisili: user?.profile?.kelurahan_domisili || "",
      kodepos_domisili: user?.profile?.kodepos_domisili || "",
      rt_rw_domisili: user?.profile?.rt_rw_domisili || "",
    },
  });

  const mapToSelectOptions = <T extends { [key: string]: any }>(
    data: T[],
    valueKey: keyof T,
    labelKey?: keyof T
  ): { value: string; label: string }[] => {
    return data.map((item) => ({
      value: String(item[valueKey]),
      label: labelKey ? String(item[labelKey]) : String(item[valueKey]),
    }));
  };

  const handleSameAsKTPChange = (checked: boolean) => {
    setValue("sama_dengan_ktp", checked);
    if (checked) {
      setValue("alamat_domisili", watch("alamat_ktp"));
      setValue("provinsi_domisili", watch("provinsi_ktp"));
      setValue("kabupaten_domisili", watch("kabupaten_ktp"));
      setValue("kecamatan_domisili", watch("kecamatan_ktp"));
      setValue("kelurahan_domisili", watch("kelurahan_ktp"));
      setValue("kodepos_domisili", watch("kodepos_ktp"));
      setValue("rt_rw_domisili", watch("rt_rw_ktp"));
    }
  };

  const handleProvinceChange = (value: string) => {
    setValue("provinsi_ktp", value);
    fetchCities(value);
  };

  const handleCityChange = (value: string) => {
    setValue("kabupaten_ktp", value);
    fetchDistricts(value);
  };

  const handleDistrictChange = (value: string) => {
    setValue("kecamatan_ktp", value);
    fetchSubDistricts(value);
    fetchPostalCodes(value);
  };

  const handleProvinceDomicileChange = (value: string) => {
    setValue("provinsi_domisili", value);
    fetchDomisiliCities(value);
  };

  const handleCityDomicileChange = (value: string) => {
    setValue("kabupaten_domisili", value);
    fetchDomisiliDistricts(value);
  };

  const handleDistrictDomicileChange = (value: string) => {
    setValue("kecamatan_domisili", value);
    fetchDomisiliSubDistricts(value);
    fetchDomisiliPostalCodes(value);
  };

  const onSubmit = async (data: AddressFormData) => {
    if (user) {
      setIsLoading(true);
      try {
        const token = Cookies.get("authToken");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const changedData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          changedData.append(key, value.toString());
        });

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
          throw new Error("Failed to update address");
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
          title: "Berhasil Edit Alamat",
          description: "Anda Berhasil Edit Alamat.",
        });
      } catch (error) {
        console.error("Error updating address:", error);
        toast({
          className: cn(
            "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
          ),
          variant: "destructive",
          title: "Terjadi Kesalahan dalam Edit Alamat",
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
    name: keyof AddressFormData,
    label: string,
    options?: { value: string; label: string }[],
    onChangeHandler?: (value: string) => void
  ) => (
    <div className="space-y-1 pt-1 relative">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            {isEditMode && options ? (
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  if (onChangeHandler) onChangeHandler(value);
                }}
                value={field.value as string}
                disabled={!isEditMode}
              >
                <SelectTrigger
                  className={`!cursor-auto !opacity-100 ${
                    isEditMode ? "border border-input" : "!border-none"
                  }`}
                >
                  <SelectValue placeholder={`Select ${label}`} />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Input
                {...field}
                value={field.value as string}
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

  const renderAddressFields = (prefix: "ktp" | "domisili") => (
    <>
      {renderField(`alamat_${prefix}`, `Alamat ${prefix.toUpperCase()}`)}
      {renderField(
        `provinsi_${prefix}`,
        `Provinsi ${prefix.toUpperCase()}`,
        provinces,
        prefix === "ktp" ? handleProvinceChange : handleProvinceDomicileChange
      )}
      {renderField(
        `kabupaten_${prefix}`,
        `Kota/Kabupaten ${prefix.toUpperCase()}`,
        mapToSelectOptions(
          prefix === "ktp" ? cities : domisiliCities,
          "city_code",
          "city"
        ),
        prefix === "ktp" ? handleCityChange : handleCityDomicileChange
      )}
      {renderField(
        `kecamatan_${prefix}`,
        `Kecamatan ${prefix.toUpperCase()}`,
        mapToSelectOptions(
          prefix === "ktp" ? districts : domisiliDistricts,
          "district_code",
          "district"
        ),
        prefix === "ktp" ? handleDistrictChange : handleDistrictDomicileChange
      )}
      {renderField(
        `kelurahan_${prefix}`,
        `Kelurahan ${prefix.toUpperCase()}`,
        mapToSelectOptions(
          prefix === "ktp" ? subdistricts : domisiliSubdistricts,
          "sub_district_code",
          "sub_district"
        )
      )}
      {renderField(
        `kodepos_${prefix}`,
        `Kode Pos ${prefix.toUpperCase()}`,
        mapToSelectOptions(
          prefix === "ktp" ? postalCodes : domisiliPostalCodes,
          "postal_code"
        )
      )}
      {renderField(`rt_rw_${prefix}`, `RT/RW ${prefix.toUpperCase()}`)}
    </>
  );

  return (
    <Card className="border-none shadow-none">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2 divide-y divide-gray-300">
            {renderAddressFields("ktp")}

            {isEditMode && (
              <div className="flex items-center space-x-2 py-4">
                <Controller
                  name="sama_dengan_ktp"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="sama_dengan_ktp"
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        field.onChange(checked);
                        handleSameAsKTPChange(checked as boolean);
                        setUseSameAddress(checked as boolean);
                      }}
                      disabled={!isEditMode}
                    />
                  )}
                />
                <Label htmlFor="sama_dengan_ktp">
                  Use same address for domicile
                </Label>
              </div>
            )}

            {!useSameAddress && renderAddressFields("domisili")}
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

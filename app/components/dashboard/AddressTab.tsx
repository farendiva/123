import React, { useState, useEffect } from "react";
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
import usePreferences from "@/hooks/usePreferences";
import provinces from "@/app/data/provinces.json";
import { City, District, PostalCode, Subdistrict } from "@/lib/types";
import { Checkbox } from "@/components/ui/checkbox";

const addressSchema = z.object({
  alamat_ktp: z.string().min(1, "Address is required"),
  provinsi_ktp: z.string().min(1, "Province is required"),
  kabupaten_ktp: z.string().min(1, "City is required"),
  kecamatan_ktp: z.string().min(1, "District is required"),
  kelurahan_ktp: z.string().min(1, "Subdistrict is required"),
  kodepos_ktp: z.string().min(1, "Postal code is required"),
  rt_rw_ktp: z.string().min(1, "RT/RW is required"),
  sama_dengan_ktp: z.boolean(),
  alamat_domisili: z.string().min(1, "Address is required"),
  provinsi_domisili: z.string().min(1, "Province is required"),
  kabupaten_domisili: z.string().min(1, "City is required"),
  kecamatan_domisili: z.string().min(1, "District is required"),
  kelurahan_domisili: z.string().min(1, "Subdistrict is required"),
  kodepos_domisili: z.string().min(1, "Postal code is required"),
  rt_rw_domisili: z.string().min(1, "RT/RW is required"),
});

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

type AddressFormData = z.infer<typeof addressSchema>;

export const AddressTab = () => {
  const { user, updateUser } = useUser();
  console.log(user?.profile);
  const [isLoading, setIsLoading] = useState(false);
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
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      alamat_ktp: user?.profile?.alamat_ktp || "",
      provinsi_ktp: getIdFromLabel(
        provinces,
        user?.profile?.provinsi_ktp || ""
      ),
      kabupaten_ktp: getIdFromCity(cities, user?.profile?.kabupaten_ktp || ""),
      kecamatan_ktp: getDistrictCode(
        districts,
        user?.profile?.kecamatan_ktp || ""
      ),
      kelurahan_ktp: getSubDistrictCode(
        subdistricts,
        user?.profile?.kelurahan_ktp || ""
      ),
      kodepos_ktp: getPostalCode(postalCodes, user?.profile?.kodepos_ktp || ""),
      rt_rw_ktp: user?.profile?.rt_rw_ktp || "",
      sama_dengan_ktp: false,
      alamat_domisili: user?.profile?.alamat_domisili || "",
      provinsi_domisili: getIdFromLabel(
        provinces,
        user?.profile?.provinsi_domisili || ""
      ),
      kabupaten_domisili: getIdFromCity(
        domisiliCities,
        user?.profile?.kabupaten_domisili || ""
      ),
      kecamatan_domisili: getDistrictCode(
        domisiliDistricts,
        user?.profile?.kecamatan_domisili || ""
      ),
      kelurahan_domisili: getSubDistrictCode(
        domisiliSubdistricts,
        user?.profile?.kelurahan_domisili || ""
      ),
      kodepos_domisili: getPostalCode(
        domisiliPostalCodes,
        user?.profile?.kodepos_domisili || ""
      ),
      rt_rw_domisili: user?.profile?.rt_rw_domisili || "",
    },
  });

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
          title: "Address Updated",
          description: "Your address has been successfully updated.",
        });
      } catch (error) {
        console.error("Error updating address:", error);
        toast({
          title: "Error",
          description: "Failed to update address. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const renderAddressFields = (prefix: "ktp" | "domisili") => (
    <>
      <Controller
        name={`alamat_${prefix}` as keyof AddressFormData}
        control={control}
        render={({ field }) => (
          <>
            <Label htmlFor={`alamat_${prefix}`}>
              Alamat {prefix.toUpperCase()}
            </Label>
            <Input {...field} value={field.value as string} />
            {errors[`alamat_${prefix}` as keyof AddressFormData] && (
              <p className="text-red-500">
                {errors[`alamat_${prefix}` as keyof AddressFormData]?.message}
              </p>
            )}
          </>
        )}
      />

      <Controller
        name={`provinsi_${prefix}` as keyof AddressFormData}
        control={control}
        render={({ field }) => (
          <>
            <Label htmlFor={`provinsi_${prefix}`}>
              Provinsi {prefix.toUpperCase()}
            </Label>
            <Select
              onValueChange={
                prefix === "ktp"
                  ? handleProvinceChange
                  : handleProvinceDomicileChange
              }
              value={field.value as string}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select province" />
              </SelectTrigger>
              <SelectContent>
                {provinces.map((province) => (
                  <SelectItem key={province.value} value={province.value}>
                    {province.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors[`provinsi_${prefix}` as keyof AddressFormData] && (
              <p className="text-red-500">
                {errors[`provinsi_${prefix}` as keyof AddressFormData]?.message}
              </p>
            )}
          </>
        )}
      />

      <Controller
        name={`kabupaten_${prefix}` as keyof AddressFormData}
        control={control}
        render={({ field }) => (
          <>
            <Label htmlFor={`kabupaten_${prefix}`}>
              Kota/Kabupaten {prefix.toUpperCase()}
            </Label>
            <Select
              onValueChange={
                prefix === "ktp" ? handleCityChange : handleCityDomicileChange
              }
              value={field.value as string}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                {(prefix === "ktp" ? cities : domisiliCities).map((city) => (
                  <SelectItem key={city.city_code} value={city.city_code}>
                    {city.city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors[`kabupaten_${prefix}` as keyof AddressFormData] && (
              <p className="text-red-500">
                {
                  errors[`kabupaten_${prefix}` as keyof AddressFormData]
                    ?.message
                }
              </p>
            )}
          </>
        )}
      />

      <Controller
        name={`kecamatan_${prefix}` as keyof AddressFormData}
        control={control}
        render={({ field }) => (
          <>
            <Label htmlFor={`kecamatan_${prefix}`}>
              Kecamatan {prefix.toUpperCase()}
            </Label>
            <Select
              onValueChange={
                prefix === "ktp"
                  ? handleDistrictChange
                  : handleDistrictDomicileChange
              }
              value={field.value as string}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select District" />
              </SelectTrigger>
              <SelectContent>
                {(prefix === "ktp" ? districts : domisiliDistricts).map(
                  (district) => (
                    <SelectItem
                      key={district.district_code}
                      value={district.district_code}
                    >
                      {district.district}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
            {errors[`kecamatan_${prefix}` as keyof AddressFormData] && (
              <p className="text-red-500">
                {
                  errors[`kecamatan_${prefix}` as keyof AddressFormData]
                    ?.message
                }
              </p>
            )}
          </>
        )}
      />

      <Controller
        name={`kelurahan_${prefix}` as keyof AddressFormData}
        control={control}
        render={({ field }) => (
          <>
            <Label htmlFor={`kelurahan_${prefix}`}>
              Kelurahan {prefix.toUpperCase()}
            </Label>
            <Select
              onValueChange={field.onChange}
              value={field.value as string}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Subdistricts" />
              </SelectTrigger>
              <SelectContent>
                {(prefix === "ktp" ? subdistricts : domisiliSubdistricts).map(
                  (subdistrict) => (
                    <SelectItem
                      key={subdistrict.sub_district_code}
                      value={subdistrict.sub_district_code}
                    >
                      {subdistrict.sub_district}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
            {errors[`kelurahan_${prefix}` as keyof AddressFormData] && (
              <p className="text-red-500">
                {
                  errors[`kelurahan_${prefix}` as keyof AddressFormData]
                    ?.message
                }
              </p>
            )}
          </>
        )}
      />

      <Controller
        name={`kodepos_${prefix}` as keyof AddressFormData}
        control={control}
        render={({ field }) => (
          <>
            <Label htmlFor={`kodepos_${prefix}`}>
              kodepos {prefix.toUpperCase()}
            </Label>
            <Select
              onValueChange={field.onChange}
              value={field.value as string}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Postal Codes" />
              </SelectTrigger>
              <SelectContent>
                {(prefix === "ktp" ? postalCodes : domisiliPostalCodes).map(
                  (postalcode) => (
                    <SelectItem
                      key={postalcode.postal_code}
                      value={postalcode.postal_code}
                    >
                      {postalcode.postal_code}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
            {errors[`kodepos_${prefix}` as keyof AddressFormData] && (
              <p className="text-red-500">
                {errors[`kodepos_${prefix}` as keyof AddressFormData]?.message}
              </p>
            )}
          </>
        )}
      />

      <Controller
        name={`rt_rw_${prefix}` as keyof AddressFormData}
        control={control}
        render={({ field }) => (
          <>
            <Label htmlFor={`rt_rw_${prefix}`}>
              RT/RW {prefix.toUpperCase()}
            </Label>
            <Input {...field} value={field.value as string} />
            {errors[`rt_rw_${prefix}` as keyof AddressFormData] && (
              <p className="text-red-500">
                {errors[`rt_rw_${prefix}` as keyof AddressFormData]?.message}
              </p>
            )}
          </>
        )}
      />
    </>
  );

  return (
    <Card className="border-none shadow-none">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {renderAddressFields("ktp")}

            <div className="flex items-center space-x-2">
              <Controller
                name="sama_dengan_ktp"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="sama_dengan_ktp"
                    checked={field.value}
                    onCheckedChange={(checked) => {
                      field.onChange(checked);
                      handleSameAsKTPChange(checked as boolean); // Call your handleSameAsKTPChange here
                      setUseSameAddress(checked as boolean);
                    }}
                  />
                )}
              />
              <Label htmlFor="sama_dengan_ktp">
                Use same address for domicile
              </Label>
            </div>

            {!useSameAddress && <>{renderAddressFields("domisili")}</>}
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

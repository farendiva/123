import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/context/UserContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define the schema for the form
const accountInfoSchema = z.object({
  email: z.string().email().optional(),
  no_handphone: z.string().optional(),
  no_ktp: z.string().optional(),
  tanggal_lahir: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  handphone_kontak_darurat: z
    .string()
    .min(10, "Phone number must be at least 10 digits"),
  nama_kontak_darurat: z.string().min(2, "Name must be at least 2 characters"),
});

type AccountInfoFormData = z.infer<typeof accountInfoSchema>;

export const AccountInfoTab = () => {
  const { user, updateUser } = useUser();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountInfoFormData>({
    resolver: zodResolver(accountInfoSchema),
    defaultValues: {
      email: user?.email || "",
      no_handphone: user?.profile.no_handphone || "",
      no_ktp: user?.profile.no_ktp || "",
      tanggal_lahir: user?.profile.tanggal_lahir || "",
      handphone_kontak_darurat: user?.profile.telp_kontak_darurat || "",
      nama_kontak_darurat: user?.profile.nama_kontak_darurat || "",
    },
  });

  const onSubmit = (data: AccountInfoFormData) => {
    if (user) {
      const updatedUser = {
        ...user,
        profile: {
          ...user.profile,
          tanggal_lahir: data.tanggal_lahir,
          telp_kontak_darurat: data.handphone_kontak_darurat,
          nama_kontak_darurat: data.nama_kontak_darurat,
        },
      };
      updateUser(updatedUser);
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
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Email" disabled />
              )}
            />
            <Controller
              name="no_handphone"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Phone Number" disabled />
              )}
            />
            <Controller
              name="no_ktp"
              control={control}
              render={({ field }) => (
                <Input {...field} label="KTP Number" disabled />
              )}
            />
            <Controller
              name="tanggal_lahir"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Date of Birth" type="date" />
              )}
            />
            {errors.tanggal_lahir && (
              <p className="text-red-500">{errors.tanggal_lahir.message}</p>
            )}
            <Controller
              name="handphone_kontak_darurat"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Emergency Contact Phone" />
              )}
            />
            {errors.handphone_kontak_darurat && (
              <p className="text-red-500">
                {errors.handphone_kontak_darurat.message}
              </p>
            )}
            <Controller
              name="nama_kontak_darurat"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Emergency Contact Name" />
              )}
            />
            {errors.nama_kontak_darurat && (
              <p className="text-red-500">
                {errors.nama_kontak_darurat.message}
              </p>
            )}
          </div>
          <CardFooter>
            <Button type="submit">Save Changes</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

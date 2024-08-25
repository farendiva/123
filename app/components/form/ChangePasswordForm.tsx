"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { ToastAction } from "@/components/ui/toast";
import Cookies from "js-cookie";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

const changePasswordSchema = z
  .object({
    old_password: z
      .string()
      .min(8, "Kata Sandi harus minimal 8 karakter")
      .max(128, "Kata Sandi harus maksimal 128 karakter")
      .regex(
        /(?=.*[a-z])/,
        "Kata Sandi harus mengandung setidaknya satu huruf kecil"
      )
      .regex(
        /(?=.*[A-Z])/,
        "Kata Sandi harus mengandung setidaknya satu huruf besar"
      )
      .regex(/(?=.*\d)/, "Kata Sandi harus mengandung setidaknya satu angka")
      .regex(
        /(?=.*[\W_])/,
        "Kata Sandi harus mengandung setidaknya satu karakter spesial"
      ),
    password: z
      .string()
      .min(8, "Kata Sandi harus minimal 8 karakter")
      .max(128, "Kata Sandi harus maksimal 128 karakter")
      .regex(
        /(?=.*[a-z])/,
        "Kata Sandi harus mengandung setidaknya satu huruf kecil"
      )
      .regex(
        /(?=.*[A-Z])/,
        "Kata Sandi harus mengandung setidaknya satu huruf besar"
      )
      .regex(/(?=.*\d)/, "Kata Sandi harus mengandung setidaknya satu angka")
      .regex(
        /(?=.*[\W_])/,
        "Kata Sandi harus mengandung setidaknya satu karakter spesial"
      ),
    password_confirmation: z
      .string()
      .min(8, "Kata Sandi harus minimal 8 karakter")
      .max(128, "Kata Sandi harus maksimal 128 karakter")
      .regex(
        /(?=.*[a-z])/,
        "Kata Sandi harus mengandung setidaknya satu huruf kecil"
      )
      .regex(
        /(?=.*[A-Z])/,
        "Kata Sandi harus mengandung setidaknya satu huruf besar"
      )
      .regex(/(?=.*\d)/, "Kata Sandi harus mengandung setidaknya satu angka")
      .regex(
        /(?=.*[\W_])/,
        "Kata Sandi harus mengandung setidaknya satu karakter spesial"
      ),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Kata Sandi baru dan Kata sandi konfirmasi harus sama",
    path: ["password_confirmation"],
  });

type ChangePasswordForm = z.infer<typeof changePasswordSchema>;

export default function ChangePasswordForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChangePasswordForm>({
    resolver: zodResolver(changePasswordSchema),
  });
  const router = useRouter();

  const onSubmit = async (data: ChangePasswordForm) => {
    setLoading(true);
    const authToken = Cookies.get("authToken");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/change-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast({
          className: cn(
            "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
          ),
          variant: "success",
          title: "Kata Sandi Berhasil diubah",
          description: "Kata sandi Anda telah berhasil diperbarui",
        });
        reset();

        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        toast({
          className: cn(
            "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
          ),
          variant: "destructive",
          title: "Terjadi Kesalahan",
          description: `Pastikan Kata sandi lama anda sesuai`,
          action: <ToastAction altText="Coba lagi">Coba lagi</ToastAction>,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        className: cn(
          "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
        ),
        variant: "destructive",
        title: "Terjadi Kesalahan",
        description: `Silakan coba lagi`,
        action: <ToastAction altText="Coba lagi">Coba lagi</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8"
    >
      <div className="sm:col-span-4 lg:col-span-8">
        <label
          htmlFor="old_password"
          className="block text-sm font-bold leading-6"
        >
          Kata Sandi Lama
        </label>
        <div className="relative">
          <input
            id="old_password"
            type={showOldPassword ? "text" : "password"}
            {...register("old_password")}
            className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowOldPassword(!showOldPassword)}
          >
            {showOldPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      <div className="sm:col-span-4 lg:col-span-8">
        <label htmlFor="password" className="block text-sm font-bold leading-6">
          Kata Sandi Baru
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      <div className="sm:col-span-4 lg:col-span-8">
        <label
          htmlFor="password_confirmation"
          className="block text-sm font-bold leading-6"
        >
          Ulangi Kata Sandi Baru
        </label>
        <div className="relative">
          <input
            id="password_confirmation"
            type={showPasswordConfirmation ? "text" : "password"}
            {...register("password_confirmation")}
            className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() =>
              setShowPasswordConfirmation(!showPasswordConfirmation)
            }
          >
            {showPasswordConfirmation ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-48 bg-emerald-light text-base py-2 rounded-3xl font-semibold text-white shadow-sm hover:bg-green-800 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Ubah Kata Sandi"}
      </button>
    </form>
  );
}

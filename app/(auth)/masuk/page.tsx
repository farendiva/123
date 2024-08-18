"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { z } from "zod";
import { LoginDataSchema } from "../../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { ToastAction } from "@/components/ui/toast";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";

type Inputs = z.infer<typeof LoginDataSchema>;

export default function Masuk() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(LoginDataSchema),
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const processForm: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    // ReCAPTCHA logic
    if (!executeRecaptcha) {
      setLoading(false);
      return;
    }

    try {
      const gRecaptchaToken = await executeRecaptcha("inquirySubmit");

      const recaptchaResponse = await axios({
        method: "post",
        url: "/api/recaptchaSubmit",
        data: { gRecaptchaToken },
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });

      if (recaptchaResponse?.data?.success !== true) {
        setLoading(false);
        return;
      }

      // Proceed with form submission
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: data.email, password: data.password }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        if (result.user.email_verified_at === null) {
          toast({
            className: cn(
              "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
            ),
            variant: "destructive",
            title: "Login gagal",
            description: "Silahkan verifikasi email Anda terlebih dahulu.",
            action: <ToastAction altText="Coba lagi">Coba lagi</ToastAction>,
          });
        } else if (result.user.user_type !== "pemodal") {
          toast({
            className: cn(
              "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
            ),
            variant: "destructive",
            title: "Login gagal",
            description: "Akun anda tidak sesuai dengan data kami",
            action: <ToastAction altText="Coba lagi">Coba lagi</ToastAction>,
          });
        } else {
          Cookies.set("authToken", result.token.token, {
            expires: 3,
            secure: true,
            sameSite: "Strict",
          });
          Cookies.set("user_id", result.user.id, {
            expires: 3,
            secure: true,
            sameSite: "Strict",
          });
          Cookies.set("pemodal_id", result.user.pemodal_id, {
            expires: 3,
            secure: true,
            sameSite: "Strict",
          });
          reset();
          router.push("/dashboard");
        }
      } else {
        const errorData = await response.json();
        if (errorData.message) {
          toast({
            className: cn(
              "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
            ),
            variant: "destructive",
            title: "Login gagal",
            description: "Akun anda tidak sesuai dengan data kami.",
            action: <ToastAction altText="Coba lagi">Coba lagi</ToastAction>,
          });
        } else {
          toast({
            className: cn(
              "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
            ),
            variant: "destructive",
            title: "Terjadi Kesalahan",
            description: "Silahkan Coba lagi.",
            action: <ToastAction altText="Coba lagi">Coba lagi</ToastAction>,
          });
        }
      }
    } catch (error) {
      toast({
        className: cn(
          "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
        ),
        variant: "destructive",
        title: "Pastikan Email anda sudah Terdaftar",
        description: "Silahkan Coba lagi.",
        action: <ToastAction altText="Coba lagi">Coba lagi</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <form
        className="h-screen flex justify-center items-center mx-auto"
        onSubmit={handleSubmit(processForm)}
      >
        <div
          className="w-4/5 lg:w-2/5 mx-auto text-sky"
          // initial={{ x: "50%", opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex justify-between items-center my-8 lg:my-0">
            <img src="/icons/fulusme.svg" alt="Fulusme Icon" />
            <Link href="/" className="flex font-bold">
              <ChevronLeft />
              Kembali Ke Beranda
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-3 gap-y-4 lg:gap-x-6 lg:gap-y-8 sm:grid-cols-8">
            <div className="col-span-8">
              <label
                htmlFor="email"
                className="block text-sm leading-6 font-bold"
              >
                Email
              </label>
              <div className="">
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                />
                <div className="mt-1 h-1">
                  {errors.email?.message && (
                    <p className="text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-span-8">
              <label
                htmlFor="password"
                className="block text-sm font-bold leading-6"
              >
                Kata Sandi
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  autoComplete="new-password"
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
              <div className="mt-1 h-1">
                {errors.password?.message && (
                  <p className="text-sm text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="my-4 lg:my-8 flex flex-col lg:flex-row justify-between w-full">
            <div>
              <Link href="/lupa-password" className="hover:underline ">
                Lupa Kata Sandi
              </Link>
              <p>
                Belum Punya Akun?{" "}
                <Link
                  href="/daftar"
                  className="text-emerald-light font-bold hover:underline "
                >
                  Daftar Sekarang
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="bg-emerald-light hover:bg-green-800 text-white font-bold py-4 px-16 rounded-3xl"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Loading..." : "Masuk"}
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

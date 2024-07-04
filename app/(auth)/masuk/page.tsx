"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { z } from "zod";
import { LoginDataSchema } from "../../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

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
  const [loginError, setLoginError] = useState<string | null>(null);
  const router = useRouter();

  const processForm: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    setLoginError(null); // Reset previous error
    try {
      const response = await fetch(
        "https://oms-api-dev.khalifahdev.biz.id/api/v1/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        Cookies.set("authToken", result.token.token, {
          expires: 1,
          secure: true,
          sameSite: "Strict",
        });
        reset();
        router.push("/");
      } else {
        const errorData = await response.json();
        if (errorData.message) {
          setLoginError(errorData.message);
        } else {
          setLoginError("Login gagal. Silakan coba lagi.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setLoginError("Terjadi kesalahan. Silakan coba lagi.");
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
                className="block text-sm leading-6 font-bold"
              >
                Kata Sandi
              </label>
              <div className="">
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                />
                <div className="mt-1 h-1">
                  {errors.password?.message && (
                    <p className="text-sm text-red-400">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          {loginError && (
            <div className="my-2 lg:my-4 text-red-500">{loginError}</div>
          )}
          <div className="my-4 lg:my-8 flex flex-col lg:flex-row justify-between w-full">
            <div>
              <p>Lupa Kata Sandi</p>
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

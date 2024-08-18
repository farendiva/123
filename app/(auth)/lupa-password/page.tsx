"use client";

import { useState, FormEvent } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { ToastAction } from "@/components/ui/toast";
import Cookies from "js-cookie";

export default function ForgetPassword() {
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        // Handle successful respons
        Cookies.set("resetEmail", email);
        toast({
          className: cn(
            "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
          ),
          variant: "success",
          title: "Mengirim Email Berhasil",
          description:
            "Link untuk reset kata sandi telah dikirim ke email Anda.",
        });
      } else {
        // Handle error response
        toast({
          className: cn(
            "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
          ),
          variant: "destructive",
          title: "Terjadi Kesalahan dalam mengirim Email",
          description: "Silakan coba lagi.",
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
        title: "Terjadi Kesalahan dalam mengirim Email",
        description: "Silakan coba lagi.",
        action: <ToastAction altText="Coba lagi">Coba lagi</ToastAction>,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-4/5 lg:w-2/5 mx-auto my-32 text-sky">
      <div className="flex justify-between items-center my-8">
        <img src="/icons/fulusme.svg" alt="Fulusme Icon" />
        <Link href="/" className="flex font-bold">
          <ChevronLeft />
          Kembali Ke Beranda
        </Link>
      </div>
      <h2 className="text-xl font-bold lg:text-3xl leading-relaxed">
        Reset Kata Sandi Anda
      </h2>
      <p className="text-base my-4 lg:text-xl leading-relaxed">
        Lupa Kata sandi? Mohon masukkan email yang anda daftarkan pada akun
        anda. Anda akan mendapatkan link untuk membuat kata sandi baru melalui
        email.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 grid grid-cols-1 gap-x-3 gap-y-4 lg:gap-x-6 lg:gap-y-8 sm:grid-cols-8"
      >
        <div className="sm:col-span-4 lg:col-span-8">
          <label htmlFor="email" className="block text-sm font-bold leading-6">
            Email
          </label>
          <div className="">
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-32 bg-emerald-light my-6 text-base px-6 py-2 rounded-3xl font-semibold text-white shadow-sm hover:bg-green-800 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

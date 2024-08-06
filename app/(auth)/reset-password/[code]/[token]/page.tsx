"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { ToastAction } from "@/components/ui/toast";

const ResetPasswordPage = () => {
  const { token } = useParams();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/reset-password`;

  useEffect(() => {
    const storedEmail = Cookies.get("resetEmail");
    if (storedEmail) {
      setEmail(storedEmail);
      Cookies.remove("resetEmail"); // Remove the cookie after retrieving the email
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }),
      });

      if (response.ok) {
        toast({
          className: cn(
            "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
          ),
          variant: "success",
          title: "Kata Sandi Berhasil direset",
          description: "Anda akan diarahkan ke Halaman Login",
        });
      } else {
        toast({
          className: cn(
            "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
          ),
          variant: "destructive",
          title: "Terjadi Kesalahan",
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
        title: "Terjadi Kesalahan",
        description: "Silakan coba lagi.",
        action: <ToastAction altText="Coba lagi">Coba lagi</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <h1 className="text-2xl lg:text-4xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="w-4/5 lg:w-2/5 mx-auto my-32 text-sky">
      <div className="flex justify-between items-center my-8 lg:my-0">
        <img src="/icons/fulusme.svg" alt="Fulusme Icon" />
        <Link href="/" className="flex font-bold">
          <ChevronLeft />
          Kembali Ke Beranda
        </Link>
      </div>
      <h2 className="text-2xl lg:text-3xl mt-4 leading-7 font-bold">
        Buat Kata Sandi
      </h2>
      <p className="mt-1 w-full text-lg lg:text-2xl leading-6">
        Gunakan kombinasi huruf, angka, huruf kapital dan karakter spesial
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8"
      >
        <div className="sm:col-span-4 lg:col-span-8">
          <label
            htmlFor="password"
            className="block text-sm font-bold leading-6"
          >
            Kata Sandi
          </label>
          <div>
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-md border-0 py-3 px-3 bg-[#f7f7ff] shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-4 lg:col-span-8">
          <label
            htmlFor="passwordConfirmation"
            className="block text-sm font-bold leading-6"
          >
            Ulangi Kata Sandi
          </label>
          <div>
            <input
              id="passwordConfirmation"
              type="password"
              name="password-confirmation"
              autoComplete="new-password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="block w-full rounded-md border-0 py-3 px-3 bg-[#f7f7ff] shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-48 bg-emerald-light text-base py-2 rounded-3xl font-semibold text-white shadow-sm hover:bg-green-800 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Reset Kata Sandi"}
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;

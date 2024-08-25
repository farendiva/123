import { Metadata } from "next";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import ChangePasswordForm from "@/app/components/form/ChangePasswordForm";

export const metadata: Metadata = {
  title: "Ubah Kata Sandi | FULUSME",
  description: "Halaman Ubah Kata Sandi FULUSME",
};

export default function ChangePassword() {
  return (
    <div className="w-4/5 lg:w-2/5 mx-auto mt-16 text-sky">
      <div className="flex justify-between items-center my-8 lg:my-0">
        <img src="/icons/fulusme.svg" alt="Fulusme Icon" />
        <Link href="/" className="flex font-bold">
          <ChevronLeft />
          Kembali Ke Beranda
        </Link>
      </div>
      <h2 className="text-2xl lg:text-3xl mt-4 leading-7 font-bold">
        Ubah Kata Sandi
      </h2>
      <p className="mt-1 w-full text-lg lg:text-2xl leading-6">
        Gunakan kombinasi huruf, angka, huruf kapital dan karakter spesial
      </p>
      <ChangePasswordForm />
    </div>
  );
}

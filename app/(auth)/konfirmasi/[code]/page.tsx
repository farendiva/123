"use client";

import Link from "next/link";
import { useEffect } from "react";

const ConfirmPage = ({ params }: { params: { code: string } }) => {
  const { code } = params;

  const endpoint = "https://fms-dev.khalifahdev.biz.id/konfirmasi/";

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const url = endpoint + code;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to verify email");
        }
        const data = await response.json();
        console.log(data); // Handle the response data as needed
      } catch (error) {
        console.error("Error verifying email:", error);
      }
    };

    verifyEmail();
  }, [code]);

  return (
    <main className="h-[80vh] flex flex-col justify-center items-center gap-8">
      <section className="space-y-1 lg:space-y-4 flex flex-col justify-center items-center text-sky">
        <img src="/icons/fulusme.svg" alt="Fulusme Icon" />
        <h1 className="text-2xl lg:text-[40px]">
          Selamat Datang <span className="font-bold">di Fulusme,</span>
        </h1>
        <p className="text-sm lg:text-2xl">
          Anda telah berhasil verifikasi email
        </p>
      </section>
      <Link
        className="bg-emerald-light hover:bg-green-700 px-16 py-2 rounded-3xl text-white font-bold"
        href="/masuk"
      >
        Masuk
      </Link>
    </main>
  );
};

export default ConfirmPage;

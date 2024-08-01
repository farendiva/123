"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ConfirmPage = () => {
  const { code, token } = useParams();
  const [loading, setLoading] = useState(false);
  const url = `https://oms-api-dev.khalifahdev.biz.id/api/email/verify/${code}/${token}`;

  useEffect(() => {
    const verifyEmail = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to verify email");
        }
        const data = await response.json();
      } catch (error) {
        console.error("Error verifying email:", error);
      } finally {
        setLoading(false);
      }
    };
    verifyEmail();
  }, []);

  if (loading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <h1 className="text-2xl lg:text-4xl font-bold">Loading...</h1>
      </div>
    );
  }

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

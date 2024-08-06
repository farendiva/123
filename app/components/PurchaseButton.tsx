"use client";

import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  jenis_efek: string;
  slug: string;
  listing: number;
  status?: number;
};

const PurchaseButton = ({ jenis_efek, slug, status, listing }: Props) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (listing !== 2) {
      e.preventDefault();
      return;
    }

    if (status === undefined) {
      e.preventDefault();
      toast({
        className: cn(
          "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
        ),
        variant: "destructive",
        title: "Anda harus masuk terlebih dahulu",
        description: "Silakan login untuk melanjutkan.",
      });
      setTimeout(() => {
        router.push("/masuk");
      }, 2000);
    } else if (status !== 3) {
      e.preventDefault();
      toast({
        className: cn(
          "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
        ),
        variant: "destructive",
        title: "Akun anda harus Terverifikasi sebelum membeli Efek",
        description: "Silakan coba lagi.",
      });
    }
  };

  return (
    <Link
      href={
        listing === 2
          ? `/daftar-bisnis/${jenis_efek.toLowerCase()}/${slug}/bayar`
          : "#"
      }
      onClick={handleClick}
      className={`block w-full py-4 text-sm font-semibold text-center text-white rounded-4xl ${
        listing === 2
          ? "bg-sky hover:bg-sky-950"
          : "bg-gray-300 cursor-not-allowed"
      }`}
    >
      Beli Efek
    </Link>
  );
};

export default PurchaseButton;

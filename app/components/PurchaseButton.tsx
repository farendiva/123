"use client";

import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  jenis_efek: string;
  slug: string;
  status?: number;
};

const PurchaseButton = ({ jenis_efek, slug, status }: Props) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
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
      href={`/daftar-bisnis/${jenis_efek.toLowerCase()}/${slug}/bayar`}
      onClick={handleClick}
      className="block w-full py-4 text-sm font-semibold text-center text-white bg-sky hover:bg-sky-950 rounded-4xl"
    >
      Beli Efek
    </Link>
  );
};

export default PurchaseButton;

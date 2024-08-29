"use client";

import { useEffect, useState } from "react";

interface ExpireProps {
  expire: string;
  status: number;
}

const ExpireButton: React.FC<ExpireProps> = ({ expire, status }) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  const labelVerifikasi = () => {
    switch (status) {
      case 0:
        return "Menunggu Pembayaran";
      case 1:
        return "Pembayaran Diterima";
      case 2:
        return "Pembayaran Kedaluwarsa";
      case 3:
        return "Dibatalkan oleh admin";
      case 4:
        return "Dibatalkan oleh User";
      case 5:
        return "Dikembalikan";
      case 6:
        return "Ditolak oleh admin";
      default:
        return "Menunggu Pembayaran";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const expiryTime = new Date(expire).getTime();
      const distance = expiryTime - now;

      if (distance < 0 && status === 2) {
        clearInterval(interval);
        setTimeLeft("Kedaluwarsa");
      } else {
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${hours}:${minutes}:${seconds}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expire]);
  return (
    <div className="bg-white p-4 rounded-lg flex justify-between space-y-2">
      <p className="text-[#667AB9] font-bold">Batas Pembayaran</p>
      {status === 1 ? (
        <p className="font-bold text-emerald-light">Sudah dibayar</p>
      ) : status === 0 ? (
        <div className="flex items-center gap-3">
          <p className="bg-[#E09400] px-3 py-0.5 rounded-xl text-white font-semibold focus:outline-none">
            {timeLeft}
          </p>
          <p className="text-[#667AB9] font-bold">
            {new Date(expire).toLocaleDateString("id-ID", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            ,{" "}
            {new Date(expire).toLocaleTimeString("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
          </p>
        </div>
      ) : (
        <p className="font-bold text-[#FF1F00]">{labelVerifikasi()}</p>
      )}
    </div>
  );
};

export default ExpireButton;

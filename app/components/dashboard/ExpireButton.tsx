"use client";

import { useEffect, useState } from "react";

interface ExpireProps {
  expire: string;
  status: number;
}

const ExpireButton: React.FC<ExpireProps> = ({ expire, status }) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const expiryTime = new Date(expire).getTime();
      const distance = expiryTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("Kadaluarsa");
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
      ) : (
        <p className="text-gray-800 font-medium">
          {new Date(expire).toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
          ,{" "}
          {new Date(expire).toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          · <span className="text-[#E09400] font-bold">{timeLeft}</span>
        </p>
      )}
    </div>
  );
};

export default ExpireButton;

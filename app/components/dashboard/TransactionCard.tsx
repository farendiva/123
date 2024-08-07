"use client";

import { formatRupiah } from "@/lib/rupiah";
import { CircleAlert, EllipsisVertical, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ExpireButton from "./ExpireButton";
import CopyToClipboard from "@/components/ui/CopyToClipboard";

export interface TransaksiStatus {
  status_id: number;
  description: string;
}

export interface Transaksi {
  id: number;
  user_id: number;
  efek_id: string;
  nama_efek: string;
  tipe_efek: string;
  email: string;
  nama_depan: string;
  nama_belakang: string;
  no_handphone: string;
  harga_perlembar_saham: number;
  total_saham: number;
  nilai_investasi: number;
  biaya_layanan: number;
  total_pembayaran: number;
  metode_pembayaran: string;
  tanggal_pembelian: string;
  tanggal_pembayaran: string | null;
  status: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  va_bank: string;
  va_number: string;
  va_expiry_time: string;
  transaction_id: string;
  biller_code: string | null;
  bill_key: string | null;
  transaksi_status: TransaksiStatus;
}

interface TransactionCardProps {
  transaksi: Transaksi;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transaksi }) => {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const now = new Date().getTime();
  const expiryTime = new Date(transaksi.va_expiry_time).getTime();
  const distance = expiryTime - now;
  useEffect(() => {
    const interval = setInterval(() => {
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("Expired");
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
  }, [transaksi.va_expiry_time, distance]);

  const ppn = transaksi.biaya_layanan * 0.11;
  return (
    <>
      <div className="max-w-4xl mb-4 mx-auto bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 p-6 space-y-3">
        <div className="flex justify-between items-center">
          <div
            className={`${
              transaksi.tipe_efek === "Saham"
                ? "bg-emerald-light"
                : "bg-[#FF1F00]"
            } text-white px-8 py-1 rounded-md text-sm font-semibold`}
          >
            {transaksi.tipe_efek}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleExpanded}
              className="bg-[#667AB9] hover:bg-[#475da9] text-sm font-bold text-white px-3 lg:px-6 py-1 rounded-3xl  transition duration-300"
            >
              Lihat Detil
            </button>
            <EllipsisVertical className="cursor-pointer" />
          </div>
        </div>
        <h2 className="text-lg font-bold text-gray-800">
          {transaksi.nama_efek}
        </h2>
        <div className="flex space-y-2 lg:space-y-0 flex-wrap text-sm text-[#595959] justify-between items-center">
          <div className="space-y-2 w-full sm:w-1/2 md:w-auto">
            <p className="font-bold">Kode Efek</p>
            <p className="font-medium">{transaksi.efek_id}</p>
          </div>
          <div className="space-y-2 w-full sm:w-1/2 md:w-auto">
            <p className="font-bold">Nomor Virtual Account</p>
            <p className="font-medium">{transaksi.va_number}</p>
          </div>
          <div className="space-y-2 w-full sm:w-1/2 md:w-auto">
            <p className="font-bold">Metode Pembayaran</p>
            <p className="font-medium capitalize">
              {transaksi.va_bank} Virtual Account
            </p>
          </div>
          <div className="space-y-2 w-full sm:w-1/2 md:w-auto">
            <p className="font-bold">Total Pembayaran</p>
            <p className="font-medium">
              {formatRupiah(transaksi.total_pembayaran)}
            </p>
          </div>
          <div className="space-y-2 w-full sm:w-1/2 md:w-auto">
            <p className="text-[#667AB9] font-bold">
              {distance < 0 || transaksi.status === 1
                ? "Status Pembayaran"
                : "Batas Pembayaran"}
            </p>
            {transaksi.status === 1 ? (
              <p className="font-bold text-emerald-light">Sudah dibayar</p>
            ) : distance < 0 ? (
              <p className="text-gray-800 font-medium">
                <span className="text-[#E09400] font-bold">{timeLeft}</span>
              </p>
            ) : (
              <p className="text-gray-800 font-medium">
                {new Date(transaksi.va_expiry_time).toLocaleDateString(
                  "id-ID",
                  {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  }
                )}
                ,{" "}
                {new Date(transaksi.va_expiry_time).toLocaleTimeString(
                  "id-ID",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}{" "}
                <span className="text-[#E09400] font-bold">{timeLeft}</span>
              </p>
            )}
          </div>
          {/* <h1>{transaksi.va_expiry_time}</h1> */}
        </div>
      </div>

      {isExpanded && (
        <div className="fixed z-50 inset-0 -top-4 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-3xl z-50 mx-auto my-4 p-2 bg-[#F3F5FF] rounded-lg shadow-sm overflow-y-auto max-h-[90vh] w-full sm:w-auto">
            <div className="relative p-6 bg-[#F3F5FF rounded-lg space-y-4">
              <button
                className="absolute top-0 right-0 p-2 text-gray-600 rounded-full hover:bg-slate-200"
                onClick={toggleExpanded}
              >
                <X />
              </button>
              <div className="space-y-4 bg-[#F3F5FF] text-[15px]">
                <div className="bg-white p-4 rounded-lg space-y-2">
                  <button className="bg-sky text-sm rounded-xl text-white px-8 py-1">
                    {transaksi.tipe_efek}
                  </button>
                  <div className="space-y-2">
                    <h1 className="text-xl lg:text-2xl font-bold">
                      {transaksi.nama_efek}
                    </h1>
                    <p className="font-medium">Order id: {transaksi.id}</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg text-[#667AB9] space-y-6 md:space-y-2">
                  <h2 className="font-bold">Rincian Pembelian</h2>
                  <ul className="space-y-2 md:space-y-0 flex flex-col md:flex-row justify-between items-start md:items-center mx-auto font-medium">
                    <li className="flex items-start justify-center flex-col w-full sm:w-auto">
                      <span className="font-medium">Nilai Investasi</span>
                      <span className="text-black">
                        {formatRupiah(transaksi.nilai_investasi)}
                      </span>
                    </li>
                    <li className="flex justify-center flex-col items-start w-full sm:w-auto">
                      <span className="font-medium">Jumlah Lembar Saham</span>
                      <span className="text-black">
                        {transaksi.total_saham} Lembar
                      </span>
                    </li>
                    <li className="flex items-start justify-center flex-col w-full sm:w-auto">
                      <span className="font-medium flex items-center gap-2">
                        Biaya Platform
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <CircleAlert fill="#677AB9" color="white" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Biaya yang dibebankan oleh platform</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                      <span className="text-black">
                        {formatRupiah(transaksi.biaya_layanan)}
                      </span>
                    </li>
                    <li className="flex items-start justify-center flex-col w-full sm:w-auto">
                      <span className="font-medium flex items-center gap-2">
                        PPN
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <CircleAlert fill="#677AB9" color="white" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Pajak Pertambahan Nilai</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                      <span className="text-black">{formatRupiah(ppn)}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg flex justify-between">
                  <h1 className="text-[#667AB9] font-bold">Total Pembayaran</h1>
                  <p className="font-medium">
                    {formatRupiah(transaksi.total_pembayaran)}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg space-y-6">
                  <div className="bg-white flex justify-between">
                    <h1 className="text-[#667AB9] font-bold">
                      Metode Pembayaran
                    </h1>
                    <p className="font-medium">
                      {transaksi.va_bank ? transaksi.va_bank.toUpperCase() : ""}{" "}
                      VIRTUAL ACCOUNT
                    </p>
                  </div>
                  <div className="bg-white flex justify-between">
                    <h1 className="text-[#667AB9] font-bold">
                      Nomor Virtual Account
                    </h1>
                    <div>
                      <CopyToClipboard text={transaksi.va_number} />
                    </div>
                  </div>
                </div>

                <ExpireButton
                  expire={transaksi.va_expiry_time}
                  status={transaksi.status}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TransactionCard;

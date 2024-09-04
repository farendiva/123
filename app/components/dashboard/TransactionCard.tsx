"use client";

import { formatRupiah } from "@/lib/rupiah";
import { CircleAlert, Download, EllipsisVertical, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ExpireButton from "./ExpireButton";
import CopyToClipboard from "@/components/ui/CopyToClipboard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const labelVerifikasi = () => {
    switch (transaksi.status) {
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
    if (transaksi.status === 0 && distance > 0) {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const expiryTime = new Date(transaksi.va_expiry_time).getTime();
        const distance = expiryTime - now;

        if (distance < 0 && transaksi.status === 2) {
          clearInterval(interval);
          setTimeLeft("Kedaluwarsa");
        } else {
          const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          setTimeLeft(
            `${hours.toString().padStart(2, "0")}:${minutes
              .toString()
              .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
          );
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [transaksi.va_expiry_time, transaksi.status]);

  const ppn = transaksi.biaya_layanan * 0.11;
  return (
    <>
      <div className="max-w-4xl mb-4 mx-auto bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 p-6 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
          <div className="flex gap-2 items-start justify-between">
            <p
              className={`${
                transaksi.tipe_efek === "Saham"
                  ? "bg-emerald-light"
                  : "bg-[#FF1F00]"
              } text-white px-4 sm:px-8 py-1 rounded-5xl text-xs sm:text-sm font-semibold`}
            >
              {transaksi.tipe_efek === "Sukuk" ? "Obligasi" : "Saham"}
            </p>
            <p className="text-xs sm:text-sm">
              {new Date(transaksi.tanggal_pembelian).toLocaleDateString(
                "id-ID",
                {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                }
              )}
            </p>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
            <button
              onClick={toggleExpanded}
              className="bg-[#667AB9] hover:bg-[#475da9] text-xs sm:text-sm font-bold text-white px-3 sm:px-6 py-1 rounded-3xl transition duration-300"
            >
              Lihat Detil
            </button>
            {transaksi.status === 3 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <EllipsisVertical className="cursor-pointer" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem>
                    Unduh Dokumen Perjanjian Pemodal
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
        <h2 className="text-lg font-bold text-gray-800">
          {transaksi.nama_efek}
        </h2>
        <div className="flex space-y-2 lg:space-y-0 flex-wrap text-xs text-[#595959] justify-between items-center">
          <div className="space-y-2 w-full sm:w-1/2 md:w-auto">
            <p className="font-bold">Kode Efek</p>
            <p className="font-medium">{transaksi.efek_id}</p>
          </div>
          <div className="space-y-2 w-full sm:w-1/2 md:w-auto">
            <p className="font-bold">Order Id</p>
            <p className="font-medium">{transaksi.id}</p>
          </div>
          {transaksi.va_bank !== "mandiri" ? (
            <div className="space-y-2 w-full sm:w-1/2 md:w-auto">
              <p className="font-bold">Nomor Virtual Account</p>
              <p className="font-medium">{transaksi.va_number}</p>
            </div>
          ) : (
            <>
              <div className="space-y-2 w-full sm:w-1/2 md:w-auto">
                <p className="font-bold">Biller Code</p>
                <p className="font-medium">{transaksi.biller_code}</p>
              </div>
              <div className="space-y-2 w-full sm:w-1/2 md:w-auto">
                <p className="font-bold">Bill Key</p>
                <p className="font-medium">{transaksi.bill_key}</p>
              </div>
            </>
          )}
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
            <p className=" font-bold">Status Pembayaran</p>
            {transaksi.status === 1 ? (
              <p className="font-bold text-emerald-light">Sudah Dibayar</p>
            ) : transaksi.status === 2 && distance < 0 ? (
              <p className="text-[#FF1F00] font-bold">Kedaluwarsa</p>
            ) : transaksi.status === 0 ? (
              <p className="font-bold text-[#FBB400]">Menunggu Pembayaran</p>
            ) : (
              <p className="font-bold text-[#FF1F00]">{labelVerifikasi()}</p>
            )}
          </div>
        </div>
        {transaksi.status === 0 && distance > 0 && (
          <div className="text-sm text-[#595959] inline-flex gap-1 bg-[#E0E7FF] py-2 px-6 border border-dashed rounded-md border-sky">
            <p>Harap Melakukan Pembayaran sebelum</p>
            <span>
              {new Date(transaksi.va_expiry_time).toLocaleDateString("id-ID", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              ,{" "}
              {new Date(transaksi.va_expiry_time).toLocaleTimeString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
            </span>
            <span className="font-bold ">: {timeLeft}</span>
          </div>
        )}
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
                    {transaksi.tipe_efek === "Sukuk" ? "Obligasi" : "Saham"}
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
                  {transaksi.va_bank !== "mandiri" ? (
                    <div className="bg-white flex justify-between">
                      <h1 className="text-[#667AB9] font-bold">
                        Nomor Virtual Account
                      </h1>
                      <div>
                        <CopyToClipboard text={transaksi.va_number ?? ""} />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="bg-white flex justify-between">
                        <h1 className="text-[#667AB9] font-bold">
                          Biller Code
                        </h1>
                        <div>
                          <CopyToClipboard text={transaksi.biller_code ?? ""} />
                        </div>
                      </div>
                      <div className="bg-white flex justify-between">
                        <h1 className="text-[#667AB9] font-bold">Bill Key</h1>
                        <div>
                          <CopyToClipboard text={transaksi.bill_key ?? ""} />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <ExpireButton
                  expire={transaksi.va_expiry_time}
                  status={transaksi.status}
                />
                {transaksi.status === 1 && (
                  <div className="flex items-center justify-center mx-auto my-4">
                    <button className="flex items-center gap-3 font-bold  bg-emerald-light py-2 px-4 rounded-xl">
                      <Download />
                      Unduh Dokumen Perjanjian Pemodal
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TransactionCard;

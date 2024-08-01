"use client";

import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import { formatRupiah } from "@/lib/rupiah";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useRouter } from "next/navigation";
import { ChevronDown, CircleAlert, CreditCard } from "lucide-react";
import PurchaseModal from "../PurchaseModal";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { ToastAction } from "@/components/ui/toast";

interface Data {
  id: number;
  satuan_pemindahan_buku: number;
  nilai_investasi: number;
  nama_efek: string;
  kode_penerbit: string;
  jenis_efek: string;
  [key: string]: any;
}

interface Bank {
  map(arg0: (bank: Bank) => React.JSX.Element): React.ReactNode;
  id: number;
  bank: string;
}

interface Profile {
  nama_depan: string;
  nama_belakang: string;
  no_handphone: string;
}

interface Profile {
  nama_depan: string;
  nama_belakang: string;
  jenis_kelamin: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  no_handphone: string;
  no_ktp: string;
  no_npwp: string | null;
  no_sid: string | null;
  agama: string;
  kewarganegaraan: string;
  alamat_ktp: string;
  kelurahan_ktp: string | null;
  kecamatan_ktp: string | null;
  kabupaten_ktp: string | null;
  provinsi_ktp: string | null;
  alamat_domisili: string | null;
  kelurahan_domisili: string | null;
  kecamatan_domisili: string | null;
  kabupaten_domisili: string | null;
  provinsi_domisili: string | null;
  pendidikan: string;
  pekerjaan: string;
  industri_pekerjaan: string;
  pendapatan: string;
  sumber_pendapatan: string;
  status_id: number;
  status: string;
  nomor_rekening: string;
  nama_pemilik_rekening: string;
  nama_bank: string | null;
  kabupaten_cabang_bank: string | null;
  ktp: string;
  npwp: string;
  swa_photo: string;
  slip_gaji: string;
  kartu_keluarga: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  user_type: string;
  pemodal_id: number;
  pemodal_status: number;
  pemodal_status_description: string;
  profile: Profile;
}

interface PurchaseFormProps {
  data: Data;
  banks: Bank;
  user: User;
  token: string;
}

const PurchaseForm: React.FC<PurchaseFormProps> = ({
  data,
  banks,
  user,
  token,
}) => {
  const [jumlahLembar, setJumlahLembar] = useState<number>(1);
  const [jumlahPendanaan, setJumlahPendanaan] = useState<string>("");
  const [selectedBank, setSelectedBank] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();
  const handleIncrement = () => {
    setJumlahLembar((prevJumlah) => prevJumlah + 1);
  };

  const handleDecrement = () => {
    setJumlahLembar((prevJumlah) => (prevJumlah > 0 ? prevJumlah - 1 : 0));
  };

  const handleJumlahChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setJumlahLembar(isNaN(value) ? 0 : value);
  };
  const handleJumlahPendanaanChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setJumlahPendanaan(value);
  };

  const adjustJumlahPendanaan = () => {
    const value = parseInt(jumlahPendanaan, 10);
    if (!isNaN(value) && data.satuan_pemindahan_buku) {
      const adjustedValue =
        Math.ceil(value / data.satuan_pemindahan_buku) *
        data.satuan_pemindahan_buku;
      setJumlahPendanaan(formatRupiah(adjustedValue));
      const jumlahLembarSaham = Math.ceil(
        adjustedValue / data.satuan_pemindahan_buku
      );
      setJumlahLembar(jumlahLembarSaham);
    } else {
      setJumlahPendanaan("");
      setJumlahLembar(0);
    }
  };

  const handleBlur = () => {
    adjustJumlahPendanaan();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      adjustJumlahPendanaan();
    }
  };

  const handleBankChange = (bank: string) => {
    setSelectedBank(bank);
    setIsOpen(false);
  };

  const tanggal = new Date();

  const nilaiInvestasi = jumlahLembar * data.satuan_pemindahan_buku;
  const biayaPlatform = nilaiInvestasi * 0.05;
  const ppn = biayaPlatform * 0.11;
  const totalPembayaran = nilaiInvestasi + biayaPlatform + ppn;

  const handleSubmit = async () => {
    const postData = {
      user_id: user.id,
      efek_id: data.id,
      nama_efek: data.nama_efek,
      tipe_efek: data.jenis_efek,
      email: user.email,
      nama_depan: user.profile.nama_depan,
      nama_belakang: user.profile.nama_belakang,
      no_handphone: user.profile.no_handphone,
      harga_perlembar_saham: data.satuan_pemindahan_buku,
      total_saham: jumlahLembar,
      nilai_investasi: jumlahLembar * data.satuan_pemindahan_buku,
      biaya_layanan: biayaPlatform,
      total_pembayaran: totalPembayaran,
      metode_pembayaran: "transfer",
      tanggal_pembelian: tanggal,
      bank: selectedBank,
    };

    try {
      const response = await fetch(
        "https://oms-api-dev.khalifahdev.biz.id/api/v1/transaksi",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(postData),
        }
      );

      if (response.ok) {
        toggleModal();
        toast({
          className: cn(
            "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
          ),
          variant: "success",
          title: "Pesanan Berhasil.",
          description: "Anda akan diarahkan ke Detail pesanan.",
        });
        const { order_id } = await response.json();
        router.push(`/transaksi/pembayaran/${order_id}`);
      } else {
        toggleModal();
        toast({
          className: cn(
            "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
          ),
          variant: "destructive",
          title: "Pesanan Gagal",
          description: "Silakan coba lagi.",
          action: <ToastAction altText="Coba lagi">Coba lagi</ToastAction>,
        });
      }
    } catch (error) {
      console.error("Error posting data:", error);
      toast({
        className: cn(
          "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
        ),
        variant: "destructive",
        title: "Pesanan Gagal",
        description: "Silakan coba lagi.",
        action: <ToastAction altText="Coba lagi">Coba lagi</ToastAction>,
      });
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <section className="w-full mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
      <section className="w-full max-w-xl space-y-4">
        <section className="space-y-4 my-4 lg:my-7">
          <h1 className="text-xl lg:text-2xl font-bold">{data.nama_efek}</h1>
          <p>Kode efek: {data.kode_penerbit}</p>
        </section>
        <div className="w-full mx-auto my-8 lg:my-16">
          <section className="py-6 space-y-6">
            <div>
              <label
                htmlFor="harga_per_lembar"
                className="block mb-2 text-sm lg:text-[15px] font-medium text-sky dark:text-white"
              >
                Harga Per Lembar Efek
              </label>
              <button className="bg-[#f2f5ff] text-sky text-left px-3 hover:bg-slate-100 font-bold py-3 w-full rounded-xl">
                {formatRupiah(data.satuan_pemindahan_buku)}
              </button>
            </div>
            <div>
              <label
                htmlFor="jumlah_pendanaan"
                className="block mb-2 text-sm lg:text-[15px] font-medium text-sky dark:text-white"
              >
                Jumlah Pendanaan
              </label>
              <input
                type="text"
                id="jumlah_pendanaan"
                className="bg-[#f2f5ff] text-sky font-bold placeholder:text-[#7c7c7c] placeholder:font-medium text-sm lg:text-[15px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Isi nilai pendanaan yang diinginkan"
                value={jumlahPendanaan}
                onChange={handleJumlahPendanaanChange}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                required
              />
              <p className="text-[10px] text-sky mt-1">
                Nominal harus kelipatan{" "}
                {formatRupiah(data.satuan_pemindahan_buku)}
              </p>
            </div>
            <form className="w-full mx-auto space-y-2">
              <label
                htmlFor="quantity-input"
                className="block text-sm lg:text-[15px] font-medium text-sky dark:text-white"
              >
                Jumlah Lembar Saham
              </label>
              <div className="w-full relative flex items-center gap-4">
                <button
                  type="button"
                  id="decrement-button"
                  onClick={handleDecrement}
                  className="bg-[#677AB9] hover:bg-[#4a5886] border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-4 h-4 text-white font-bold dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="quantity-input"
                  value={jumlahLembar}
                  onChange={handleJumlahChange}
                  aria-describedby="helper-text-explanation"
                  className="bg-[#f2f5ff] rounded-lg border-x-0 border-gray-300 h-11 text-center text-black font-bold text-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="999"
                  required
                />
                <button
                  type="button"
                  id="increment-button"
                  onClick={handleIncrement}
                  className="bg-[#677AB9] hover:bg-[#4a5886] border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-4 h-4 text-white font-bold dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <div>
              <label
                htmlFor="nilai_investasi"
                className="block mb-2 text-sm lg:text-[15px] font-medium text-sky dark:text-white"
              >
                Nilai Investasi
              </label>
              <button className="bg-[#677AB9] hover:bg-[#4a5886] font-bold py-3 px-3 w-full text-white text-left rounded-xl">
                {formatRupiah(nilaiInvestasi)}
              </button>
            </div>
          </section>
        </div>
      </section>
      <section className="w-full max-w-xl mx-auto">
        <section className="w-full h-[460px] mb-2 py-4 flex flex-col justify-start items-center gap-2 bg-[#f2f5ff] rounded-3xl">
          <section className="w-11/12 p-4 flex flex-col bg-white rounded-3xl text-[#677AB9] text-sm lg:text-[15px] font-bold space-y-4">
            <h3>Rincian Pembayaran</h3>
            <section>
              <p className="text-[#677AB9] font-medium">Nilai Investasi</p>
              <h3 className="text-sky font-bold">
                {formatRupiah(nilaiInvestasi)}
              </h3>
            </section>
            <section>
              <p className="text-[#677AB9] font-medium">Jumlah Lembar Saham</p>
              <h3 className="text-sky font-bold">{jumlahLembar} Lembar</h3>
            </section>
            <section>
              <p className="text-[#677AB9] font-medium flex items-center gap-2">
                Biaya Platform
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <CircleAlert fill="#677AB9" color="white" />
                    </TooltipTrigger>
                    <TooltipContent className="w-40 text-[#677AB9]">
                      <p>
                        Pemodal dikenakan biaya platform 0.5% dihitung dari
                        nilai investasi efek
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </p>
              <h3 className="text-sky font-bold">
                {" "}
                {formatRupiah(biayaPlatform)}
              </h3>
            </section>
            <section>
              <p className="text-[#677AB9] font-medium flex items-center gap-2">
                PPN
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <CircleAlert fill="#677AB9" color="white" />
                    </TooltipTrigger>
                    <TooltipContent className="w-52 text-[#677AB9]">
                      <p>
                        Besaran Pajak disesuaikan berdasarkan peraturan
                        undang-undang yang berlaku dari biaya platform
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </p>

              <h3 className="text-sky font-bold">{formatRupiah(ppn)}</h3>
            </section>
          </section>
          <section className="w-11/12 py-2 flex flex-col bg-white rounded-xl text-[#677AB9] text-sm lg:text-[15px] font-bold space-y-2">
            <div className="relative flex justify-center">
              <button
                className="w-11/12 mx-auto flex items-center gap-2 py-1 pl-4 pr-10 text-left bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedBank ? (
                  <div className="flex justify-between items-center w-full">
                    <div className="flex  items-center gap-4">
                      <img
                        src={`/icons/${selectedBank}.svg`}
                        alt={`${selectedBank} Logo`}
                        className="w-10 h-10 "
                      />
                      {selectedBank}
                    </div>
                    {isOpen ? (
                      <ChevronDown className="rotate-180" />
                    ) : (
                      <ChevronDown />
                    )}
                  </div>
                ) : (
                  <div className="flex justify-between py-1 items-center w-full">
                    <div className="flex items-center gap-6">
                      <CreditCard size={30} /> Metode Pembayaran
                    </div>
                    {isOpen ? (
                      <ChevronDown className="rotate-180" />
                    ) : (
                      <ChevronDown />
                    )}
                  </div>
                )}
              </button>
              {isOpen && (
                <ul
                  className="absolute top-14 border divide-y z-10 w-11/12 mx-auto py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-md max-h-60"
                  role="listbox"
                >
                  {banks.map((bank: Bank) => (
                    <li key={bank.id}>
                      <button
                        className="w-full flex items-center gap-2  py-1 pl-4 pr-10 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="button"
                        onClick={() => handleBankChange(bank.bank)}
                      >
                        <img
                          src={`/icons/${bank.bank}.svg`}
                          alt={`${bank.bank} Logo`}
                          className="w-10 h-10 mr-2"
                        />
                        {bank.bank}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
          <section className="w-11/12 px-4 py-4 flex items-center mx-auto justify-between bg-white rounded-xl text-[#677AB9] text-sm lg:text-[15px] font-bold space-y-2">
            <h3>Total Pembayaran</h3>
            <h3 className="text-sky mb-2 font-bold">
              {formatRupiah(totalPembayaran)}
            </h3>
          </section>
        </section>
        <section className="relative top-4 mb-8 lg:mb-0">
          <button
            className="w-full mb-2 block text-center bg-emerald-light hover:bg-green-700 rounded-4xl text-white text-sm font-semibold py-4 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500 disabled:font-bold"
            onClick={toggleModal}
            disabled={!selectedBank}
          >
            Beli Efek
          </button>
          <p className="text-sky text-sm text-center">
            Butuh Pertanyaan?{" "}
            <span className="font-bold hover:underline decoration-2 underline-offset-4 cursor-pointer">
              Hubungi Kami
            </span>{" "}
          </p>
        </section>
      </section>
      {isModalOpen && (
        <PurchaseModal
          toggleModal={toggleModal}
          handleSubmit={handleSubmit}
          user={user}
        />
      )}
    </section>
  );
};

export default PurchaseForm;

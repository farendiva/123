"use client";

import React, { ChangeEvent, useState } from "react";
import { formatRupiah } from "@/lib/rupiah";
import Link from "next/link";

interface Data {
  satuan_pemindahan_buku: number;
  nilai_investasi: number;
  [key: string]: any;
}

interface Bank {
  map(arg0: (bank: Bank) => React.JSX.Element): React.ReactNode;
  id: number;
  bank: string;
}

interface PurchaseFormProps {
  data: Data;
  banks: Bank;
}

const PurchaseForm: React.FC<PurchaseFormProps> = ({ data, banks }) => {
  const [jumlahLembar, setJumlahLembar] = useState<number>(0);
  const [jumlahPendanaan, setJumlahPendanaan] = useState<string>("");

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
    const value = parseInt(e.target.value.replace(/[^0-9]/g, ""), 10);
    if (!isNaN(value)) {
      setJumlahPendanaan(formatRupiah(value));
      const jumlahLembarSaham = Math.ceil(value / data.satuan_pemindahan_buku);
      setJumlahLembar(jumlahLembarSaham);
    } else {
      setJumlahPendanaan("");
      setJumlahLembar(0);
    }
  };

  const nilaiInvestasi = jumlahLembar * data.satuan_pemindahan_buku;

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
                className="block mb-2 text-sm lg:text-[15px] font-medium text-gray-900 dark:text-white"
              >
                Harga Per Lembar Efek
              </label>
              <button className="bg-[#f2f5ff] text-sky text-left px-2 hover:bg-slate-100 font-bold py-3 w-full rounded-xl">
                {formatRupiah(data.satuan_pemindahan_buku)}
              </button>
            </div>
            <div>
              <label
                htmlFor="jumlah_pendanaan"
                className="block mb-2 text-sm lg:text-[15px] font-medium text-gray-900 dark:text-white"
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
                required
              />
            </div>
            <form className="w-full mx-auto space-y-2">
              <label
                htmlFor="quantity-input"
                className="block text-sm lg:text-[15px] font-medium text-gray-900 dark:text-white"
              >
                Jumlah Lembar Saham
              </label>
              <div className="w-full relative flex items-center gap-4">
                <button
                  type="button"
                  id="decrement-button"
                  onClick={handleDecrement}
                  className="bg-emerald-light dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-green-700 border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
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
                  className="bg-emerald-light dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-green-700 border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
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
                className="block mb-2 text-sm lg:text-[15px] font-medium text-gray-900 dark:text-white"
              >
                Nilai Investasi
              </label>
              <button className="bg-sky hover:bg-sky-950 font-bold py-3 w-full text-white text-left px-2 rounded-xl">
                {formatRupiah(nilaiInvestasi)}
              </button>
            </div>
          </section>
        </div>
      </section>
      <section className="w-full max-w-xl mx-auto">
        <section className="w-full  h-[460px] mb-2 py-4 flex flex-col justify-start items-center gap-4 bg-[#f2f5ff] rounded-3xl">
          <section className="w-11/12 p-4 flex flex-col bg-white rounded-3xl text-[#677AB9] text-sm lg:text-[15px] font-bold space-y-4  ">
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
              <p className="text-[#677AB9] font-medium">Biaya Platform</p>
              <h3 className="text-sky font-bold">Rp 5.000</h3>
            </section>
            <section>
              <p className="text-[#677AB9] font-medium">PPN</p>
              <h3 className="text-sky font-bold">Rp 550</h3>
            </section>
          </section>
          <section className="w-11/12 py-2 flex flex-col bg-white rounded-xl text-[#677AB9] text-sm lg:text-[15px] font-bold space-y-4  ">
            <h3 className="px-4">Metode Pembayaran</h3>
            <select className="px-4" name="" id="">
              {banks.map((bank: Bank) => (
                <option value={bank.bank} key={bank.id}>
                  {bank.bank}
                </option>
              ))}
            </select>
          </section>
        </section>
        <section className="relative top-6 lg:top-9 mb-8 lg:mb-0">
          <Link
            href="/purchase"
            className="w-full mb-2 block text-center bg-emerald-light hover:bg-green-700 rounded-4xl text-white text-sm font-semibold py-4"
          >
            Beli Saham
          </Link>
          <p className="text-sky text-sm text-center">
            Butuh Pertanyaan?{" "}
            <span className="font-bold hover:underline decoration-2 underline-offset-4 cursor-pointer">
              Hubungi Kami
            </span>{" "}
          </p>
        </section>
      </section>
    </section>
  );
};

export default PurchaseForm;

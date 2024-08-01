"use client";

import { useState } from "react";
import { FilterIcon } from "lucide-react";
import PortfolioCard from "./PortfolioCard";
import TransactionCard from "./TransactionCard";

export interface TransaksiStatus {
  status_id: number;
  description: string;
}

export interface Transaksi {
  filter(arg0: (item: any) => any): unknown;
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
  data: Transaksi[];
}

const TransactionList: React.FC<TransactionCardProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleFilterChange = (filter: string) => {
    setFilter(filter);
    setIsModalOpen(false);
  };

  const filteredData = data.filter((item) => {
    const matchesSearchTerm = item.nama_efek
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filter ? item.tipe_efek === filter : true;
    return matchesSearchTerm && matchesFilter;
  });

  return (
    <main className="w-full mx-auto rounded-xl">
      <form className="w-full mx-auto my-4 flex items-center gap-4">
        <div className="w-full relative">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full p-4 ps-4 text-sm text-gray-900 rounded-3xl bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Cari Bisnis..."
            required
          />
          <div className="absolute inset-y-0 end-4 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
        <FilterIcon
          fill="black"
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer"
        />
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Filter Jenis Efek</h2>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleFilterChange("Saham")}
                className="px-4 py-2 bg-emerald-500 text-white rounded-lg"
              >
                Saham
              </button>
              <button
                onClick={() => handleFilterChange("Sukuk")}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Sukuk
              </button>
              <button
                onClick={() => handleFilterChange("")}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
              >
                Semua
              </button>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-gray-300 text-black rounded-lg"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
      <section className="space-y-4">
        {filteredData.map((item, index) => (
          <TransactionCard key={index} transaksi={item} />
        ))}
      </section>
    </main>
  );
};

export default TransactionList;

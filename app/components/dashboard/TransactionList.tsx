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
  onLoadMore: () => void;
  hasMore: boolean;
}

const TransactionList: React.FC<TransactionCardProps> = ({
  data,
  onLoadMore,
  hasMore,
}) => {
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
      <form className="w-full mx-auto mb-2 flex items-center gap-4">
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
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-0">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all ease-in-out duration-300 scale-100 opacity-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Filter Jenis Efek
            </h2>
            <div className="space-y-4">
              {["Saham", "Sukuk", "Semua"].map((option) => (
                <button
                  key={option}
                  onClick={() =>
                    handleFilterChange(option === "Semua" ? "" : option)
                  }
                  className={`w-full py-3 px-4 rounded-lg transition-all duration-200 font-medium
              ${
                option === "Saham"
                  ? "bg-emerald-light hover:bg-green-700 text-white"
                  : option === "Sukuk"
                  ? "bg-[#FF1F00] hover:bg-red-600 text-white"
                  : "bg-gray-500 hover:bg-gray-600 text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
              }`}
                >
                  {option === "Sukuk" ? "Obligasi" : option}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-8 w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-all duration-200 font-medium dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
      <section className="space-y-4 h-full lg:h-[700px] overflow-y-auto rounded-xl">
        {filteredData.map((item, index) => (
          <TransactionCard key={index} transaksi={item} />
        ))}
        {hasMore && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={onLoadMore}
              className="px-4 py-2 bg-emerald-light text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Lihat Lebih Banyak
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default TransactionList;

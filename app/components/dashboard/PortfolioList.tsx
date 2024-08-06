"use client";

import { useState } from "react";
import { FilterIcon } from "lucide-react";
import PortfolioCard from "./PortfolioCard";

interface Berkas {
  detail_bisnis_saham_id: number;
  foto_utama: number;
  id: number;
  image_url: string;
  nama_file: string;
}

interface Business {
  id: number;
  penerbit_id: number;
  kode_penerbit: string;
  jenis_efek: string;
  nama_efek: string;
  nama_proyek: string;
  akad: number | null;
  bidang_usaha: number;
  tentang_proyek: string | null;
  dasar_penerbitan: string;
  skema_pembayaran: string;
  pihak_terlibat: string | null;
  jumlah_unit_yang_ditawarkan: number;
  satuan_pemindahan_buku: number;
  monitoring_pembayaran: string;
  nilai_proyek: number;
  nilai_modal: number;
  nilai_pendanaan: number;
  minimal_pendanaan: number;
  periode_penawaran_efek: number;
  porsi_modal_pemodal: string;
  porsi_modal_penerbit: string;
  proyeksi_bagi_hasil_min: string | null;
  proyeksi_bagi_hasil_max: string | null;
  roi_min: string | null;
  roi_max: string | null;
  periode_dividen?: number;
  imbal_hasil_pemodal?: string;
  imbal_hasil_penerbit?: string;
  denda_keterlambatan?: string | null;
  jaminan?: string | null;
  porsi_modal_pemodal_idr: number;
  porsi_modal_penerbit_idr: number;
  berkas: Berkas[];
}

interface PortfolioItem {
  id: number;
  user_id: number;
  business_type: string;
  business_id: number;
  harga_perlembar_saham: number;
  total_saham: number;
  nilai_investasi: number;
  tanggal_pembelian_saham: string;
  tanggal_pendanaan_terpenuhi: string | null;
  total_dana_terpenuhi: number;
  persentase_saham: string;
  status: number;
  created_at: string;
  updated_at: string;
  business: Business;
}

interface Props {
  data: PortfolioItem[];
}

const PortfolioList: React.FC<Props> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleFilterChange = (filter: string) => {
    setFilter(filter);
    setIsModalOpen(false);
  };

  const filteredData = data.filter((item) => {
    const matchesSearchTerm = item.business.nama_efek
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filter ? item.business.jenis_efek === filter : true;
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
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl max-w-sm w-full mx-4 transform transition-all duration-300 ease-out scale-100 opacity-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Filter Jenis Efek
            </h2>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleFilterChange("Saham")}
                className="px-4 py-3 bg-emerald-light hover:bg-green-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                Saham
              </button>
              <button
                onClick={() => handleFilterChange("Sukuk")}
                className="px-4 py-3 bg-[#FF1F00] hover:bg-red-600 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                Sukuk
              </button>
              <button
                onClick={() => handleFilterChange("")}
                className="px-4 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                Semua
              </button>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 px-4 py-3 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors duration-200 font-medium dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
      <section className="space-y-4">
        {filteredData.map((item, index) => (
          <PortfolioCard key={index} portfolio={item} />
        ))}
      </section>
    </main>
  );
};

export default PortfolioList;

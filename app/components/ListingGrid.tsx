"use client";

import { useState } from "react";
import ListingCard from "@/app/components/ListingCard";
import { AlignLeft, FilterIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  penerbit_id: number;
  kode_penerbit: string;
  jenis_efek: string;
  nama_efek: string;
  nama_proyek: string;
  tentang_proyek: string | null;
  dasar_penerbitan: string;
  nilai_proyek: number;
  nilai_modal: number;
  nilai_pendanaan: number;
  minimal_pendanaan: number;
  periode_penawaran_efek: number;
  porsi_modal_pemodal: number | null;
  porsi_modal_penerbit: number | null;
  proyeksi_bagi_hasil_min: number | null;
  proyeksi_bagi_hasil_max: number | null;
  skema_pembayaran: string;
  pihak_terlibat: string;
  minimal_investasi: number;
  jumlah_unit_yang_ditawarkan: number;
  satuan_pemindahan_buku: number;
  denda_keterlambatan: string | null;
  jaminan: string | null;
  monitoring_pembayaran: string;
  akad: number;
  bidang_usaha: number;
  nama_file: string;
  nama_penerbit: string;
  idlisting: number;
}

interface Props {
  listings: Project[];
}

const ListingGrid: React.FC<Props> = ({ listings }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  const [tempFilter, setTempFilter] = useState<string | null>(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showSortModal, setShowSortModal] = useState(false);
  const [sortCriteria, setSortCriteria] = useState<string | null>(null);

  const filteredProjects = listings.filter((listing) => {
    const matchesSearch = listing.nama_proyek
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filter ? listing.jenis_efek === filter : true;
    return matchesSearch && matchesFilter;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortCriteria === "nama_a_z") {
      return a.nama_proyek.localeCompare(b.nama_proyek);
    } else if (sortCriteria === "nama_z_a") {
      return b.nama_proyek.localeCompare(a.nama_proyek);
    } else if (sortCriteria === "nilai_tinggi_rendah") {
      return b.nilai_pendanaan - a.nilai_pendanaan;
    } else if (sortCriteria === "nilai_rendah_tinggi") {
      return a.nilai_pendanaan - b.nilai_pendanaan;
    }
    return 0;
  });

  return (
    <>
      <form className="w-11/12 mx-auto flex items-center justify-between gap-4">
        <div className="relative w-1/2 lg:w-1/4">
          <input
            type="search"
            className="block w-full p-4 ps-4 text-sm text-gray-900 rounded-3xl bg-[#f8f8ff] focus:ring-blue-500 focus:border-blue-500"
            placeholder="Cari Bisnis..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex gap-2">
          <FilterIcon
            className="cursor-pointer"
            onClick={() => setShowFilterModal(true)}
          />
          <AlignLeft
            className="cursor-pointer"
            onClick={() => setShowSortModal(true)}
          />
        </div>
      </form>

      {showFilterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="w-1/4 bg-white p-8 rounded">
            <div className="flex justify-between my-2">
              <h2 className="text-lg font-semibold">Filter by Jenis Efek</h2>
              <Button
                variant="outline"
                onClick={() => {
                  setTempFilter(null);
                  setFilter(null);
                  setShowFilterModal(false);
                }}
              >
                Reset
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              <button
                className={`p-2 rounded ${
                  tempFilter === "Saham"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setTempFilter("Saham")}
              >
                Saham
              </button>
              <button
                className={`p-2 rounded ${
                  tempFilter === "Sukuk"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setTempFilter("Sukuk")}
              >
                Sukuk
              </button>
            </div>
            <Button
              className="my-2"
              onClick={() => {
                setFilter(tempFilter);
                setShowFilterModal(false);
              }}
            >
              Terapkan
            </Button>
          </div>
        </div>
      )}

      {showSortModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="w-1/4 bg-white p-8 rounded">
            <div className="flex justify-between items-center my-2">
              <div className="flex items-center gap-2">
                <X
                  className="cursor-pointer"
                  onClick={() => setShowSortModal(false)}
                />
                <h2 className="text-lg font-semibold">Urutkan</h2>
              </div>
              <button
                className="p-2 rounded text-black hover:border"
                onClick={() => {
                  setSortCriteria(null);
                  setShowSortModal(false);
                }}
              >
                Reset
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <button
                className={`p-2 rounded ${
                  sortCriteria === "nama_a_z"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => {
                  setSortCriteria("nama_a_z");
                  setShowSortModal(false);
                }}
              >
                Nama A - Z
              </button>
              <button
                className={`p-2 rounded ${
                  sortCriteria === "nama_z_a"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => {
                  setSortCriteria("nama_z_a");
                  setShowSortModal(false);
                }}
              >
                Nama Z - A
              </button>
              <button
                className={`p-2 rounded ${
                  sortCriteria === "nilai_rendah_tinggi"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => {
                  setSortCriteria("nilai_rendah_tinggi");
                  setShowSortModal(false);
                }}
              >
                Nilai Rendah ke Tinggi
              </button>
              <button
                className={`p-2 rounded ${
                  sortCriteria === "nilai_tinggi_rendah"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => {
                  setSortCriteria("nilai_tinggi_rendah");
                  setShowSortModal(false);
                }}
              >
                Nilai Tinggi ke Rendah
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="w-11/12 mx-auto flex flex-col justify-center items-center gap-y-8 md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-4 my-8">
        {sortedProjects.map((listing, index) => {
          return <ListingCard key={index} project={listing} />;
        })}
      </section>
    </>
  );
};

export default ListingGrid;

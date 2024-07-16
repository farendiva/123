import PortfolioCard from "@/app/components/dashboard/PortfolioCard";
import { FilterIcon } from "lucide-react";
import React from "react";

type Props = {};

const Portfolio = (props: Props) => {
  const items = [
    {
      title: "Pembangunan Extension Bay Trafo Gardu Induk New Balikpapan",
      status: "Berjalan",
      totalSaham: "150 Lembar",
      nilaiInvestasi: "Rp 150.000.000",
      keuntungan: "Rp 250.000",
      type: "Saham",
    },
    {
      title: "Pembangunan Extension Bay Trafo Gardu Induk New Balikpapan",
      status: "Berjalan",
      totalSaham: "150 Lembar",
      nilaiInvestasi: "Rp 150.000.000",
      keuntungan: "Rp 250.000",
      type: "Sukuk",
    },
    {
      title: "Pembangunan Extension Bay Trafo Gardu Induk New Balikpapan",
      status: "Berjalan",
      totalSaham: "150 Lembar",
      nilaiInvestasi: "Rp 150.000.000",
      keuntungan: "Rp 250.000",
      type: "Saham",
    },
    {
      title: "Pembangunan Extension Bay Trafo Gardu Induk New Balikpapan",
      status: "Berjalan",
      totalSaham: "150 Lembar",
      nilaiInvestasi: "Rp 150.000.000",
      keuntungan: "Rp 250.000",
      type: "Sukuk",
    },
    {
      title: "Pembangunan Extension Bay Trafo Gardu Induk New Balikpapan",
      status: "Berjalan",
      totalSaham: "150 Lembar",
      nilaiInvestasi: "Rp 150.000.000",
      keuntungan: "Rp 250.000",
      type: "Saham",
    },
    {
      title: "Pembangunan Extension Bay Trafo Gardu Induk New Balikpapan",
      status: "Berjalan",
      totalSaham: "150 Lembar",
      nilaiInvestasi: "Rp 150.000.000",
      keuntungan: "Rp 250.000",
      type: "Sukuk",
    },
  ];
  return (
    <main className="w-full mx-auto space-y-4 rounded-xl">
      <form className="w-full mx-auto flex items-center gap-4">
        <div className="w-full relative">
          <input
            type="search"
            className="block w-full p-4 ps-4 text-sm text-gray-900  rounded-3xl bg-white focus:ring-blue-500 focus:border-blue-500 "
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
        <FilterIcon fill="black" />
      </form>

      {items.map((item, index) => (
        <PortfolioCard key={index} {...item} />
      ))}
    </main>
  );
};

export default Portfolio;

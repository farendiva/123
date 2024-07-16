"use client";

import { useUser } from "@/context/UserContext";
import SidebarLinks from "./SidebarLinks";
import {
  Album,
  Award,
  FileText,
  PieChart,
  SquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";
export default function Sidebar() {
  const { user } = useUser();
  return (
    <div className="bg-white text-[#677AB9] flex h-full w-1/3 flex-col px-3 py-4 md:px-2 divide-y-2 rounded-xl">
      {user?.pemodal_status === 0 || user?.pemodal_status === 1 ? (
        <div className="flex items-center justify-between px-3 py-4">
          <FileText />
          <div className="w-3/4">
            <h2 className="mb-2">Anda Belum Melengkapi Data Diri</h2>
            <Link href="/pemodal" className=" font-bold text-[#E09400] text-sm">
              Lengkapi KYC
            </Link>
          </div>
        </div>
      ) : null}

      <div>
        <div className="flex items-center justify-between px-3 py-4 ">
          <Album />
          <div className="w-3/4">
            <h2 className="font-bold text-black">Total Aset</h2>
            <p className="text-emerald-light text-sm">Rp 650.440.000</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-3 py-4 ">
          <PieChart />
          <div className="w-3/4">
            <h2 className="font-bold text-black">Dividen</h2>
            <p className="text-emerald-light text-sm">Rp 59.551.586</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 px-3 py-6 ">
        <SquareArrowOutUpRight />
        <div className="space-y-2 w-3/4">
          <h2 className="">Punya bisnis butuh ekspansi segera?</h2>
          <p className="text-emerald-light text-sm font-bold">
            Ajukan Pendanaan
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 px-3 py-6 ">
        <Award />
        <div className="space-y-2 w-3/4">
          <h2 className="">Temukan daftar bisnis terbaik untuk Anda</h2>
          <p className="text-emerald-light text-sm font-bold">Daftar Bisnis</p>
        </div>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-0">
        <SidebarLinks />
      </div>
    </div>
  );
}

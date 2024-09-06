"use client";

import { useUser } from "@/context/UserContext";
import SidebarLinks from "./SidebarLinks";
import {
  Album,
  Award,
  Clock9,
  FileText,
  PieChart,
  SquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";
export default function Sidebar() {
  const { user } = useUser();
  return (
    <div className="hidden bg-white text-[#677AB9] lg:flex h-full w-1/3 flex-col px-3 py-4 md:px-2 divide-y-2 rounded-xl">
      {user?.pemodal_status === 0 ? (
        <div className="flex items-center justify-between px-3 py-4">
          <FileText fill="#677AB9" color="white" />
          <div className="w-4/5">
            <h2 className="mb-2">Anda Belum Melengkapi Data Diri</h2>
            <Link
              href="/kyc/pemodal"
              className="font-bold text-[#E09400] text-sm"
            >
              Lengkapi Identitas
            </Link>
          </div>
        </div>
      ) : user?.pemodal_status === 1 ? (
        <div className="flex items-center justify-between px-3 py-4">
          <Clock9 fill="#677AB9" color="white" />
          <div className="w-4/5">
            <h2 className="mb-2">Anda Sudah Melengkapi Data Diri</h2>
            <p className="font-bold text-[#E09400] text-sm">Menunggu Review</p>
          </div>
        </div>
      ) : null}

      <div>
        <div className="flex items-center justify-between px-3 py-4 ">
          <Album fill="#677AB9" color="white" />
          <div className="w-4/5">
            <h2 className="font-bold text-black">Total Aset</h2>
            <p className="text-emerald-light text-sm">Rp 0</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-3 py-4 ">
          <PieChart fill="#677AB9" color="white" />
          <div className="w-4/5">
            <h2 className="font-bold text-black">Dividen</h2>
            <p className="text-emerald-light text-sm">Rp 0</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 px-3 py-6 ">
        <SquareArrowOutUpRight fill="#677AB9" color="white" />
        <div className="space-y-2 w-4/5">
          <h2 className="">Punya bisnis butuh ekspansi segera?</h2>
          <p className="text-emerald-light text-sm font-bold">
            Ajukan Pendanaan
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 px-3 py-6 ">
        <Award fill="#677AB9" color="white" />
        <div className="space-y-2 w-4/5">
          <h2 className="">Temukan daftar bisnis terbaik untuk Anda</h2>
          <Link
            href="/daftar-bisnis"
            className="text-emerald-light text-sm font-bold"
          >
            Daftar Bisnis
          </Link>
        </div>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-0">
        <SidebarLinks />
      </div>
    </div>
  );
}

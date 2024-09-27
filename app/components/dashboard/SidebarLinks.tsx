"use client";

import {
  HomeIcon,
  User2Icon,
  Archive,
  Briefcase,
  CreditCard,
  FileText,
  CircleHelp,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  {
    name: "Portfolio",
    href: "/dashboard/portfolio",
    icon: Archive,
  },
  { name: "Transaksi", href: "/dashboard/transaksi", icon: CreditCard },
  { name: "Profil", href: "/dashboard/profil", icon: User2Icon },
  { name: "Laporan", href: "/dashboard/laporan", icon: FileText },
  { name: "Bantuan", href: "/dashboard/bantuan", icon: CircleHelp },
];

export default function SidebarLinks() {
  const pathname = usePathname();
  return (
    <div className="space-y-2 mb-4 grid grid-cols-3 bg-white p-2 pb-6 lg:block rounded-b-xl">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`group flex flex-col items-center justify-center md:flex-row md:justify-start gap-2 md:gap-4 md:space-x-2 rounded-full text-[#677AB9] hover:text-emerald lg:hover:bg-emerald-light lg:hover:text-white font-medium py-0 px-1 md:py-1 md:px-1.5 lg:p-1.5
            ${
              pathname === link.href
                ? "lg:bg-emerald-light lg:text-white text-emerald "
                : ""
            }
            `}
          >
            <LinkIcon
              size={25}
              className={`
                lg:group-hover:fill-white lg:group-hover:stroke-emerald-light
                group-hover:fill-emerald group-hover:stroke-white
                ${
                  pathname === link.href
                    ? "fill-emerald stroke-white lg:fill-white lg:stroke-emerald"
                    : "fill-[#677AB9] stroke-white"
                }
              `}
            />
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

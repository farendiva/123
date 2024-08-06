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
  { name: "Profile", href: "/dashboard/profile", icon: User2Icon },
  { name: "Bisnis Saya", href: "/dashboard/bisnis", icon: Briefcase },
  { name: "Laporan", href: "/dashboard/laporan", icon: FileText },
  { name: "Bantuan", href: "/dashboard/bantuan", icon: CircleHelp },
];

export default function SidebarLinks() {
  const pathname = usePathname();
  return (
    <div className="space-y-2 my-4 flex flex-wrap justify-between md:block">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`group flex flex-col items-center justify-center md:flex-row md:justify-start gap-4 md:space-x-2 rounded-full text-[#677AB9] font-medium hover:bg-emerald-light hover:text-white py-1.5 px-3
            ${pathname === link.href ? "bg-emerald-light text-white" : ""}
            `}
          >
            <LinkIcon
              className={`group-hover:fill-white  group-hover:stroke-emerald-light`}
              fill={`${pathname === link.href ? "white" : "#677AB9"}`}
              color={`${pathname === link.href ? "#3DA834" : "white"}`}
            />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

"use client";

import {
  HomeIcon,
  User2Icon,
  Archive,
  Briefcase,
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
  { name: "Profile", href: "/dashboard/profile", icon: User2Icon },
  { name: "Bisnis Saya", href: "/dashboard/bisnis", icon: Briefcase },
  { name: "Laporan", href: "/dashboard/laporan", icon: FileText },
  { name: "Bantuan", href: "/dashboard/bantuan", icon: CircleHelp },
];

export default function SidebarLinks() {
  const pathname = usePathname();
  return (
    <div className="space-y-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex grow items-center justify-between rounded-3xl text-[#677AB9] font-medium hover:bg-emerald-light hover:text-white p-3
            ${pathname === link.href ? "bg-emerald-light text-white" : ""}
            `}
          >
            <LinkIcon className="" />
            <p className="hidden md:block w-3/4">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

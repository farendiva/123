"use client";

import { useUser } from "@/context/UserContext";
import { signOut } from "@/lib/auth";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  if (!user) {
    return <div>Loading...</div>;
  }

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
    setIsOpen(false);
    setIsDropdownOpen(false);
  };
  return (
    <nav
      className={`z-50 w-4/5 relative flex justify-between items-center mx-auto py-2 font-semibold`}
    >
      <Link href="/" className="flex">
        {pathname === "/" || pathname === "/tentang" ? (
          <img
            className="scale-75 lg:scale-100"
            src="/images/fulusme-white.png"
            alt="Fulusme Icon"
          />
        ) : (
          <img src="/icons/fulusme.svg" alt="Fulusme Icon" />
        )}
      </Link>
      <button
        className="block lg:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        <span className={`hamburger-icon ${isOpen ? "open" : ""}`}>
          <span className="line line-top"></span>
          <span className="line line-middle"></span>
          <span className="line line-bottom"></span>
        </span>
      </button>
      <ul className="hidden lg:flex gap-10 ml-16">
        {menuItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`hover:text-emerald-light font-bold ${
                (pathname === "/" && href === "/") ||
                (pathname === "/tentang" && href === "/tentang")
                  ? "text-emerald-light"
                  : pathname === href
                  ? "text-emerald-light"
                  : pathname !== "/" && pathname !== "/tentang"
                  ? "text-sky"
                  : "text-white"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="relative hidden  lg:flex items-center gap-2">
        <img
          className="w-12 h-12 rounded-full"
          src={`https://static.fulusme.id/images/${user.profile.swa_photo}`}
          alt={`${user.name} Foto Profile`}
        />
        <div className="text-base">
          <h2 className="font-bold">
            {user.profile.nama_depan + " " + user.profile.nama_belakang}
          </h2>
          <span
            className={`${
              user?.pemodal_status === 3
                ? "text-emerald-light"
                : "text-[#E09400]"
            } flex items-center gap-2 cursor-pointer`}
            onClick={toggleDropdown}
          >
            <ChevronDown color="black" />
            {user?.pemodal_status === 3
              ? "Terverifikasi"
              : "Belum Terverifikasi"}
          </span>
          {isDropdownOpen && (
            <form
              className="absolute right-0 mt-2 w-full bg-white border hover:bg-slate-50 shadow-lg rounded-lg py-3 px-3 cursor-pointer"
              onClick={handleSignOut}
            >
              Keluar
            </form>
          )}
        </div>
      </div>
      {isOpen && (
        <ul className="absolute top-28 left-0 right-0 bg-white shadow-lg rounded-lg lg:hidden flex flex-col gap-4 p-4 transition-transform duration-300 ease-in-out transform">
          {menuItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block hover:text-green-700 ${
                  pathname === href
                    ? "text-green-500 font-semibold"
                    : "text-black/90 font-medium"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <button
              className="block w-full text-left hover:text-green-700 text-black/90 font-medium"
              onClick={handleSignOut}
            >
              Keluar
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

const menuItems = [
  {
    href: "/",
    label: "Beranda",
    as: "https://web-app-dev.khalifahdev.biz.id/",
  },
  {
    href: "/daftar-bisnis",
    label: "Daftar Bisnis",
    as: "https://web-app-dev.khalifahdev.biz.id/daftar-bisnis",
  },
  {
    href: "/tentang",
    label: "Tentang",
    as: "https://web-app-dev.khalifahdev.biz.id/tentang",
  },
  {
    href: "/alur",
    label: "Alur Bisnis",
    as: "https://web-app-dev.khalifahdev.biz.id/alur",
  },
  {
    href: "/bantuan",
    label: "Bantuan",
    as: "https://web-app-dev.khalifahdev.biz.id/bantuan",
  },
];

export default Nav;

"use client";

import { useUser } from "@/context/UserContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react"; // Make sure to import this

interface User {
  name: string;
  pemodal_status?: number;
  profile: {
    nama_depan: string;
    nama_belakang: string;
    swa_photo?: string;
  };
}

const Navbar = () => {
  const pathname = usePathname();
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: "/", label: "Beranda" },
    { href: "/daftar-bisnis", label: "Daftar Bisnis" },
    { href: "/tentang", label: "Tentang" },
    { href: "/alur", label: "Alur Bisnis" },
    { href: "/bantuan", label: "Bantuan" },
  ];

  const getProfileImage = (user: User | null): string => {
    if (user?.profile?.swa_photo) {
      return `${process.env.NEXT_PUBLIC_FILE_PATH}/images/${user.profile.swa_photo}`;
    }
    return "/images/profile-placeholder.jpg";
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isSticky ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav
        className={`w-11/12 flex justify-between items-center mx-auto py-2 font-semibold`}
      >
        <Link href="/" className="flex">
          {pathname === "/" || pathname === "/tentang" ? (
            <img
              className="scale-75"
              src={` ${
                isSticky ? "/icons/fulusme.svg" : "/images/fulusme-white.png"
              }`}
              alt="Fulusme Icon"
            />
          ) : (
            <img
              className="scale-75"
              src="/icons/fulusme.svg"
              alt="Fulusme Icon"
            />
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
        <ul className="hidden lg:flex lg:items-center gap-10">
          {menuItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-bold ${
                  isSticky
                    ? pathname === href
                      ? "text-emerald hover:text-emerald"
                      : "text-sky hover:text-emerald"
                    : (pathname === "/" && href === "/") ||
                      (pathname === "/tentang" && href === "/tentang") ||
                      pathname === href
                    ? "text-emerald-light"
                    : pathname !== "/" && pathname !== "/tentang"
                    ? "text-sky"
                    : "text-white"
                } hover:text-emerald-light`}
              >
                {label}
              </Link>
            </li>
          ))}
          {user ? (
            <li className="relative">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  className="w-12 h-12 rounded-full"
                  src={getProfileImage(user)}
                  alt={`${user.name} Foto Profile`}
                />
                <h2
                  className={`font-bold ${
                    isSticky
                      ? "text-sky"
                      : pathname === "/" || pathname === "/tentang"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {user.profile.nama_depan + " " + user.profile.nama_belakang}
                </h2>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  href="/masuk"
                  className="bg-emerald rounded-3xl py-3 px-7 text-white"
                >
                  Masuk
                </Link>
              </li>
              <li>
                <Link
                  href="/daftar"
                  className={`hover:text-emerald-light font-bold ${
                    isSticky
                      ? "text-sky"
                      : pathname === "/" || pathname === "/tentang"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  Daftar
                </Link>
              </li>
            </>
          )}
        </ul>
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
            {user ? (
              <li className="relative">
                <Link
                  href="/dashboard"
                  className="flex font-medium items-center gap-2 cursor-pointer"
                >
                  Dashboard
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    href="/masuk"
                    className="block hover:text-green-700 text-black/90 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Masuk
                  </Link>
                </li>
                <li>
                  <Link
                    href="/daftar"
                    className="block hover:text-green-700 text-black/90 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Daftar
                  </Link>
                </li>
              </>
            )}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

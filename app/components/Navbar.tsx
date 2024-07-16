"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`z-50  w-11/12 relative flex justify-between items-center mx-auto py-2 lg:py-8 font-semibold`}
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
      <ul className="hidden lg:flex gap-10">
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
              {label === "Masuk" ? (
                <span className="bg-emerald rounded-3xl py-3 px-7 !text-white">
                  {label}
                </span>
              ) : (
                label
              )}
            </Link>
          </li>
        ))}
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
  {
    href: "/masuk",
    label: "Masuk",
    as: "https://web-app-dev.khalifahdev.biz.id/masuk",
  },
  {
    href: "/daftar/pemodal",
    label: "Daftar",
    as: "https://web-app-dev.khalifahdev.biz.id/daftar/pemodal",
  },
];

export default Navbar;

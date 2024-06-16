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
    <nav className="w-11/12 relative flex justify-between items-center mx-auto my-8 font-semibold">
      <div className="flex">
        <img src="/icons/fulusme.svg" alt="" />
      </div>
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
                pathname === href ? "text-emerald-light" : "text-sky"
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
        <ul className="absolute top-16 left-0 right-0 bg-white shadow-lg rounded-lg lg:hidden flex flex-col gap-4 p-4 transition-transform duration-300 ease-in-out transform">
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
  { href: "/", label: "Beranda" },
  { href: "/daftar-bisnis", label: "Daftar Bisnis" },
  { href: "/tentang", label: "Tentang" },
  { href: "/alur", label: "Alur Bisnis" },
  { href: "/bantuan", label: "Bantuan" },
  { href: "/masuk", label: "Masuk" },
  { href: "/daftar", label: "Daftar" },
];

export default Navbar;

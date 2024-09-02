import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StickyButton from "../components/StickyButton";
import { UserProvider } from "@/context/UserContext";
import { getUserData } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Fulusme",
  description:
    "FULUSME adalah Penyelenggara Layanan Urun Dana Berbasiskan Teknologi Informasi ",
};

export default async function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userData = await getUserData();

  return (
    <html lang="en">
      <body className={` w-full mx-auto bg-sky`}>
        <UserProvider initialUser={userData.data}>
          <Navbar />
          {children}
          <Footer />
          <StickyButton />
        </UserProvider>
      </body>
    </html>
  );
}

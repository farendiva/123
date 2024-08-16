import type { Metadata } from "next";
// import { Open_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StickyButton from "../components/StickyButton";
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "@/context/UserContext";
import { getUserData } from "@/lib/auth";

// const openSans = Open_Sans({
//   subsets: ["latin"],
//   display: "swap",
//   adjustFontFallback: false,
// });
export const metadata: Metadata = {
  title: "Fulusme",
  description:
    "FULUSME adalah Penyelenggara Layanan Urun Dana Berbasiskan Teknologi Informasi ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userData = await getUserData();

  return (
    <html lang="en">
      <body className={`w-full mx-auto`}>
        <UserProvider initialUser={userData.data}>
          <Navbar />
          {children}
          <Footer />
          <StickyButton />
          <Toaster />
        </UserProvider>
      </body>
    </html>
  );
}

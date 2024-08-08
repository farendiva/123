import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StickyButton from "../components/StickyButton";
import { UserProvider } from "@/context/UserContext";
import { getUserData } from "@/lib/auth";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Fulusme",
  description: "Generated by create next app",
};

export default async function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userData = await getUserData();

  return (
    <html lang="en">
      <body className={`${openSans.className} w-full mx-auto bg-sky`}>
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

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import StickyButton from "../components/StickyButton";

const openSans = Open_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Fulusme",
  description: "Generated by create next app",
};

export default function KycLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} w-11/12 mx-auto`}>
        {children}
        <StickyButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "../globals.css";
import StickyButton from "../components/StickyButton";
import { getUserData } from "@/lib/auth";
import { UserProvider } from "@/context/UserContext";

export const metadata: Metadata = {
  title: "KYC | FULUSME",
  description: "Segera Daftarkan diri anda dan Berinvestasi di FULUSME",
};

export default async function KycLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let user: any = null;
  let error: string | null = null;

  try {
    const userData = await getUserData();
    if (userData.data) {
      user = userData.data;
    } else {
      throw new Error("User data is not available");
    }
  } catch (err) {
    error = "Failed to load user data.";
    console.error(err);
  }
  return (
    <html lang="en">
      <body className={` w-11/12 mx-auto`}>
        <UserProvider initialUser={user}>
          {children}
          <StickyButton />
        </UserProvider>
      </body>
    </html>
  );
}

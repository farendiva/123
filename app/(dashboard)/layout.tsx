import { getUserData } from "@/lib/auth";
import Nav from "../components/dashboard/Nav";
import Sidebar from "../components/dashboard/Sidebar";
import "../globals.css";
import { Open_Sans } from "next/font/google";
import { UserProvider } from "@/context/UserContext";
import SidebarLinks from "../components/dashboard/SidebarLinks";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});
export const metadata = {
  title: "Dashboard",
  description: "Generated by Next.js",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userData = await getUserData();

  if (!userData.data) {
    return (
      <html lang="en">
        <body
          className={`${openSans.className} w-full mx-auto min-h-screen bg-[#F4F7FE]`}
        >
          <div className="font-bold text-center text-2xl">
            Failed to load user data.
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body
        className={`${openSans.className} w-full mx-auto min-h-screen bg-[#F4F7FE]`}
      >
        <UserProvider initialUser={userData.data}>
          <header className="bg-white">
            <Nav />
          </header>
          <main className="w-4/5 mx-auto my-4 flex flex-col lg:flex-row gap-6">
            <>
              <Sidebar />
            </>
            <div className="block lg:hidden">
              <SidebarLinks />
            </div>
            <div className="w-full mx-auto rounded-xl">{children}</div>
          </main>
        </UserProvider>
      </body>
    </html>
  );
}

import { getUserData } from "@/lib/auth";
import Nav from "../components/dashboard/Nav";
import Sidebar from "../components/dashboard/Sidebar";
import "../globals.css";
import { UserProvider } from "@/context/UserContext";
import SidebarLinks from "../components/dashboard/SidebarLinks";

export const metadata = {
  title: "Transaksi",
  description: "Daftar Transaksi Pemodal FULUSME",
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
        <body className={` w-full mx-auto min-h-screen bg-[#F4F7FE]`}>
          <div className="font-bold text-center text-2xl">
            Failed to load user data.
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={` w-full mx-auto min-h-screen bg-[#F4F7FE]`}>
        <UserProvider initialUser={userData.data}>
          <header className="sticky z-50 top-0 shadow-md bg-white">
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

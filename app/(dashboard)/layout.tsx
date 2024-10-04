import { getUserData } from "@/lib/auth";
import Nav from "../components/dashboard/Nav";
import Sidebar from "../components/dashboard/Sidebar";
import "../globals.css";
import { UserProvider } from "@/context/UserContext";
import SidebarLinks from "../components/dashboard/SidebarLinks";
import { Toaster } from "@/components/ui/toaster";
import { Skeleton } from "@/components/ui/skeleton";

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

  return (
    <html lang="en">
      <body>
        <div className={` w-full mx-auto min-h-screen bg-[#F4F7FE]`}>
          <UserProvider initialUser={userData.data}>
            <header className="sticky z-50 top-0 shadow-md bg-white">
              <Nav />
            </header>
            <main className="w-11/12 md:w-4/5 mx-auto my-4 flex flex-col lg:flex-row gap-0 lg:gap-6">
              <>
                <Sidebar />
              </>
              <div className="block lg:hidden">
                <SidebarLinks />
              </div>
              <div className="w-full mx-auto rounded-xl">
                {userData.data ? (
                  children
                ) : (
                  <div className="flex items-center justify-center h-full w-full">
                    <div className="h-24 w-24 border-8 border-emerald border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </main>
          </UserProvider>
          <Toaster />
        </div>
      </body>
    </html>
  );
}

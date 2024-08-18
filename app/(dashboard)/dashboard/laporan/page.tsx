import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laporan",
  description: "Halaman Laporan Dashboard FULUSME",
};
export default async function LaporanPage() {
  return (
    <main className="w-full flex flex-col justify-center items-center bg-white mx-auto rounded-xl min-h-screen p-4">
      <img
        src="/icons/fulusme.svg"
        alt="Fulusme Logo"
        width={150}
        height={150}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold mb-6">Coming Soon</h1>
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-4">
          <div className="h-3 w-3 bg-emerald-500 rounded-full mr-2 animate-ping"></div>
          <span className="text-2xl">We're launching soon!</span>
        </div>
      </div>
    </main>
  );
}

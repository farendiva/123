import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bantuan",
  description: "Halaman Bantuan Dashboard FULUSME",
};

export default async function BantuanPage() {
  return (
    <main className="w-full flex flex-col justify-center items-center bg-white mx-auto rounded-xl h-screen p-4">
      <h1>BANTUAN PAGE</h1>
    </main>
  );
}

import BusinessCard from "./components/BusinessCard";
import TabsQuestions from "./components/TabsQuestions";
import Tabs from "./components/TabsQuestions";

export default async function Home() {
  return (
    <main>
      <section className="flex justify-between items-center">
        <section className="w-3/4 text-sky flex flex-col gap-6">
          <h1 className="text-5xl font-bold">Selamat Datang di Fulusme</h1>
          <p className="text-xl font-normal leading-loose">
            Selamat datang di Jaman Now. Dimana Kecepatan dan instan sudah
            menjadi keseharian kita. Dimana Berinvestasi dan usaha tidak lagi
            dibatasi ruang dan waktu. Saatnya bergabung bersama Fulusme.
          </p>
          <section className="flex gap-4">
            <button className="py-4 px-6 bg-emerald rounded-3xl text-white font-semibold ">
              Daftar Sebagai Penerbit
            </button>
            <button className="py-4 px-6 bg-sky rounded-3xl text-white font-semibold ">
              Daftar Sebagai Pemodal
            </button>
          </section>
        </section>
        <section>
          <img src="hero.svg" alt="" />
        </section>
      </section>
      <section className="bg-gradient-to-r from-emerald to-sky py-12 mt-40 mb-16 rounded-5xl text-white font-semibold flex flex-col md:flex-row justify-around items-center">
        <section>
          <h5 className="text-xs lg:text-xl font-normal">Total Pemodal</h5>
          <h3 className="text-sm md:text-xl lg:text-3xl">525 Investor</h3>
        </section>
        <section>
          <h5 className="text-xs lg:text-xl font-normal">Total Pendanaan</h5>
          <h3 className="text-sm md:text-xl lg:text-3xl">Rp 2.520.586.000</h3>
        </section>
        <section>
          <h5 className="text-xs lg:text-xl font-normal">Pengembalian Dana</h5>
          <h3 className="text-sm md:text-xl lg:text-3xl">Rp 1.305.595.000</h3>
        </section>
      </section>
      <section className="space-y-4 text-center">
        <section className="w-1/2 mx-auto ">
          <h4 className="text-3xl font-bold">
            Investasi Proyek Yang Sedang Berjalan
          </h4>
          <p className="text-xl mx-auto my-4">
            Lihat daftar investasi bisnis terbaru yang sedang berlangsung dan
            temukan peluang untuk berinvestasi hari ini.
          </p>
        </section>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 my-8">
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
      </section>
      <section className="flex justify-center items-center mx-auto my-16">
        <button className="bg-sky text-xl font-bold px-6 py-2 text-white rounded-2xl">
          Lihat Proyek Selengkapnya
        </button>
      </section>
      <TabsQuestions />
    </main>
  );
}

import Stepper from "@/app/components/Stepper";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import React from "react";

type Props = {};
// const stepsFromBackend = ["Pre Listing", "Listing", "Terpenuhi", "Berjalan"];

const ProductDetailPage = (props: Props) => {
  return (
    <section className="w-4/5 lg:w-2/3 mx-auto my-8 flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
      <section className="w-full lg:w-1/2 space-y-4">
        <img
          className="w-full rounded-2xl"
          src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/07/06/IMG-20230706-WA0008-3150568808.jpg"
          alt="Product Image"
        />
        <h2 className="font-bold">Tentang Bisnis</h2>
        <section className="text-sm text-justify space-y-2">
          <p>
            Gardu Induk merupakan bagian dari sistem distribusi atau bagian dari
            sistem kelistrikan. Gardu induk juga digunakan untuk mengubah energi
            listrik tegangan tinggi menjadi energi listrik tegangan menengah dan
            begitupun sebaliknya, serta juga dapat digunakan sebagai alat
            pengaman sistem listrik.
          </p>
          <p>
            Pembangunan sistem transmisi secara umum diarahkan kepada
            tercapainya kesesuaian antara kapasitas pembangkitan di sisi hulu
            dan permintaan daya di sisi hilir secara efisien. Disamping itu juga
            sebagai usaha untuk mengatasi kemacetan penyaluran dan perbaikan
            tegangan pelayanan.
          </p>
          <p>
            Pengembangan transmisi dan gardu induk di Indonesia Timur pada
            umumya dibangun untuk menghubungkan sistem-sistem yang selama ini
            masih isolated, membentuk jalur transmisi untuk menyalurkan energi
            dalam jumlah besar ke pusat beban yang lokasinya sangat berjauhan,
            dan untuk menghubungkan antar sistem menjadi sistem yang lebih
            besar.
          </p>
        </section>
      </section>
      <section className="w-full lg:w-1/2 space-y-5">
        <h1 className="text-xl lg:text-2xl font-bold">
          Pembangunan Extension Bay Trafo Gardu Induk New Balikpapan
        </h1>
        <section className="text-sm flex justify-between">
          <h3 className="text-[#677AB9]">Perusahaan</h3>
          <h3>PT. Amsak Bangun Persada </h3>
        </section>
        <section className="text-sm flex justify-between">
          <h3 className="text-[#677AB9]">Kode Efek</h3>
          <h3>ABPP1</h3>
        </section>
        <section className="text-sm flex justify-between">
          <h3 className="text-[#677AB9]">Dana Terkumpul</h3>
          <h3>Rp 1.504.500.000 </h3>
        </section>
        <section className="flex justify-between items-center gap-4">
          <Progress value={51} type={0} className="h-6" />
          <p className="h-6 bg-emerald-light text-white text-sm text-center px-1 rounded-lg">
            51%
          </p>
        </section>
        {/* <Stepper steps={stepsFromBackend} /> */}
        <section className="text-sm flex justify-between">
          <h3 className="text-[#677AB9]">Kategori Bisnis</h3>
          <h3>Makanan dan Minuman</h3>
        </section>
        <section className="text-sm flex justify-between">
          <h3 className="text-[#677AB9]">Kebutuhan Dana</h3>
          <h3>Rp 3.000.000.000</h3>
        </section>
        <section className="text-sm flex justify-between">
          <h3 className="text-[#677AB9]">Harga per Lembar Efek</h3>
          <h3>Rp 100.000</h3>
        </section>
        <section className="text-sm flex justify-between">
          <h3 className="text-[#677AB9]">Minimal Investasi</h3>
          <h3>Rp 1.000.000</h3>
        </section>
        <section className="text-sm flex justify-between">
          <h3 className="text-[#677AB9]">Jumlah Efek Yang Ditawarkan</h3>
          <h3>30.000</h3>
        </section>
        <section className="text-sm flex justify-between">
          <h3 className="text-[#677AB9]">Periode Dividen</h3>
          <h3>90 Hari</h3>
        </section>
        <section className="text-sm flex justify-between">
          <h3 className="text-[#677AB9]">Total Saham yang Dibagikan</h3>
          <h3>80 %</h3>
        </section>
        <section className="flex justify-between gap-1 text-sm text-[#5b5b5b]">
          <button className="w-full bg-[#e4f5f3] hover:bg-slate-200 rounded-xl font-bold py-4">
            Simulasi
          </button>
          <button className="w-full bg-[#e4f5f3] hover:bg-slate-200 rounded-xl font-bold py-4">
            Bagikan
          </button>
          <button className="w-full bg-[#e4f5f3] hover:bg-slate-200 rounded-xl font-bold py-4">
            Prospektus
          </button>
          <button className="w-full bg-[#e4f5f3] hover:bg-slate-200 rounded-xl font-bold py-4">
            Lokasi
          </button>
        </section>
        <Link
          href="/purchase"
          className="w-full block text-center bg-sky hover:bg-sky-950 rounded-4xl text-white text-sm font-semibold py-4"
        >
          Beli Saham
        </Link>
        <p className="text-sky text-sm text-center">
          Butuh Pertanyaan?{" "}
          <a
            href="https://api.whatsapp.com/send?phone=681299900150&text=Assalamu%27alaikum%2C%0A%0Amohon%20info%20terbaru%20tentang%20Fulusme%20Urun%20Dana"
            className="font-bold hover:underline decoration-2 underline-offset-4 cursor-pointer"
          >
            Hubungi Kami
          </a>{" "}
        </p>
      </section>
    </section>
  );
};

export default ProductDetailPage;

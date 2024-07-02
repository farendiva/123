import Stepper from "@/app/components/Stepper";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import React from "react";

type Props = {};
const stepsFromBackend = ["Pre Listing", "Listing", "Terpenuhi", "Berjalan"];

const ProductDetailPage = (props: Props) => {
  return (
    <section className="w-4/5 lg:w-2/3 mx-auto my-8 flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
      <section className="w-full lg:w-1/2 space-y-4">
        <img
          className="w-full rounded-2xl"
          src="/images/product-image.png"
          alt="Product Image"
        />
        <h2 className="font-bold">Tentang Bisnis</h2>
        <section className="text-sm text-justify space-y-2">
          <p>
            Investasi Saham Bisnis Bearmunch Bassura City Cipinang dan Ciputra
            Mall Cibubur Berinvestasi melalui saham bisnis Bearmunch merupakan
            salah satu cara untuk mendapatkan potensi keuntungan dan dividen
            yang menggiurkan. Bearmunch adalah frozen yoghurt terpopuler di
            Indonesia yang sudah berdiri sejak 14 tahun lalu. Frozen yoghurt ini
            merupakan pelopor Frozen Yogurt dan Dessert di Indonesia yang saat
            ini berhasil menjadi Top Of Mind Brand untuk kategori Frozen Yogurt
            dan Healthy Ice Cream, Minuman dan Dessert.
          </p>
          <p>
            Atas prestasinya tersebut, tidak heran jika Bearmunch kini telah
            memiliki lebih dari 71 outlet yang tersebar di seluruh wilayah
            Indonesia dengan skema own store dan kemitraan. Kabar baiknya, kini
            Fulusme membuka penawaran bagi Anda untuk menjadi bagian dari
            pemilik bisnis Bearmunch melalui kepemilikan saham. Bearmunch akan
            membuka 2 outlet sekaligus yaitu Bearmunch Bassura City Cipinang dan
            Ciputra Mall Cibubur.
          </p>
        </section>
      </section>
      <section className="w-full lg:w-1/2 space-y-5">
        <h1 className="text-xl lg:text-2xl font-bold">
          Pembangunan Extension Bay Trafo Gardu Induk New Balikpapan
        </h1>
        <section className="text-sm flex justify-between">
          <h3 className="text-[#677AB9]">Perusahaan</h3>
          <h3>PT Fulusme Sejahtera</h3>
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
          <Progress value={65} className="h-6" />
          <p className="h-6 bg-emerald-light text-white text-sm text-center px-1 rounded-lg">
            65%
          </p>
        </section>
        <Stepper steps={stepsFromBackend} />
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
            Dokumen
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
          <span className="font-bold hover:underline decoration-2 underline-offset-4 cursor-pointer">
            Hubungi Kami
          </span>{" "}
        </p>
      </section>
    </section>
  );
};

export default ProductDetailPage;

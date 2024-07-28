import Head from "next/head";
import ImageSlider from "@/app/components/ImageSlider";
import ShareComponent from "@/app/components/ShareComponent";
import Stepper from "@/app/components/Stepper";
import { getDetailSukuk } from "@/lib/listing";
import { formatRupiah } from "@/lib/rupiah";
import { Box, FileText, MapPin } from "lucide-react";
import Link from "next/link";
import SimulasiComponent from "@/app/components/SimulasiComponent";
import LokasiComponent from "@/app/components/LokasiComponent";
import { Progress } from "@/components/ui/progress";

const steps = [
  {
    title: "Pre Listing",
    isActive: false,
    isComplete: false,
  },
  {
    title: "Listing",
    isActive: false,
    isComplete: false,
  },
  {
    title: "Pendanaan",
    isActive: false,
    isComplete: false,
  },
  {
    title: "Terpenuhi",
    isActive: false,
    isComplete: false,
  },
  {
    title: "Berjalan",
    isActive: false,
    isComplete: false,
  },
];

export default async function ProductDetailPageSukuk({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const id = slug.split("-").pop();

  if (!id) {
    return <div>Product not found</div>;
  }

  const data = await getDetailSukuk(id);
  return (
    <>
      <Head>
        <title>{data.nama_efek} - Product Detail</title>
        <meta
          name="description"
          content={`Detail for ${data.nama_efek}. Learn more about ${data.nama_efek}, its features, and investment opportunities.`}
        />
        <meta property="og:title" content={data.nama_efek} />
        <meta
          property="og:description"
          content={`Detail for ${data.nama_efek}. Learn more about ${data.nama_efek}, its features, and investment opportunities.`}
        />
        <meta property="og:image" content={data.berkas[0]} />
        <meta
          property="og:url"
          content={`http://localhost:3000/daftar-bisnis/${data.jenis_efek.toLowerCase()}/${slug}`}
        />
        <meta property="og:type" content="product" />
        <link
          rel="canonical"
          href={`http://localhost:3000/daftar-bisnis/${data.jenis_efek.toLowerCase()}/${slug}`}
        />
      </Head>
      <main>
        <section className="flex flex-col justify-between w-4/5 gap-8 mx-auto my-4 lg:mt-4 lg:mb-16 lg:w-2/3 lg:flex-row">
          <section className="flex flex-col w-full gap-20 space-y-4 lg:w-1/2">
            <ImageSlider
              images={data.berkas}
              tipe={data.jenis_efek}
              akad={data.akad}
              periode={data.periode_penawaran_efek}
            />
            <div>
              <h2 className="my-2 font-bold">Tentang Bisnis</h2>
              <section
                className="h-full space-y-2 text-sm text-justify lg:max-h-80"
                dangerouslySetInnerHTML={{ __html: data.tentang_proyek }}
              />
            </div>
          </section>

          <section className="w-full space-y-2 lg:w-7/12 p-4 rounded-xl bg-[#F3F5FF]">
            <section className="bg-white rounded-xl p-4 space-y-2">
              {/* Judul Pembangunan */}
              <h1 className="text-xl font-bold lg:text-2xl">
                {data.nama_efek}
              </h1>
              {/* Detail Perusahaan */}
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Perusahaan</h3>
                <h3>{data.penerbit?.nama || ""}</h3>
              </section>
              {/* Kode Efek */}
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Kode Efek</h3>
                <h3>{data.kode_penerbit}</h3>
              </section>
              {/* Dana Terkumpul */}
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Dana Terkumpul</h3>
                <h3>{formatRupiah(data.nilai_pendanaan)}</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Lokasi Bisnis</h3>
                <h3>Surabaya</h3>
              </section>
            </section>
            <section className="bg-white p-4 space-y-2 rounded-xl">
              <Progress
                value={Math.floor(
                  (data.nilai_pendanaan / data.nilai_proyek) * 100
                )}
                type="0"
                className="w-full mx-auto"
              />
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Dana Terkumpul</h3>
                <h3>{formatRupiah(data.nilai_pendanaan)}</h3>
              </section>
            </section>

            <Stepper steps={steps} />
            <section className="bg-white rounded-xl space-y-2 p-4">
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Kategori Bisnis</h3>
                <h3>Makanan dan Minuman</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Kebutuhan Dana</h3>
                <h3>{formatRupiah(data.nilai_proyek)}</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Harga per Lembar Efek</h3>
                <h3>{formatRupiah(data.satuan_pemindahan_buku)}</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Minimal Investasi</h3>
                <h3>{formatRupiah(data.minimal_investasi)}</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Jumlah Efek Yang Ditawarkan</h3>
                <h3>{data.jumlah_unit_yang_ditawarkan}</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Periode Dividen</h3>
                <h3>{data.periode_penawaran_efek} Hari</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Total Saham yang Dibagikan</h3>
                <h3>{data.proyeksi_bagi_hasil_max} %</h3>
              </section>
            </section>

            {/* Tombol Aksi */}
            <section className="w-4/5 mx-auto flex justify-center items-center gap-1 lg:last-of-type:gap-8 text-xs font-medium py-2">
              <SimulasiComponent
                data={data.satuan_pemindahan_buku}
                roi={data.imbal_hasil_pemodal}
              />
              <ShareComponent
                text={data.nama_efek}
                tipe={data.jenis_efek}
                id={id}
              />
              <button className="w-full flex items-center gap-2">
                <FileText />
                Prospektus
              </button>
              <LokasiComponent />
            </section>
            <Link
              href={`/daftar-bisnis/${data.jenis_efek.toLowerCase()}/${slug}/bayar`}
              className="block w-full py-4 text-sm font-semibold text-center text-white bg-sky hover:bg-sky-950 rounded-4xl"
            >
              Beli Efek
            </Link>
            {/* Kontak */}
            <p className="text-sm text-center text-sky">
              Butuh Pertanyaan?{" "}
              <span className="font-bold cursor-pointer hover:underline decoration-2 underline-offset-4">
                Hubungi Kami
              </span>{" "}
            </p>
          </section>
        </section>
      </main>
    </>
  );
}

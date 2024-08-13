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
import PurchaseButton from "@/app/components/PurchaseButton";
import { getUserData } from "@/lib/auth";

export default async function ProductDetailPageSukuk({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  let id = slug.split("-").pop();
  if (!id) {
    return (
      <h1 className="text-4xl font-bold text-center">Bisnis Tidak Ditemukan</h1>
    );
  }

  let data;
  try {
    data = await getDetailSukuk(id);
  } catch (error) {
    console.error("Error fetching product details:", error);
    return <div>Failed to load product details. Please try again later.</div>;
  }

  if (!data) {
    return (
      <h1 className="text-4xl font-bold text-center">Bisnis Tidak Ditemukan</h1>
    );
  }
  const user = await getUserData();
  const industriData = [
    { id: 1, industri_pekerjaan: "retail" },
    { id: 2, industri_pekerjaan: "otomotif" },
    { id: 3, industri_pekerjaan: "finansial" },
    { id: 4, industri_pekerjaan: "travel" },
    { id: 5, industri_pekerjaan: "pendidikan" },
    { id: 6, industri_pekerjaan: "makanan dan minuman" },
    { id: 7, industri_pekerjaan: "kesehatan dan gaya hidup" },
    { id: 8, industri_pekerjaan: "penginapan" },
    { id: 9, industri_pekerjaan: "agriculture" },
    { id: 10, industri_pekerjaan: "pertambangan" },
    { id: 11, industri_pekerjaan: "teknologi" },
    { id: 12, industri_pekerjaan: "kontraktor" },
    { id: 13, industri_pekerjaan: "konstruksi" },
    { id: 14, industri_pekerjaan: "konsultan" },
    { id: 15, industri_pekerjaan: "elektronik" },
    { id: 16, industri_pekerjaan: "transportasi" },
    { id: 17, industri_pekerjaan: "perumahan" },
    { id: 18, industri_pekerjaan: "logistik" },
    { id: 19, industri_pekerjaan: "manufaktur" },
    { id: 20, industri_pekerjaan: "hiburan" },
    { id: 61, industri_pekerjaan: "software dev" },
    { id: 63, industri_pekerjaan: "tani" },
  ];

  function getIndustriPeekerjaanById(id: number) {
    const industri = industriData.find((item) => item.id === id);
    return industri ? industri.industri_pekerjaan : "Unknown";
  }

  function calculateRemainingUnits(
    summary_transaksi: {
      total_pendanaan: string;
      total_pemodal: number;
      penawaran_berakhir: string;
    } | null,
    totalUnit: number,
    unitPrice: number
  ) {
    if (!summary_transaksi) {
      return totalUnit;
    }
    const totalPendanaan = parseFloat(summary_transaksi.total_pendanaan);
    const investedUnits = totalPendanaan / unitPrice;
    const remainingUnits = totalUnit - investedUnits;
    return remainingUnits;
  }

  const totalUnit = data.jumlah_unit_yang_ditawarkan; // Total unit yang ditawarkan
  const unitPrice = data.satuan_pemindahan_buku; // Harga per unit

  const remainingUnits = calculateRemainingUnits(
    data.summary_transaksi || null,
    totalUnit,
    unitPrice
  );

  return (
    <>
      <Head>
        <title>{data.nama_efek}</title>
        <meta
          name="description"
          content={`Detail for ${data.nama_efek}. Learn more about ${data.nama_efek}, its features, and investment opportunities.`}
        />
        <meta property="og:title" content={data.nama_efek} />
        <meta
          property="og:description"
          content={`Detail for ${data.nama_efek}. Learn more about ${data.nama_efek}, its features, and investment opportunities.`}
        />
        {/* <meta property="og:image" content={data.berkas} /> */}
        <meta
          property="og:url"
          content={`https://fulusme.id/daftar-bisnis/${data.jenis_efek.toLowerCase()}/${slug}`}
        />
        <meta property="og:type" content="product" />
        <link
          rel="canonical"
          href={`https://fulusme.id/daftar-bisnis/${data.jenis_efek.toLowerCase()}/${slug}`}
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
                className="h-full space-y-2 text-sm text-justify lg:max-h-[400px] lg:overflow-y-scroll"
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
                <h3>{data.penerbit.nama_perusahaan}</h3>
              </section>
              {/* Kode Efek */}
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Kode Efek</h3>
                <h3>{data.kode_penerbit}</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Jenis Akad</h3>
                <h3>{data.akad === 1 ? "Mudharabah" : "Musyarakah"}</h3>
              </section>
            </section>
            <section className="bg-white p-4 space-y-2 rounded-xl">
              {data.kampanye.status_label !== "Selesai" && (
                <div className="flex justify-between gap-2">
                  <Progress
                    value={
                      data.nilai_pendanaan
                        ? ((data.summary_transaksi?.total_pendanaan ?? 0) /
                            data.nilai_pendanaan) *
                          100
                        : 0
                    }
                    type={data.kampanye.status}
                    className="w-full mx-auto"
                  />
                  <p className="h-4 px-1 py-0 bg-emerald-light text-xs text-white font-bold rounded-full">
                    {data.nilai_pendanaan
                      ? Math.round(
                          ((data.summary_transaksi?.total_pendanaan ?? 0) /
                            data.nilai_pendanaan) *
                            100
                        )
                      : 0}
                    %
                  </p>
                </div>
              )}

              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Dana Terkumpul</h3>
                {data.kampanye.status_label !== "Selesai" ? (
                  <h3>
                    {formatRupiah(data.summary_transaksi?.total_pendanaan ?? 0)}
                  </h3>
                ) : (
                  <h3>{formatRupiah(data.nilai_pendanaan)}</h3>
                )}
              </section>
            </section>

            <Stepper currentStatus={data.kampanye.status} />
            <section className="bg-white rounded-xl space-y-2 p-4">
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Kategori Bisnis</h3>
                <h3>
                  {" "}
                  {getIndustriPeekerjaanById(data.bidang_usaha).toUpperCase()}
                </h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Minimal Investasi</h3>
                <h3>{formatRupiah(data.minimal_investasi)}</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Harga Unit</h3>
                <h3>{formatRupiah(data.satuan_pemindahan_buku)}</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Jumlah Unit</h3>
                <h3>{data.jumlah_unit_yang_ditawarkan}</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Total Unit (Rp)</h3>
                <h3>{formatRupiah(data.nilai_pendanaan)}</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Unit Tersisa</h3>
                <h3>{remainingUnits}</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Periode Pengembalian</h3>
                <h3>Per {data.tenor_efek} Bulan</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Tenor</h3>
                <h3>{data.tenor_efek} Bulan</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">ROI (Proyeksi)</h3>
                <h3>
                  {data.proyeksi_bagi_hasil_min}% (
                  {data.proyeksi_bagi_hasil_max}% p.a)
                </h3>
              </section>
            </section>

            {/* Tombol Aksi */}
            <section className="w-4/5 mx-auto flex justify-center items-center gap-1 lg:last-of-type:gap-8 text-xs font-medium py-2">
              <SimulasiComponent
                tenor={data.tenor_efek}
                data={data.satuan_pemindahan_buku}
                roi={data.proyeksi_bagi_hasil_min}
              />
              <ShareComponent
                text={data.nama_efek}
                tipe={data.jenis_efek}
                id={id}
              />
              <Link
                href={`${process.env.NEXT_PUBLIC_FILE_PATH}/dokumen/${
                  data.kampanye.prospektus || ""
                }`}
                target="_blank"
                className="w-full flex items-center gap-2"
                download
              >
                <FileText />
                Prospektus
              </Link>
              {/* <LokasiComponent
                lokasi={data.penerbit.lokasi}
                detail={data.penerbit.alamat_detail}
              /> */}
            </section>
            <PurchaseButton
              listing={data.kampanye.status}
              slug={slug}
              jenis_efek={data.jenis_efek}
              status={user.data?.pemodal_status}
            />
            {/* Kontak */}
            <p className="text-sm text-center text-sky">
              Butuh Pertanyaan?{" "}
              <a
                href="https://api.whatsapp.com/send?phone=6281299900150"
                className="font-bold hover:underline decoration-2 underline-offset-4 cursor-pointer"
              >
                Hubungi Kami
              </a>{" "}
            </p>
          </section>
        </section>
      </main>
    </>
  );
}

export const revalidate = 60; // Revalidate every 60 seconds

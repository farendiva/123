import ImageSlider from "@/app/components/ImageSlider";
import Stepper from "@/app/components/Stepper";
import { Progress } from "@/components/ui/progress";
import { getDetailSaham } from "@/lib/listing";
import Link from "next/link";
import { formatRupiah } from "@/lib/rupiah";
import { Box, FileText, MapPin, Share2 } from "lucide-react";
import Head from "next/head";
import SimulasiComponent from "@/app/components/SimulasiComponent";
import ShareComponent from "@/app/components/ShareComponent";
import LokasiComponent from "@/app/components/LokasiComponent";
import { getUserData } from "@/lib/auth";
import PurchaseButton from "@/app/components/PurchaseButton";
type Props = {
  data: {
    id: number;
    penerbit_id: number;
    kode_penerbit: string;
    jenis_efek: string;
    nama_efek: string;
    nama_proyek: string;
    tentang_proyek: string;
    dasar_penerbitan: string;
    tenor_efek: number;
    skema_pembayaran: string;
    pihak_terlibat: string;
    jumlah_unit_yang_ditawarkan: number;
    satuan_pemindahan_buku: number;
    monitoring_pembayaran: string;
    nilai_proyek: number;
    nilai_modal: number;
    nilai_pendanaan: number;
    minimal_pendanaan: number;
    periode_penawaran_efek: number;
    porsi_modal_pemodal: string;
    porsi_modal_penerbit: string;
    proyeksi_bagi_hasil_min: string;
    proyeksi_bagi_hasil_max: string;
    imbal_hasil_pemodal: string;
    imbal_hasil_penerbit: string;
    minimal_investasi: number;
    denda_keterlambatan: string;
    jaminan: string;
    penerbit: {
      id: number;
      nama: string;
      jenis_perusahaan: string;
      situs_perusahaan: string;
      no_telp: string;
      alamat: string;
      provinsi: string;
      kota: string;
      kecamatan: string;
      kelurahan: string;
      kodepos: string;
    };
    berkas: {
      id: number;
      detail_bisnis_sukuk_id: number;
      nama_file: string;
      foto_utama: number;
      created_at: string;
      updated_at: string;
    }[];
  };
};

const steps = [
  {
    title: "Pre Listing",
    description: "Complete your profile and business information.",
    icon: <i className="fas fa-user-circle"></i>,
    isActive: false,
    isComplete: false,
  },
  {
    title: "Listing",
    description: "Upload your products and set prices.",
    icon: <i className="fas fa-store"></i>,
    isActive: false,
    isComplete: false,
  },
  {
    title: "Pendanaan",
    description: "Collect funds from potential investors.",
    icon: <i className="fas fa-money-bill-wave"></i>,
    isActive: false,
    isComplete: false,
  },
  {
    title: "Terpenuhi",
    description: "Your funding goal has been reached.",
    icon: <i className="fas fa-check-circle"></i>,
    isActive: false,
    isComplete: false,
  },
  {
    title: "Berjalan",
    description: "Your business is now operational.",
    icon: <i className="fas fa-rocket"></i>,
    isActive: false,
    isComplete: false,
  },
];

export default async function ProductDetailPageSaham({
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
    data = await getDetailSaham(id);
  } catch (error) {
    console.error("Error fetching product details:", error);
    return <div>Failed to load product details. Please try again later.</div>;
  }

  if (!data || !data.nama_efek) {
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
              akad={3}
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
            </section>
            <section className="bg-white p-4 space-y-2 rounded-xl">
              <div className="flex justify-between gap-2">
                <Progress
                  value={
                    data.nilai_pendanaan
                      ? ((data.summary_transaksi?.total_pendanaan ?? 0) /
                          data.nilai_proyek) *
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
                          data.nilai_proyek) *
                          100
                      )
                    : 0}
                  %
                </p>
              </div>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Dana Terkumpul</h3>
                <h3>
                  {formatRupiah(data.summary_transaksi?.total_pendanaan ?? 0)}
                </h3>
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
                <h3 className="text-[#677AB9]">Harga per Lembar Efek</h3>
                <h3>{formatRupiah(data.satuan_pemindahan_buku)}</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Jumlah Efek Yang Ditawarkan</h3>
                <h3>{data.jumlah_unit_yang_ditawarkan}</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Efek Tersisa</h3>
                <h3>{formatRupiah(data.nilai_proyek)}</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Periode Dividen</h3>
                <h3>{data.periode_dividen} Hari</h3>
              </section>
              <section className="flex justify-between text-sm">
                <h3 className="text-[#677AB9]">Total Saham yang Dibagikan</h3>
                <h3>{data.porsi_modal_pemodal}</h3>
              </section>
            </section>

            {/* Tombol Aksi */}
            <section className="w-4/5 mx-auto flex justify-center items-center gap-1 lg:last-of-type:gap-8 text-xs font-medium py-2">
              <SimulasiComponent
                data={data.satuan_pemindahan_buku}
                roi={data.roi_min}
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

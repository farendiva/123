import ImageSlider from "@/app/components/ImageSlider";
import Stepper from "@/app/components/Stepper";
import { Progress } from "@/components/ui/progress";
import { getDetailSukuk } from "@/lib/listing";
import { formatRupiah } from "@/lib/rupiah";
import Link from "next/link";

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

const stepsFromBackend = ["Pre Listing", "Listing", "Terpenuhi", "Berjalan"];

export default async function ProductDetailPageSukuk({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params;
  const data = await getDetailSukuk(id);
  return (
    <main>
      <section className="flex flex-col justify-between w-4/5 gap-8 mx-auto my-4 lg:w-2/3 lg:flex-row">
        <section className="flex flex-col w-full gap-20 space-y-4 lg:w-1/2">
          {/* Gambar Produk */}
          <ImageSlider images={data.berkas} />
          {/* Tentang Bisnis */} {/* Tambahkan margin top sesuai kebutuhan */}
          <div>
            <h2 className="my-2 font-bold">Tentang Bisnis</h2>
            <section
              className="max-h-full space-y-2 overflow-auto text-sm text-justify lg:overflow-y-auto lg:max-h-80"
              dangerouslySetInnerHTML={{ __html: data.tentang_proyek }}
            />
          </div>
        </section>

        <section className="w-full space-y-5 lg:w-1/2">
          {/* Judul Pembangunan */}
          <h1 className="text-xl font-bold lg:text-2xl">{data.nama_efek}</h1>
          {/* Detail Perusahaan */}
          <section className="flex justify-between text-sm">
            <h3 className="text-[#677AB9]">Perusahaan</h3>
            <h3>{data.penerbit.nama}</h3>
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
          {/* Progress Bar */}
          <section className="flex items-center justify-between gap-4">
            <Progress
              value={Math.floor(
                (data.nilai_pendanaan / data.nilai_proyek) * 100
              )}
              type="0"
              className="h-6"
            />
            <p className="h-6 px-1 text-sm text-center text-white rounded-lg bg-emerald-light">
              {Math.floor((data.nilai_pendanaan / data.nilai_proyek) * 100)}%
            </p>
          </section>
          {/* Langkah-langkah */}
          <Stepper steps={stepsFromBackend} />
          {/* Informasi Tambahan */}
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
          {/* Tombol Aksi */}
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
          {/* Link Beli Saham */}
          <Link
            href={`/purchase/${data.jenis_efek.toLowerCase()}/${data.id}`}
            className="block w-full py-4 text-sm font-semibold text-center text-white bg-sky hover:bg-sky-950 rounded-4xl"
          >
            Beli Sukuk
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
  );
}

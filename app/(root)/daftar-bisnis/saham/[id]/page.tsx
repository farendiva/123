import ImageSlider from "@/app/components/ImageSlider";
import Stepper from "@/app/components/Stepper";
import { Progress } from "@/components/ui/progress";
import { getDetailSaham } from "@/lib/listing";
import Link from "next/link";
import { formatRupiah } from "@/lib/rupiah";
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

export default async function ProductDetailPageSaham({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params;
  const data = await getDetailSaham(id);
  return (
    <main>
      <section className="w-4/5 lg:w-2/3 mx-auto my-8 flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
        <section className="w-full lg:w-1/2 space-y-4 flex flex-col gap-20">
          {/* Gambar Produk */}
          <ImageSlider images={data.berkas} />
          {/* Tentang Bisnis */} {/* Tambahkan margin top sesuai kebutuhan */}
          <div>
            <h2 className="font-bold my-2">Tentang Bisnis</h2>
            <section
              className="text-sm text-justify space-y-2 overflow-auto max-h-full lg:overflow-y-auto lg:max-h-80"
              dangerouslySetInnerHTML={{ __html: data.tentang_proyek }}
            />
          </div>
        </section>

        <section className="w-full lg:w-1/2 space-y-5">
          {/* Judul Pembangunan */}
          <h1 className="text-xl lg:text-2xl font-bold">{data.nama_efek}</h1>
          {/* Detail Perusahaan */}
          <section className="text-sm flex justify-between">
            <h3 className="text-[#677AB9]">Perusahaan</h3>
            <h3>{data.penerbit.nama}</h3>
          </section>
          {/* Kode Efek */}
          <section className="text-sm flex justify-between">
            <h3 className="text-[#677AB9]">Kode Efek</h3>
            <h3>{data.kode_penerbit}</h3>
          </section>
          {/* Dana Terkumpul */}
          <section className="text-sm flex justify-between">
            <h3 className="text-[#677AB9]">Dana Terkumpul</h3>
            <h3>{formatRupiah(data.nilai_pendanaan)}</h3>
          </section>
          {/* Progress Bar */}
          <section className="flex justify-between items-center gap-4">
            <Progress
              value={Math.floor(
                (data.nilai_pendanaan / data.nilai_proyek) * 100
              )}
              type="0"
              className="h-6"
            />
            <p className="h-6 bg-emerald-light text-white text-sm text-center px-1 rounded-lg">
              {Math.floor((data.nilai_pendanaan / data.nilai_proyek) * 100)}%
            </p>
          </section>
          {/* Langkah-langkah */}
          <Stepper steps={stepsFromBackend} />
          {/* Informasi Tambahan */}
          <section className="text-sm flex justify-between">
            <h3 className="text-[#677AB9]">Kategori Bisnis</h3>
            <h3>Makanan dan Minuman</h3>
          </section>
          <section className="text-sm flex justify-between">
            <h3 className="text-[#677AB9]">Kebutuhan Dana</h3>
            <h3>{formatRupiah(data.nilai_proyek)}</h3>
          </section>
          <section className="text-sm flex justify-between">
            <h3 className="text-[#677AB9]">Harga per Lembar Efek</h3>
            <h3>{formatRupiah(data.satuan_pemindahan_buku)}</h3>
          </section>
          <section className="text-sm flex justify-between">
            <h3 className="text-[#677AB9]">Minimal Investasi</h3>
            <h3>{formatRupiah(data.minimal_investasi)}</h3>
          </section>
          <section className="text-sm flex justify-between">
            <h3 className="text-[#677AB9]">Jumlah Efek Yang Ditawarkan</h3>
            <h3>{data.jumlah_unit_yang_ditawarkan}</h3>
          </section>
          <section className="text-sm flex justify-between">
            <h3 className="text-[#677AB9]">Periode Dividen</h3>
            <h3>{data.periode_penawaran_efek} Hari</h3>
          </section>
          <section className="text-sm flex justify-between">
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
            className="w-full block text-center bg-sky hover:bg-sky-950 rounded-4xl text-white text-sm font-semibold py-4"
          >
            Beli Saham
          </Link>
          {/* Kontak */}
          <p className="text-sky text-sm text-center">
            Butuh Pertanyaan?{" "}
            <span className="font-bold hover:underline decoration-2 underline-offset-4 cursor-pointer">
              Hubungi Kami
            </span>{" "}
          </p>
        </section>
      </section>
    </main>
  );
}

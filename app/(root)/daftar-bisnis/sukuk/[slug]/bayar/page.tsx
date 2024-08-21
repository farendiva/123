import PurchaseForm from "@/app/components/form/PurchasedForm";
import { UserProvider } from "@/context/UserContext";
import { getUserData } from "@/lib/auth";
import { getDetailSukuk } from "@/lib/listing";
import { getBanks } from "@/lib/preferences";
import { User } from "lucide-react";
import { cookies } from "next/headers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bayar | FULUSME",
  description: "Halaman Pembayaran Pembelian Efek",
};
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

export default async function BeliSukuk({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const cookieStore = cookies();
  const token = cookieStore.get("authToken")?.value;
  const banks = await getBanks(token as string);
  const id = slug.split("-").pop();
  if (!id) {
    return <div>Product not found</div>;
  }
  const data = await getDetailSukuk(id);
  const user = await getUserData();
  return (
    <UserProvider initialUser={user.data}>
      <main className="w-11/12 lg:w-3/5 mx-auto my-8 lg:my-16">
        <section className="w-full max-w-xl lg:max-w-full mx-auto flex-shrink-0">
          <button className="bg-[#FF1F00] text-sm text-white py-1 px-7 rounded-3xl">
            {/* {data.jenis_efek === "Sukuk"
              ? data.akad === 1
                ? "Sukuk Mudharabah"
                : data.akad === 2
                ? "Sukuk Musyarakah"
                : "Saham"
              : "Saham"} */}
            {data.jenis_efek === "Sukuk"
              ? data.akad === 1
                ? "Obligasi"
                : data.akad === 2
                ? "Obligasi"
                : "Saham"
              : "Saham"}
          </button>
        </section>
        <PurchaseForm
          data={data}
          banks={banks}
          user={user.data}
          token={token as string}
        />
      </main>
    </UserProvider>
  );
}

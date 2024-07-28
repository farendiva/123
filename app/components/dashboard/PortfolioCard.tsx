import { formatRupiah } from "@/lib/rupiah";
import React from "react";

interface Berkas {
  detail_bisnis_saham_id: number;
  foto_utama: number;
  id: number;
  image_url: string;
  nama_file: string;
}

interface Business {
  id: number;
  penerbit_id: number;
  kode_penerbit: string;
  jenis_efek: string;
  nama_efek: string;
  nama_proyek: string;
  akad: number | null;
  bidang_usaha: number;
  tentang_proyek: string | null;
  dasar_penerbitan: string;
  skema_pembayaran: string;
  pihak_terlibat: string | null;
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
  proyeksi_bagi_hasil_min: string | null;
  proyeksi_bagi_hasil_max: string | null;
  roi_min: string | null;
  roi_max: string | null;
  periode_dividen?: number;
  imbal_hasil_pemodal?: string;
  imbal_hasil_penerbit?: string;
  denda_keterlambatan?: string | null;
  jaminan?: string | null;
  porsi_modal_pemodal_idr: number;
  porsi_modal_penerbit_idr: number;
  berkas: Berkas;
}

interface PortfolioItem {
  id: number;
  user_id: number;
  business_type: string;
  business_id: number;
  harga_perlembar_saham: number;
  total_saham: number;
  nilai_investasi: number;
  tanggal_pembelian_saham: string;
  tanggal_pendanaan_terpenuhi: string | null;
  total_dana_terpenuhi: number;
  persentase_saham: string;
  status: number;
  created_at: string;
  updated_at: string;
  business: Business;
}

interface PorfolioProps {
  portfolio: PortfolioItem;
}

const PortfolioCard: React.FC<PorfolioProps> = ({ portfolio }) => {
  return (
    <div className="h-40 bg-white shadow px-4 rounded-xl flex items-center justify-between gap-4">
      <img
        src={portfolio.business.berkas.image_url}
        alt={portfolio.business.nama_efek}
        className="w-1/4 aspect-video rounded-xl"
      />
      <div className="w-full space-y-4">
        <div className="flex justify-between">
          <h3 className="font-bold w-1/2">{portfolio.business.nama_proyek}</h3>
          <span
            className={`h-7 px-6 flex items-center text-xs rounded-xl ${
              portfolio.business.jenis_efek === "Saham"
                ? "bg-emerald-light"
                : "bg-[#FF1F00]"
            } text-white`}
          >
            {portfolio.business.jenis_efek}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="flex-col">
            <h2 className="font-bold">Status</h2>
            <p>{portfolio.status === 1 && "Berjalan"}</p>
          </div>
          <div className="flex-col">
            <h2 className="font-bold">Total Saham</h2>
            <p>{portfolio.total_saham}</p>
          </div>
          <div className="flex-col">
            <h2 className="font-bold">Nilai Investasi</h2>
            <p>{formatRupiah(portfolio.nilai_investasi)}</p>
          </div>
          <div className="flex-col">
            <h2 className="font-bold">Keuntungan</h2>
            <p className="text-emerald">-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

import TransactionList from "@/app/components/dashboard/TransactionList";
import { getTransaksiPemodal } from "@/lib/preferences";
import { cookies } from "next/headers";

export interface Transaksi {
  id: number;
  user_id: number;
  efek_id: string;
  nama_efek: string;
  tipe_efek: string;
  email: string;
  nama_depan: string;
  nama_belakang: string;
  no_handphone: string;
  harga_perlembar_saham: number;
  total_saham: number;
  nilai_investasi: number;
  biaya_layanan: number;
  total_pembayaran: number;
  metode_pembayaran: string;
  tanggal_pembelian: string;
  tanggal_pembayaran: string | null;
  status: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  va_bank: string;
  va_number: string;
  va_expiry_time: string;
  transaction_id: string;
  biller_code: string | null;
  bill_key: string | null;
  transaksi_status: TransaksiStatus;
}

export interface TransaksiStatus {
  status_id: number;
  description: string;
}

export default async function TransaksiPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("authToken")?.value;
  const user_id = cookieStore.get("user_id")?.value;
  const { data } = await getTransaksiPemodal(
    user_id as string,
    token as string
  );

  return (
    <main className="w-full mx-auto rounded-xl">
      <TransactionList data={data.data} />
    </main>
  );
}

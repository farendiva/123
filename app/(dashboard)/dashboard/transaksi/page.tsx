import TransactionCard from "@/app/components/dashboard/TransactionCard";
import { getTransaksiPemodal } from "@/lib/preferences";
import { FilterIcon } from "lucide-react";
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
  const sortedTransaksi = data.data.sort(
    (
      a: { created_at: string | number | Date },
      b: { created_at: string | number | Date }
    ) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <main className="w-full mx-auto rounded-xl">
      <form className="w-full mb-4 mx-auto flex items-center gap-4">
        <div className="w-full relative">
          <input
            type="search"
            className="block w-full p-4 ps-4 text-sm text-gray-900 rounded-3xl bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Cari Bisnis..."
            required
          />
          <div className="absolute inset-y-0 end-4 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
        <FilterIcon fill="black" />
      </form>
      {sortedTransaksi.map((transaksi: Transaksi) => (
        <TransactionCard key={transaksi.id} transaksi={transaksi} />
      ))}
    </main>
  );
}

"use client";

import TransactionList from "@/app/components/dashboard/TransactionList";
import { getTransaksiPemodal } from "@/lib/preferences";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function TransaksiPage() {
  const token = Cookies.get("authToken");
  const [transactions, setTransactions] = useState<Transaksi[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    if (!token) {
      router.push("/login"); // Redirect to login if no token or user_id
      return;
    }

    try {
      const { data } = await getTransaksiPemodal(token, page);
      if (data.data.length === 0) {
        setHasMore(false);
      } else {
        setTransactions((prev) => [...prev, ...data.data]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const handleLoadMore = () => {
    fetchTransactions();
  };

  return (
    <main className="w-full mx-auto rounded-xl">
      <TransactionList
        data={transactions}
        onLoadMore={handleLoadMore}
        hasMore={hasMore}
      />
    </main>
  );
}

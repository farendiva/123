import { getDetailOrder } from "@/lib/preferences";
import { cookies } from "next/headers";
import { formatRupiah } from "@/lib/rupiah";
import CopyToClipboard from "@/components/ui/CopyToClipboard";
import ExpireButton from "@/app/components/dashboard/ExpireButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleAlert } from "lucide-react";
import { notFound } from "next/navigation";

interface OrderDetailProps {
  params: { order_id: number };
}

export default async function OrderDetail({ params }: OrderDetailProps) {
  const { order_id } = params;
  const cookieStore = cookies();
  const token = cookieStore.get("authToken")?.value;
  const { data } = await getDetailOrder(order_id, token as string);
  if (!data) {
    notFound();
  }
  const ppn = data.biaya_layanan * 0.11;
  return (
    <>
      <main className="max-w-3xl mx-auto my-4 p-2 bg-[#F3F5FF] rounded-lg shadow-sm">
        {data && (
          <div className="space-y-4 bg-[#F3F5FF] text-[15px]">
            <div className="bg-white p-4 rounded-lg space-y-2">
              <button className="bg-sky text-sm rounded-xl text-white px-8 py-1">
                {data.tipe_efek}
              </button>
              <div className="space-y-2">
                <h1 className="text-xl lg:text-2xl font-bold">
                  {data.nama_efek}
                </h1>
                <p className="font-medium">Order id: {data.id}</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg text-[#667AB9] space-y-6 md:space-y-2">
              <h2 className="font-bold">Rincian Pembelian</h2>
              <ul className="space-y-2 flex flex-col md:flex-row justify-between items-start md:items-center mx-auto font-medium ">
                <li className="flex items-start justify-center flex-col">
                  <span className="font-medium">Nilai Investasi</span>
                  <span className="text-black">
                    {formatRupiah(parseFloat(data.nilai_investasi))}
                  </span>
                </li>
                <li className="flex justify-center flex-col items-start">
                  <span className="font-medium">Jumlah Lembar Saham</span>
                  <span className="text-black">{data.total_saham} Lembar</span>
                </li>
                <li className="flex items-start justify-center flex-col">
                  <span className="font-medium flex items-center gap-2">
                    Biaya Platform
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <CircleAlert fill="#677AB9" color="white" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Add to library</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </span>
                  <span className="text-black">
                    {formatRupiah(parseFloat(data.biaya_layanan))}
                  </span>
                </li>
                <li className="flex items-start justify-center flex-col">
                  <span className="font-medium flex items-center gap-2">
                    PPN
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <CircleAlert fill="#677AB9" color="white" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Add to library</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </span>
                  <span className="text-black">{formatRupiah(ppn)}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg flex justify-between">
              <h1 className="text-[#667AB9] font-bold">Total Pembayaran</h1>
              <p className="font-medium">
                {formatRupiah(data.total_pembayaran)}
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg space-y-6">
              <div className="bg-white flex justify-between">
                <h1 className="text-[#667AB9] font-bold">Metode Pembayaran</h1>
                <p className="font-medium">
                  {data.va_bank.toUpperCase()} VIRTUAL ACCOUNT
                </p>
              </div>
              <div className="bg-white flex justify-between">
                <h1 className="text-[#667AB9] font-bold">
                  Nomor Virtual Account
                </h1>
                <div>
                  <CopyToClipboard text={data.va_number} />
                </div>
              </div>
            </div>

            <ExpireButton
              expire={data.va_expiry_time}
              status={data.transaksi_status.status_id}
            />
          </div>
        )}
      </main>
      <div className="flex justify-center items-center my-4 gap-2 flex-col">
        <button className="bg-emerald-light rounded-5xl text-white font-bold px-32 py-4">
          Beranda
        </button>
        <p className="text-sky text-sm text-center">
          Butuh Pertanyaan?{" "}
          <a
            href="https://api.whatsapp.com/send?phone=6282299996862&text=Assalamu%27alaikum%2C%0A%0Amohon%20info%20terbaru%20tentang%20Fulusme%20Urun%20Dana"
            className="font-bold hover:underline decoration-2 underline-offset-4 cursor-pointer"
          >
            Hubungi Kami
          </a>{" "}
        </p>
      </div>
    </>
  );
}

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TabsQuestions = () => {
  return (
    <Tabs id="faq" defaultValue="umum" className="w-4/5 lg:w-3/5 mx-auto my-16">
      <TabsList className="grid w-full lg:w-2/3 my-8 lg:my-16 mx-auto grid-cols-3 gap-x-6 ">
        <TabsTrigger value="umum">Umum</TabsTrigger>
        <TabsTrigger value="pemodal">Pemodal</TabsTrigger>
        <TabsTrigger value="penerbit">Penerbit</TabsTrigger>
      </TabsList>
      <TabsContent value="umum">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="my-4">
            <AccordionTrigger className="font-semibold">
              Apa itu Fulusme?
            </AccordionTrigger>
            <AccordionContent className="px-4">
              FULUSME adalah Penyelenggara Layanan Urun Dana Berbasiskan
              Teknologi Informasi (Securities Crowdfunding) yang merupakan
              tempat bertemunya Pemodal dan Penerbit dalam satu wadah platform
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-semibold">
              Apa itu Efek?
            </AccordionTrigger>
            <AccordionContent className="px-4">
              &#x2022; Efek adalah surat berharga, yaitu surat pengakuan utang,
              surat berharga komersial, saham, obligasi, tanda bukti utang, unit
              penyertaan kontrak investasi kolektif, kontrak berjangka atas
              Efek, dan setiap derivatif dari Efek.
            </AccordionContent>
            <AccordionContent className="px-4">
              &#x2022; Efek yang Fulusme tawarkan di Layanan Urun Dana adalah
              Saham Syariah dan Sukuk.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="my-4">
            <AccordionTrigger className="font-semibold">
              Apa itu Lembaga Penyimpanan dan Penyelesaian?
            </AccordionTrigger>
            <AccordionContent className="px-4">
              &#x2022; Lembaga Penyimpanan dan Penyelesaian (LPP) adalah pihak
              yang menyelenggarakan kegiatan kustodian sentral bagi bank
              kustodian, perusahaan efek, dan pihak lain.
            </AccordionContent>
            <AccordionContent className="px-4">
              &#x2022; Fungsi LPP pada kegiatan Layanan Urun Dana antara lain:{" "}
              <ul className="px-4">
                <li>- Mengadministrasikan efek yang ditawarkan Penerbit</li>
                <li>
                  {" "}
                  - Menyelesaikan transaksi efek setelah terjadi pembelian oleh
                  Pemodal{" "}
                </li>
                <li>
                  {" "}
                  - Mendistribusikan efek yang telah dibeli untuk dapat disimpan
                  di rekening efek milik Pemodal yang ada Bank Kustodian
                </li>
              </ul>{" "}
            </AccordionContent>
            <AccordionContent className="px-4">
              &#x2022; LPP dalam Layanan Urun Dana ini menggunakan Kustodian
              Sentral Efek Indonesia (KSEI).
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>
      <TabsContent value="pemodal">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="my-4">
            <AccordionTrigger className="font-semibold">
              Apa itu Pemodal?
            </AccordionTrigger>
            <AccordionContent className="px-4">
              Pemodal adalah pihak yang melakukan pembelian Efek Penerbit
              melalui Layanan Urun Dana.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="my-4">
            <AccordionTrigger className="font-semibold">
              Bagaimana cara berinvestasi di Fulusme?
            </AccordionTrigger>
            <AccordionContent className="px-4">
              Untuk berinvestasi, langkah pertama Anda harus memiliki akun di
              Fulusme. Berikut tata cara pembuatan Akun Pemodal :
            </AccordionContent>
            <AccordionContent className="px-4">
              <ul className="list-disc px-4">
                <li>
                  Daftarkan diri Anda pada{" "}
                  <a href="/daftar" className="underline">
                    tautan
                  </a>{" "}
                  berikut.
                </li>
                <li>
                  Masukkan data diri anda, email, dan nomor ponsel yang anda
                  pakai
                </li>
                <li>
                  Setelah memasukkan nomor ponsel pada langkah pertama, anda
                  akan diminta memasukkan kode OTP yang dikirimkan ke nomor
                  ponsel anda
                </li>
                <li>Kemudian masukkan kata sandi yang ingin anda gunakan</li>
                <li>
                  Anda harus membaca dan menyetujui syarat dan ketentuan kami
                  sebelum mendaftarkan diri. Kemudian akan dikirimkan email
                  verifikasi pada email yang anda masukkan
                </li>
                <li>
                  Verifikasi email dan kemudian masuk menggunakan Email dan kata
                  sandi anda.
                </li>
                <li>
                  Langkah berikutnya adalah proses KYC yang berada di posisi
                  sebelah kiri Dashboard, dimana Anda harus mengisi semua
                  tahapan dan pertanyaan yang ada. Setelah Anda mengisi semua
                  data pada proses KYC, maka akan dilakukan verifikasi data oleh
                  tim Fulusme yang memerlukan waktu 2x24 jam di hari kerja.
                </li>
                <li>
                  Anda akan menerima pemberitahuan via email terkait status
                  verifikasi data Anda. Jika data Anda sudah terverifikasi, maka
                  Anda dapat mulai berinvestasi di Fulusme.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="my-4">
            <AccordionTrigger className="font-semibold">
              Apa yang dimaksud dengan Prospektus?
            </AccordionTrigger>
            <AccordionContent className="px-4">
              Prospektus adalah seluruh informasi penting dan relevan mengenai
              penawaran investasi yang ditawarkan Penerbit untuk membantu
              Pemodal dalam membuat keputusan investasi.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>
      <TabsContent value="penerbit">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="my-4">
            <AccordionTrigger className="font-semibold">
              Apa itu Penerbit?
            </AccordionTrigger>
            <AccordionContent className="px-4">
              Penerbit adalah badan usaha Indonesia baik berbentuk badan hukum
              maupun badan usaha lainnya yang menerbitkan Efek melalui Layanan
              Urun Dana.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="my-4">
            <AccordionTrigger className="font-semibold">
              Bagaimana jika masa penawaran (45 Hari) berakhir namun pendanaan
              belum terkumpul?
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <ul className="list-disc px-4">
                <li>
                  {" "}
                  TIDAK ada masa penambahan jangka waktu penawaran sesuai dengan
                  POJK Nomor 57/2020.
                </li>
                <li>
                  Jika penghimpunan dana tidak mencapai batas minimum pendanaan
                  yang telah disepakati, maka proses kerjasama batal demi hukum
                  dan dana investasi akan dikembalikan 100% kepada Pemodal.
                </li>
                <li>
                  Jika penghimpunan dana telah mencapai batas minimum pendanaan
                  yang telah disepakati, maka kerjasama akan tetap dilanjutkan
                  sesuai minimum pendanaan yang terkumpul
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>
    </Tabs>
  );
};

export default TabsQuestions;

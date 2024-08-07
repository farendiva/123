import Link from "next/link";
import TabsQuestions from "../components/TabsQuestions";
import { getListing } from "@/lib/listing";
import ListingCard from "../components/ListingCard";

const statusToTypeMap = {
  "Segera Dibuka": 1,
  Penawaran: 2,
  "Pendanaan Terpenuhi": 3,
  "Proses Administrasi": 4,
  "Penyerahan Dana": 5,
  "Distribusi Efek": 6,
  Selesai: 7,
};

type StatusType = keyof typeof statusToTypeMap;

interface Project {
  status_kampanye: StatusType;
  penerbit_id: number;
  kode_penerbit: string;
  jenis_efek: string;
  nama_efek: string;
  nama_proyek: string;
  tentang_proyek: string | null;
  dasar_penerbitan: string;
  nilai_proyek: number;
  nilai_modal: number;
  nilai_pendanaan: number;
  minimal_pendanaan: number;
  periode_penawaran_efek: number;
  porsi_modal_pemodal: number | null;
  porsi_modal_penerbit: number | null;
  proyeksi_bagi_hasil_min: number | null;
  proyeksi_bagi_hasil_max: number | null;
  skema_pembayaran: string;
  pihak_terlibat: string;
  minimal_investasi: number;
  jumlah_unit_yang_ditawarkan: number;
  tenor_dividen: number;
  satuan_pemindahan_buku: number;
  denda_keterlambatan: string | null;
  jaminan: string | null;
  monitoring_pembayaran: string;
  akad: number;
  bidang_usaha: number;
  total_pendanaan: number;
  nama_file: string;
  nama_penerbit: string;
  // status_kampanye: string;
  idlisting: number;
}

export default async function Home() {
  const listing = await getListing();

  return (
    <main className="w-full ">
      {/* HERO SECTION */}
      <div className="w-full absolute top-0">
        <img
          className="w-full max-w-[1800px] hidden lg:block relative rounded-b-5xl -z-50"
          src="/images/cover.png"
          alt="Background image Cover"
        />
        <div className="absolute inset-0 max-w-[1800px] bg-custom-gradient rounded-b-5xl z-10"></div>
      </div>
      {/* HERO GRADIENT */}
      <div className="block lg:hidden absolute inset-0 bg-custom-gradient z-10"></div>
      <section className="w-4/5 lg:w-11/12 mx-auto mb-52 md:mb-24 lg:mb-32 2xl:mb-60 py-8 md:py-16 xl:py-24 flex flex-col lg:flex-row justify-between items-center gap-12 md:gap-24 lg:gap-32">
        <section className="w-full lg:w-1/2 text-white space-y-6 lg:space-y-3 z-20 ">
          <section className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Selamat Datang di Fulusme</h1>
            <p className="text-base text-justify lg:text-left font-normal">
              Selamat datang di Jaman Now. Dimana Kecepatan dan instan sudah
              menjadi keseharian kita. Dimana Berinvestasi dan usaha tidak lagi
              dibatasi ruang dan waktu. Saatnya bergabung bersama Fulusme.
            </p>
          </section>

          <section className="w-full flex justify-center lg:justify-start gap-4">
            <img
              className="z-20 "
              src="/images/ojk_white.png"
              alt="Otoritas Jasa Keuangan Logo"
            />
            <img
              className="z-20 "
              src="/images/iso-badge.png"
              alt="InfoSec Management ISO 2013 Badge"
            />
          </section>
        </section>
        <section className="w-11/12 lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2 lg:gap-16 z-20 mb-0 lg:mb-20  text-white">
          <section className="flex items-center gap-16 lg:gap-2">
            <img
              className="w-[24px] h-[24px]"
              src="/icons/people.svg"
              alt="People Icon"
            />
            <section className="">
              <h3 className="">Dana Tersalurkan</h3>
              <h4 className="text-base lg:text-2xl font-bold">
                Rp 902.050.000
              </h4>
            </section>
          </section>
          <section className="flex items-center gap-16 lg:gap-2">
            <img src="/icons/check.svg" alt="Check Icon" />
            <section className="">
              <h3 className="">Investor Aktif</h3>
              <h4 className="text-base lg:text-2xl font-bold">50</h4>
            </section>
          </section>
          <section className="flex items-center gap-16 lg:gap-2">
            <img src="/icons/undo.svg" alt="Undo Icon" />
            <section className="">
              <h3 className="">Pengembalian Dana</h3>
              <h4 className="text-base lg:text-2xl font-bold">
                {" "}
                Rp 180.410.000
              </h4>
            </section>
          </section>
          <section className="flex items-center gap-16 lg:gap-2">
            <img src="/icons/stats.svg" alt="Stats Icon" />
            <section className="">
              <h3 className="">Rata-rata Realisasi ROI</h3>
              <h4 className="text-base lg:text-2xl font-bold">20%</h4>
            </section>
          </section>
        </section>
      </section>

      {/* TEXT DIBAWAH HERO  */}
      <section className="space-y-4 text-center">
        <section className="w-11/12 lg:w-1/2 mx-auto ">
          <h4 className="text-xl lg:text-3xl font-bold">
            Investasi Proyek Yang Sedang Berjalan
          </h4>
          <p className="text-base lg:text-xl mx-auto my-4">
            Lihat daftar investasi bisnis terbaru yang sedang berlangsung dan
            temukan peluang untuk berinvestasi hari ini.
          </p>
        </section>
      </section>
      <section className="w-11/12 mx-auto flex flex-col justify-center items-center gap-y-8 md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 2xl:gap-0 lg:gap-y-0 my-8">
        {listing.length > 0 ? (
          listing
            .slice(0, 4)
            .map((listing: Project, index: number) => (
              <ListingCard key={index} project={listing} />
            ))
        ) : (
          <p>Bisnis tidak ada</p>
        )}
      </section>
      <section className="flex justify-center items-center mx-auto my-16">
        <Link
          href="/daftar-bisnis"
          className="bg-sky hover:bg-sky-dark text-base lg:text-xl font-bold px-6 py-2 text-white rounded-4xl"
        >
          Lihat Proyek Selengkapnya
        </Link>
      </section>
      <section className="w-4/5 lg:w-11/12 mx-auto my-24 flex flex-col lg:flex-row justify-around gap-8 lg:gap-28">
        <h1 className="w-3/4 mx-auto lg:w-1/3 text-2xl lg:text-4xl font-bold text-center lg:text-right">
          Apa itu Securities <span className="text-emerald-light">Crowd</span>{" "}
          <span className="text-sky">Funding?</span>
        </h1>
        <p className="w-full lg:w-2/3 text-base lg:text-xl text-[#767676] ">
          <span className="font-bold">Securities Crowd Funding</span> merupakan
          langkah mudah bagi Pemodal untuk memiliki bisnis dengan cara cepat dan
          di jalankan oleh praktisi yang berpengalaman di bidangnya, tanpa harus
          repot membangun bisnis baru.
        </p>
      </section>
      <section className="w-4/5 lg:w-3/4 mx-auto mt-20 mb-8 lg:mb-0 lg:mt-32 flex gap-4 lg:gap-0 flex-col-reverse lg:flex-row justify-center items-center">
        <section className="space-y-4 lg:space-y-16">
          <h1 className="w-4/5 text-2xl lg:text-3xl xl:text-4xl text-center mx-auto leading-normal">
            Kemudahan Investasi Dalam{" "}
            <span className="text-emerald-light">Genggaman</span>
          </h1>
          <section className="flex flex-row scale-50 md:scale-75 lg:scale-100 lg:flex-col xl:flex-row justify-center items-center gap-4">
            <img src="/icons/app_store.svg" alt="App store Download Link" />
            <img src="/icons/play_store.svg" alt="Play Store Download Link" />
          </section>
        </section>
        <img
          src="/images/preview.png"
          alt="Fulusme Aplikasi Preview"
          className="h-full block lg:hidden"
        />
        <img
          src="/images/preview.png"
          alt="Fulusme Aplikasi Preview"
          className="h-full hidden lg:block"
        />
      </section>
      <section className="w-full bg-[#f8f8ff]">
        <section className="w-4/5 mx-auto py-24 gap-16 flex justify-between">
          <ul className="list-disc hidden lg:block w-2/3 text-xl text-justify lowercase">
            <li>
              OTORITAS JASA KEUANGAN TIDAK MEMBERIKAN PERNYATAAN MENYETUJUI ATAU
              TIDAK MENYETUJUI EFEK INI, TIDAK JUGA MENYATAKAN KEBENARAN ATAU
              KECUKUPAN INFORMASI DALAM LAYANAN URUN DANA INI. SETIAP PERNYATAAN
              YANG BERTENTANGAN DENGAN HAL TERSEBUT ADALAH PERBUATAN MELANGGAR
              HUKUM
            </li>
            <li>
              INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU MENDAPAT
              PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA TINDAKAN YANG
              AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN PENYELENGGARA.
            </li>
            <li>
              PENERBIT DAN PENYELENGGARA, BAIK SENDIRI-SENDIRI MAUPUN
              BERSAMA-SAMA, BERTANGGUNG JAWAB SEPENUHNYA ATAS KEBENARAN SEMUA
              INFORMASI YANG TERCANTUM DALAM LAYANAN URUN DANA INI.
            </li>
          </ul>
          <section className="w-full flex flex-col justify-center items-center  lg:w-1/3 mt-8">
            <h2 className="text-xl md:text-2xl font-bold">
              BERIZIN DAN DIAWASI OLEH
            </h2>
            <img src="/images/ojk.png" alt="Otoritas Jasa Keuangan Logo" />
          </section>
        </section>
      </section>
      <TabsQuestions />
      <section className="flex justify-center items-center mx-auto my-16 ">
        <button className="bg-emerald-light hover:bg-green-700 text-base lg:text-xl font-bold px-6 py-2 text-white rounded-4xl">
          Baca Lebih Lanjut
        </button>
      </section>
      <div className="bg-[#d3d3d3] h-[1px]"></div>
      <section className="w-4/5 lg:w-3/4 mx-auto my-16">
        <h4 className="text-xl lg:text-2xl font-bold mx-auto mt-12 mb-16 text-center">
          DISCLAIMER
        </h4>
        <section className="flex flex-col gap-4 h-72 lg:h-128 overflow-scroll space-y-2 text-justify">
          <p>
            PT Fintek Andalan Solusi Teknologi (“Fulusme”) adalah Penyelenggara
            Layanan Urun Dana melalui Penawaran Efek Berbasis Teknologi
            Informasi (Securities Crowdfunding) sebagaimana tunduk pada
            ketentuan Peraturan Otoritas Jasa Keuangan NOMOR 57/POJK.04/2020
            tentang Penawaran Efek Melalui Layanan Urun Dana Berbasis Teknologi
            Informasi atau Securities Crowdfunding (“POJK 57/2020”), yang telah
            berizin dan diawasi OJK, kami menyatakan bahwa :
          </p>
          <p>
            “OTORITAS JASA KEUANGAN TIDAK MEMBERIKAN PERNYATAAN MENYETUJUI ATAU
            TIDAK MENYETUJUI EFEK INI, TIDAK JUGA MENYATAKAN KEBENARAN ATAU
            KECUKUPAN INFORMASI DALAM LAYANAN URUN DANA INI. SETIAP PERNYATAAN
            YANG BERTENTANGAN DENGAN HAL TERSEBUT ADALAH PERBUATAN MELANGGAR
            HUKUM”;
          </p>
          <p>
            “INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU MENDAPAT
            PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA TINDAKAN YANG AKAN
            DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN PENYELENGGARA.”; dan
          </p>
          <p>
            PENERBIT DAN PENYELENGGARA, BAIK SENDIRI-SENDIRI MAUPUN
            BERSAMA-SAMA, BERTANGGUNG JAWAB SEPENUHNYA ATAS KEBENARAN SEMUA
            INFORMASI YANG TERCANTUM DALAM LAYANAN URUN DANA INI
          </p>
          <ul className="space-y-2">
            <li className="space-y-2">
              <p>
                1. Anda perlu mempertimbangkan dengan cermat, teliti dan seksama
                setiap investasi bisnis yang akan Anda lakukan di Fulusme,
                berdasarkan pengetahuan, keilmuan serta pengalaman yang Anda
                miliki dalam hal keuangan dan bisnis. Dibutuhkan
                kajian/penelaahan laporan keuangan, target tujuan investasi,
                kemampuan analisis, serta pertimbangan risiko yang akan Anda
                ambil.
              </p>
              <p>
                Anda menyadari bahwa setiap bisnis pasti memiliki risikonya
                masing-masing. Untuk itu, dengan berinvestasi melalui Fulusme,
                Anda sudah mengerti akan segala resiko yang dapat terjadi di
                kemudian hari, seperti penurunan performa bisnis, hingga
                kebangkrutan dari bisnis yang anda investasikan tersebut.
              </p>
              <p>
                <span className="font-bold">
                  Fulusme TIDAK BERTANGGUNG JAWAB terhadap risiko kerugian dan
                  gugatan hukum serta segala bentuk risiko lain yang timbul
                  dikemudian hari atas hasil investasi bisnis yang anda tentukan
                  sendiri saat ini.
                </span>{" "}
                Beberapa risiko yang dapat terjadi saat Anda berinvestasi yaitu
                :
              </p>
              <p className="font-bold">Risiko Usaha</p>
              <p>
                Risiko adalah suatu hal yang tidak dapat dihindari dalam suatu
                usaha/bisnis. Beberapa risiko bisa terjadi karena berubahnya
                permintaan pasar dan proyeksi keuangan bisnis bisa saja tidak
                sesuai dengan proposal bisnis ketika dijalankan
              </p>
              <p className="font-bold">Kerugian Investasi </p>
              <p>
                Setiap investasi memiliki tingkat risiko yang bervariasi seperti
                tidak terkumpulnya dana investasi yang dibutuhkan selama proses
                pengumpulan dana atau proyek yang dijalankan tidak menghasilkan
                keuntungan sesuai yang diharapkan.
              </p>
              <p className="font-bold">Kekurangan Likuiditas</p>
              <p>
                Investasi Anda di suatu Penerbit, mungkin saja tidak likuid dan
                tidak mudah dijual kembali karena Efek yang ditawarkan tidak
                terdaftar di bursa umum secara publik. Ini berarti bahwa Anda
                mungkin tidak dapat dengan mudah menjual Efek Anda di bisnis
                tertentu atau Anda mungkin tidak dapat menemukan pembeli sebelum
                berakhirnya jangka waktu investasi di pasar sekunder.
              </p>
              <p className="font-bold">Kelangkaan Pembagian Dividen</p>
              <p>
                Setiap Pemodal yang ikut berinvestasi berhak untuk mendapatkan
                dividen sesuai dengan jumlah kepemilikan Efek. Dividen (imbal
                hasil) ini akan diberikan oleh Penerbit dengan jadwal pembagian
                yang telah disepakati di awal dan dapat dicek di detail bisnis.
                Kelangkaan pembagian dividen bahkan gagal bayar dapat terjadi
                karena kinerja bisnis yang Anda investasikan bisa jadi kurang
                berjalan dengan baik.
              </p>
              <p className="font-bold">Dilusi Kepemilikan Efek</p>
              <p>
                Dilusi kepemilikan Efek adalah penurunan persentase kepemilikan
                Efek yang terjadi karena bertambahnya total jumlah Efek yang
                beredar, dimana Investor yang bersangkutan tidak ikut membeli
                Efek yang baru diterbitkan tersebut. Penerbit dapat menerbitkan
                Efek baru jika jumlah penawaran yang diajukan masih dibawah
                batas maksimum. Jika Penerbit mengadakan urun dana lagi dan
                terjadi penerbitan Efek baru, maka Fulusme akan membuka bisnis
                tersebut di website Fulusme.id dan menginformasikan kepada semua
                pemegang Efek.
              </p>
              <p className="font-bold">Perubahan Status Efek Syariah</p>
              <p>
                Risiko yang timbul adanya Penerbit melanggar atau tidak lagi
                memenuhi kriteria Efek Syariah. Penerbit yang listing di
                platform Vestora sudah melalui proses screening dari tim analis
                bisnis Vestora. Penerbit yang dipilih berdasarkan rekam jejak
                bisnis yang baik dan memenuhi standar dalam kesesuaian kriteria
                prinsip syariah yang diputuskan dalam persetujuan akhir oleh
                Dewan Pengawas Syariah. Dalam hal ini Vestora sebagai
                penyelenggara akan memonitoring kepada Penerbit secara berkala.
              </p>
              <p className="font-bold">Kegagalan Sistem Elektronik</p>
              <p>
                Fulusme telah menerapkan sistem teknologi informasi dan keamanan
                data yang handal. Namun bagaimanapun juga tetap memungkinkan
                jika terjadi gangguan sistem teknologi informasi dan kegagalan
                sistem, jika ini terjadi maka akan menyebabkan aktivitas bisnis
                Anda di platform Fulusme menjadi tertunda.
              </p>
            </li>
            <li>
              2. Semua materi terkait pilihan investasi yang tercantum dalam
              situs ini sebatas informasi dan tidak dapat dianggap sebagai
              nasihat, dukungan, ataupun rekomendasi investasi. Perusahaan
              sebagai penyedia layanan urun dana hanya terbatas pada fungsi
              administratif. Pemodal harus sepenuhnya menyadari adanya risiko
              kelangkaan pembayaran dividen di kemudian hari dan risiko-risiko
              lainnya
            </li>
            <li>
              3. Penyelenggara dengan persetujuan dari masing-masing Pengguna
              (Pemodal dan / atau Penerbit) mengakses, memperoleh, menyimpan,
              mengelola, dan / atau menggunakan data pribadi Pengguna
              (&quot;Pemanfaatan Data&quot;) pada atau di dalam benda, perangkat
              elektronik (termasuk smartphone atau telepon seluler), perangkat
              keras (hardware) maupun lunak (software), dokumen elektronik,
              aplikasi atau sistem elektronik milik Pengguna atau yang dikuasai
              Pengguna, dengan memberitahukan tujuan, batasan, dan mekanisme
              Pemanfaatan Data tersebut kepada Pengguna yang bersangkutan
              sebelum memperoleh persetujuan yang dimaksud sesuai kebutuhan
              layanan urun dana
            </li>
            <li>
              4. Fulusme tidak memaksa pengguna membeli Efek yang sedang
              ditawarkan. Semua keputusan transaksi jual beli Efek merupakan
              keputusan pribadi konsumen.
            </li>
            <li>
              5. Fulusme bertindak sebagai Penyelenggara Layanan Urun Dana,
              bukan sebagai pihak yang menjalankan kegiatan usaha atau proyek
              Penerbit. Otoritas Jasa Keuangan bertindak sebagai regulator dan
              pemberi izin, pengawas Penyelenggara, bukan sebagai penjamin
              investasi.
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}

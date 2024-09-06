"use client";

import { X } from "lucide-react";
import React, { ChangeEvent, useState } from "react";

interface Profile {
  nama_depan: string;
  nama_belakang: string;
  jenis_kelamin: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  no_handphone: string;
  no_ktp: string;
  no_npwp: string | null;
  no_sid: string | null;
  agama: string;
  kewarganegaraan: string;
  alamat_ktp: string;
  kelurahan_ktp: string | null;
  kecamatan_ktp: string | null;
  kabupaten_ktp: string | null;
  provinsi_ktp: string | null;
  alamat_domisili: string | null;
  kelurahan_domisili: string | null;
  kecamatan_domisili: string | null;
  kabupaten_domisili: string | null;
  provinsi_domisili: string | null;
  pendidikan: string;
  pekerjaan: string;
  industri_pekerjaan: string;
  pendapatan: number;
  sumber_pendapatan: string;
  status_id: number;
  status: string;
  nomor_rekening: string;
  nama_pemilik_rekening: string;
  nama_bank: string | null;
  kabupaten_cabang_bank: string | null;
  ktp: string;
  npwp: string;
  swa_photo: string;
  slip_gaji: string;
  kartu_keluarga: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  user_type: string;
  pemodal_id: number;
  pemodal_status: number;
  pemodal_status_description: string;
  profile: Profile;
}

type Props = {
  toggleModal: () => void;
  handleSubmit: () => void;
  user: User;
};

const PurchaseModal = ({ toggleModal, handleSubmit, user }: Props) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const tanggalLahir = user.profile.tanggal_lahir;
  const date = new Date();
  const dateTanggalLahir = new Date(tanggalLahir);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  const formattedTanggalLahir = dateTanggalLahir.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg space-y-4 w-4/5 lg:w-2/5 h-128 overflow-auto">
        <div className="flex justify-end items-center">
          <button
            onClick={toggleModal}
            className="hover:bg-gray-200 rounded-full p-2"
          >
            <X size={20} />
          </button>
        </div>
        {/* <div className="space-y-4 text-sm p-4 text-justify">
          <p className="text-base font-bold text-center mx-auto">
            PERJANJIAN PENYELENGGARAAN PENAWARAN EFEK MELALUI LAYANAN URUN DANA
            BERBASIS TEKNOLOGI INFORMASI <br />
            ANTARA <br />
            PT FINTEK ANDALAN SOLUSI TEKNOLOGI (“FULUSME”) <br />
            DAN <br />
            PEMODAL
          </p>
          <p>
            Perjanjian Penyelenggaraan Layanan Urun Dana antara PT Fintek
            Andalan Solusi Teknologi dan Pemodal (untuk selanjutnya disebut
            “Perjanjian”) ini dibuat pada hari ini tanggal {formattedDate}, oleh
            dan antara :
          </p>
          <ul className="space-y-2">
            <li>
              1){" "}
              <span className="font-bold">
                PT FINTEK ANDALAN SOLUSI TEKNOLOGI
              </span>{" "}
              (dikenal dengan nama
              <span className="font-bold"> FULUSME</span>), suatu perseroan
              terbatas yang didirikan dan tunduk pada ketentuan hukum dan
              peraturan perundang-undangan Negara Kesatuan Republik Indonesia,
              berdasarkan Akta Pendirian Nomor “01”tanggal “01 April 2019” yang
              dibuat dihadapan “Hambit Maseh”, S.H, Notaris di Jakarta, Akta
              Pendirian tersebut telah memperoleh pengesahan dari Kementerian
              Hukum dan Hak Asasi Manusia Republik Indonesia sebagaimana
              tertuang dalam Surat Keputusan Nomor “AHU-0018084.AH.01.01 Tahun
              2019” tertanggal “05” April “2019”. Akta Pendirian tersebut telah
              diubah terakhir dengan Akta Nomor “33” Tanggal 20 Juli 2023“ yang
              dibuat dihadapan “Emmyra Fauzia Kariana, S.H., M.Kn”, Notaris di
              “Jakarta” dan telah memperoleh pengesahan dari Kementerian Hukum
              dan Hak Asasi Manusia Republik Indonesia sebagaimana tertuang
              dalam Surat Keputusan Nomor “AHU-0140760.AH.01.01 Tahun 2023”
              Tahun 2023 tertanggal “25” Juli “2023”, yang dalam hal ini
              diwakili oleh <span className="font-bold">EMIL EDHIE DHARMA</span>
              , bertindak dalam kedudukannya selaku{" "}
              <span className="font-bold">DIREKTUR UTAMA</span> PT Fintek
              Andalan Solusi Teknologi (Fulusme) dan karenanya berhak bertindak
              untuk dan atas nama perseroan tersebut, untuk selanjutnya disebut
              &quot;<span className="font-bold">Penyelenggara</span>&quot;{" "}
            </li>
            <li>
              2) <span className="font-bold">{user.name}</span> <br /> tanggal
              lahir
              <span className="font-bold"> {formattedTanggalLahir}</span>{" "}
              bertempat tinggal di{" "}
              <span className="font-bold">{user.profile.alamat_domisili}</span>,
              Kelurahan{" "}
              <span className="font-bold">
                {user.profile.kelurahan_domisili}
              </span>
              , Kecamatan{" "}
              <span className="font-bold">
                {user.profile.kecamatan_domisili}
              </span>
              , Kotamadya/Kabupaten{" "}
              <span className="font-bold">
                {user.profile.kabupaten_domisili}
              </span>
              , Provinsi{" "}
              <span className="font-bold">
                {user.profile.provinsi_domisili}
              </span>
              , Pemegang Kartu Tanda Penduduk Elektronik dengan Nomor Induk
              Kependudukan:{" "}
              <span className="font-bold">{user.profile.no_ktp}</span>, untuk
              selanjutnya disebut “Pemodal”.
            </li>
          </ul>
          <p>
            Penyelenggara dan Pemodal untuk selanjutnya secara bersama-sama
            disebut sebagai <span className="font-bold">“Para Pihak”.</span>{" "}
            Para Pihak terlebih dahulu menerangkan hal-hal sebagai berikut :
          </p>
          <ul className="space-y-2">
            <li>
              a) <span className="font-bold">Penyelenggara</span> adalah suatu
              perusahaan yang bergerak dalam bidang penyelenggaraan layanan urun
              dana melalui penawaran saham berbasis teknologi informasi, yang
              beroperasi berdasarkan Keputusan Anggota Dewan Komisioner Otoritas
              Jasa Keuangan Republik Indonesia No.KEP-45/D.04/2022 tentang
              Pemberian Izin Usaha Penyelenggara Penawaran Efek Melalui Layanan
              Urun Dana Berbasis Teknologi Informasi (Securities Crowdfunding)
              <span className="font-bold">
                PT. Fintek Andalan Solusi Teknologi (Fulusme);
              </span>
            </li>
            <li>
              b) <span className="font-bold">Pemodal</span> adalah pihak yang
              melakukan pembelian efek Penerbit pada layanan urun dana melalui
              penawaran efek berbasis teknologi informasi (securities
              crowdfunding) yang diselenggarakan oleh Penyelenggara.
            </li>
          </ul>
          <p>
            Selanjutnya, berdasarkan hal-hal tersebut di atas, Para Pihak dengan
            ini menyatakan setuju untuk mengikatkan diri dalam Perjanjian ini
            sesuai dengan syarat-syarat dan ketentuan-ketentuan sebagai berikut:
          </p>
          <p className="text-center font-bold">
            PASAL 1 <br /> DEFINISI
          </p>
          <p>
            Kecuali ditentukan lain dalam perjanjian ini, setiap kata maupun
            kata-kata yang berawalan huruf kapital (huruf besar), akan memiliki
            arti, pengertian dan penafsiran sebagai berikut:
          </p>
          <ul className="space-y-2">
            <li>
              1.1 <span className="font-bold">Biaya Layanan</span> (Platform
              Fee) adalah biaya yang dikenakan oleh Penyelenggara kepada
              Pemodal, atas penggunaan layanan urun dana berbasis teknologi
              informasi, yang akan dikenakan pada saat melakukan setoran efek
              yang dikeluarkan oleh Penerbit.
            </li>
            <li>
              1.2 <span className="font-bold">Bank Kustodian</span> adalah bank
              umum yang telah memperoleh persetujuan Otoritas Jasa Keuangan
              untuk melakukan kegiatan usaha sebagai kustodian.{" "}
            </li>
            <li>
              1.3 <span className="font-bold">C-Best</span> adalah The Central
              Depository and Book Entry Settlement System, atau platform
              elektronik terpadu yang mendukung aktivitas penyelesaian transaksi
              efek secara pemindahbukuan.
            </li>
            <li>
              1.4 <span className="font-bold">Dokumen Elektronik</span> adalah
              setiap informasi elektronik yang dibuat, diteruskan, dikirimkan,
              diterima, atau disimpan dalam bentuk analog, digital,
              elektromagnetik, optikal, atau sejenisnya, yang dapat dilihat,
              ditampilkan, dan/atau didengar melalui komputer atau Sistem
              Elektronik termasuk tetapi tidak terbatas pada tulisan, suara,
              gambar, peta rancangan, foto atau sejenisnya, huruf, tanda, angka,
              kode akses, simbol, yang memiliki makna atau arti atau dapat
              dipahami oleh orang yang mampu memahaminya.
            </li>
            <li>
              1.5 <span className="font-bold">EBITDA</span> adalah Earning
              Before Interest, Taxes, Depreciation, and Amortization atau
              pendapatan sebelum bunga, pajak, dan amortisasi.{" "}
            </li>
            <li>
              1.6 <span className="font-bold">Efek</span> adalah surat berharga,
              yaitu surat pengakuan utang, surat berharga komersial, saham,
              obligasi, tanda bukti utang, unit penyertaan kontrak investasi
              kolektif, kontrak berjangka atas Efek, Obligasi, dan setiap
              derivatif dari Efek.
            </li>
            <li>
              1.7 <span className="font-bold">Hari Kalender</span> adalah hari
              senin sampai dengan hari minggu yang merupakan hari-hari
              berdasarkan perhitungan kalender tahun masehi.
            </li>
            <li>
              1.8 <span className="font-bold">Hari Kerja</span> adalah hari-hari
              selain hari sabtu, minggu, libur nasional (tanggal merah) serta
              hari-hari dimana badan pemerintahan dan perbankan nasional
              melakukan kegiatan aktivitasnya.
            </li>
            <li>
              1.9 <span className="font-bold">Informasi Rahasia</span> adalah
              sebagaimana dimaksud dalam Pasal 13 Perjanjian ini.
            </li>
            <li>
              1.10{" "}
              <span className="font-bold">
                Konfirmasi Tertulis untuk Rapat (KTUR)
              </span>{" "}
              adalah dokumen yang berisikan informasi mengenai nama pemilik
              saham, nomor identitas, alamat, jumlah saham, tanggal pencatatan
              serta waktu dan tempat pelaksanaan RUPS, yang dibutuhkan sebagai
              syarat Pemodal untuk ikut menghadiri Rapat Umum Pemegang Saham
              (RUPS).
            </li>
            <li>
              1.11 <span className="font-bold">Kuasa Pemodal</span> adalah pihak
              yang mewakili kepentingan pemegang sukuk, berfungsi sebagai agen
              pemantau yang telah diberikan kuasa oleh Pemodal berdasarkan
              Perjanjian ini dan telah ditunjuk oleh Penerbit.{" "}
            </li>
            <li>
              1.12{" "}
              <span className="font-bold">
                Lembaga Penyimpanan dan Penyelesaian
              </span>{" "}
              adalah pihak yang menyelenggarakan kegiatan kustodian sentral bagi
              bank kustodian, perusahaan efek, dan pihak lain.
            </li>
            <li>
              1.13 <span className="font-bold">Management Fee</span> adalah
              biaya sebagaimana dimaksud pasal 7 ayat 2 Perjanjian ini.
            </li>
            <li>
              1.14{" "}
              <span className="font-bold">Penyelenggara Layanan Urun Dana</span>{" "}
              yang selanjutnya disebut Penyelenggara adalah badan hukum
              Indonesia yang menyediakan, mengelola, dan mengoperasikan Layanan
              Urun Dana melalui platform Fulusme.
            </li>
            <li>
              1.15 <span className="font-bold">Pengguna Layanan Urun Dana</span>{" "}
              yang selanjutnya disebut Pengguna adalah Penerbit dan Pemodal.
            </li>
            <li>
              1.16 <span className="font-bold">Penerbit</span> adalah badan
              usaha Indonesia baik yang berbentuk perseroan terbatas maupun
              badan usaha lainnya yang menerbitkan efek melalui Penyelenggara
              securities crowdfunding.
            </li>
            <li>
              1.17 <span className="font-bold">Pemodal</span> adalah pihak yang
              melakukan pembelian Efek Penerbit melalui Layanan Urun Dana, baik
              perseorangan atau badan hukum.
            </li>
            <li>
              1.18 <span className="font-bold">Proyek</span> adalah kegiatan
              atau pekerjaan yang menghasilkan barang, jasa, dan/atau manfaat
              lain, baik yang sudah ada maupun yang akan ada, termasuk kegiatan
              investasi yang telah ditentukan yang akan menjadi dasar penerbitan
              atas Efek bersifat utang atau Obligasi.
            </li>
            <li>
              1.19{" "}
              <span className="font-bold">
                Rapat Umum Pemegang Saham (RUPS)
              </span>{" "}
              adalah Rapat Umum Pemegang Saham, baik Tahunan maupun Luar Biasa.
            </li>
            <li>
              1.20 <span className="font-bold">RUPO</span> adalah Rapat Umum
              Pemegang Obligasi;
            </li>
            <li>
              1.21 <span className="font-bold">Obligasi</span> adalah Efek
              berupa sertifikat atau bukti kepemilikan yang bernilai sama dan
              mewakili bagian yang tidak terpisahkan atas aset yang
              mendasarinya.
            </li>
            <li>
              1.22 <span className="font-bold">Sistem Elektronik</span> adalah
              serangkaian perangkat dan prosedur elektronik yang berfungsi
              mempersiapkan, mengumpulkan, mengolah, menganalisis, menyimpan,
              menampilkan, mengumumkan, mengirimkan, dan/atau menyebarkan
              informasi elektronik di bidang layanan jasa keuangan.
            </li>
            <li>
              1.23 <span className="font-bold">Tanda Tangan Elektronik</span>{" "}
              adalah tanda tangan yang terdiri atas sistem informasi elektronik
              yang dilekatkan, terasosiasi atau terkait dengan informasi
              elektronik lainnya yang digunakan sebagai alat verifikasi dan
              autentikasi;
            </li>
            <li>
              1.24{" "}
              <span className="font-bold">
                Layanan Administrasi Prinsip Mengenali Nasabah
              </span>{" "}
              atau selanjutnya disebut <span className="font-bold">LAPMN</span>{" "}
              adalah layanan penyimpanan data dan dokumen calon nasabah dan/atau
              nasabah pengguna LAPMN yang tersentralisasi untuk dapat digunakan
              dalam mendukung pelaksanaan kegiatan customer due diligence
              dan/atau enhanced due diligence oleh Pengguna LAPMN sebagaimana
              dimaksud dalam Pasal 1 Angka 2 Peraturan Otoritas Jasa Keuangan
              Nomor 15 Tahun 2023 tentang Penyelenggaraan Layanan Administrasi
              Prinsip Mengenali Nasabah.
            </li>
          </ul>
          <p className="text-center font-bold">
            PASAL 2<br /> MAKSUD DAN TUJUAN
          </p>
          <p>
            Perjanjian ini dimaksudkan oleh Para Pihak sebagai dasar-dasar
            kerjasama dalam penyelenggaraan layanan urun dana berbasis teknologi
            informasi yang bertujuan untuk memudahkan Pemodal dalam melakukan
            investasi pada efek yang ditawarkan oleh Penerbit melalui layanan
            yang diselenggarakan/disediakan oleh Penyelenggara.
          </p>
          <p className="text-center font-bold">
            PASAL 3 <br /> JANGKA WAKTU PERJANJIAN
          </p>
          <p>
            Jangka waktu Perjanjian ini berlaku efektif terhitung sejak Pemodal
            menandatangani Perjanjian ini secara elektronik (digital signature)
            pada bagian akhir dari Perjanjian ini, sampai dengan Pemodal
            melakukan penjualan dan/atau dengan cara apapun melakukan pengalihan
            atas efek miliknya kepada pihak ketiga lainnya, sehingga Pemodal
            tidak lagi memiliki efek pada Penerbit manapun yang menggunakan
            layanan urun dana dan/atau melakukan penawaran efek melalui Layanan
            Urun Dana Penyelenggara.
          </p>
          <p className="text-center font-bold">
            PASAL 4 <br /> HAK DAN KEWAJIBAN
          </p>
          <p>
            4.1 <span className="font-bold">Hak-Hak Pemodal</span>
          </p>
          <p>
            Selama Pemodal menjadi Pemegang Efek dari Penerbit, Pemodal berhak
            atas:
          </p>
          <ul className="space-y-2">
            <li>
              a. Kesempatan yang sama atas penggunaan layanan yang disediakan
              oleh Penyelenggara dalam menyelenggarakan layanan urun dana
              berbasis teknologi;
            </li>
            <li>
              b. Memperoleh Laporan Keuangan, Laporan perkembangan proyek
              Penerbit melalui platform yang disediakan oleh Penyelenggara;
            </li>
            <li>
              c. Memperoleh pembagian dividen jika efek yang ditawarkan berupa
              saham, suku bunga atau kupon jika efek yang ditawarkan berupa
              utang atau pembagian keuntungan nisbah bagi hasil, imbal
              hasil/jasa atau margin jika efek yang ditawarkan berupa Obligasi;
            </li>
            <li>
              d. Memperoleh bukti kepemilikan efek, berupa catatan kepemilikan
              efek yang terdapat rekening efek pada Lembaga Penyimpanan dan
              Penyelesaian;
            </li>
            <li>
              e. Memiliki rekening Efek pada Bank Kustodian yang khusus untuk
              menyimpan Efek dan/atau dana melalui Layanan Urun Dana;
            </li>
            <li>
              f. Memperoleh panggilan Rapat Umum Pemegang Saham (RUPS) atau
              Rapat Umum Pemegang Obligasi (RUPO) dan berhak melakukan kehadiran
              pada RUPS atau RUPO;
            </li>
            <li>
              g. Melakukan pembatalan rencana pembelian Efek melalui layanan
              urun dana pada masa jeda yakni sekurang-kurangnya 48 (empat puluh
              delapan) jam setelah Pemodal melakukan pembelian Efek. Dalam hal
              pembatalan rencana pembelian Efek pada masa jeda ini,
              Penyelenggara akan mengembalikan dana kepada Pemodal;
            </li>
            <li>
              h. Memperdagangkan Efek bersifat saham, melalui layanan Pasar
              Sekunder (Secondary Market) yang disediakan oleh Penyelenggara,
              perdagangan Pasar Sekunder akan dibuka setelah 1 (satu) tahun
              pendanaan, dan dapat dilaksanakan setahun 2 (dua) kali dalam
              jangka waktu 10 (sepuluh) hari kerja;
            </li>
            <li>
              i. Membeli Efek melalui Layanan Urun Dana dengan batasan-batasan
              yaitu:{" "}
              <ul>
                <li>
                  • Bagi Pemodal dengan penghasilan sampai dengan Rp 500.000.000
                  (Lima Ratus Juta Rupiah) per tahun, maka Pemodal dapat membeli
                  Efek paling banyak sebesar 5% (lima persen) dari penghasilan
                  per tahun;
                </li>
                <li>
                  • Bagi Pemodal dengan penghasilan lebih dari Rp500.000.000
                  (Lima Ratus Juta Rupiah) per tahun, maka Pemodal dapat membeli
                  Efek paling banyak sebesar 10% (sepuluh persen) dari
                  penghasilan per tahun.
                </li>
              </ul>
            </li>
            <li>
              j. Apabila Pemodal merupakan badan hukum dan memiliki pengalaman
              investasi di pasar modal disertai bukti kepemilikan rekening
              paling singkat 2 (dua) tahun sebelum masa penawaran Efek, atau
              Efek Obligasi dijamin atau ditanggung dengan nilai penjaminan atau
              nilai penanggungan paling sedikit 125% (Seratus Dua Puluh Lima
              Persen) dari nilai penghimpunan dana, maka jumlah batasan-batasan
              sebagaimana dimaksud pada huruf i ditas tidak berlaku;
            </li>
            <li>
              k. Menghadiri setiap Rapat Umum Pemegang Efek termasuk namun tidak
              terbatas pada Rapat Umum Pemegang Saham (untuk selanjutnya disebut
              RUPS), baik RUPS Tahunan maupun RUPS Luar Biasa, Rapat Umum
              Pemegang Obligasi (RUPO), yang diselenggarakan oleh Penerbit
              dengan dukungan Penyelenggara atau Pemodal dapat memberikan kuasa
              kepada Penyelenggara untuk menghadiri RUPS atau RUPO yang
              diselenggarakan oleh Penerbit dan mengeluarkan suara; dan
            </li>
            <li>
              l. Dibantu oleh Penyelenggara atau kuasa Pemodal dalam hal
              penyelesaian masalah yang berkaitan dengan Penawaran efek Obligasi
              yang diterbitkan dalam hal Penerbit mengalami gagal bayar dan atau
              (wanprestasi).
            </li>
          </ul>
          <p>
            4.2 <span className="font-bold">Kewajiban-Kewajiban Pemodal</span>
          </p>
          <p>
            Selama Pemodal menjadi Pemegang Efek dari Penerbit, Pemodal
            berkewajiban untuk:
          </p>
          <ul className="space-y-2">
            <li>
              a. Mengisi formulir keikut sertaan dalam layanan urun dana
              berbasis teknologi informasi dengan benar, akurat dan dapat
              dipertanggungjawabkan;
            </li>
            <li>
              b. Bagi Pemodal perseorangan, wajib menyampaikan dokumen pribadi,
              termasuk namun tidak terbatas pada Kartu Tanda Penduduk Elektronik
              (E-KTP), swafoto dengan memegang E-KTP, menyertakan penghasilan
              selama 1 (satu) tahun, menyertakan nama ibu kandung, dan dokumen
              lainnya jika dibutuhkan termasuk namun tidak terbatas pada Nomor
              Pokok Wajib Pajak (NPWP) dan Kartu Keluarga (KK). Permintaan
              tambahan dokumen tersebut akan disesuaikan dengan kebutuhan pihak
              Penyelenggara dalam hal melakukan customer due diligent atau
              enhance due diligence;
            </li>
            <li>
              c. Memiliki rekening Efek pada Bank Kustodian yang khusus untuk
              menyimpan Efek dan/atau dana melalui Layanan Urun Dana;
            </li>
            <li>
              d. Menggunakan rekening Efek yang berbeda untuk masing-masing
              Penyelenggara apabila Pemodal melakukan pembelian Efek melalui
              lebih dari 1 (satu) Penyelenggara:
            </li>
            <li>
              e. Melakukan pembelian dan/atau pembayaran atas Efek pada waktu
              yang telah ditentukan;
            </li>
            <li>
              f. Menyetorkan dana pada escrow account atas pembelian Efek pada
              layanan securities crowdfunding melalui virtual account atau
              metode pembayaran lainnya yang disediakan Penyelenggara;
            </li>
            <li>
              g. Menjaga kerahasiaan informasi yang diperoleh Pemodal
              berdasarkan Perjanjian ini, maupun perjanjian turunan lainnya,
              apabila ada;
            </li>
            <li>
              h. Menaati dan mematuhi setiap tata tertib dan syarat-syarat dan
              ketentuan-ketentuan yang dipersyaratkan oleh Penyelenggara, baik
              yang dipersyaratkan pada saat ini maupun di kemudian hari;
            </li>
            <li>
              i. Menjaga nama baik dan reputasi Penyelenggara dengan tidak
              melakukan aktifitas yang mengandung unsur suku, agama dan ras,
              atau tidak melakukan penyebaran informasi yang tidak benar dengan
              mengatasnamakan Penyelenggara;
            </li>
            <li>
              j. Tunduk dan patuh pada ketentuan Perjanjian ini yang tercantum
              dalam Platform Penyelenggara serta tunduk dan patuh pada Peraturan
              Otoritas Jasa Keuangan tentang Layanan Urun Dana dan peraturan
              perundang-undangan yang berlaku di Negara Republik Indonesia; dan
            </li>
            <li>
              k. Melakukan transaksi pembelian dan Penjualan Efek melalui
              Layanan Urun Dana Penyelenggara dari penghasilan dan/atau
              peruntukan dana Pemodal yang tidak bertentangan dengan peraturan
              perundang-undangan di Indonesia.
            </li>
          </ul>
          <p>
            4.3 <span className="font-bold">Hak-Hak Penyelenggara</span>
          </p>
          <p>Penyelenggara berhak untuk:</p>
          <ul className="space-y-2">
            <li>
              a. Memperoleh dokumen pribadi dari masing-masing Pemodal, termasuk
              namun tidak terbatas pada: (i) Kartu Tanda Penduduk Elektronik
              (E-KTP) dengan valid dan jelas, swafoto dengan memegang E-KTP
              dengan valid dan jelas, menyertakan penghasilan selama 1 (Satu)
              tahun, menyertakan pekerjaan atau profesi saat ini, menyertakan
              nama ibu kandung, Kartu Keluarga (KK) dan dokumen lainnya jika
              dibutuhkan dari Pemodal perseorangan untuk melakukan customer due
              diligent atau enhance due diligence;
            </li>
            <li>
              b. Memperoleh informasi yang benar, akurat dan dapat
              dipertanggungjawabkan, terkait dengan informasi pribadi dari
              setiap Pemodal;
            </li>
            <li>
              c. Melakukan verifikasi atas setiap data yang diperoleh dari
              Pemodal;
            </li>
            <li>
              d. Menolak pendaftaran/registrasi dari Pemodal dalam hal Pemodal
              terbukti memberikan informasi yang tidak benar dan menyesatkan;
            </li>
            <li>
              e. Membatalkan dan/atau menolak pendaftaran/registrasi dari
              Pemodal dalam hal Pemodal terlibat dalam tindak pidana korupsi
              dan/atau tindak pidana pencucian uang dan/atau pendanaan tindak
              pidana terorisme;
            </li>
            <li>
              f. Melakukan teguran, baik secara tertulis maupun secara
              lisan/verbal dan/atau melakukan tindakan hukum administratif
              lainnya kepada Pemodal yang tidak mematuhi syarat-syarat dan
              ketentuan-ketentuan dalam Perjanjian ini maupun perjanjian turunan
              lainnya (jika ada) serta tata tertib yang dipersyaratkan oleh
              Penyelenggara, baik secara tertulis maupun secara lisan/verbal;
            </li>
            <li>
              g. Dalam hal Pemodal melakukan pelanggaran terhadap syarat-syarat
              dan ketentuan-ketentuan dari Perjanjian ini dan dalam waktu 3
              (tiga) Hari Kerja terhitung sejak terjadinya pelanggaran dimaksud,
              Pemodal tidak melakukan perbaikan atas pelanggaran yang
              dilakukannya, maka Penyelenggara berhak dan berwenang untuk
              melakukan pembatasan-pembatasan terhadap akses Pemodal atas
              penggunaan fitur-fitur pada layanan urun dana berbasis teknologi
              yang diselenggarakan oleh Penyelenggara.
            </li>
          </ul>
          <p>
            4.4{" "}
            <span className="font-bold">Kewajiban-kewajiban Penyelenggara</span>
          </p>
          <p>Penyelenggara berkewajiban untuk:</p>
          <ul className="space-y-2">
            <li>
              a. Menyediakan akses penggunaan layanan urun dana berbasis
              teknologi informasi kepada Pemodal;
            </li>
            <li>
              b. Menjaga kerahasiaan informasi yang diperoleh Pemodal
              berdasarkan Perjanjian ini, maupun perjanjian turunan lainnya,
              apabila ada;
            </li>
            <li>
              c. Menjaga escrow account yang digunakan untuk menerima dana hasil
              penawaran Efek melalui layanan securities crowdfunding dan
              selanjutnya dana hasil penawaran efek tersebut langsung diterima
              Penerbit, kecuali Penawaran Efek batal demi hukum atau dibatalkan
              Penerbit;
            </li>
            <li>
              d. Melakukan publikasi dan penyebarluasan informasi kepada
              Pemodal, termasuk namun tidak terbatas pada laporan keuangan
              Penerbit melalui platform yang disediakan oleh Penyelenggara;
            </li>
            <li>
              e. Melakukan pembagian dividen yang diperoleh Penerbit bagi Efek
              bersifat Ekuitas, dan membagikan keuntungan, bagi hasil, imbal
              hasil/jasa atau margin atas Efek Obligasi kepada Pemodal dengan
              melakukan pencatatan pada saldo efek pada Penyelenggara atau
              platform lainnya yang memiliki hubungan kerjasama dengan
              Penyelenggara;
            </li>
            <li>
              f. Mendistribusikan efek kepada Pemodal paling lambat 2 (dua) hari
              kerja setelah Penyelenggara menyerahkan dana dari Pemodal kepada
              Penerbit;
            </li>
            <li>
              g. Melakukan pengembalian dana kepada Pemodal yang melakukan
              pembatalan rencana pembelian efek melalui layanan urun dana ke
              saldo efek milik Pemodal sekurang-kurangnya 2 (dua) hari kerja
              setelah pembatalan pemesanan Efek oleh Pemodal kepada
              Penyelenggara;
            </li>
            <li>
              h. Melakukan pendaftaran Efek Penerbit pada Kustodian Sentral Efek
              Indonesia (KSEI) sebagai lembaga penyimpanan dan penyelesaian;
            </li>
            <li>
              i. Mewakili kepentingan Pemodal sebagai pemegang Efek Obligasi;
            </li>
            <li>
              j. Setelah 12 (dua belas) bulan Pemodal tercatat sebagai pemilik
              efek bersifat ekuitas berupa saham pada Penerbit, Penyelenggara
              akan menyediakan sistem bagi Pemodal untuk memperdagangkan saham
              Penerbit pada Pasar Sekunder (secondary market);
            </li>
            <li>
              k. Memiliki catatan secara terpisah dan terperinci atas
              kepemilikan dana untuk setiap Pemodal.
            </li>
          </ul>
          <p className="text-center font-bold">
            PASAL 5 <br /> PEMINDAHAN HAK ATAS EFEK BERSIFAT EKUTAS BERUPA SAHAM
          </p>
          <ul className="space-y-2">
            <li>
              5.1 Pemindahan hak atas saham dapat dilakukan oleh Pemodal, baik
              Pemodal perseorangan ataupun Pemodal badan hukum melalui pasar
              sekunder yang disediakan oleh Penyelenggara setelah Pemodal
              tercatat sekurang-kurangnya 12 (dua belas) bulan sebagai pemegang
              saham pada Penerbit;
            </li>
            <li>
              5.2 Untuk dapat melakukan perdagangan Efek bersifat ekuitas berupa
              saham yang dimilikinya melalui pasar sekunder, Pemodal wajib
              melakukan pemberitahuan kepada Penyelenggara atas rencana
              pengalihan saham miliknya sekurang-kurangnya 7 (tujuh) hari
              Kalender sebelum pengalihan hak atas saham berlaku efektif
              (Pemberitahuan Pengalihan Saham);
            </li>
            <li>
              5.3 Penyelenggara dalam waktu 3x24 jam akan menentukan harga wajar
              sebagai referensi bagi penjual dan pembeli (Penentuan Harga Wajar)
              dari saham yang akan dialihkan tersebut beserta syarat-syarat dan
              ketentuan-ketentuannya;
            </li>
            <li>
              5.4 Penyelenggara dalam waktu 1x24 jam setelah Penentuan Harga
              Wajar akan melakukan penawaran saham kepada pemodal lainnya,
              melalui platform yang disediakan oleh Penyelenggara untuk
              transaksi jual beli saham pada pasar sekunder (secondary market);
            </li>
            <li>
              5.5 Setelah pengalihan saham berlaku efektif, Penyelenggara akan
              melakukan pemberitahuan kepada Lembaga Penyimpanan dan
              Penyelesaian terkait dengan pengalihan saham dimaksud, untuk
              melakukan pencatatan kepemilikan saham oleh pemodal baru;
            </li>
            <li>
              5.6 Layanan pasar sekunder yang disediakan oleh Penyelenggara
              kepada Pemodal untuk melakukan jual beli efek berupa saham
              Penerbit yang dimilikinya, akan berlangsung selama 10 (sepuluh)
              hari kerja;
            </li>
            <li>
              5.7 Menyimpang dari apa yang ditentukan dan dipersyaratkan pada
              Pasal 5 ayat 1, apabila Pemodal perseorangan sebagai pemegang
              saham dari Penerbit meninggal dunia, maka terhadap saham milik
              Pemodal perseorangan dapat dilakukan pemindahan hak atas saham
              kepada ahli warisnya dengan menyampaikan kelengkapan dokumen yang
              diperlukan untuk pemindahan hak atas saham di maksud, maka ahli
              waris dapat mengajukan permohonan perubahan kepemilikan Efek
              kepada Penyelenggara dengan melengkapi dokumen sebagai sebagai
              berikut:{" "}
              <ul className="p-2 space-y-2">
                <li>
                  a) Surat permohonan peralihan kepemilikan Saham dikarenakan
                  Pemodal perseorangan meninggal dunia kepada Penyelenggara;{" "}
                </li>
                <li>b) Salinan surat kematian dari instansi berwenang; </li>
                <li>
                  c) Salinan surat keterangan ahli waris dari instansi berwenang
                  dan/atau surat penetapan pengadilan tentang ahli waris;{" "}
                </li>
                <li>
                  d) Salinan E-KTP Pemodal perseorangan (almarhum/almarhumah)
                  dan ahli waris{" "}
                </li>
                <li>
                  e) Salinan Kartu Keluarga (KK) Pemodal (almarhum/almarhumah){" "}
                </li>
                <li>
                  f) Surat Penunjukan dan/atau Surat Kuasa dari ahli waris
                  (apabila ahli waris lebih dari satu) untuk menunjuk dan/atau
                  menguasakan peralihan kepemilikan Efek kepada salah satu ahli
                  waris
                </li>
                <li>
                  g) Bukti kepemilikan efek (Portfolio) Penerbit di
                  Penyelenggara;
                </li>
              </ul>{" "}
            </li>
            <li>
              5.8 Setelah Pemodal tercatat sekurang-kurangnya 12 (dua belas)
              bulan sebagai pemegang saham pada Penerbit, Pemodal dapat
              melakukan pemindahan hak atas sahamnya secara hibah kepada pihak
              ketiga lainnya. Untuk itu, Pemodal diwajibkan untuk melakukan
              pemberitahuan kepada Direksi dari Penerbit, perihal pemindahan hak
              atas saham miliknya secara hibah kepada pihak ketiga lainnya
              (Pemberitahuan Pengalihan Secara Hibah). Selambat-lambatnya 2
              (dua) Hari Kerja setelah menerima Pemberitahuan Pengalihan Secara
              Hibah, Direksi Penerbit akan melakukan pemberitahuan kepada
              Penyelenggara untuk melakukan perubahan pencatatan atas pemindahan
              hak atas saham dimaksud pada Lembaga Penyimpanan dan Penyelesaian,
              dimana saham Penerbit dicatatkan dengan melengkapi dokumen yang
              diperlukan untuk pemindahan hak atas saham dimaksud.
            </li>
          </ul>
          <p className="text-center font-bold">
            PASAL 6<br /> PEMBERIAN IZIN DAN KUASA
          </p>
          <ul className="space-y-2">
            <li>
              6.1. Dengan menandatangani Perjanjian ini dan selama Pemodal
              menjadi pemegang efek Penerbit, Pemodal sepakat dan setuju untuk
              memberikan kuasa kepada Penyelenggara untuk menyampaikan
              kelengkapan data Pemodal kepada Lembaga Penyimpanan dan
              Penyelesaian dan Bank Kustodian dengan tujuan pencatatan nama
              Pemodal dalam Rekening Efek pada kustodian atau segala kebutuhan
              administrasi yang diperlukan lainnya termasuk namun tidak terbatas
              untuk melakukan pemindahbukuan Efek atau dana dalam rangka
              Transaksi securities crowdfunding atau kepentingan lain atas nama
              Pemodal;
            </li>
            <li>
              6.2. Dengan menandatangani Perjanjian ini dan selama Pemodal
              menjadi pemegang efek Penerbit, dalam hal Pemodal berhalangan
              untuk menghadiri Rapat Umum Pemegang Saham atau Rapat Umum
              Pemegang Obligasi, dengan ini Pemodal sepakat dan setuju untuk
              memberikan kuasa kepada Penyelenggara untuk menghadiri Rapat Umum
              Pemegang Saham dan atau Rapat Umum Pemegang Obligasi yang
              diselenggarakan oleh Penerbit dan mengeluarkan hak suara
              berdasarkan kuasa yang telah diberikan oleh Pemodal;
            </li>
            <li>
              6.3. Dengan menandatangani Perjanjian ini dan selama Pemodal
              menjadi pemegang efek Penerbit, Pemodal sepakat dan setuju untuk
              memberikan kuasa kepada Penyelenggara untuk melakukan pengurusan
              segala aspek legalitas Penerbit, termasuk namun tidak terbatas
              menghadap dan/atau hadir di hadapan Notaris, untuk menandatangani,
              menyerahkan segala surat/akta/kelengkapan dokumen yang diperlukan,
              dan memberikan segala keterangan yang diperlukan untuk pengurusan
              legalitas Penerbit, (jika diperlukan);
            </li>
            <li>
              6.4. Dengan menandatangani Perjanjian ini dan selama Pemodal
              menjadi pemegang efek Penerbit, Pemodal sepakat dan setuju untuk
              memberikan kuasa kepada Penyelenggara untuk melakukan pengurusan
              segala aspek perbankan dari Penerbit dalam konteks layanan
              kustodian, termasuk namun tidak terbatas pada pembukaan rekening
              atas nama Penerbit;
            </li>
            <li>
              6.5. Pemodal setuju untuk memberikan kuasa kepada Penyelenggara
              untuk melakukan administrasi dan penyimpanan seluruh dokumentasi
              dan legalitas Penerbit (apabila diperlukan);
            </li>
            <li>
              6.6. Dengan menandatangani Perjanjian ini dan selama Pemodal
              menjadi pemegang efek Penerbit, Pemodal sepakat dan setuju untuk
              memberikan kuasa kepada Penyelenggara untuk melakukan settlement
              instruction kepada partisipan Lembaga Penyimpanan dan Penyelesaian
              untuk melakukan dan menyelesaikan pemindahbukuan pada C-Best
              termasuk transaksi pada Pasar Sekunder;
            </li>
            <li>
              6.7. Dengan menandatangani Perjanjian ini dan selama Pemodal
              menjadi pemegang efek Obligasi Penerbit, Pemodal sepakat dan
              setuju untuk memberikan kuasa kepada Penyelenggara untuk melakukan
              termasuk namun tidak terbatas untuk memantau perkembangan
              pengelolaan Proyek berdasarkan data dan/atau informasi yang
              diperoleh baik langsung maupun tidak langsung; melakukan pembagian
              nisbah bagi hasil kepada pemegang Obligasi; mengawasi dan memantau
              pelaksanaan kewajiban Penerbit berdasarkan perjanjian mengenai
              penerbitan Efek Obligasi; mengawasi, melakukan inspeksi, dan
              mengadministrasikan jaminan bagi pembayaran kewajiban kepada
              pemegang Efek Obligasi (jika terdapat jaminan) bagi pembayaran
              kewajiban kepada pemegang efek Obligasi; dan memantau pembayaran
              yang dilakukan Penerbit kepada pemegang Efek Obligasi; dan
            </li>
            <li>
              6.8. Dengan menandatangani Perjanjian ini dan selama Pemodal
              menjadi pemegang Obligasi, maka Pemodal dapat memberikan kuasa
              kepada Penyelenggara untuk melakukan segala urusan yang diperlukan
              dan mewakili kepentingan pemegang Obligasi yang berkaitan dengan
              tanggung jawab berlaku selama Pemodal memiliki Obligasi, termasuk
              namun tidak terbatas untuk mengurus kepentingan dalam hal
              terjadinya gagal bayar oleh Penerbit, dan menyelenggarakan Rapat
              Umum Pemegang Obligasi (RUPO) jika diperlukan sesuai dengan
              peraturan perundang-undangan dan Peraturan Otoritas Jasa Keuangan
              (OJK) tentang layanan urun dana Surat Edaran Otoritas Jasa
              Keuangan tentang layanan urun dana
            </li>
            <li>
              6.9. Dengan menandatangani Perjanjian ini dan selama Pemodal
              menjadi pemegang efek Penerbit, Pemodal memberikan izin sepenuhnya
              kepada Penyelenggara untuk memberikan, menarik, dan melakukan
              pengkinian data milik Pemodal ke sistem LAPMN Kustodian Sentral
              Efek Indonesia. Data yang dimaksud meliputi, termasuk namun tidak
              terbatas, nama, Nomor Induk Kependudukan, Kartu Tanda Penduduk,
              Nomor Pokok Wajib Pajak, dan dokumen lainnya yang dibutuhkan
              Penyelenggara sehubungan dengan pendaftaran Pemodal.
            </li>
          </ul>
          <p className="text-center font-bold">
            PASAL 7 <br /> BIAYA-BIAYA
          </p>
          <ul className="space-y-2">
            <li>
              7.1. Atas penggunaan layanan urun dana berbasis teknologi
              informasi (platform) yang disediakan oleh Penyelenggara kepada
              Pemodal dalam melakukan transaksi investasinya, Pemodal dikenakan
              Biaya Layanan (Service Fee) sebesar:
              <ul className="p-2 space-y-2">
                <li>
                  a) 3% (tiga persen) sampai dengan 5% (lima persen) dari nilai
                  total investasi untuk pembelian saham; dan/atau{" "}
                </li>
                <li>
                  b) 0,5% (nol koma lima persen) sampai dengan 3% (tiga persen)
                  dari nilai total investasi untuk pembelian Obligasi, yang akan
                  dikenakan pada saat melakukan pembelian Efek yang dikeluarkan
                  oleh Penerbit;
                </li>
                <li>
                  c) Legal fee; Kustodian fee dan biaya-biaya kepada pihak
                  lainnya (bila ada).
                </li>
              </ul>
            </li>
            <li>
              7.2. Sehubungan dengan pengelolaan dan administrasi kegiatan usaha
              Penerbit, termasuk namun tidak terbatas pada penyampaian laporan
              keuangan, dan/atau pembagian hasil usaha Penerbit termasuk namun
              tidak terbatas pada dividen jika efek yang ditawarkan berupa
              saham, atau pembagian keuntungan bagi hasil, imbal hasil/jasa atau
              margin jika efek yang ditawarkan berupa Obligasi, yang dilakukan
              oleh Penyelenggara, Pemodal akan dikenakan biaya Management Fee
              sebesar 5% (lima persen) dari dividen yang akan diterima oleh
              Pemodal (sebelum pajak).
            </li>
            <li>
              7.3. Terhadap biaya Bank, termasuk namun tidak terbatas pada biaya
              pemindahbukuan (biaya transfer, penarikan dana) dan biaya lainnya
              jika ada, yang timbul sehubungan dengan Perjanjian ini, menjadi
              beban dan tanggung jawab masing-masing Pemodal.
            </li>
          </ul>
          <p className="text-center font-bold">
            PASAL 8
            <br /> LAPORAN KEUANGAN PENERBIT
          </p>
          <ul className="space-y-2">
            <li>
              8.1. Atas kegiatan usaha Penerbit yang menerbitkan Efek bersifat
              ekuitas berupa saham, Pemodal akan memperoleh laporan keuangan
              tahunan secara berkala, yang akan diterima oleh Pemodal melalui
              platform dari Penyelenggara, selambat-lambatnya 6 (enam) bulan
              setelah tahun buku Penerbit berakhir, Penyelenggara akan
              mempublikasikan laporan keuangan Penerbit kepada Pemodal, yang
              akan dilakukan melalui situs layanan urun dana berbasis teknologi
              informasi yang disediakan oleh Penyelenggara;
            </li>
            <li>
              8.2. Khusus untuk laporan keuangan Penerbit yang menerbitkan
              Obligasi, Pemodal akan memperoleh laporan keuangan secara berkala
              setiap 3 (tiga) bulan, pada bulan Maret, Juni, September, dan
              Desember;
            </li>
            <li>
              8.3. Laporan Keuangan akan disusun oleh Penerbit atau oleh pihak
              ketiga yang ditunjuk oleh Penerbit, paling rendah disusun
              berdasarkan standar akuntansi keuangan entitas mikro kecil
              menengah.
            </li>
          </ul>
          <p className="text-center font-bold">
            PASAL 9<br /> PEMBAGIAN KEUNTUNGAN <br /> (Dividen, Bagi Hasil,
            Imbal Hasil/Jasa, Margin)
          </p>
          <ul className="space-y-2">
            <li>
              9.1. Pembagian keuntungan (dividen jika efek yang ditawarkan
              berupa saham, atau pembagian keuntungan nisbah bagi hasil, imbal
              hasil/jasa atau margin jika efek berupa Obligasi) kepada Pemodal
              dapat dilakukan oleh Kustodian dan/atau Penyelenggara. Dalam hal
              pembagian keuntungan dilakukan oleh Kustodian, maka
              ketentuan-ketentuan terkait dengan pembagian keuntungan yang
              berlaku pada Kustodian, akan berlaku bagi Pemodal. Namun, apabila
              pembagian keuntungan dilakukan oleh Penyelenggara berdasarkan
              syarat-syarat dan ketentuan-ketentuan Perjanjian ini, maka
              pembagian keuntungan (dividen, nisbah bagi hasil akan dilakukan
              selambat-lambatnya setiap tanggal 20 (dua puluh) pada periode
              pembagian keuntungan (dividen, nisbah bagi hasil, imbal hasil,
              jasa atau margin) dimaksud atau berdasarkan tanggal pembayaran
              imbal hasil pada perjanjian penerbitan Obligasi antara
              Penyelenggara dengan Penerbit yang telah mengeluarkan Efek
              Obligasi;
            </li>
            <li>
              9.2. Penyelenggara akan melakukan pembagian dividen, nisbah bagi
              hasil atau pembagian keuntungan yang diperoleh Penerbit kepada
              Pemodal dengan melakukan pencatatan pada saldo efek pada platform
              Penyelenggara atau platform lainnya yang memiliki hubungan
              kerjasama dengan Penyelenggara;
            </li>
            <li>
              9.3. Pemodal dapat melakukan penarikan atas pembagian dividen,
              nisbah bagi hasil, imbal hasil, jasa atau margin, atau pembagian
              keuntungan yang diperoleh Pemodal, melalui fitur yang disediakan
              pada platform Penyelenggara;
            </li>
            <li>
              9.4. Penyelenggara akan melakukan pemindahbukuan ke dalam rekening
              yang ditunjuk oleh masing-masing Pemodal selambat-lambatnya 3
              (tiga) Hari Kerja, setelah Pemodal menyatakan untuk menarik dana
              dari saldo efek pada platform Penyelenggara;
            </li>
            <li>
              9.5. Dalam hal jangka waktu sebagaimana tersebut pada ayat 4 di
              atas jatuh pada hari Sabtu, Minggu atau hari libur nasional, maka
              pemindahbukuan ke dalam rekening yang ditunjuk oleh masing-masing
              Pemodal selambat-lambatnya akan dilakukan pada hari berikutnya
              setelah hari Sabtu, Minggu atau hari libur nasional dimaksud;
            </li>
            <li>
              9.6. RUPS Penerbit dapat menentukan besaran laba ditahan (retained
              earning) dari setiap periode laporan keuangan;
            </li>
            <li>
              9.7. Laba ditahan (retained earning) dari setiap periode laporan
              keuangan, sebanyak-banyak nya sebesar 20% (dua puluh persen) dari
              laba/keuntungan yang diperoleh pada periode laporan keuangan
              dimaksud;
            </li>
            <li>
              9.8. Laba ditahan (retained earning) akan dibukukan dan disimpan
              dalam rekening Penerbit atau escrow account Penerbit yang dibuka
              untuk menampung laba ditahan tersebut.
            </li>
          </ul>
          <p className="text-center font-bold">
            PASAL 10 <br /> PAJAK-PAJAK
          </p>
          <p>
            Para Pihak setuju bahwa terhadap setiap pajak-pajak yang timbul
            berdasarkan Perjanjian ini akan menjadi beban dan tanggung jawab
            masing-masing dari Para Pihak dan tunduk pada ketentuan perpajakan
            yang berlaku di Negara Republik Indonesia;
          </p>
          <p className="text-center font-bold">
            PASAL 11 <br /> LARANGAN DAN PEMBATASAN
          </p>
          <ul className="space-y-2">
            <li>
              11.1. Pemodal dilarang melakukan penyebarluasan informasi yang
              diperoleh berdasarkan Perjanjian ini, termasuk namun tidak
              terbatas pada data baik lisan maupun tertulis, hasil analisa
              maupun Informasi Rahasia sebagaimana dimaksud dalam Perjanjian
              ini, dalam bentuk dan format apapun kepada pihak ketiga lainnya,
              tanpa persetujuan Penerbit, Pemodal lainnya dan/atau pemegang efek
              Penerbit serta Penyelenggara;
            </li>
            <li>
              11.2. Pemodal dilarang menyebarluaskan informasi yang belum
              terbukti kebenarannya dan/atau tidak dapat dipertanggungjawabkan
              kebenarannya kepada Pemodal lainnya atau pihak ketiga lainnya baik
              secara, lisan maupun tertulis dan/atau baik secara langsung maupun
              tidak langsung termasuk namun tidak terbatas melalui surat
              elektronik (email) maupun media sosial, sehingga dapat berakibat
              pada pencemaran nama baik pihak lain, Pemodal, Penerbit dan/atau
              Penyelenggara;
            </li>
            <li>
              11.3. Pemodal yang ditunjuk oleh pemegang Efek Penerbit sebagai
              direktur atau anggota direksi Penerbit, dilarang menjual,
              menjaminkan, menggadaikan atau cara apapun mengalihkan harta
              kekayaan Penerbit tanpa persetujuan dari pemegang Efek Penerbit,
              Rapat Umum Pemegang Saham dan atau Rapat Umum Pemegang Efek
              Penerbit;
            </li>
            <li>
              11.4. Dengan memperhatikan ketentuan perundang-undangan yang
              berlaku, Pemodal dengan ini menyatakan bahwa Pemodal sepakat dan
              setuju untuk tidak menarik modal yang menjadi bagian
              keikutsertaannya dalam Penerbit sekurang-kurangnya selama 12 (dua
              belas) bulan terhitung sejak Pemodal tercatat sebagai pemegang
              efek dari Penerbit;
            </li>
            <li>
              11.5. Pemodal dilarang menggunakan nama dagang (Merek) dari
              Penyelenggara, baik sebagian maupun seluruhnya pada kegiatan yang
              tidak berkaitan dengan Penyelenggaraan layanan urun dana. Atas
              pelanggaran ketentuan ini, Penyelenggara dapat melakukan
              tindakan-tindakan hukum kepada Pemodal, berdasarkan ketentuan yang
              berlaku dalam bidang Merek sebagaimana dimaksud dalam Peraturan
              Perundang-undangan tentang Merek.
            </li>
          </ul>
          <p className="text-center font-bold">
            PASAL 12 <br /> PERNYATAAN DAN JAMINAN
          </p>
          <ul className="space-y-2">
            <li>
              12.1. Penyelenggara dengan ini menyatakan dan menjamin, hal-hal
              sebagai berikut:
              <ul className="space-y-2">
                <li>
                  a. Penyelenggara adalah badan hukum yang didirikan dan tunduk
                  pada ketentuan hukum dan perundang-undangan Negara Kesatuan
                  Republik Indonesia;
                </li>
                <li>
                  b. Penyelenggara dalam menjalankan kegiatan usahanya telah
                  memiliki setiap perizinan yang dipersyaratkan termasuk namun
                  tidak terbatas pada izin dalam bidang penyelenggaraan layanan
                  urun dana melalui penawaran efek berbasis teknologi
                  (securities crowdfunding) dari Otoritas Jasa Keuangan Republik
                  Indonesia (OJK RI) dan perizinan tersebut, sampai pada saat
                  Perjanjian ini ditandatangani masih berlaku dan/atau tidak
                  sedang ditangguhkan oleh pihak yang berwenang;
                </li>
                <li>
                  c. Penyelenggara dalam menjalankan kegiatan usahanya tidak
                  melanggar hak atas kekayaan intelektual dari pihak ketiga
                  lainnya;
                </li>
                <li>
                  d. Penyelenggara dengan ini menyatakan bahwa dalam memberikan
                  dan/atau menyajikan data-data dan informasi-informasi terkait
                  dengan Pemodal dan/atau penawaran efek melalui layanan urun
                  dana yang diselenggarakan oleh Penyelenggara, Penyelenggara
                  sepenuhnya mempercayakan, mengandalkan dan bersandarkan pada
                  semua data-data dan/atau informasi-informasi yang diberikan
                  oleh Penerbit kepada Penyelenggara;
                </li>
                <li>
                  e. Penyelenggara dengan ini menyatakan bahwa Penyelenggara
                  tidak pernah membuat pernyataan-pernyataan atau
                  jaminan-jaminan, baik secara tegas maupun tersirat, terhadap
                  kualitas, akurasi dan kelengkapan informasi yang disediakan
                  oleh Penyelenggara pada layanan urun dana melalui penawaran
                  efek berbasis teknologi terkait dengan kegiatan usaha
                  Penerbit;
                </li>
                <li>
                  f. Penyelenggara dengan ini menyatakan dan menjamin bahwa dana
                  pemodal yang ada dalam rekening virtual account dan/atau
                  escrow account atas nama Penyelenggara dan/atau atas nama
                  bersama dari Penyelenggara, Penerbit dan Pemodal adalah
                  merupakan dana milik masing-masing Pemodal, dan bukan
                  merupakan harta kekayaan (aset) milik Penyelenggara.
                  Selanjutnya, harta (aset) tersebut tidak dapat dan bukan
                  merupakan harta pailit (boedel pailit), dalam hal
                  Penyelenggara dinyatakan pailit berdasarkan peraturan
                  perundang-undangan yang berlaku;
                </li>
                <li>
                  g. Penyelenggara dengan ini menyatakan bahwa Penyelenggara
                  telah melakukan proses Know Your Customer (KYC) berdasarkan
                  ketentuan Anti Pencucian Uang dan Pencegahan Pendanaan
                  Terorisme (APU-PPT);
                </li>
              </ul>
            </li>
            <li>
              12.2. Pemodal dengan ini menyatakan dan menjamin hal-hal sebagai
              berikut:
              <ul className="space-y-2">
                <li>
                  a. Pemodal adalah subjek hukum yang cakap dan berhak serta
                  berwenang untuk mengikatkan diri pada Perjanjian ini;
                </li>
                <li>
                  b. Pemodal dengan ini menyatakan dan menjamin bahwa setiap
                  data dan informasi yang diberikan oleh Pemodal pada saat
                  pembukaan akun untuk menggunakan layanan urun dana melalui
                  penawaran efek berbasis teknologi yang disediakan
                  Penyelenggara, adalah benar, lengkap dan sesuai dengan dokumen
                  aslinya, otentik, benar dan akurat serta masih berlaku pada
                  saat penandatanganan Perjanjian ini. Selanjutnya, Pemodal
                  menyatakan bahwa tanda tangan yang diberikan dan/atau
                  dibubuhkan baik secara fisik maupun elektronik adalah benar
                  dan sah, serta memiliki dampak hukum;
                </li>
                <li>
                  c. Pemodal dengan ini menyatakan dan menjamin telah memberikan
                  persetujuan terkait dengan penggunaan dan/atau pengelolaan
                  data dan/atau informasi pribadi Pemodal kepada Penyelenggara
                  untuk keperluan pelaksanaan dari Perjanjian ini dan/atau
                  keperluan yang timbul akibat dari pelaksanaan penyelenggaraan
                  layanan urun dana;
                </li>
                <li>
                  d. Pemodal dengan ini menyatakan dan menjamin bahwa Pemodal
                  telah membaca, memeriksa, menganalisa dan mengevaluasi
                  proposal, data, informasi maupun kelengkapan dokumen dari
                  usaha Penerbit yang dimuat melalui layanan urun dana melalui
                  penawaran efek berbasis teknologi yang disediakan
                  Penyelenggara berdasarkan Perjanjian ini dan Pemodal dengan
                  ini menyatakan dan menjamin bahwa Pemodal telah memilih
                  kegiatan usaha dari Penerbit secara sadar, tanpa ada bujuk
                  rayu, paksaan, ancaman dan pengaruh (intervensi) dari pihak
                  manapun termasuk dari Penyelenggara;
                </li>
                <li>
                  e. Pemodal dengan ini menyatakan dan menjamin bahwa Pemodal
                  dalam melakukan penyertaan efek (pembelian efek) pada Penerbit
                  telah membaca, memeriksa, menganalisa dan mengevaluasi
                  proposal, data, informasi maupun kelengkapan dokumen dari
                  usaha Penerbit pada layanan urun dana melalui penawaran efek
                  berbasis teknologi yang disediakan oleh Penyelenggara dan
                  dalam melakukan penyertaan modal pada Penerbit, Pemodal
                  menyatakan dan mengakui risiko-risiko terkait dengan kualitas,
                  akurasi dan kelengkapan informasi terkait dengan kegiatan
                  usaha Penerbit yang disajikan dan/atau diinformasikan melalui
                  layanan urun dana melalui penawaran efek berbasis teknologi
                  yang disediakan oleh Penyelenggara. Selanjutnya, Pemodal
                  menyatakan dan mengetahui bahwa setiap data dan proposal,
                  keuntungan usaha maupun risiko kegiatan operasional Penerbit
                  yang disajikan dan/atau diinformasikan oleh Penyelenggara
                  melalui layanan urun dana melalui penawaran efek berbasis
                  teknologi, merupakan data dan proposal yang disajikan oleh
                  Penyelenggara berdasarkan informasi yang diberikan dan/atau
                  disediakan oleh Penerbit kepada Penyelenggara dengan
                  berdasarkan pada data dan/atau informasi serta kejadian yang
                  telah lalu dan mengandung unsur ketidakpastian tergantung dari
                  potensi kegiatan usaha Penerbit, kondisi umum dan khusus dari
                  kegiatan operasional Penerbit. Dan karenanya, Pemodal dengan
                  ini menyatakan membebaskan Penyelenggara dari setiap klaim,
                  tuntutan, gugatan dari Pemodal dan/atau pihak ketiga lainnya
                  terkait keuntungan usaha maupun risiko kegiatan operasional
                  Penerbit yang disajikan dan/atau diinformasikan oleh Penerbit
                  melalui laporan Penerbit secara berkala yang akan disampaikan
                  melalui Penyelenggara;
                </li>
                <li>
                  f. Pemodal dengan ini menyatakan, bahwa Pemodal sepenuhnya
                  mengetahui, memahami dan menyadari resiko yang terkandung dan
                  resiko yang mungkin akan timbul dikemudian hari atas kegiatan
                  usaha Penerbit yang ditawarkan melalui penyelenggaraan layanan
                  urun dana melalui penawaran efek berbasis teknologi
                  (securities crowdfunding), termasuk namun tidak terbatas pada
                  penurunan performa usaha dan/atau usaha Penerbit tidak
                  menghasilkan keuntungan dan/atau profit, hingga Penerbit
                  dinyatakan bankrut maupun pailit. Dan karenanya, Pemodal
                  dengan ini menyatakan membebaskan Penyelenggara dari setiap
                  klaim, tuntutan, gugatan dari Pemodal dan/atau pihak ketiga
                  lainnya terkait dengan risiko yang mungkin akan timbul dan
                  atau mungkin akan terjadi atas kegiatan usaha Penerbit,
                  termasuk namun tidak terbatas pada kegagalan kegiatan usaha
                  Penerbit untuk memperoleh penghasilan dan/atau profit maupun
                  Penerbit dinyatakan bankrut maupun pailit;
                </li>
                <li>
                  g. Pemodal dengan ini menyatakan bahwa Pemodal sepenuhnya
                  mengetahui, memahami dan menyadari resiko yang terkandung dan
                  resiko yang mungkin akan timbul dikemudian hari atas
                  pelaksanaan perdagangan efek bersifat saham Penerbit pada
                  pasar sekunder, termasuk namun tidak terbatas tidak likuidnya
                  saham Penerbit yang ditawarkan oleh Pemodal melalui pasar
                  sekunder yang disediakan oleh Penyelenggara melalui layanan
                  urun dana melalui penawaran efek berbasis teknologi. Dan
                  karenanya, Pemodal dengan ini menyatakan membebaskan
                  Penyelenggara dari setiap klaim, tuntutan, gugatan dari
                  Pemodal dan/atau pihak ketiga lainnya terkait dengan risiko
                  yang mungkin akan timbul dan atau mungkin akan terjadi atas
                  pelaksanaan perdagangan saham Penerbit pada pasar sekunder,
                  termasuk namun tidak terbatas tidak likuidnya saham yang
                  ditawarkan oleh Penerbit pada pasar sekunder yang disediakan
                  oleh Penyelenggara melalui layanan urun dana melalui penawaran
                  efek berbasis teknologi;
                </li>
                <li>
                  h. Pemodal dengan ini menyatakan dan menjamin kepada
                  Penyelenggara bahwa dana yang disetorkan oleh Pemodal ke dalam
                  rekening virtual account dan/atau escrow account
                  Penyelenggara, dan yang digunakan oleh Pemodal untuk melakukan
                  penyertaan efek (pembelian efek) pada Penerbit merupakan milik
                  Pemodal sendiri dan diperoleh dengan cara yang halal dan tidak
                  bertentangan dengan hukum dan Perundang-undangan yang berlaku
                  di Negara Kesatuan Republik Indonesia, termasuk dan tidak
                  terbatas pada tindak pidana korupsi, tindak pidana pencucian
                  uang dan pendanaan terorisme;
                </li>
                <li>
                  i. Pemodal dengan ini menyatakan akan melindungi, menjamin,
                  memberikan ganti kerugian dan membebaskan serta melepaskan
                  Penyelenggara dari setiap klaim, tuntutan, gugatan, tuntutan
                  ganti rugi, tuntutan pertanggungjawaban dan/atau tuntutan
                  sejenis lainnya yang mungkin diajukan oleh Pemodal, Penerbit,
                  dan/atau pihak ketiga lainnya, baik langsung maupun tidak
                  langsung, terhadap setiap kerugian, kehilangan dan/atau
                  kerusakan harta benda, cidera fisik maupun mental maupun
                  kehilangan nyawa pihak ketiga lainnya, terkait dengan kegiatan
                  usaha dan/atau pengelolaan kegiatan usaha dari Penerbit;
                </li>
                <li>
                  j. Pemodal dengan ini menyatakan bahwa Pemodal sepenuhnya
                  mengetahui, memahami dan menyadari bahwa Penyelenggara tidak
                  melakukan kegiatan usaha dan/atau pengelolaan kegiatan usaha
                  dari Penerbit. Pemodal selanjutnya menyerahkan sepenuhnya
                  kegiatan usaha dan/atau pengelolaan kegiatan usaha dari
                  Penerbit kepada pihak dan/atau pihak-pihak yang ditunjuk oleh
                  Pemodal dan/atau para Pemodal bersama-sama dengan Penerbit dan
                  Pemodal dengan ini menyatakan dan menjamin bahwa pemodal tidak
                  akan melakukan intervensi kegiatan usaha dan/atau pengelolaan
                  kegiatan usaha dari Penerbit baik langsung maupun tidak
                  langsung. Selanjutnya, Pemodal dengan ini menyatakan dan
                  menjamin bahwa Pemodal akan menyampaikan setiap keluh-kesah,
                  keberatan dan/atau komplain baik langsung maupun tidak
                  langsung kepada Penerbit, direksi, komisaris, maupun pihak
                  dan/atau pihak-pihak yang ditunjuk oleh Pemodal dan/atau para
                  Pemodal bersama-sama dengan Penerbit untuk melakukan kegiatan
                  usaha dan/atau pengelolaan kegiatan usaha dari Penerbit;
                </li>
                <li>
                  k. Pemodal dengan ini menyatakan bahwa Pemodal sepenuhnya
                  mengetahui, memahami dan menyadari bahwa Penyelenggara akan
                  membebankan Management Fee sebesar 5% (lima persen) dari
                  dividen yang akan diterima oleh Pemodal (sebelum pajak), yang
                  akan dikenakan pada saat pembagian dividen dilakukan.
                  Management Fee ini merupakan biaya atas pengelolaan dan
                  administrasi kegiatan usaha Penerbit, termasuk namun tidak
                  terbatas pada penyampaian laporan keuangan dan/atau pembagian
                  hasil usaha Penerbit (pembagian dividen dan / atau profit)
                  yang dilakukan oleh Penyelenggara kepada Pemodal;
                </li>
                <li>
                  d) Pemodal dengan ini menyatakan bahwa Pemodal sepenuhnya
                  mengetahui, memahami dan menyadari bahwa Penyelenggara akan
                  membebankan Biaya Layanan (Platform Fee) sebesar: (ii) 3%
                  (tiga persen) sampai dengan 5% (lima persen) dari nilai total
                  investasi untuk pembelian saham; dan/atau (ii) 0,5% (nol koma
                  lima) persen sampai dengan 3% (tiga persen) dari nilai total
                  investasi untuk pembelian Efek Obligasi, yang akan dikenakan
                  pada saat melakukan pembelian Efek yang dikeluarkan oleh
                  Penerbit dan Legal fee; Custodian fee dan biaya-biaya kepada
                  pihak lainnya (bila ada).
                </li>
                <li>
                  l. Pemodal dengan ini menyatakan dan menjamin bahwa sumber
                  dana Pemodal yang digunakan untuk pembelian Efek melalui
                  layanan urun dana Penyelenggara tidak berasal dari pendapatan
                  dan/atau sumber dana yang bertentangan dengan peraturan
                  perundang-undangan. Selain itu, Pemodal dengan ini menyatakan
                  patuh terhadap ketentuan anti pencucian uang dan/atau
                  pendanaan terorisme.
                </li>
                <li>
                  m. Pemodal dengan ini menyatakan dan menjamin bahwa Pemodal
                  mengetahui konsekuensi dan memberikan izin sepenuhnya kepada
                  Penyelenggara untuk memberikan, menarik, dan melakukan
                  pengkinian data Pemodal melalui sistem LAPMN Kustodian Sentral
                  Efek Indonesia.
                </li>
              </ul>
            </li>
          </ul>
          <p className="text-center font-bold">
            PASAL 13 <br /> KERAHASIAAN
          </p>
          <ul className="space-y-2">
            <li>
              13.1. Para Pihak sepakat dan setuju untuk menjaga kerahasiaan dari
              setiap data dan/atau data-data, catatan-catatan, ringkasan,
              perjanjian, kontrak, laporan maupun informasi, termasuk namun
              tidak terbatas pada laporan keuangan dan/atau proposal dalam
              format dan bentuk apapun, yang diungkapkan oleh salah satu dari
              Para Pihak kepada Pihak lainnya dan/atau yang diperoleh
              berdasarkan Perjanjian ini dan/atau Perjanjian ikutan lainnya
              (untuk selanjutnya disebut
              <span className="font-bold"> &quot;Informasi Rahasia&quot;</span>
              ).
            </li>
            <li>
              13.2. Tidak satupun dari Para Pihak berhak dan/atau berwenang
              untuk melakukan pengungkapan kepada pihak ketiga, membuat
              pengumuman kepada khalayak umum dan/atau siaran pers yang
              berkaitan dengan subjek maupun objek dari perjanjian ini.
            </li>
            <li>
              13.3. Dalam hal, salah satu dari Para Pihak diwajibkan oleh
              perintah pengadilan, penetapan pengadilan, ketentuan hukum,
              peraturan perundang-undangan, peraturan dari badan dan/atau
              instansi pemerintah yang berwenang, termasuk namun tidak terbatas
              pada Otoritas Jasa Keuangan Republik Indonesia, untuk
              mengungkapkan Informasi Rahasia terkait dengan Perjanjian ini,
              Pihak yang terkena kewajiban tersebut wajib untuk melakukan
              pemberitahuan secara tertulis selambat-lambatnya 3 (tiga) Hari
              Kerja sebelumnya kepada Pihak lainnya. Selanjutnya, ketika
              pengungkapan Informasi Rahasia akan dilakukan oleh Pemodal,
              Pemodal wajib untuk meminta persetujuan tertulis dari
              Penyelenggara dan Penerbit sebelum pengungkapan dilakukan dan
              Penyelenggara tidak menunda dalam pemberian persetujuan tertulis
              tanpa alasan yang wajar.
            </li>
            <li>
              13.4. Kewajiban untuk menjaga kerahasiaan dari Informasi Rahasia
              dan/atau Perjanjian ini sebagaimana diatur dalam dalam Pasal ini
              akan tetap dan terus berlaku sekurang-kurangnya sampai dengan tiga
              (3) tahun setelah Perjanjian ini berakhir.
            </li>
            <li>
              13.5. Setiap saat, apabila diminta secara tertulis oleh pemilik
              Informasi Rahasia, seluruh Informasi Rahasia wajib dikembalikan
              oleh pihak yang memegang dan/atau menguasai Informasi Rahasia
              dimaksud kepada pemilik Informasi Rahasia. Akan tetapi, terhadap
              Informasi Rahasia yang tidak diminta untuk dikembalikan oleh
              pemilik Informasi Rahasia, wajib dimusnahkan dalam waktu
              selambat-lambatnya 7 (tujuh) hari setelah pemutusan dan/atau
              pengakhiran Perjanjian ini, dan pemegang dan/atau pihak yang
              menguasai Informasi Rahasia tersebut akan memberikan konfirmasi
              dan/atau pernyataan tertulis yang menyatakan bahwa pemusnahan
              tersebut telah dilakukan.
            </li>
          </ul>
          <p className="text-center font-bold">
            PASAL 14 <br /> KEADAAN MEMAKSA (Force Majeure)
          </p>
          <ul className="space-y-2">
            <li>
              14.1. Para Pihak dibebaskan dari kewajibannya berdasarkan
              Perjanjian ini dalam hal terjadinya, dan selama terjadinya suatu
              Keadaan Memaksa.
            </li>
            <li>
              14.2. Yang dimaksud dengan Keadaan Memaksa (force majeure) adalah
              suatu kejadian atau peristiwa yang yang terjadi di luar daya upaya
              manusia dan/atau tidak dapat diduga atau diprediksi sebelumnya
              atau di luar kendali kekuasaan salah satu dari Para Pihak dan/atau
              Penerbit untuk mengatasinya, yang mengakibatkan terhambatnya
              pelaksanaan kewajiban salah satu dari Para Pihak dan/atau
              Penerbit, termasuk namun tidak terbatas pada:
              <ul className="space-y-2">
                <li>
                  a. Kejadian atau peristiwa yang terjadi atas kehendak Tuhan,
                  termasuk namun tidak terbatas pada bencana alam angin topan,
                  angin puting beliung, wabah penyakit, gempa bumi, petir,
                  banjir, tsunami, kebakaran, tanah longsor dan/atau bencana
                  alam lainnya.
                </li>
                <li>
                  b. Huru-hara, kerusuhan sipil, peperangan, pemberontakan,
                  mogok kerja, sabotase, perbuatan perusakan/penghancuran
                  (vandalisme), embargo, tindakan pemerintah, perubahan
                  peraturan perundang-undangan, gangguan sistem teknologi
                  informasi dan/atau kegagalan sistem serta alih kelola sistem
                  teknologi informasi, baik yang disebabkan oleh penyadapan atau
                  peretasan oleh pihak ketiga maupun bukan dan/atau sebab-sebab
                  serupa lainnya, yang terjadi di luar kekuasaan dan kemampuan
                  Para Pihak dan/atau Penerbit yang menyebabkan Para Pihak
                  dan/atau Penerbit tidak dapat memenuhi kewajibannya
                  berdasarkan Perjanjian ini.
                </li>
              </ul>
            </li>
            <li>
              14.3. Dalam hal terjadi force majeure, Pihak yang tertimpa
              dan/atau terdampak oleh force majeure, harus memberitahukan secara
              tertulis atau melalui surat elektronik (email) kepada Pihak lain
              yang tidak tertimpa dan/atau terdampak oleh force majeure,
              selambat-lambatnya 3 (tiga) hari kalender sejak terjadinya force
              majeure dimaksud.
            </li>
            <li>
              14.4. Dalam hal force majeure berlanjut hingga dan/atau
              berlangsung lebih dari 30 (tiga puluh) hari kalender
              berturut-turut dan/atau berdasarkan besarnya dampak force majeure
              terhadap pelaksanaan Perjanjian ini, dengan berdasarkan itikad
              baik, Para pihak dapat melakukan konsultasi dan/atau musyawarah
              untuk memutuskan kelanjutan dan/atau keberlangsungan dari
              Perjanjian ini.
            </li>
            <li>
              14.5. Tidak satupun dari Para Pihak bertanggung jawab atas
              kerugian yang mungkin timbul dan/atau diderita oleh pihak lainnya
              dan/atau pihak ketiga lainnya yang disebabkan oleh suatu kegagalan
              atau keterlambatan pelaksanaan dari Perjanjian ini yang disebabkan
              oleh force majeure. Namun demikian, Pihak yang tertimpa dan/atau
              terdampak oleh force majeure, akan melakukan upaya yang sewajarnya
              untuk memenuhi kewajibannya dan/atau mengurangi kerugian bagi Para
              Pihak atas terjadinya force majeure.
            </li>
          </ul>
          <p className="text-center font-bold">
            PASAL 15 <br /> HUKUM YANG BERLAKU DAN PENYELESAIAN SENGKETA
          </p>
          <ul className="space-y-2">
            <li>
              15.1. Perjanjian ini diatur oleh dan diartikan secara keseluruhan
              sesuai dengan Hukum Negara Kesatuan Republik Indonesia. Para Pihak
              dengan ini secara tegas menyetujui untuk melaksanakan kewajiban
              mereka masing-masing sesuai dengan peraturan perundang-undang yang
              berlaku saat ini dan/atau di kemudian hari;
            </li>
            <li>
              15.2. Dalam hal di kemudian hari terdapat perbedaan, kontroversi,
              pertentangan, perselisihan sengketa, dan/atau pengaduan Pemodal
              (selanjutnya disebut &quot;Sengketa&quot;) yang mungkin timbul
              dari, atau sehubungan dengan, atau dalam pelaksanaan Perjanjian
              ini, sepanjang dimungkinkan, akan diselesaikan oleh Para Pihak
              secara musyawarah untuk mufakat;
            </li>
            <li>
              15.3. Namun, apabila penyelesaian Sengketa secara musyawarah untuk
              mufakat tidak tercapai dalam waktu selambat-lambatnya 30 (tiga
              puluh) Hari Kalender, Para Pihak sepakat untuk menyelesaikan
              Sengketa yang timbul melalui pengadilan atau di luar pengadilan;
            </li>
            <li>
              15.4. Segala perselisihan yang timbul dan para pihak memilih
              melalui pengadilan, maka kedua belah pihak akan memilih domisili
              hukum yang tetap di Kantor Panitera Pengadilan Negeri Jakarta
              Selatan;
            </li>
            <li>
              15.5. Apabila Para Pihak memilih penyelesaian sengketa di luar
              pengadilan, maka dapat dilakukan melalui 1 (satu) Lembaga
              Alternatif Penyelesaian Sengketa Sektor Jasa Keuangan (“LAPS
              Sektor Jasa Keuangan”) yang dilaksanakan sesuai dengan Peraturan
              Otoritas Jasa Keuangan mengenai LAPS Sektor Jasa Keuangan.
            </li>
          </ul>
          <p className="text-center font-bold">
            PASAL 16 <br /> BERAKHIRNYA PERJANJIAN
          </p>
          <ul className="space-y-2">
            <li>
              16.1. Perjanjian ini sewaktu-waktu, dapat diakhiri lebih cepat
              oleh salah satu dari Para Pihak, dalam hal terjadi salah satu
              kejadian sebagai berikut:
              <ul className="space-y-2">
                <li>
                  a. Pemodal berhenti, karena sebab apapun, sebagai pemegang
                  Efek dari Penerbit;
                </li>
                <li>
                  b. Atas keputusan Rapat Umum Pemegang Saham dan atau Rapat
                  Umum Pemegang Efek dari Penerbit, menyatakan pembubaran
                  perseroan terbatas Penerbit dan/atau melakukan likuidasi
                  terhadap aset material dari Penerbit;
                </li>
                <li>
                  c. Salah satu dari Para Pihak melakukan cidera janji dan/atau
                  melakukan pelanggaran atas syarat-syarat dan
                  ketentuan-ketentuan dalam Perjanjian ini dan dalam waktu 3
                  (tiga) Hari Kerja terhitung sejak dinyatakan melakukan cidera
                  janji dan/atau pelanggaran atas syarat-syarat dan
                  ketentuan-ketentuan dalam Perjanjian ini, tidak melakukan
                  perbaikan atas cidera janji dan/atau pelanggaran yang
                  dilakukannya;
                </li>
                <li>
                  d. Dalam hal Pemodal melakukan pelanggaran terhadap
                  syarat-syarat dan ketentuan-ketentuan dari Perjanjian ini dan
                  dalam waktu 3 (tiga) Hari Kerja terhitung sejak terjadinya
                  pelanggaran dimaksud, Pemodal tidak melakukan perbaikan atas
                  pelanggaran yang dilakukannya, maka Penyelenggara berhak dan
                  berwenang untuk melakukan pembatasan-pembatasan terhadap akses
                  Pemodal atas penggunaan fitur-fitur pada layanan urun dana
                  berbasis teknologi yang diselenggarakan oleh Penyelenggara;
                </li>
                <li>
                  e. Izin Penyelenggara dalam menyelenggarakan layanan urun dana
                  berdasarkan Perjanjian ini dicabut dan/atau dihentikan secara
                  tetap/permanen oleh badan dan/atau instansi pemerintah yang
                  berwenang, termasuk namun tidak terbatas pada Otoritas Jasa
                  Keuangan Republik Indonesia;
                </li>
                <li>
                  f. Salah satu dari Para Pihak menyatakan diri bangkrut
                  dan/atau dinyatakan pailit oleh suatu putusan pengadilan yang
                  sah dan mengikat (inkracht);
                </li>
                <li>
                  g. Terjadi suatu kejadian atau peristiwa force majeure, yang
                  berlanjut hingga dan/atau berlangsung lebih dari 30 (tiga
                  puluh) hari kalender berturut-turut dan hasil konsultasi
                  dan/atau musyawarah dari Para Pihak memutuskan untuk
                  mengakhiri Perjanjian ini lebih cepat;
                </li>
                <li>
                  h. Dalam hal sebagian harta maupun keseluruhan harta dari
                  salah satu pihak dalam Perjanjian ini, dilakukan penyitaan
                  atas gugatan dari pihak ketiga lainnya dan telah memperoleh
                  putusan pengadilan mengikat (inkracht); atau
                </li>
                <li>
                  i. Dalam hal pengakhiran/pembatalan Layanan Urun Dana ini,
                  Para Pihak sepakat untuk mengesampingkan keberlakuan ketentuan
                  Pasal 1266 Kitab Undang-Undang Hukum Perdata, sepanjang
                  ketentuan tersebut mensyaratkan adanya suatu putusan atau
                  penetapan pengadilan untuk menghentikan atau mengakhiri suatu
                  perjanjian, sehingga pengakhiran/pembatalan Layanan Urun Dana
                  ini cukup dilakukan dengan pemberitahuan tertulis dari salah
                  satu Pihak.
                </li>
              </ul>
            </li>
            <li>
              16.2. Pengakhiran Perjanjian ini tidak menghilangkan dan/atau
              menghapuskan hak dan kewajiban dari masing-masing pihak yang
              timbul sebelum terjadinya pengakhiran Perjanjian ini.
            </li>
          </ul>
          <p className="text-center font-bold">
            PASAL 17 <br /> LAIN-LAIN
          </p>
          <ul className="space-y-2">
            <li>
              17.1. Perjanjian ini termasuk lampiran-lampiran nya, jika ada,
              merupakan kesepakatan di antara Para Pihak sehubungan dengan
              syarat-syarat dan ketentuan-ketentuan dalam Perjanjian ini, dan
              menggantikan segala komunikasi, pembahasan, perundingan dan
              kesepakatan sebelumnya, baik secara lisan maupun tertulis;
            </li>
            <li>
              17.2. Dalam hal terdapat syarat dan/atau ketentuan dalam
              Perjanjian ini yang bertentangan dengan ketentuan hukum dan
              perundang-undangan yang berlaku, dengan itikad baik, Para Pihak
              setuju untuk mengganti dengan syarat-syarat dan
              ketentuan-ketentuan yang sah dan dapat diberlakukan sesuai dengan
              ketentuan hukum dan perundang-undangan yang berlaku. Ketika salah
              satu ketentuan dari Perjanjian ini menjadi tidak sah, tidak
              berlaku, atau tidak dapat diberlakukan dalam segala hal menurut
              ketentuan hukum dan perundang-undangan yang berlaku, maka
              ketentuan lainnya dari Perjanjian ini tidak akan terpengaruh
              dan/atau terganggu dengan cara apapun oleh hal tersebut;
            </li>
            <li>
              17.3. Dalam hal terdapat syarat dan/atau ketentuan dalam
              Perjanjian ini yang bertentangan dengan lampiran(-lampiran)nya
              dan/atau dokumen pelaksanaan lainnya, jika ada, maka Perjanjian
              ini yang akan berlaku di antara Para Pihak, dan dengan itikad
              baik, Para Pihak setuju untuk menyelesaikan dan/atau mengganti
              syarat dan/atau ketentuan yang diperselisihkan atau
              dipertentangkan dengan syarat dan/atau ketentuan yang sah dan
              dapat diberlakukan, dan/atau yang paling mendekati dengan isi
              sewajarnya dari ketentuan yang tidak sah atau tidak dapat
              diberlakukan tersebut;
            </li>
            <li>
              17.4. Apabila terdapat ketentuan dan/atau syarat yang tidak diatur
              dan/atau belum cukup diatur dalam Perjanjian ini, akan dibahas dan
              ditambahkan berdasarkan kesepakatan bersama antara Para Pihak.
              Segala perubahan dan tambahan atas Perjanjian ini, jika ada,
              termasuk lampiran-lampiran saat ini, tidak akan berlaku kecuali
              dibuat secara tertulis dan ditandatangani oleh Para Pihak dan
              merupakan satu kesatuan dan dianggap sebagai bagian yang tidak
              terpisahkan dari Perjanjian ini;
            </li>
            <li>
              17.5. Suatu kegagalan atau keterlambatan dalam melaksanakan salah
              satu hak, kekuasaan atau keistimewaan yang diperoleh berdasarkan
              Perjanjian ini, tidak akan dianggap sebagai suatu pengesampingan,
              dan tidak akan menghalangi pelaksanaan hak, kekuasaan atau
              keistimewaan tersebut atau penggunaan hak, kekuasaan atau
              keistimewaan lainnya dikemudian hari;
            </li>
            <li>
              17.6. Segala pemberitahuan dan komunikasi lainnya yang diatur
              dalam Perjanjian ini akan dilakukan melalui surat elektronik, yang
              disediakan oleh Penyelenggara pada platform penyelenggaraan
              layanan urun dana melalui penawaran efek berbasis teknologi. Salah
              satu pihak dapat melakukan perubahan atas informasi pribadi
              Pemodal, termasuk namun tidak terbatas pada alamatnya maupun nomor
              telepon, sebagaimana tercantum pada aplikasi pembukaan akun
              penggunaan layanan urun dana melalui penawaran efek berbasis
              teknologi yang disediakan oleh Penyelenggara;
            </li>
            <li>
              17.7. Judul dari setiap Pasal dari Perjanjian ini diberikan hanya
              untuk memudahkan dalam perujukan saja dan, dengan cara apapun,
              tidak akan mempengaruhi penafsiran ketentuan-ketentuan atau
              aturan-aturan dari Perjanjian ini;
            </li>
            <li>
              17.8. Perjanjian ini dibuat dalam bahasa Indonesia yang merupakan
              bahasa resmi dari Perjanjian ini, yang akan dijadikan rujukan oleh
              Para Pihak dalam menyelesaikan masalah penafsiran. Dalam hal
              terdapat alih bahasa terhadap perjanjian ini dan terdapat
              pertentangan dalam penafsiran antara versi bahasa Indonesia dan
              bahasa Inggris atau bahasa asing lainnya, jika ada, maka yang akan
              berlaku bagi Para Pihak adalah versi dalam bahasa Indonesia;
            </li>
            <li>
              17.9. Perjanjian ini telah disesuaikan dengan ketentuan peraturan
              perundang-undangan termasuk namun tidak terbatas pada ketentuan
              peraturan otoritas jasa keuangan.
            </li>
          </ul>
          <p>
            Dengan menandatangani perjanjian ini secara elektronik pada bagian
            akhir dari Perjanjian ini, Pemodal dengan ini menyatakan bahwa
            Pemodal telah membaca, memahami dan menyetujui setiap dan seluruh
            isi Perjanjian ini, Perjanjian ini mengikat secara hukum dan berlaku
            sebagai undang-undang bagi Para Pihak.
          </p>
        </div> */}
        <div className="space-y-4 px-4 text-justify text-sm">
          <h1 className="font-bold text-base text-center">
            SYARAT DAN KETENTUAN PEMODAL
          </h1>
          <p>
            FULUSME adalah Platform layanan urun dana berbasiskan teknologi
            informasi atau securities crowdfunding yang beroperasi berdasarkan
            prinsip syariah, memiliki izin Otoritas Jasa Keuangan (OJK) sebagai
            penyelenggara Securities Crowdfunding (SCF) berdasarkan SK Nomor
            No.KEP-45/D.04/2022.
          </p>
          <p>
            Kami mewajibkan setiap Pengguna Platform untuk membaca, mempelajari
            dan memahami seluruh Syarat dan Ketentuan yang berlaku pada Platform
            ini sebelum melakukan kegiatan investasi atau pembelian efek,
            berikut ini adalah persyaratan dan ketentuan yang harus dipahami
            oleh pengguna layanan FULUSME.{" "}
          </p>
          <ul className="space-y-4">
            <li>
              <p className="font-bold mb-4">I. DEFINISI</p>
              <ul className="space-y-2 list-decimal pl-4">
                <li>
                  <span className="font-bold">“Layanan Urun Dana”</span> atau
                  dikenal sebagai penyelenggaraan layanan urun dana melalui
                  penawaran Efek berbasis Teknologi Informasi (securities
                  crowdfunding) adalah penyelenggaraan layanan penawaran Efek
                  yang dilakukan oleh Penerbit untuk menjual Efek secara
                  langsung kepada Pemodal melalui jaringan Sistem Elektronik
                  yang bersifat terbuka guna pendanaan suatu Proyek.
                </li>
                <li>
                  <span className="font-bold">“Penyelenggara”</span> atau
                  selanjutnya disebut “FULUSME” adalah PT FULUSME Digital
                  Indonesia yang mempunyai kegiatan untuk menyediakan, mengelola
                  dan mengoperasikan Layanan Urun Dana serta mempunyai ijin
                  usaha dari Otoritas Jasa Keuangan serta terdaftar sebagai
                  Penyelenggara Sistem Elektronik pada kementerian yang
                  menyelenggarakan urusan pemerintahan di bidang komunikasi dan
                  informatika.{" "}
                </li>
                <li>
                  <span className="font-bold">“Pengguna”</span> adalah pengguna
                  Layanan Urun Dana yang terdiri dari Penerbit atau Pemodal.
                </li>
                <li>
                  <span className="font-bold">“Penerbit”</span> adalah badan
                  hukum Indonesia berbentuk perseroan terbatas yang menerbitkan
                  dan menawarkan Efek melalui Penyelenggara yang telah memenuhi
                  syarat-syarat yang berlaku dan ditetapkan oleh Otoritas Jasa
                  Keuangan dan/atau badan regulator lainnya (jika ada).{" "}
                </li>
                <li>
                  <span className="font-bold">“Pemodal”</span> adalah Pengguna
                  situs web yang telah mendaftarkan dirinya untuk melakukan
                  pembelian Efek Penerbit melalui Penyelenggara.{" "}
                </li>
                <li>
                  <span className="font-bold">“Akun”</span> adalah akun milik
                  masing-masing Pemodal atau Penerbit yang digunakan untuk
                  mengakses fitur-fitur di Platform Penyelenggara.
                </li>
                <li>
                  <span className="font-bold">“POJK Layanan Urun Dana”</span>{" "}
                  adalah Peraturan Otoritas Jasa Keuangan Nomor: 57/POJK.04/2020
                  tanggal 11 Desember 2020, beserta perubahan-perubahannya.{" "}
                </li>
                <li>
                  <span className="font-bold">“Data Pribadi”</span> adalah
                  informasi atau data yang digunakan secara langsung atau tidak
                  langsung untuk mengidentifikasi seorang individu, termasuk
                  namun tidak terbatas antara lain kartu tanda penduduk, foto
                  kartu tanda penduduk, foto diri, nomor handphone, alamat
                  e-mail, nomor pokok wajib pajak, akun bank, dan lain
                  sebagainya.{" "}
                </li>
                <li>
                  <span className="font-bold">“Dokumen Elektronik”</span> adalah
                  setiap informasi elektronik yang dibuat, diteruskan,
                  dikirimkan, diterima atau disimpan dalam bentuk analog,
                  digital, elektromagnetik, optikal atau sejenisnya, yang dapat
                  dilihat, ditampilkan dan/atau didengar melalui komputer) atau
                  Sistem Elektronik termasuk tetapi tidak terbatas pada tulisan,
                  suara, gambar, peta, rancangan, foto atau sejenisnya, huruf,
                  tanda, angka, kode akses, simbol atau perforasi yang memiliki
                  makna atau arti atau dapat dipahami oleh orang yang mampu
                  memahaminya.{" "}
                </li>
                <li>
                  <span className="font-bold">“KSEI”</span> atau Kustodian
                  Sentral Efek Indonesia merupakan Lembaga Penyimpanan dan
                  Penyelesaian (LPP) di Pasar Modal Indonesia yang menyediakan
                  layanan Kustodian sentral dan penyelesaian transaksi efek yang
                  teratur, wajar, dan efisien, sesuai amanat Undang-Undang No. 8
                  Tahun 1995 tentang Pasar Modal.{" "}
                </li>
                <li>
                  <span className="font-bold">“Bank Kustodian”</span> adalah
                  bank umum yang telah memperoleh persetujuan Otoritas Jasa
                  Keuangan untuk melakukan kegiatan usaha sebagai kustodian.{" "}
                </li>
                <li>
                  <span className="font-bold">“Masa Penawaran Efek”</span>{" "}
                  adalah jangka waktu atau masa penawaran Efek yang diterbitkan
                  oleh Penerbit kepada calon Pemodal yang dilakukan oleh
                  Penyelenggara dengan jangka waktu paling lama 45 (empat puluh
                  lima) hari Kalender. Masa Penawaran Efek akan berakhir dalam
                  hal:{" "}
                  <ul className="space-y-1 px-4">
                    <li>
                      a. Tanggal tertentu yang telah ditetapkan oleh Penerbit;
                      atau
                    </li>
                    <li>
                      b. Tanggal tertentu sebelum tanggal sebagaimana dimaksud
                      dalam huruf a namun seluruh Efek yang ditawarkan melalui
                      Layanan Urun Dana telah dibeli oleh Pemodal.{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">“Proyek”</span> adalah kegiatan
                  atau pekerjaan yang menghasilkan barang, jasa, dan/atau
                  manfaat lain, baik yang sudah ada maupun yang akan ada,
                  termasuk kegiatan investasi yang telah ditentukan yang menjadi
                  dasar penerbitan efek yang diterbitkan oleh Penerbit melalui
                  Layanan Urun Dana.
                </li>
                <li>
                  <span className="font-bold">“Efek”</span> adalah surat
                  berharga, yaitu surat pengakuan utang, surat berharga
                  komersial, saham, obligasi, tanda bukti utang, unit penyertaan
                  kontrak investasi kolektif, kontrak berjangka atas Efek, dan
                  setiap derivative dari Efek.{" "}
                </li>
                <li>
                  <span className="font-bold">“Obligasi”</span> adalah Efek
                  berupa sertifikat atau bukti kepemilikan yang bernilai sama
                  dan mewakili bagian yang tidak terpisahkan atas aset yang
                  mendasarinya..{" "}
                </li>
                <li>
                  <span className="font-bold">“Saham”</span> adalah Efek berupa
                  sertifikat atau bukti kepemilikan yang mewakili kepemilikan
                  atas suatu perusahaan.{" "}
                </li>
                <li>
                  <span className="font-bold">“Pra-Listing”</span> adalah Waktu
                  sebelum dimulainya masa penawaran Efek.
                </li>
                <li>
                  <span className="font-bold">“Listing”</span> adalah masa
                  penawaran Efek.
                </li>
                <li>
                  <span className="font-bold">“Pemegang Efek”</span> adalah
                  Pemodal yang telah melakukan pembelian Efek tertentu yang
                  ditawarkan oleh Penerbit melalui FULUSME.{" "}
                </li>
                <li>
                  <span className="font-bold">“RUPS”</span> adalah rapat umum
                  pemegang efek berupa saham yang diselenggarakan oleh Penerbit
                  dan difasilitasi oleh FULUSME sebagai penyelenggara layanan
                  urun dana.{" "}
                </li>
                <li>
                  <span className="font-bold">RUPO</span> adalah Rapat Umum
                  Pemegang Obligasi.
                </li>
                <li>
                  <span className="font-bold">“Platform”</span> adalah situs web
                  FULUSME.id dan/atau aplikasi mobile yang dikenal dengan nama
                  FULUSME yang dibuat dan dioperasikan oleh Penyelenggara
                  sehubungan dengan kegiatan Layanan Urun Dana.{" "}
                </li>
                <li>
                  <span className="font-bold">“Rekening Penampungan”</span> atau
                  rekening escrow account adalah rekening penampungan untuk
                  setiap dana Pengguna yang disediakan oleh Kustodian yang
                  bekerja sama dengan Penyelenggara.{" "}
                </li>
                <li>
                  <span className="font-bold">“Saldo Akun”</span> adalah dana
                  yang tersedia di setiap Akun Pemodal yang terdapat di
                  masing-masing dasbor / papan instrumen (dashboard).{" "}
                </li>
                <li>
                  <span className="font-bold">“Sistem Elektronik”</span> atau
                  dikenal sebagai sistem elektronik layanan jasa keuangan adalah
                  serangkaian perangkat dan prosedur elektronik yang berfungsi
                  mempersiapkan, mengumpulkan, mengolah, menganalisis,
                  menyimpan, menampilkan, mengumumkan, mengirimkan, dan/atau
                  menyebarkan informasi elektronik sehubungan dengan kegiatan
                  Layanan Urun Dana.{" "}
                </li>
                <li>
                  <span className="font-bold">“Syarat dan Ketentuan”</span>{" "}
                  adalah syarat-syarat dan ketentuan-ketentuan yang dibuat oleh
                  Penyelenggara dan dinyatakan di dalam Platform sehubungan
                  dengan Penyelenggara Layanan Urun Dana, yang memuat mengenai
                  peraturan, informasi, fungsi, tujuan dan manfaat atas fitur
                  dan Efek yang dipasarkan oleh Penyelenggara dan sudah
                  disetujui sebelumnya oleh Pemodal.{" "}
                </li>
                <li>
                  <span className="font-bold">“Teknologi Informasi”</span> atau
                  dikenal sebagai teknologi informasi layanan jasa keuangan
                  adalah suatu teknik untuk mengumpulkan, menyiapkan, menyimpan,
                  memproses, mengumumkan, menganalisa dan/atau menyebarkan
                  informasi di bidang layanan jasa keuangan.{" "}
                </li>
                <li>
                  <span className="font-bold">“Virtual Account”</span> adalah
                  rekening atas nama masing-masing Pemodal atau Penerbit yang
                  disediakan oleh payment gateway eksternal yang mendukung bank
                  besar di Indonesia.{" "}
                </li>
                <li>
                  <span className="font-bold">“Otoritas Jasa Keuangan”</span>{" "}
                  adalah Lembaga pemerintah yang dibentuk berdasarkan Undang-
                  Undang Nomor 21 Tahun 2011 yang berfungsi menyelenggarakan
                  sistem pengaturan dan pengawasan yang terintegrasi terhadap
                  keseluruhan kegiatan di dalam sektor jasa keuangan, termasuk
                  salah satunya adalah kegiatan Layanan Urun Dana.{" "}
                </li>
                <li>
                  <span className="font-bold">“Dana Obligasi”</span> berarti
                  jumlah keseluruhan dana yang wajib dikembalikan oleh Penerbit
                  kepada Pemodal.
                </li>
                <li>
                  <span className="font-bold">“Pendapatan Bagi Hasil”</span>{" "}
                  berarti bagian dari laba bersih yang menjadi hak dan harus
                  dibayarkan oleh Penerbit kepada Pemodal yang dihitung
                  berdasarkan perkalian antara Nisbah Pemodal dengan laba
                  bersih, yang perhitungannya didasarkan pada informasi dari
                  Penerbit, berdasarkan laporan keuangan yang dipublikasikan
                  melalui Platform FULUSME.{" "}
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold mb-4">II. JENIS EFEK</p>
              <p>
                Efek yang ditawarkan Penyelenggara berupa Efek Bersifat Ekuitas
                (EBE) atau Saham dan Efek Bersifat Utang dan/atau Sukuk (EBUS)
                atau Sukuk, dengan skema yang menerapkan prinsip profit-loss
                sharing (prinsip bagi keuntungan dan siap menanggung kerugian)
                dimana keduanya memiliki karakteristik yang berbeda, dijelaskan
                sebagai berikut:
              </p>
              <ul className="space-y-2">
                <li>
                  1.{" "}
                  <span className="underline mb-2">
                    Efek Bersifat Ekuitas (EBE) atau Saham
                  </span>{" "}
                  <ul className="px-8 space-y-1">
                    <li>
                      a. Merupakan sertifikat atau bukti kepemilikan yang
                      mewakili kepemilikan atas suatu perusahaan tertentu yang
                      menerbitkan efek dalam bentuk saham.{" "}
                    </li>
                    <li>
                      b. Merupakan saham yang diterbitkan oleh perusahaan skala
                      kecil dan menengah.
                    </li>
                    <li>
                      c. Kepemilikan Saham dapat dijual kembali melalui Pasar
                      Sekunder yang diselenggarakan oleh FULUSME paling banyak 2
                      (dua) kali dalam periode 1 (satu) tahun, yang dilaksanakan
                      selama 10 (sepuluh) hari kerja, dimana harga pembukaan di
                      Pasar Sekunder akan ditentukan berdasarkan kinerja laporan
                      keuangan perusahaan Penerbit.{" "}
                    </li>
                    <li>
                      d. Berhak memperoleh dividen dari laba bersih perusahaan
                      berdasarkan laporan keuangan yang dipublikasikan.
                    </li>
                    <li>
                      e. Efek disimpan pada Lembaga Penyimpan dan Penyelesaian
                      (KSEI) dan dicatat pada Bank Kustodian yang ditunjuk oleh
                      Penyelenggara.{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  2.{" "}
                  <span className="underline mb-2">
                    Efek Bersifat Utang dan/atau Sukuk (EBUS) atau Sukuk
                  </span>{" "}
                  <ul className="px-8 space-y-1">
                    <li>
                      a. Bukti kepemilikan yang bernilai sama dan mewakili
                      bagian tidak terpisahkan dari proyek atau bisnis tertentu
                      yang menjadi dasar penerbitannya.
                    </li>
                    <li>b. Tidak dapat diperjualbelikan di Pasar Sekunder.</li>
                    <li>
                      c. Berhak memperoleh bagi hasil dari keuntungan proyek
                      atau bisnis tertentu yang menjadi dasar penerbitan efek,
                      serta berhak memperoleh kembali modalnya sesuai dengan
                      realisasi pendapatan proyek atau bisnis yang menjadi dasar
                      penerbitan efek.
                    </li>
                    <li>
                      d. Dapat berubah menjadi utang apabila terjadi wanprestasi
                      Penerbit yang mekanismenya disampaikan pada prospektus
                      penerbitan Efek.
                    </li>
                    <li>
                      e. Efek Bersifat Utang dan/atau Sukuk (EBUS) atau Sukuk
                      yang telah berubah menjadi utang tidak dapat dialihkan
                      kepada pihak ketiga, sehingga pemegang efek harus menunggu
                      realisasi pembayaran (pengembalian) dari Penerbit.
                    </li>
                    <li>
                      f. Penyelenggara dapat melakukan upaya-upaya untuk
                      mempercepat realisasi pembayaran sesuai dengan prosedur
                      hukum yang berlaku serta tidak bertentangan dengan aturan.{" "}
                    </li>
                    <li>
                      g. Efek disimpan pada Lembaga Penyimpan dan Penyelesaian
                      (KSEI) dan dicatat pada Bank Kustodian yang ditunjuk oleh
                      Penyelenggara.{" "}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold mb-4">III. MEKANISME PEMBELIAN EFEK</p>
              <ul className="space-y-2 list-decimal pl-4">
                <li>
                  Pembelian Efek oleh Pemodal dalam penawaran Efek melalui
                  Layanan Urun Dana dilakukan dengan menyetorkan sejumlah dana
                  pada Escrow Account.{" "}
                </li>
                <li>
                  Manfaat bersih dari penempatan dana sebagaimana dimaksud dalam
                  ketentuan ini akan dikembalikan kepada Pemodal secara
                  proporsional.{" "}
                </li>
                <li>
                  Pemodal yang membeli Efek melalui Penyelenggara akan mendapat
                  bukti kepemilikan berupa catatan kepemilikan Efek yang
                  terdapat dalam rekening Efek pada Bank Kustodian. Laporan
                  kepemilikan Efek sebagaimana dimaksud akan disampaikan oleh
                  Bank Kustodian.
                </li>
                <li>
                  Penyelenggara akan mendistribusikan Efek kepada Pemodal
                  setelah penyerahan dana kepada Penerbit melalui mekanisme yang
                  berlaku di Lembaga Penyimpan dan Penyelesaian (KSEI).
                  Pendistribusian dimaksud dapat dilakukan secara elektronik
                  melalui penitipan kolektif pada Kustodian.{" "}
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold mb-4">IV. DIVIDEN</p>
              <ul className="space-y-2 list-decimal pl-4">
                <li>
                  Pemodal yang membeli Efek Bersifat Ekuitas (EBE) atau Saham
                  akan menjadi “Pemegang Saham” perusahaan Penerbit dan berhak
                  mendapatkan imbal hasil berupa Dividen.{" "}
                </li>
                <li>
                  Pemodal mengerti dan memahami bahwa pembagian dividen kepada
                  para pemegang Saham tidak bersifat lifetime, karena Penerbit
                  merupakan badan usaha berbadan hukum yang dapat melakukan
                  Buyback sebagaimana diatur dalam peraturan perundang-undangan
                  yang berlaku.{" "}
                </li>
                <li>
                  Mekanisme perhitungan dividen disampaikan melalui prospektus
                  penerbitan saham dengan ketentuan sebagai berikut:{" "}
                  <ul className="px-8 space-y-1">
                    <li>
                      a. Dividen interim, merupakan dividen yang dibagikan
                      kepada para pemegang saham berdasarkan keuntungan bersih
                      perusahaan tengah tahun setelah adanya publikasi kinerja
                      laporan keuangan posisi 30 Juni, dengan besaran maksimal
                      30% dari laba bersih perusahaan.{" "}
                    </li>
                    <li>
                      b. Dividen, merupakan dividen sebenarnya yang dibagikan
                      kepada para pemegang saham berdasarkan keuntungan bersih
                      perusahaan selama periode satu tahun setelah adanya
                      publikasi laporan keuangan posisi 31 Desember, dengan
                      besaran sesuai dengan dividen payout ratio yang telah
                      ditetapkan dan dikurangi dengan dividen interim yang telah
                      dibagikan.{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  Pemodal mengerti dan memahami bahwa pembagian dividen Penerbit
                  diinformasikan di dalam kebijakan dividen dan didasarkan pada
                  laba bersih Penerbit setelah dikurangi dengan pencadangan.
                </li>
                <li>
                  Pemodal mengerti dan memahami bahwa pembagian dividen final
                  Penerbit mengacu pada persetujuan Rapat Umum Pemegang Saham
                  (“RUPS”) Penerbit.{" "}
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold mb-4">V. IMBAL HASIL</p>
              <ul className="space-y-2 list-decimal pl-4">
                <li>
                  Pemodal yang membeli Efek Bersifat Utang dan/atau Sukuk (EBUS)
                  atau Sukuk akan mendapatkan imbal hasil berupa bagi hasil,
                  margin, atau imbal jasa sesuai dengan perjanjian yang
                  digunakan pada masing-masing penerbitan efek.{" "}
                </li>
                <li>
                  Mekanisme skema perhitungan imbal hasil disampaikan melalui
                  prospektus pada setiap penerbitan efek oleh Penerbit.{" "}
                </li>
                <li>
                  Pemodal mengerti dan memahami bahwa Penerbit akan membayar
                  harga jual efek kepada Pemodal, yang akan dibayarkan oleh
                  Penerbit pada saat jatuh tempo sesuai dengan skema Perjanjian.
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold mb-4">VI. BIAYA-BIAYA</p>
              <ul className="space-y-2 list-decimal pl-4">
                <li>
                  Penyelenggara membebankan biaya terkait dengan penggunaan
                  Platform FULUSME pada kegiatan Layanan Urun Dana yaitu Biaya
                  Platform.{" "}
                </li>
                <li>
                  Jika terdapat perubahan kebijakan dari Penyelenggara terkait
                  biaya-biaya ini, akan diinformasikan kemudian kepada Pemodal
                  melalui Platform.{" "}
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold mb-4">VII. PASAR SEKUNDER</p>
              <ul className="space-y-2 list-decimal pl-4">
                <li>
                  Penyelenggara dapat menyediakan sistem bagi Pemodal untuk
                  memperdagangkan Efek Penerbit yang telah dijual melalui
                  Layanan Urun Dana yang diselenggarakan Penyelenggara.{" "}
                </li>
                <li>
                  Pelaksanaan perdagangan Efek sebagaimana dimaksud diatas wajib
                  dilakukan dengan ketentuan:{" "}
                  <ul className="space-y-1 px-3">
                    <li>
                      a. Perdagangan Efek hanya berlaku bagi Efek Bersifat
                      Ekuitas (EBE) atau Saham yang telah didistribusikan di
                      KSEI paling singkat 1 (satu) tahun sebelum perdagangan
                      Efek;{" "}
                    </li>
                    <li>
                      b. Hanya dapat dilakukan antar sesama Pemodal yang
                      terdaftar pada Penyelenggara;
                    </li>
                    <li>
                      c. Dalam jangka waktu 12 (dua belas) bulan hanya dapat
                      dilakukan 2 (dua) kali perdagangan Efek; dan{" "}
                    </li>
                    <li>
                      d. Jangka waktu pelaksanaan perdagangan Efek dengan
                      perdagangan Efek lainnya paling singkat 6 (enam) bulan.{" "}
                    </li>
                    <li>
                      e. Pelaksanaan perdagangan Efek paling lama dilakukan
                      selama 10 (sepuluh) hari kerja.
                    </li>
                  </ul>
                </li>
                <li>
                  Sistem sebagaimana dimaksud pada ketentuan ini dapat:
                  <ul className="space-y-1 px-3">
                    <li>
                      a. Menyediakan harga wajar sebagai referensi penjual dan
                      pembeli; dan
                    </li>
                    <li>
                      b. Menyediakan sistem komunikasi bagi Pengguna yang dapat
                      digunakan sebagai sarana komunikasi antar Pengguna untuk
                      membeli atau menjual Efek.{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  Ketentuan terkait perdagangan Efek ini{" "}
                  <span className="underline">tidak berlaku</span> bagi Efek
                  Bersifat Utang dan/atau Sukuk (EBUS) atau Sukuk.
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold mb-4">
                VIII. HAK DAN KEWAJIBAN PARA PIHAK
              </p>
              <p className="mb-2">
                Masing-masing Pihak mempunyai hak dan kewajiban sebagai berikut:
              </p>
              <p className="font-bold underline">HAK DAN KEWAJIBAN PEMODAL</p>
              <ul className="p-4 space-y-2">
                <li>
                  <p className="font-bold">a. HAK PEMODAL</p>
                  <ul className="list-disc space-y-2">
                    <li>
                      Pemodal dapat memperoleh informasi mengenai rencana
                      penjualan Efek Penerbit melalui situs web Penyelenggara,
                      berita email, sosial media Penyelenggara atau media
                      informasi lainnya yang digunakan.{" "}
                    </li>
                    <li>
                      Pemodal dapat membeli Efek Penerbit melalui situs web
                      Penyelenggara selama masa penawaran Efek berlangsung.{" "}
                    </li>
                    <li>
                      Pemodal dapat membatalkan pembelian Efek paling lambat
                      dalam waktu 48 (empat puluh delapan) jam setelah melakukan
                      pembelian Efek dan sebelum masa penjualan Efek ditutup.{" "}
                    </li>
                    <li>
                      Dalam hal terjadi pembatalan pembelian Efek, maka Pemodal
                      akan menerima pengembalian dana paling lambat 2 (dua) Hari
                      Kerja setelah pembatalan, namun dapat dikenakan biaya riil
                      terkait dengan adanya pembatalan atas Efek dimaksud atau
                      pengembalian dana tersebut.{" "}
                    </li>
                    <li>
                      Pemodal yang telah membeli suatu Efek Penerbit tertentu
                      berhak untuk menerima laporan atau informasi dari
                      Penyelenggara ketika masa penawaran Efek tersebut telah
                      selesai.{" "}
                    </li>
                    <li>
                      Pemodal yang telah membeli suatu Efek Penerbit tertentu
                      berhak untuk menerima laporan atau informasi dari
                      Penyelenggara ketika sudah dilakukan akad antara
                      Penyelenggara dan Penerbit, serta penyerahan dana kepada
                      Penerbit Efek tersebut.{" "}
                    </li>
                    <li>
                      Pemegang Efek Bersifat Utang dan/atau Sukuk (EBUS) atau
                      Sukuk penerbit berhak menerima laporan dari penerbit
                      melalui Platform website atas penggunaan dana,
                      perkembangan dan progress proyek/ bisnis yang menjadi
                      dasar penerbitan sukuk tersebut.{" "}
                    </li>
                    <li>
                      Pemegang Efek Bersifat Ekuitas (EBE) atau Saham penerbit
                      berhak menerima laporan keuangan perusahaan Penerbit
                      paling sedikit berupa laporan neraca dan laba-rugi
                      triwulanan.{" "}
                    </li>
                    <li>
                      Pemegang Efek Bersifat Utang dan/atau Sukuk (EBUS) atau
                      Sukuk penerbit berhak memperoleh bagi hasil dari Penerbit
                      atas realisasi keuntungan bersih atas proyek/ bisnis yang
                      menjadi dasar penerbitan sukuk tersebut setelah ada
                      laporan dari Penerbit.{" "}
                    </li>
                    <li>
                      Pemegang Efek Bersifat Ekuitas (EBE) atau Saham penerbit
                      berhak memperoleh dividen dari keuntungan bersih
                      perusahaan sesuai dengan dividen payout ratio yang telah
                      ditetapkan, sebagai berikut:{" "}
                      <ul className="px-4 list-decimal space-y-2 mt-2">
                        <li>
                          Dividen interim, merupakan dividen yang dibagikan
                          kepada para pemegang saham berdasarkan keuntungan
                          bersih perusahaan tengah tahun setelah adanya
                          publikasi kinerja laporan keuangan posisi 30 Juni,
                          dengan besaran maksimal 30% dari laba bersih
                          perusahaan.
                        </li>
                        <li>
                          Dividen, merupakan dividen sebenarnya yang dibagikan
                          kepada para pemegang saham berdasarkan keuntungan
                          bersih perusahaan selama periode satu tahun setelah
                          adanya publikasi laporan keuangan posisi 31 Desember,
                          dengan besaran sesuai dengan dividen payout ratio yang
                          telah ditetapkan dan dikurangi dengan dividen interim
                          yang telah dibagikan.
                        </li>
                        <li>
                          Pemegang Efek Bersifat Ekuitas (EBE) atau Saham
                          Syariah penerbit berhak melakukan penjualan saham yang
                          dimiliki melalui pasar sekunder yang diselenggarakan
                          oleh FULUSME, paling cepat 1 (satu) tahun setelah efek
                          tersebut terdistribusi di KSEI.{" "}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="font-bold"> b. KEWAJIBAN PEMODAL </p>
                  <ul className="list-disc space-y-2">
                    <li>Pemodal wajib membayar Biaya Platform.</li>
                    <li>
                      Pemodal wajib membayar seluruh biaya yang dibebankan oleh
                      Pihak Ketiga.
                    </li>
                    <li>
                      Di dalam pembelian Efek, Pemodal wajib untuk memiliki dan
                      menjaga kemampuan untuk membeli Efek, memiliki kemampuan
                      analisis risiko terhadap Efek, dan memenuhi kriteria
                      Pemodal sebagai berikut:{" "}
                      <ul className="px-4 list-decimal mt-2 space-y-2">
                        <li>
                          Apabila Pemodal mempunyai penghasilan sampai dengan
                          Rp500.000.000 (lima ratus juta Rupiah) per tahun, maka
                          Pemodal dapat membeli Efek melalui Layanan Urun Dana
                          paling banyak sebesar 5% (lima persen) dari
                          penghasilannya per tahun; dan{" "}
                        </li>
                        <li>
                          Apabila Pemodal mempunyai penghasilan lebih dari
                          Rp500.000.000 (lima ratus juta Rupiah), maka Pemodal
                          dapat membeli Efek melalui Layanan Urun Dana paling
                          banyak sebesar 10% (sepuluh persen) dari
                          penghasilannya per tahun.{" "}
                        </li>
                        <li>
                          Kriteria Pemodal dan batasan pembelian Efek oleh
                          Pemodal di atas tidak berlaku dalam hal Pemodal
                          merupakan badan hukum dan pihak yang mempunyai
                          pengalaman berinvestasi di pasar modal yang dibuktikan
                          dengan bukti kepemilikan rekening Efek paling sedikit
                          2 (dua) tahun sebelum penawaran Efek.{" "}
                        </li>
                      </ul>
                    </li>
                    <li>
                      Pemodal wajib untuk memberikan dokumen dan/atau informasi
                      yang sah / valid dan dapat dipertanggungjawabkan atas diri
                      Pemodal, termasuk Pemodal ataupun wakilnya telah mempunyai
                      kapasitas hukum dan/atau ijin yang diperlukan dari lembaga
                      pemerintah yang berwenang.
                    </li>
                    <li>
                      Pemodal wajib untuk memahami, menerima dan menyetujui
                      segala hal yang diatur dalam Syarat dan Ketentuan ini.{" "}
                    </li>
                    <li>
                      Bersedia untuk diawasi oleh Penyelenggara atas segala
                      bentuk transaksi yang dilakukan oleh Pemodal, dilakukan
                      proses autentikasi, verifikasi dan validasi yang mendukung
                      kenirsangkalan (tidak dapat disangkalnya) dalam mengakses,
                      memproses dan mengeksekusi Data Pribadi, data transaksi
                      dan data keuangan Pemodal yang dikelola oleh Penyelenggara
                      dan pihak ketiga yang telah bekerja sama dengan
                      Penyelenggara terkait dengan Layanan Urun Dana ini.{" "}
                    </li>
                    <li>
                      Menyetujui penggunaan, pemanfaatan, dan pengungkapan Data
                      Pribadi, dan data keuangan oleh Penyelenggara sesuai
                      dengan ketentuan yang berlaku.{" "}
                    </li>
                    <li>
                      Menjamin dan bersedia untuk diverifikasi oleh
                      Penyelenggara guna memastikan dana milik Pemodal yang
                      digunakan dalam investasi di Layanan Urun Dana adalah
                      memang benar dana milik Pemodal dan bukan diperoleh dari
                      tindakan yang melanggar peraturan perundang- undangan,
                      termasuk di antara lain korupsi, penggelapan, pencurian,
                      ataupun pencucian uang ataupun pendanaan dari dan/atau
                      untuk tindakan terorisme.{" "}
                    </li>
                    <li>
                      Pemodal wajib mengijinkan Penyelenggara menyampaikan detil
                      data Pemodal ke Bank Kustodian dan Lembaga Penyimpanan dan
                      Penyelesaian sehubungan dengan kegiatan Layanan Urun Dana
                      ini.{" "}
                    </li>
                    <li>
                      Pemodal wajib memahami semua risiko investasi yang dapat
                      terjadi pada proyek yang diinvestasikan.
                    </li>
                    <li>
                      Pemodal menanggung semua risiko investasi yang terjadi dan
                      membebaskan Penyelenggara dari segala tuntutan dan risiko
                      yang ada.{" "}
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="font-bold underline">
                HAK DAN KEWAJIBAN PENYELENGGARA{" "}
              </p>
              <ul className="p-4 space-y-2">
                <li className="font-bold">a. HAK PENYELENGGARA</li>
                <ul className="list-disc space-y-2">
                  <li>Pemodal wajib membayar Biaya Platform.</li>
                  <li>
                    Dalam hal Penerbit melakukan pembatalan penawaran Efek
                    sebelum masa penawaran paling lama 45 (empat puluh lima)
                    hari kalender, maka Pemodal membebaskan Penyelenggara atas
                    denda atau suatu biaya lainnya jika ada, namun Pemodal
                    berhak untuk meminta biaya pemindahbukuan terkait
                    pengembalian dana, jika ada, kepada Penerbit.{" "}
                  </li>
                  <li>
                    Penyelenggara berhak untuk melakukan kerjasama dan
                    pertukaran data dengan penyelenggara layanan pendukung
                    berbasis Teknologi Informasi dan pihak ketiga yang telah
                    bekerja sama dengan Penyelenggara dalam rangka meningkatkan
                    kualitas Layanan Urun Dana.
                  </li>
                </ul>
                <li className="font-bold">b. KEWAJIBAN PENYELENGGARA</li>
                <ul className="list-disc space-y-2">
                  <li>
                    Melaksanakan reviu terhadap Pemodal dan Penerbit, dari segi
                    legalitas, dokumentasi dan informasi yang wajib dipenuhi
                    oleh Pemodal dan Penerbit sesuai dengan peraturan Otoritas
                    Jasa Keuangan, termasuk kewajiban untuk mengunggah dokumen
                    dan/atau informasi tersebut secara daring di Platform.{" "}
                  </li>
                  <li>
                    Menginformasikan kepada Pemodal mengenai penerimaan dan
                    penggunaan dana investasi dan saldo yang diinvestasikan oleh
                    Pemodal, termasuk pengkinian atas dana investasi dan/atau
                    saldo akun.{" "}
                  </li>
                  <li>
                    Menyampaikan informasi kepada Pemodal mengenai penerimaan,
                    penundaan atau penolakan permohonan Layanan Urun Dana,
                    termasuk alasan penundaan dan penolakan dimaksud.
                  </li>
                  <li>
                    Menyediakan fasilitas komunikasi secara daring antara
                    Pemodal dengan Penerbit.{" "}
                  </li>
                  <li>
                    Menyampaikan informasi mengenai risiko, setidaknya meliputi
                    risiko usaha, investasi, likuiditas, kelangkaan pembagian
                    dividen, dilusi kepemilikan Efek dan kegagalan Sistem
                    Elektronik.{" "}
                  </li>
                  <li>
                    Memiliki sistem untuk memastikan hanya Pemodal yang telah
                    memberikan konfirmasi mengenai pemenuhan persyaratan Pemodal
                    yang dapat berinvestasi melalui Layanan Urun Dana.{" "}
                  </li>
                  <li>Menyediakan layanan pengaduan.</li>
                  <li>
                    Memuat dalam Platform mengenai biaya yang dikenakan atau
                    dibebankan kepada Pemodal.{" "}
                  </li>
                  <li>
                    Mempunyai mekanisme pengembalian dana dalam hal penawaran
                    Efek melalui Layanan Urun Dana batal demi hukum.
                  </li>
                  <li>
                    Wajib memiliki sumber daya manusia yang memiliki keahlian
                    dan/atau latar belakang di bidang Teknologi Informasi
                    ataupun keahlian dalam melakukan reviu terhadap Penerbit.
                  </li>
                  <li>
                    Mempunyai pengamanan dan mitigasi risiko atas pelaksanaan
                    Layanan Urun Dana, termasuk terkait dengan teknologi
                    informasi, pusat data dan pusat pemulihan bencana.
                  </li>
                  <li>
                    Menyediakan cara pembayaran melalui bank yang bersifat unik
                    untuk setiap Pemodal yang melakukan pembelian Efek melalui
                    Layanan Urun Dana.{" "}
                  </li>
                  <li>
                    Menjaga kerahasiaan, keutuhan dan ketersediaan Data Pribadi,
                    data transaksi dan data keuangan yang dikelola Penyelenggara
                    sejak data diperoleh hingga data tersebut dimusnahkan.
                  </li>
                  <li>
                    Memastikan tersedianya proses autentikasi, verifikasi, dan
                    validasi yang mendukung kenirsangkalan dalam mengakses,
                    memproses, dan mengeksekusi Data Pribadi, data transaksi,
                    dan data keuangan yang dikelola Penyelenggara;{" "}
                  </li>
                  <li>
                    Menyediakan media komunikasi lain selain Sistem Elektronik
                    Layanan Urun Dana untuk memastikan kelangsungan layanan
                    Pemodal yang dapat berupa surat elektronik, call center,
                    atau media komunikasi lainnya.{" "}
                  </li>
                  <li>
                    Melaporkan setiap pengaduan Pengguna disertai dengan tindak
                    lanjut penyelesaian pengaduan dimaksud kepada Otoritas Jasa
                    Keuangan.
                  </li>
                  <li>
                    Memiliki catatan secara terpisah detil kepemilikan dana
                    untuk setiap Pemodal yang disimpan dalam Rekening
                    Penampungan.{" "}
                  </li>
                </ul>
              </ul>
            </li>
            <li>
              <p className="font-bold mb-4">IX. PEMBERIAN KUASA</p>
              <ul className="px-4 space-y-2 list-decimal">
                <li>
                  Pemodal memberikan kuasa kepada FULUSME untuk melakukan
                  pembukaan sub rekening efek di Bank Kustodian dan pembuatan
                  Single Investor Identification (SID) di KSEI.{" "}
                </li>
                <li>
                  Pemodal memberikan kuasa kepada FULUSME terhadap administrasi
                  rekening efek atas nama Pemodal termasuk namun tidak terbatas
                  untuk melakukan pemindahbukuan efek dan/atau dana dalam rangka
                  transaksi Layanan Urun Dana atau kepentingan lain atas nama
                  Pemodal.
                </li>
                <li>
                  Selama Pemodal menjadi pemegang efek Penerbit di FULUSME,
                  Pemodal sepakat dan setuju untuk memberikan kuasa kepada
                  FULUSME untuk menyampaikan kelengkapan data Pemodal kepada
                  Lembaga Penyimpanan dan Penyelesaian dan Bank Kustodian dengan
                  tujuan pencatatan nama Pemodal dalam Rekening Efek pada
                  kustodian dan/atau segala kebutuhan administrasi yang
                  diperlukan lainnya termasuk namun tidak terbatas untuk
                  melakukan pemindahbukuan Efek dan/atau dana dalam rangka
                  Transaksi Securities Crowdfunding atau kepentingan lain atas
                  nama Pemodal.{" "}
                </li>
                <li>
                  Selama Pemodal menjadi pemegang efek Penerbit di FULUSME,
                  dengan ini Pemodal sepakat dan setuju untuk memberikan kuasa
                  kepada FULUSME untuk dapat menghadiri Rapat Umum Pemegang
                  Saham (RUPS) dan atau Rapat Umum Pemegang Obligasi (RUPO) yang
                  diselenggarakan oleh Penerbit dan memberikan suara; dalam hal
                  Pemodal berhalangan untuk menghadiri Rapat Umum Pemegang Saham
                  (RUPS) dan atau Rapat Umum Pemegang Obligasi (RUPO).{" "}
                </li>
                <li>
                  Selama Pemodal menjadi pemegang efek Penerbit di FULUSME,
                  dengan ini Pemodal sepakat dan setuju untuk memberikan kuasa
                  kepada FULUSME untuk bertindak mewakili kepentingan pemegang
                  Efek dalam hal memberikan persetujuan perubahan jadwal
                  pembayaran efek sukuk penerbit, perubahan underlying
                  penerbitan sukuk, perubahan nisbah bagi hasil dan perubahan
                  struktur lainnya yang diajukan oleh penerbit.
                </li>
                <li>
                  Pemodal sepakat dan setuju untuk memberikan kuasa kepada
                  FULUSME untuk melakukan pengurusan segala aspek legalitas,
                  termasuk namun tidak terbatas menghadap dan/atau hadir di
                  hadapan Notaris, untuk menandatangani, menyerahkan segala
                  surat/ akta/ kelengkapan dokumen yang diperlukan, dan
                  memberikan segala keterangan yang diperlukan untuk pengurusan
                  dokumen legal, (jika diperlukan).{" "}
                </li>
                <li>
                  Pemodal sepakat dan setuju untuk memberikan kuasa kepada
                  FULUSME untuk melakukan pengurusan segala aspek perbankan dari
                  Penerbit dalam konteks layanan kustodian, termasuk namun tidak
                  terbatas pada pembukaan rekening atas nama Penerbit;
                </li>
                <li>
                  Pemodal setuju untuk memberikan kuasa kepada FULUSME untuk
                  melakukan administrasi dan penyimpanan seluruh dokumentasi dan
                  legalitas Penerbit (apabila diperlukan);
                </li>
                <li>
                  Selama Pemodal menjadi pemegang efek Penerbit, Pemodal sepakat
                  dan setuju untuk memberikan kuasa kepada FULUSME untuk
                  melakukan settlement instruction kepada partisipan Lembaga
                  Penyimpanan dan Penyelesaian untuk melakukan dan menyelesaikan
                  pemindahbukuan termasuk transaksi pada Pasar Sekunder;{" "}
                </li>
                <li>
                  {" "}
                  Selama Pemodal menjadi pemegang Efek Penerbit, Pemodal sepakat
                  dan setuju untuk memberikan kuasa kepada FULUSME untuk
                  melakukan termasuk namun tidak terbatas untuk memantau
                  perkembangan pengelolaan Proyek berdasarkan data dan/atau
                  informasi yang diperoleh baik langsung maupun tidak langsung;
                  melakukan pembagian imbal hasil; mengawasi dan memantau
                  pelaksanaan kewajiban Penerbit berdasarkan perjanjian;
                  mengawasi, melakukan inspeksi, dan mengadministrasikan jaminan
                  bagi pembayaran kewajiban kepada pemegang Efek (jika terdapat
                  jaminan); dan memantau pembayaran yang dilakukan Penerbit
                  kepada pemegang Efek;{" "}
                </li>
                <li>
                  Selama Pemodal menjadi pemegang Efek Penerbit, maka Pemodal
                  dapat memberikan kuasa kepada FULUSME untuk melakukan segala
                  urusan yang diperlukan dan mewakili kepentingan pemegang Efek
                  Penerbit yang berkaitan dengan tanggung jawab, berlaku selama
                  Pemodal memiliki Efek Penerbit, termasuk namun tidak terbatas
                  untuk mengurus kepentingan dalam hal terjadinya gagal bayar
                  oleh Penerbit, dan menyelenggarakan Rapat Umum Pemegang
                  Obligasi (RUPO) jika diperlukan sesuai dengan peraturan yang
                  berlaku.{" "}
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold mb-4">X. RAPAT PEMEGANG EFEK</p>
              <p>
                Rapat pemegang efek merupakan pertemuan antara para pemegang
                efek dengan penerbit efek yang diselenggarakan secara tatap muka
                atau online/ daring dan dapat difasilitasi oleh FULUSME sebagai
                penyelenggara layanan urun dana.
              </p>
              <ul className="pl-8 space-y-2 list-decimal">
                <li>
                  Rapat Umum Pemegang Saham (RUPS) merupakan rapat yang
                  diselenggarakan untuk memaparkan, membahas dan atau memutuskan
                  agenda tertentu yang berkaitan dengan keberlangsungan usaha
                  penerbit serta rencana strategis perusahaan.{" "}
                </li>
                <li>
                  Rapat Umum Pemegang Obligasi (RUPO) merupakan rapat yang
                  diselenggarakan untuk memaparkan, membahas dan atau memutuskan
                  agenda tertentu yang berkaitan dengan keberlangsungan proyek
                  yang menjadi dasar penerbitan sukuk serta rencana strategis
                  perusahaan penerbit.{" "}
                </li>
                <li>
                  Rapat umum pemegang efek dapat diselenggarakan atas permintaan
                  penerbit sukuk atau saham, penyelenggara layanan urun dana
                  FULUSME, OJK atau pemegang efek secara bersama sama yang
                  mewakili paling sedikit lebih dari 50% (lima puluh persen)
                  dari jumlah efek dengan mengajukan permohonan tertulis kepada
                  penyelenggara untuk diselenggarakan rapat umum pemegang efek,
                  permohonan tersebut harus memuat agenda yang diminta serta
                  melampirkan identitas KTP dan bukti persetujuan para pemegang
                  efek yang mengajukan permohonan tersebut.{" "}
                </li>
                <li>
                  Penyelenggara dapat menolak permohonan rapat umum pemegang
                  efek dan akan memberitahukan secara tertulis alasan penolakan
                  tersebut kepada pemohon paling lambat 14 (empat belas) Hari
                  Kalender setelah diterimanya surat permohonan.{" "}
                </li>
                <li>
                  Pengumuman rapat umum pemegang efek akan disampaikan oleh
                  penyelenggara layanan urun dana FULUSME paling lambat 1 (satu)
                  hari kerja sebelum rapat dilakukan.{" "}
                </li>
                <li>
                  Pemegang efek yang berhak hadir dalam RUPS atau RUPO adalah
                  pemegang efek yang namanya tercatat dalam Daftar Pemegang efek
                  sukuk atau saham syariah penyelenggara layanan urun dana
                  FULUSME dan wajib menunjukkan nama atau identitas yang asli
                  yang terdaftar dalam platform FULUSME.{" "}
                </li>
                <li>
                  Pemegang efek yang berhalangan hadir pada rapat umum pemegang
                  efek dapat mengirimkan perwakilan atau diwakilkan oleh FULUSME
                  sesuai dengan yang telah diatur dalam syarat dan ketentuan
                  ini.
                </li>
                <li>
                  Dalam hal pemegang efek memberikan kuasa kepada orang lain,
                  wajib menyampaikan permohonan kepada FULUSME dan menunjukan
                  surat kuasa tertulis dengan melampirkan copy kartu identitas
                  KTP. FULUSME sebagai penyelenggara layanan urun dana dapat
                  menolak permohonan kuasa apabila dinilai tidak valid.{" "}
                </li>
                <li>
                  Setiap 1 (satu) unit penyertaan efek berhak mengeluarkan 1
                  (satu) suara dalam rapat umum pemegang efek, dengan demikian
                  setiap Pemegang efek dalam rapat umum mempunyai hak untuk
                  mengeluarkan suara sejumlah efek yang dimilikinya.{" "}
                </li>
                <li>
                  Teknis tata cara pelaksanaan rapat umum pemegang efek,
                  pemungutan suara dan pelaporan hasil rapat disampaikan secara
                  tersendiri pada setiap pelaksanaan rapat umum pemegang efek.
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold mb-4">XI. HARGA EFEK </p>
              <ul className="pl-8 space-y-2 list-decimal">
                <li>
                  Harga Efek akan ditentukan dan diinformasikan oleh
                  Penyelenggara kepada Pemodal di{" "}
                  <span className="italic">Platform</span> yang dapat berubah
                  dari waktu ke waktu.{" "}
                </li>
                <li>
                  Harga Efek belum termasuk dengan biaya-biaya yang timbul
                  terkait dengan layanan Kustodian yang wajib dipenuhi oleh
                  Pemodal.{" "}
                </li>
                <li>
                  Khusus untuk transaksi di pasar sekunder, maka Pemodal akan
                  dikenakan biaya tambahan, selain dari harga Efek, berupa biaya
                  transaksi jual beli.{" "}
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold mb-4">XII. PAJAK</p>
              <p>
                Seluruh aspek perpajakan yang timbul atas transaksi dalam
                Layanan Urun Dana ini menjadi beban masing-masing pihak sesuai
                dengan Undang-Undang Perpajakan yang berlaku.{" "}
              </p>
            </li>
            <li>
              <p className="font-bold mb-4">XIII. INFORMASI RISIKO</p>
              <p>
                Investasi pada Layanan Urun Dana Berbasis Teknologi merupakan
                aktivitas berisiko tinggi, investasi yang Pemodal sertakan pada
                suatu Efek tertentu memiliki potensi mengalami kenaikan,
                penurunan, bahkan kegagalan. Beberapa risiko yang terkandung
                pada aktivitas ini diantaranya:{" "}
              </p>
              <ul className="pl-8 space-y-2 list-decimal font-bold">
                <li>
                  <h2>Risiko Usaha </h2>
                  <p className="font-normal">
                    Risiko usaha adalah kemungkinan terjadinya ketidakberhasilan
                    suatu bisnis atau proyek tertentu karena faktor-faktor
                    internal maupun eksternal sehingga proyeksi keuntungan yang
                    direncanakan tidak tercapai atau bahkan dapat terjadi
                    kerugian.{" "}
                  </p>
                </li>
                <li>
                  <h2>Risiko Kerugian Investasi </h2>
                  <p className="font-normal">
                    Risiko kerugian investasi adalah kemungkinan terjadinya
                    penurunan nilai atau kehilangan sebagian atau seluruh modal
                    yang diinvestasikan dalam suatu instrumen keuangan atau aset
                    tertentu.
                  </p>
                </li>
                <li>
                  <h2>Risiko Likuiditas </h2>
                  <p className="font-normal">
                    Investasi melalui layanan urun dana FULUSME bukan merupakan
                    instrumen investasi yang likuid, karena efek yang ditawarkan
                    melalui FULUSME berupa sukuk tidak dapat diperdagangkan di
                    pasar sekunder dan efek berupa saham syariah hanya dapat
                    diperjualbelikan melalui mekanisme pasar sekunder pada
                    Platform FULUSME, dimana periode pelaksanaan pasar sekunder
                    tersebut juga dibatasi oleh peraturan OJK.
                  </p>
                </li>
                <li>
                  <h2>Risiko Pembagian Dividen </h2>
                  <p className="font-normal">
                    Kelangkaan dividen mengacu pada situasi di mana suatu
                    perusahaan atau entitas yang biasanya membayar dividen
                    kepada pemegang sahamnya tidak dapat melakukannya dalam
                    jangka waktu tertentu. Ini dapat terjadi karena berbagai
                    alasan, termasuk kinerja keuangan yang buruk, perubahan
                    dalam kondisi pasar, ketidakstabilan ekonomi, tekanan
                    likuiditas, atau keputusan manajemen untuk mengalokasikan
                    dana untuk investasi lain. Kelangkaan dividen dapat
                    menyebabkan harga saham menurun dan mengurangi daya tarik
                    bagi investor yang mencari pendapatan dividen.
                  </p>
                </li>
                <li>
                  <h2>Dilusi Kepemilikan Saham </h2>
                  <p className="font-normal">
                    Dilusi kepemilikan saham terjadi ketika ada pertambahan
                    total jumlah saham yang beredar sehingga terjadi
                    perubahan/penurunan persentase kepemilikan saham.
                  </p>
                </li>
                <li>
                  <h2>Risiko Kegagalan Sistem Elektronik </h2>
                  <p className="font-normal">
                    Platform FULUSME sudah menerapkan sistem elektronik dan
                    keamanan data yang handal. Namun, tetap dimungkinkan terjadi
                    gangguan sistem teknologi informasi dan kegagalan sistem,
                    yang dapat menyebabkan aktivitas anda di Platform menjadi
                    gagal atau tertunda.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold mb-4">XIV. PERNYATAAN DAN JAMINAN</p>
              <ul className="pl-8 space-y-2 list-decimal">
                <li>
                  Penyelenggara dilarang untuk:
                  <ul className="pl-4 space-y-1">
                    <li>
                      a. Memiliki hubungan afiliasi dengan Penerbit yang
                      menggunakan Layanan Urun Dana;
                    </li>
                    <li>
                      b. Memberikan bantuan keuangan kepada Pemodal untuk
                      berinvestasi pada Efek Penerbit yang menggunakan Layanan
                      Urun Dana;{" "}
                    </li>
                    <li>
                      c. Memberikan nasihat investasi dan/atau rekomendasi
                      kepada Pemodal dan/atau calon Pemodal untuk berinvestasi
                      pada Penerbit;{" "}
                    </li>
                    <li>
                      d. Memberikan hadiah/kompensasi kepada pihak yang
                      memberikan informasi mengenai Pemodal potensial;{" "}
                    </li>
                    <li>e. Menerima dan/atau menyimpan dana Pemodal;</li>
                    <li>
                      f. Memberikan perlakuan yang berbeda kepada setiap
                      Pengguna;{" "}
                    </li>
                    <li>
                      g. Mempublikasikan informasi yang tidak benar terkait
                      Layanan Urun Dana yang diselenggarakan;{" "}
                    </li>
                    <li>
                      h. Melakukan penawaran Layanan Urun Dana kepada Pengguna
                      dan/atau masyarakat melalui sarana komunikasi pribadi
                      tanpa persetujuan Pengguna; dan
                    </li>
                    <li>
                      i. Mengenakan biaya apapun kepada Pengguna atas pengajuan
                      pengaduan.{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  Para Pihak telah mengerti, memahami dan menerima adanya
                  ketentuan yang disyaratkan oleh Otoritas Jasa Keuangan dan
                  dicantumkan oleh Penyelenggara di Platform terkait dengan
                  pemasaran suatu Efek yang diterbitkan oleh Penerbit berupa:
                  <ul className="pl-4 space-y-1">
                    <li>
                      a. “OTORITAS JASA KEUANGAN TIDAK MEMBERIKAN PERNYATAAN
                      MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA
                      MENYATAKAN KEBENARAN ATAU KECUKUPAN INFORMASI DALAM
                      LAYANAN URUN DANA INI. SETIAP PERNYATAAN YANG BERTENTANGAN
                      DENGAN HAL TERSEBUT ADALAH PERBUATAN MELANGGAR HUKUM.”;
                    </li>
                    <li>
                      b. “INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN
                      PERLU MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN
                      PADA TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI
                      DENGAN PENYELENGGARA”; dan
                    </li>
                    <li>
                      c. “PENERBIT DAN PENYELENGGARA, BAIK SENDIRI-SENDIRI
                      MAUPUN BERSAMA-SAMA, BERTANGGUNG JAWAB SEPENUHNYA ATAS
                      KEBENARAN SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN
                      URUN DANA INI.”.{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  Masing-masing Pihak menyatakan dan menjamin bahwa Pihak
                  tersebut, termasuk wakil/kuasanya, maupun direktur, komisaris
                  dan karyawannya ataupun pihak terkait, apabila ada, tidak
                  mempunyai ataupun menjaga dari kemungkinan terjadinya
                  perbenturan kepentingan (conflict of interest) dengan Pihak
                  lainnya, ataupun pihak ketiga lainnya termasuk dengan
                  Kustodian.
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold mb-4">XV. KEJADIAN KELALAIAN</p>
              <ul className="list-decimal pl-4">
                <li>
                  Kejadian kelalaian timbul apabila salah satu atau lebih dari
                  kejadian-kejadian berikut ini dilaksanakan, yaitu:{" "}
                  <ul className="space-y-1 pl-4">
                    <li>
                      a. Masing-masing Pihak tidak memenuhi kewajibannya dan
                      melanggar ketentuan-ketentuan yang terdapat di dalam terms
                      and conditions;{" "}
                    </li>
                    <li>
                      b. Pernyataan-pernyataan dan/atau jaminan-jaminan yang
                      diberikan oleh masing-masing Pihak ternyata dikemudian
                      hari diketahui tidak benar dan yang tidak dapat diperbaiki
                      sehingga menimbulkan kerugian langsung yang diderita oleh
                      salah satu Pihak;{" "}
                    </li>
                    <li>
                      c. Masing-masing Pihak mengajukan permohonan kepada
                      instansi yang berwenang untuk dinyatakan pailit atau untuk
                      diberikan penundaan membayar hutang-hutang (surseance van
                      betaling) atau bilamana orang/pihak lain mengajukan
                      permohonan kepada instansi yang berwenang agar Pihak
                      dimaksud dinyatakan dalam keadaan pailit;{" "}
                    </li>
                    <li>
                      d. Salah satu Pihak dibubarkan atau dilikuidasi atau
                      menghentikan atau mengabaikan kegiatan operasional
                      perusahaan;{" "}
                    </li>
                    <li>
                      e. Izin usaha dari salah satu Pihak dicabut oleh
                      pemerintah sehingga tidak mampu memenuhi
                      kewajiban-kewajibannya berdasarkan Syarat dan Ketentuan
                      ini;{" "}
                    </li>
                    <li>
                      f. Setiap kejadian, selain dari kejadian-kejadian yang
                      diuraikan di atas, yang mempunyai pengaruh terhadap para
                      Pihak.{" "}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold mb-4">XVI. KEADAAN MEMAKSA</p>
              <ul className="list-decimal pl-4 space-y-2">
                <li>
                  FULUSME tidak bertanggung jawab atas penundaan atau kegagalan
                  dalam pelaksanaan kewajibannya berdasarkan Syarat dan
                  Ketentuan ini yang disebabkan oleh suatu keadaan yang memaksa,
                  yaitu setiap peristiwa atau kejadian di luar kekuasaan manusia
                  yang terbatas pada bencana alam, kebakaran, aksi mogok kerja,
                  epidemi, peperangan atau huru-hara yang secara langsung dan
                  nyata mempengaruhi kemampuan salah satu Pihak untuk memenuhi
                  kewajibannya berdasarkan Syarat dan Ketentuan ini.{" "}
                </li>
                <li>
                  Segala permasalahan yang timbul sebagai akibat dari adanya
                  suatu keadaan memaksa akan diselesaikan terlebih dahulu secara
                  musyawarah.{" "}
                </li>
                <li>
                  Dalam hal terjadinya suatu keadaan memaksa, FULUSME dapat
                  memberitahukan secara tertulis mengenai terjadinya keadaan
                  memaksa tersebut dengan menyampaikan bukti-bukti yang relevan
                  kepada Pemodal selambat-lambatnya 30 (tiga puluh) Hari
                  Kalender terhitung sejak tanggal terjadinya keadaan memaksa
                  yang dimaksud.{" "}
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold mb-4">
                XVII. HUKUM YANG MENGATUR DAN PENYELESAIAN PERSELISIHAN
              </p>
              <ul className="list-decimal pl-4 space-y-2">
                <li>
                  Layanan Urun Dana ini dibuat, ditafsirkan, dan dilaksanakan
                  serta segala akibat yang ditimbulkannya diatur dan tunduk pada
                  hukum Negara Republik Indonesia.{" "}
                </li>
                <li>
                  Setiap perselisihan yang timbul antara Pemodal dan
                  Penyelenggara atas pelaksanaan Layanan Urun Dana ini maka Para
                  Pihak setuju untuk menyelesaikannya terlebih dahulu secara
                  musyawarah untuk mufakat dalam waktu 30 (tiga puluh Hari
                  Kalender).{" "}
                </li>
                <li>
                  Apabila perselisihan tidak dapat diselesaikan dalam jangka
                  waktu dimaksud maka Para Pihak dengan ini sepakat untuk
                  menyelesaikannya melalui Pengadilan Agama Jakarta Selatan.{" "}
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold mb-4">XVIII. HAK KEKAYAAN INTELEKTUAL</p>
              <ul className="list-decimal pl-4 space-y-2">
                <li>
                  Seluruh kepemilikan dan hak kekayaan intelektual suatu Pihak
                  atas spesifikasi, gambar, cetak ulang, rancangan atau karya
                  seni yang disediakan dan/atau dibuat untuk pelaksanaan Layanan
                  Urun Dana, pekerjaan pencetakan, informasi atau data teknis
                  dan setiap informasi lain (termasuk, namun tidak terbatas
                  pada, informasi yang terkait dengan bisnis masing- masing
                  Pihak atau anak perusahaan atau afiliasinya) (secara
                  keseluruhan disebut sebagai “Informasi”) yang dibuat dan
                  diserahkan oleh salah satu Pihak kepada Pihak lain setiap saat
                  tetap menjadi milik Pihak dimaksud.{" "}
                </li>
                <li>
                  Informasi milik suatu Pihak yang diserahkan oleh Pihak
                  tersebut kepada Pihak lain sehubungan dengan Layanan Urun Dana
                  ini maka akan dijaga kerahasiaannya oleh Pihak lain (termasuk
                  setiap dari para pejabat, karyawan atau agennya) dan Pihak
                  lain tidak akan mengungkapkan atau membuka atau menyerahkan
                  kepada pihak ketiga dan Informasi yang diterima dimaksud akan
                  dikembalikan atas permintaan Pihak pemilik Informasi dengan
                  biaya yang ditanggung sepenuhnya oleh Pihak lain.{" "}
                </li>
                <li>
                  Informasi hanya digunakan untuk pelaksanaan Layanan Urun Dana
                  ini dan tidak boleh digunakan untuk tujuan lain kecuali
                  disepakati oleh Para Pihak secara tertulis. Terutama, hak
                  kekayaan intelektual yang terdapat dalam rancangan, alat,
                  pola, gambar, data, informasi dan peralatan yang diserahkan
                  oleh suatu Pihak pemilik hak kekayaan intelektual kepada Pihak
                  lain berdasarkan Layanan Urun Dana ini, maka hak eksklusif
                  untuk penggunaan dan reproduksi atas hak kekayaan intelektual
                  adalah milik Pihak pemilik hak kekayaan intelektual dimaksud
                  sepenuhnya, tanpa adanya kewajiban atas royalti dan/atau suatu
                  pembayaran lain kepada Pihak lain. Adanya pelanggaran atas
                  ketentuan ini yang dilakukan oleh suatu Pihak akan memberikan
                  hak ganti rugi kepada Pihak yang mengalami kerugian.{" "}
                </li>
              </ul>
            </li>
            <li className="space-y-4">
              <p>
                Setelah Pemodal membubuhkan{" "}
                <span className="font-bold">tanda centang (✔) </span>
                pada kotak persetujuan secara elektronik atas syarat dan
                ketentuan ini, maka dengan ini Pemodal{" "}
                <span className="font-bold underline">
                  menyatakan setuju, telah membaca, mengerti, memahami serta
                  tunduk
                </span>{" "}
                pada setiap syarat dan ketentuan serta tunduk pada peraturan
                Otoritas Jasa Keuangan Nomor 57/POJK.04/2020 beserta
                perubahan-perubahannya.{" "}
              </p>
              <p>
                Oleh karena itu, dalam pelaksanaannya, Pemodal menyatakan dan
                menjamin untuk selalu tetap mematuhi setiap ketentuan yang ada
                dalam syarat dan ketentuan ini dengan penuh tanggung jawab dan
                profesional.{" "}
              </p>
              <p>
                Syarat dan Ketentuan ini dibuat dan diberikan persetujuan secara
                elektronik oleh Pemodal dalam keadaan sehat jasmani dan sadar
                secara penuh serta tanpa adanya paksaan dari pihak manapun.{" "}
              </p>
            </li>
          </ul>
        </div>
        {/* <div className="p-4 space-y-24 my-16">
          <div className="flex justify-between w-full">
            <div>
              <p className="font-bold">Penyelenggara</p>
              <p>
                PT. FINTEK ANDALAN SOLUSI <br /> TEKNOLOGI (FULUSME)
              </p>
            </div>
            <p className="font-bold">Pemodal</p>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <p className="font-bold">Emil Dharma</p>
              <p>Direktur Utama</p>
            </div>
            <div>
              <p className="font-bold">
                {user.profile.nama_depan + " " + user.profile.nama_belakang}
              </p>
            </div>
          </div>
        </div> */}
        <div className="p-4 flex justify-between text-sm items-center">
          <div>
            <input
              type="checkbox"
              id="agreeCheckbox"
              className="accent-sky"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="agreeCheckbox" className="ml-2">
              Saya setuju dengan syarat dan ketentuan
            </label>
          </div>
          <button
            onClick={handleSubmit}
            className={`w-32 py-2 text-white font-bold rounded-lg ${
              isCheckboxChecked ? "bg-sky hover:bg-blue-700" : "bg-gray-400"
            }`}
            disabled={!isCheckboxChecked}
          >
            Setuju
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;

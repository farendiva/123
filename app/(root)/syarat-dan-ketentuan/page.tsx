import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan | FULUSME",
  description: "Halaman Syarat dan Ketentuan FULUSME",
};

const SyaratKetentuan = () => {
  return (
    <div className="w-4/5 lg:w-3/5 mx-auto mb-16 text-sky space-y-6">
      <div className="flex items-center my-8 gap-2 lg:gap-4 lg:my-0">
        <img src="/icons/fulusme.svg" alt="Fulusme Icon" />
        <h1 className="text-2xl lg:text-[40px]">
          Syarat dan Ketentuan <span className="font-bold">Fulusme</span>
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <div
          id="terms"
          className="h-128 text-justify overflow-y-scroll bg-[#f7f7ff] rounded-xl space-y-2 p-4 w-full"
        >
          <p>
            Selamat datang di Fulusme, Platform layanan urun dana berbasis
            teknologi informasi atau securities crowdfunding, yang telah
            memiliki izin OJK sebagai penyelenggara Securities Crowdfunding
            (SCF) berdasarkan SK Nomor KEP-45/D.04/2022 Tanggal 4 Juli 2022 Izin
            Usaha Penyelenggara Penawaran Efek Melalui Layanan Urun Dana
            Berbasis Teknologi Informasi.
          </p>
          <p>
            Kami mewajibkan setiap Pengguna Fulusme untuk membaca, mempelajari
            dan memahami seluruh Syarat dan Ketentuan yang berlaku di Platform
            ini sebelum melakukan kegiatan investasi atau pembelian efek,
            berikut ini adalah persyaratan dan ketentuan yang harus dipahami
            oleh pengguna layanan Fulusme.
          </p>
          <ul className="space-y-1">
            <li className="font-bold">Definisi</li>
            <li>
              1. Penyelenggara adalah PT Fintek Andalan Solusi Teknologi
              (“Fulusme”) sebagai pihak yang menyediakan, mengelola dan
              mengoperasikan Layanan Urun Dana.
            </li>
            <li>
              2. Layanan adalah Layanan Urun Dana yang diselenggarakan oleh
              Fulusme atau layanan-layanan lain yang disediakan di dalam dan
              melalui Platform Fulusme.
            </li>
            <li>
              3. Penawaran Efek melalui Layanan Urun Dana Berbasis Teknologi
              Informasi yang selanjutnya disebut Layanan Urun Dana adalah
              penyelenggaraan layanan penawaran efek yang dilakukan oleh
              penerbit untuk menjual efek secara langsung kepada pemodal melalui
              jaringan sistem elektronik yang bersifat terbuka.
            </li>
            <li>4. Pengguna adalah Penerbit dan Pemodal. </li>
            <li>
              5. Penerbit adalah badan usaha Indonesia baik yang berbentuk badan
              hukum maupun badan usaha lainnya yang menerbitkan Efek melalui
              Layanan Urun Dana.{" "}
            </li>
            <li>
              6. Pemodal adalah pihak yang melakukan pembelian Efek melalui
              Layanan Urun Dana.
            </li>
            <li>
              7. POJK Layanan Urun Dana adalah Peraturan Otoritas Jasa Keuangan
              Nomor : 57/POJK.04/2020, beserta setiap perubahan-perubahannya
              dari waktu ke waktu.
            </li>
            <li>
              8. Efek adalah surat berharga, yaitu surat pengakuan utang, surat
              berharga komersial, saham, obligasi, tanda bukti utang, unit
              penyertaan kontrak investasi kolektif, kontrak berjangka atas Efek
              dan setiap derivatif dari Efek.
            </li>
            <li>
              9. Rekening Efek adalah rekening yang dibuka oleh Pemodal pada
              bank kustodian yang ditunjuk oleh Fulusme dan melalui Platform
              Fulusme sebelum Pemodal dapat melakukan transaksi dan/ atau
              pembelian Efek.
            </li>
            <li>
              10. Sukuk adalah Efek syariah berupa sertifikat atau bukti
              kepemilikan yang bernilai sama dan mewakili bagian yang tidak
              terpisahkan atau tidak terbagi (syuyu’), atas aset yang
              mendasarinya.
            </li>
            <li>
              11. Platform Fulusme adalah (a) portal web dan atau versi mobile
              dari portal web yang dibuat, dimiliki, dan dikelola oleh Fulusme
              yang saat ini terletak di dan dapat diakses pada URL berikut:
              www.fulusme.id berikut perubahan URL tersebut dari waktu ke waktu
              dan/ atau (b) aplikasi mobile dari www.fulusme.id yang dibuat,
              dimiliki, dan dioperasikan oleh Fulusme termasuk iOS dan android
              berikut perubahannya dari waktu ke waktu.
            </li>
            <li>
              12. Hari Kalender adalah hari Senin sampai dengan hari Minggu,
              termasuk hari libur Nasional yang ditetapkan Pemerintah Indonesia
              sebagaimana perhitungan tahun kalender Masehi.
            </li>
            <li>
              13. Hari Kerja adalah hari kerja dimana Penyelenggara beroperasi.{" "}
            </li>
            <li>
              14. Perjanjian Layanan Urun Dana adalah perjanjian antara
              Penyelenggara dengan Pemodal atau Penerbit yang akan
              ditandatangani secara tertulis atau elektronik sebelum Pengguna
              melakukan transaksi atau penghimpunan dana melalui Platform
              Fulusme.{" "}
            </li>
            <li>
              15. “OTP” (One Time Password) adalah password yang dibuat dan
              digunakan satu kali per setiap kali melakukan transaksi.
            </li>
            <li>
              16. “CDD” (Customer Due Dilogence) adalah prinsip yang diterapkan
              institusi jasa keuangan untuk mengetahui identitas nasabah,
              memantau kegiatan transaksi nasabah termasuk pelaporan transaksi
              yang mencurigakan dan sudah menjadi kewajiban institusi jasa
              keuangan untuk menerapkannya.
            </li>
            <li>
              17. “Tanda Tangan Elektronik” adalah tanda tangan yang terdiri
              atas informasi elektronik yang dilekatkan, terasosiasi atau
              terkait dengan informasi elektronik lainnya yang digunakan sebagai
              alat verifikasi dan otentikasi, dengan tunduk pada ketentuan
              Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi
              Elektronik.
            </li>
            <li>
              18. “Otoritas Jasa Keuangan” yang selanjutnya disebut dengan “OJK”
              adalah lembaga yang independen dan bebas dari campur tangan pihak
              lain, yang mempunyai fungsi, tugas, dan wewenang pengaturan,
              pengawasan, pemeriksaan, dan penyidikan, sebagaimana dimaksud
              dalam Undang-Undang Nomor 21 Tahun 2011 tentang Otoritas Jasa
              Keuangan.
            </li>
            <li>
              19. “Prospektus” adalah dokumen ringkasan Penerbit untuk penawaran
              umum yang berisi informasi profil perusahaan, laporan keuangan,
              dan gambaran kondisi perusahaan.
            </li>
            <li>
              20. “Escrow Account” adalah rekening giro di bank atas nama
              Penyelenggara yang digunakan untuk menerima dan/atau menyimpan
              dana pemodal hasil dari penawaran efek.
            </li>
            <li>
              21. “ALUDI” (Asosiasi Layanan Urun Dana Indonesia) adalah asosiasi
              penyelenggara platform Layanan Urun Dana yang secara resmi
              ditunjuk Otoritas Jasa Keuangan
            </li>
          </ul>
          <p className="font-bold">Layanan</p>
          <p>
            Fulusme.id memberikan layanan urun dana untuk penawaran efek
            berbasis teknologi informasi. Layanan ini memungkinkan Anda untuk
            menerbitkan efek bersifat utang dan/atau efek bersifat ekuitas untuk
            ditawarkan kepada Pemodal. Anda dapat mempublikasikan prospektus
            dalam platform Fulusme.id sebagai bahan analisis dan pertimbangan
            Pemodal sebelum membeli efek.{" "}
          </p>
          <p>
            Layanan yang Fulusme.id berikan tidak bersifat memaksa atau mengikat
            bagi Anda. Anda tidak diharuskan untuk mengisi dan/atau mengirimkan
            informasi, data dan/atau dokumen perusahaan Anda pada platform
            Fulusme.id jika Anda merasa keberatan. Pengambilan keputusan dalam
            hal pengiriman informasi, data dan/atau dokumen murni dilakukan oleh
            Anda.
          </p>
          <p>
            Fulusme.id berhak untuk kapan saja menampilkan, mempublikasikan,
            mengubah, menghapus, menghilangkan, dan/atau menambahkan informasi,
            data, dan/atau dokumen yang ada di platform Fulusme.id.
          </p>
          <p className="font-bold">Penggunaan Layanan</p>
          <p>
            Anda diperkenankan menggunakan layanan Fulusme.id hanya untuk
            keperluan mewakili perusahaan Anda. Platform Fulusme.id hanya boleh
            digunakan secara langsung oleh wakil perusahaan yang diberikan
            mandat yang sah.
          </p>
          <p>
            Layanan Fulusme.id hanya diperuntukkan bagi perusahaan tertutup
            berbentuk Perseroan Terbatas yang sah di mata hukum dengan kekayaan
            bersih tidak lebih dari Rp 10.000.000.000 (sepuluh miliar rupiah),
            tidak termasuk tanah dan bangunan; bukan badan usaha yang dikuasai
            secara langsung atau tidak langsung oleh perusahaan konglomerasi;
            dan bukan perusahaan asing.
          </p>
          <p>
            Anda bertanggung jawab terhadap semua aktivitas yang Anda lakukan di
            dalam platform Fulusme.id termasuk namun tidak terbatas pada
            pemeliharaan kata sandi, penggunaan OTP, pemberian informasi yang
            valid, keputusan mengajukan penawaran, dan lain-lain.
          </p>
          <p>
            Anda menyadari bahwa setiap bentuk komunikasi dan instruksi Anda
            terhadap Fulusme.id akan direkam dan diperlakukan sebagai bukti
            walaupun tidak berbentuk dokumen tertulis atau bertanda tangan
            basah. Anda menyetujui untuk melepaskan Fulusme.id dari segala
            tuntutan yang mungkin muncul sehubungan dengan instruksi yang Anda
            berikan.
          </p>
          <p className="font-bold">
            PERNYATAAN ANTI PENCUCIAN UANG, PENCEGAHAN PENDANAAN TERORISME DAN
            PENCEGAHAN PENDANAAN PROLIFERASI SENJATA PEMUSNAH MASSAL DI SEKTOR
            JASA KEUANGAN{" "}
          </p>
          <p>
            Seiring dengan peningkatan risiko dalam penawaran efek melalui
            Layanan Urun Dana berbasis teknologi informasi (Securities
            Crowdfunding), maka PT. Fintek Andalan Solusi Teknologi “Fulusme”
            sebagai “Penyelenggara” juga berkewajiban menerapkan program anti
            pencucian uang, pencegahan pendanaan terorisme dan pencegahan
            pendanaan proliferasi senjata pemusnah massal untuk meminimalisir
            potensi risiko yang mungkin timbul di kemudian hari yang didasarkan
            pada pendekatan berbasis risiko (risk based approach) sesuai dengan
            ketentuan hukum yang berlaku di Negara Kesatuan Republik Indonesia.
            Fulusme berkomitmen untuk melaksanakan Program Anti Pencucian Uang,
            Pencegahan Pendanaan Terorisme dan Pencegahan Pendanaan Proliferasi
            Senjata Pemusnah Massal (APU PPT dan PPPSPM ) sesuai dengan:{" "}
          </p>
          <p>
            A. Peraturan OJK No. 8 tahun 2023 tentang Penerapan Program Anti
            Pencucian Uang, Pencegahan Pendanaan Terorisme dan Pencegahan
            Pendanaan Proliferasi Senjata Pemusnah Massal di Sektor Jasa
            Keuangan.
          </p>
          <p>
            B. Otoritas Jasa Keuangan Nomor 57/POJK.04/2020 tentang Penawaran
            Efek Melalui Layanan UrunDana Berbasis Teknologi Informasi.{" "}
          </p>
          <p>
            C. Kebijakan dan prosedur APU PPT dan PPPSPM telah mendapat
            persetujuan dari Direksi dan Komisaris.
          </p>
          <p>Kebijakan dan prosedur APU PPT dan PPPSPM meliputi:</p>
          <ul className="space-y-1">
            <li>
              1. Pelaporan secara berkala pelaksanaan APU PPT dan PPPSPM kepada
              Direksi dan Dewan Komisaris.
            </li>
            <li>2. Penunjukkan Pejabat Penanggung Jawab APU PPT dan PPPSPM.</li>
            <li>
              3. Uji Tuntas Pengguna/Customer Due Diligence (CDD) terkait
              identifikasi, verifikasi, dan pemantauan pengguna.
            </li>
            <li>
              4. Uji Tuntas Lanjut/Enhanced Due Diligence (EDD) untuk penerimaan
              Politically Exposed Person (PEP) dan Nasabah Risiko Tinggi,
              termasuk persetujuan pejabat senior.
            </li>
            <li>
              5. Identifikasi dan penilaian tingkat risiko atas penerapan APU
              PPT dan PPPSPM melalui pendekatan berbasis risiko (Risk Based
              Approach) dengan memperhatikan faktor-faktor terkait nasabah,
              negara atau area geografis, produk dan jasa, dan jaringan
              distribusi.
            </li>
            <li>
              6. Identifikasi dan verifikasi pengguna oleh Pihak Lain dan/atau
              Pihak Ketiga.
            </li>
            <li>
              7. Identifikasi dan Verifikasi Pemilik Manfaat (Beneficial Owner).
            </li>
            <li>
              8. Pengkinian data pengguna dan dokumen pendukung secara periodik.
            </li>
            <li>
              9. Penolakan /pembatalan transaksi dan/atau pengakhiran hubungan
              usaha, termasuk larangan menawarkan dan memelihara rekening atau
              jasa kepada pengguna anonim.
            </li>
            <li>
              10. Penyaringan data pengguna dan transaksi pengguna terhadap
              watchlists yang diterbitkan oleh otoritas berwenang, antara lain
              melalui Daftar Terduga Teroris dan Organisasi Teroris (DTTOT), dan
              Daftar Pendanaan Proliferasi Senjata Pemusnah Massal (DPPSP).
            </li>
            <li>
              11. Pelaporan Laporan Transaksi Keuangan Mencurigakan (LTKM),
              laporan Transaksi Keuangan Tunai dan laporan lain kepada PPATK
              sebagaimana diatur dalam ketentuan peraturan perundang-undangan
              yang mengatur mengenai pencegahan dan pemberantasan tindak pidana
              Pencucian Uang.{" "}
            </li>
            <li>
              12. Pelatihan dan sosialisasi kebijakan dan prosedur APU PPT dan
              PPPSPM bagi karyawan secara berkelanjutan.
            </li>
            <li>13. Anti tipping-off.</li>
          </ul>
          <p className="font-bold">
            PENGGUNA MENGAKUI DAN SEPAKAT BAHWA SYARAT DAN KETENTUAN LAYANAN INI
            ADALAH MERUPAKAN SUATU PERJANJIAN YANG SAH DAN MENGIKAT FULUSME DAN
            PENGGUNA BERDASARKAN HUKUM NEGARA REPUBLIK INDONESIA.
          </p>
          <p>Prosedur layanan konsumen (Penyampaian Informasi)</p>
          <ul className="space-y-1">
            <li>1. Prosedur penerimaan penanganan pengaduan konsumen</li>
            <li>
              2. Pengguna mengajukan keluhan atau pengaduan dengan menghubungi
              layanan Contact Center Fulusme, melalui media telepon dan email.
              Pencatatan data pengguna dan kebutuhan informasi Pada saat
              customer berinteraksi dengan Contact Center Fulusme maka agen akan
              mencatat informasi dari pengguna. Jika pengaduan diluar fitur yang
              ada di fulusme, maka permintaan pengaduan akan ditolak.
              <ul className="space-y-1">
                <li>
                  A. Peraturan OJK No. 22 tahun 2023 tentang Perlindungan
                  Konsumen dan Masyarakat di Sektor Jasa Keuangan
                </li>
                <li>
                  B. Otoritas Jasa Keuangan Nomor 57/POJK.04/2020 tentang
                  Penawaran Efek Melalui Layanan UrunDana Berbasis Teknologi
                  Informasi.{" "}
                </li>
                <li>
                  C. Perjanjian Penyelenggaraan Penawaran Efek Melalui Layanan
                  Urun Dana Berbasis Teknologi Informasi antara PT Fintek
                  Andalan Solusi Teknologi dan Pemodal
                </li>
                <li>
                  D. Kebijakan dan prosedur pengaduan konsumen telah mendapat
                  persetujuan dari Direksi dan Komisaris.
                </li>
              </ul>
            </li>
          </ul>
          <p className="font-bold">RISIKO</p>
          <p>
            Pemodal mengakui dan menyadari bahwa setiap usaha memiliki resiko
            nya masing- masing. Untuk itu, dengan berinvestasi melalui
            Penyelenggara, Pemodal dengan ini mengerti akan segala risiko yang
            dapat terjadi di kemudian hari, diantaranya meliputi risiko:
          </p>
          <ul className="space-y-1">
            <li>1. Usaha</li>
            <li>2. Kerugian Investasi</li>
            <li>3. Likuiditas</li>
            <li>4. Kelangkaan pembagian dividen</li>
            <li>5. Dilusi kepemilikan saham</li>
            <li>6. Gagal Bayar</li>
            <li>7. Kegagalan Sistem Elektronik</li>
            <li>8. Perubahan Status Kesyariahan Efek.</li>
          </ul>
          <p>
            Atas resiko yang dijelaskan di atas, Pemodal dengan ini membebaskan
            Penyelenggara dari segala klaim, tuntutan, ganti rugi yang terkait
            dengan risiko yang mungkin akan timbul dan/atau mungkin akan terjadi
            atas kegiatan usaha Penerbit, termasuk namun tidak terbatas pada
            kegagalan kegiatan usaha Penerbit untuk memperoleh penghasilan
            dan/atau profit maupun Penerbit dinyatakan bangkrut maupun pailit
            yang dapat terjadi dikemudian hari.{" "}
          </p>
          <p className="font-bold">HAK DAN KEWAJIBAN</p>
          <ul className="space-y-1">
            <li>
              1. Penyelenggara berhak, atas kebijakannya sendiri, dan dengan
              memberikan alasan kepada Pengguna (apabila ada penolakan), untuk
              menentukan apakah Pengguna berhak untuk diberikan Layanan.
            </li>
            <li>
              2. Dalam menggunakan Layanan, Pengguna wajib untuk tunduk pada S&K
              Layanan ini dan segala syarat dan ketentuan yang diatur di dalam
              Perjanjian Layanan Urun Dana
            </li>
            <li>
              3. Pemodal wajib untuk memberikan data dan informasi yang
              sebenar-benarnya, lengkap, sesuai dengan dokumen aslinya, otentik,
              benar dan akurat serta masih berlaku dan dapat dipertanggung
              jawabkan pada saat pembukaan Akun untuk menggunakan Platform
              Fulusme. Selanjutnya, Pemodal juga menyatakan bahwa tanda tangan
              yang diberikan dan/atau dibubuhkan baik secara fisik maupun
              elektronik adalah benar tanda tangan Pemodal dan bukan merupakan
              tanda tangan pihak lain.
            </li>
            <li>
              4. Pemodal wajib untuk selalu membaca, memeriksa, menganalisa dan
              mengevaluasi proposal, data, informasi maupun kelengkapan dokumen
              dari usaha Penerbit yang dimuat melalui Platform Fulusme dan
              Pemodal dengan ini menyatakan dan menjamin bahwa Pemodal akan
              memilih kegiatan usaha dari Penerbit secara sadar, tanpa ada bujuk
              rayu, paksaan, ancaman dan pengaruh dari pihak manapun termasuk
              dari Penyelenggara.
            </li>
            <li>
              5. Penerbit wajib untuk bertanggung jawab penuh terhadap kualitas,
              akurasi dan kelengkapan informasi yang disediakan oleh Pengguna
              kepada Penyelenggara dan menjadi acuan bagi Penyelenggara dalam
              memberikan dan/atau menyajikan data-data dan informasi-informasi
              terkait dengan kegiatan usaha Penerbit melalui Platform Fulusme
              dan yang menjadi acuan Pemodal dalam memeriksa, menganalisa dan
              mengevaluasi proposal, data, informasi maupun kelengkapan dokumen
              dari usaha Penerbit serta dalam menentukan pilihan investasinya.
              Dan karenanya, Penerbit dengan ini menyatakan membebaskan
              Penyelenggara dari setiap klaim, tuntutan, gugatan dari Pemodal
              dan/atau pihak ketiga lainnya terkait dengan kualitas, akurasi dan
              kelengkapan informasi yang mungkin akan timbul dan/atau mungkin
              akan terjadi terhadap setiap data dan proposal kegiatan
              operasional, keuntungan usaha maupun risiko kegiatan operasional
              Penerbit yang disajikan dan/atau diinformasikan oleh Penyelenggara
              kepada Pemodal melalui Platform Fulusme.
            </li>
            <li>
              6. Penyelenggara setiap saat berhak untuk memodifikasi, mengubah,
              mengurangi, menambah atau melakukan apapun terhadap Layanan untuk
              alasan apapun, tanpa persetujuan sebelumnya dari Pengguna.
              Selanjutnya Penyelenggara dapat sewaktu-waktu memberikan update
              atas Layanan.
            </li>
            <li>
              7. Pengguna berhak untuk diberikan dukungan teknis serta edukasi
              terkait penggunaan Layanan oleh Penyelenggara.
            </li>
            <li>
              8. Pengguna setiap saat memiliki hak untuk membatalkan dan
              menghapus Akun, dengan cara menghubungi atau mengirimkan email
              kepada bagian pelayanan pelanggan (Customer Support) dari
              Penyelenggara. Apabila Anda menghentikan atau membatalkan Akun,
              anda memahami dan menyetujui bahwa anda tidak akan dapat lagi
              melakukan akses atau menggunakan Layanan.
            </li>
            <li>
              9. Anda memahami dan setuju bahwa Penyelenggara berhak untuk
              memberhentikan akun Anda atau memblokir akses Anda terhadap Akun
              anda dan Layanan. Penghapusan akun ini dapat terjadi apabila
              hal-hal berikut terjadi, termasuk namun tidak terbatas pada:{" "}
              <ul className="space-y-1">
                <li>
                  ● Pelanggaran S&K Layanan ini dan Perjanjian Layanan Urun Dana
                </li>
                <li>
                  ● Permintaan dari badan hukum atau instansi milik pemerintah
                </li>
                <li>● Permintaan dari Pengguna sendiri </li>
                <li>● Periode ketidakaktifan akun yang cukup lama</li>
                <li>
                  ● Kasus penipuan atau penggelapan yang dilakukan oleh Pengguna
                  atau hal-hal yang telah atau berpotensi merugikan pihak lain{" "}
                </li>
              </ul>
            </li>
          </ul>
          <p className="font-bold">
            Pembatalan akun Pengguna dapat berakibat sebagai berikut:
          </p>
          <ul className="space-y-1">
            <li>● Pembatasan keikutsertaan Pemodal dalam penggunaan Layanan</li>
            <li>
              ● Password Pengguna tidak akan berlaku lagi sehingga Pengguna
              tidak dapat mengakses bagian-bagian situs yang dilindungi dengan
              password dan/atau Pengguna tidak dapat lagi menggunakan Layanan{" "}
            </li>
          </ul>
          <p className="font-bold">LARANGAN PENGGUNAAN</p>
          <ul className="space-y-1">
            <li>
              1. Pengguna dilarang menggunakan Layanan untuk kegiatan yang
              ilegal atau tidak sah atau yang sejenisnya atau untuk tujuan yang
              melanggar hukum, undang-undang dan ketentuan apapun yang diatur di
              negara Republik Indonesia (termasuk namun tidak terbatas pada
              setiap peraturan perundang-undangan dan hukum terkait hak atas
              kekayaan intelektual).
            </li>
            <li>
              2. Pengguna setuju untuk tidak menjiplak, mereproduksi,
              menduplikasi, menyalin, menjual, atau mengeksploitasi bagian
              manapun dari Layanan tanpa izin tertulis dari Penyelenggara.{" "}
            </li>
            <li>
              3. Pengguna dilarang melanggar hak kekayaan intelektual
              Penyelenggara atau pihak ketiga manapun sehubungan dengan
              penggunaan Layanan.
            </li>
            <li>
              4. Pengguna dilarang menggunakan Layanan selain dari cara yang
              telah ditentukan oleh Penyelenggara atau dengan cara yang dapat
              merusak, melumpuhkan, membebani, membuat cacat, atau melemahkan
              sistem atau keamanan Layanan atau mengintervensi pengguna lainnya.
            </li>
            <li>
              5. Pengguna dilarang memperoleh atau mengumpulkan informasi atau
              data apapun dari layanan atau sistem Penyelenggara atau mencoba
              untuk mengurai segala transmisi menuju atau dari server
              Penyelenggara yang menjalankan Layanan.
            </li>
            <li>
              6. Pengguna dilarang mengungkapkan atau mendistribusikan informasi
              terkait Pengguna Layanan lainnya kepada pihak ketiga manapun, atau
              menggunakan informasi Pengguna lain manapun untuk tujuan pemasaran
              kecuali anda telah memperoleh persetujuan tertulis dari
              Penyelenggara untuk melakukan hal tersebut.
            </li>
            <li>
              7. Pengguna dilarang mengakses atau membuat Akun melalui bots atau
              metode terotomasi lainnya.
            </li>
          </ul>
          <p className="font-bold">HAK KEKAYAAN INTELEKTUAL</p>
          <ul className="space-y-1">
            <li>
              1. Penyelenggara, termasuk nama dan logonya, kode, desain,
              teknologi, dilindungi oleh hak cipta, merek dan hak kekayaan
              intelektual lainnya yang tersedia berdasarkan hukum Republik
              Indonesia. Penyelenggara memiliki seluruh hak dan kepentingan atas
              seluruh hak kekayaan intelektual yang berhubungan dengannya. S&K
              Layanan ini dan/ atau Perjanjian Layanan Urun Dana tidak dan
              dengan cara apapun tidak akan dianggap sebagai pemberian izin
              kepada Anda untuk menggunakan hak kekayaan intelektual
              Penyelenggara dalam bentuk apapun sebagaimana disebutkan di atas.
            </li>
            <li>2. Anda tidak diperkenankan:</li>
            <li>
              3. Menyalin, memodifikasi, mengubah, menambahkan, mengurangi,
              mengadaptasi, menerjemahkan, membuat karya turunan dari,
              mendistribusikan, menjual, menampilkan di muka umum, membuat
              ulang, mentransmisikan, memindahkan, memberikan lisensi,
              mengalihkan, menyiarkan, menguraikan, atau membongkar bagian
              manapun dari atau dengan cara lain mengeksploitasi sistem
              Penyelenggara (termasuk fitur-fitur Layanan di dalamnya) yang
              dilisensikan kepada Anda, kecuali secara jelas diperbolehkan dalam
              S&K Layanan ini.
            </li>
          </ul>
          <p>
            Memberikan lisensi, mensublisensikan, menjual, menjual kembali,
            memindahkan, mengalihkan, mendistribusikan atau mengeksploitasi
            secara komersial atau membuat tersedia kepada pihak ketiga dan/atau
            dengan cara merekayasa ulang atau mengakses perangkat lunak
            Penyelenggara untuk.
          </p>
          <ul className="space-y-1">
            <li>i. Membangun produk atau layanan tandingan </li>
            <li>
              ii. Membangun produk dengan menggunakan ide, fitur, fungsi,
              layanan, atau grafis sejenis{" "}
            </li>
            <li>
              iii. Menyalin ide, fitur, fungsi , layanan atau grafis sejenis{" "}
            </li>
            <li>
              iv. Meluncurkan program otomatis atau script, termasuk, namun
              tidak terbatas pada, web spiders, web crawlers, web robots, web
              ants, web indexers, bots, virus atau worm, atau segala program
              apapun yang mungkin membuat beberapa permintaan server per detik,
              atau menciptakan beban berat atau menghambat operasi dan/atau
              kinerja aplikasi{" "}
            </li>
            <li>
              v. Menggunakan robot, spider, pencarian situs/aplikasi pengambilan
              kembali, atau perangkat manual atau otomatis lainnya atau proses
              untuk mengambil, indeks, “tambang data” (data mine), atau dengan
              cara apapun memperbanyak atau menghindari struktur navigasi atau
              presentasi dari aplikasi atau isinya{" "}
            </li>
            <li>
              vi. Menghapus Hak Kekayaan Intelektual apapun milik Penyelenggara
              yang terkandung dalam Platform Fulusme
            </li>
          </ul>
          <p className="font-bold">Perlindungan Data Pribadi</p>
          <ul className="space-y-1">
            <li>
              1. Pemodal dan/atau Penerbit memberikan kuasa kepada Fulusme
              Layanan Urun Dana untuk:
            </li>
            <li>
              2. Melaksanakan pengecekan dan penilaian pembiayaan kepada
              Penerbit termasuk melakukan asesmen atau validasi terhadap setiap
              Data Pribadi dan dokumen atau informasi apapun yang diperoleh dari
              atau disingkapkan oleh Penerbit
            </li>
            <li>
              3. Mendapatkan dan melakukan verifikasi informasi mengenai Pemodal
              dan/atau Penerbit, sesuai dengan pertimbangan tunggal dan absolut
              Fulusme Layanan Urun Dana jika dianggap Perlu
            </li>
            <li>
              4. Pemodal dan Penerbit setuju untuk datanya didaftarkan di
              Digisign dan Bank Danamon Indonesia sebagai Bank Kustodian
            </li>
            <li>
              5. Menggunakan semua sumber relevan, yang dapat digunakan oleh
              Fulusme Layanan Urun Dana , untuk menyediakan informasi yang
              dibutuhkan oleh Fulusme Layanan Urun Dana terkait dengan fasilitas
              Pembiayaan yang diberikan
            </li>
            <li>
              6. Dengan ini, Para Pemodal dan Penerbit menyetujui bahwa Fulusme
              Layanan Urun Dana dapat mengumpulkan, menyimpan, memproses,
              membuka informasi, mengakses, mengkaji, dan/atau menggunakan data
              pribadi (termasuk informasi pribadi yang sensitif) tentang Para
              Pemodal dan Penerbit, baik yang didapatkan melalui Para Pemodal
              dan Penerbit ataupun melalui sumber lain yang sesuai dengan Hukum
              yang berlaku (Data Pribadi) dan Para Pemodal dan Penerbit
              menyatakan setuju dengan ketentuan Data Pribadi yang diatur dalam
              Kebijakan Privasi sebagaimana telah dibaca dan dipahami oleh Para
              Pemodal dan Penerbit yang tersedia pada Penyelenggara Fulusme
              Layanan Urun Dana{" "}
            </li>
            <li>
              7. Mengungkapkan informasi dan/atau data terkait Pemodal dan/atau
              Penerbit dan rekening-rekeningnya, dan/atau kartu kredit yang
              dimiliki (jika ada dan sebagaimana relevan) kepada Fulusme Layanan
              Urun Dana , atau informasi lainnya yang dipandang penting oleh
              Fulusme Layanan Urun Dana kepada:
              <ul className="space-y-1">
                <li>
                  a. Kantor perwakilan dan cabang dan/atau perusahaan atau
                  perusahaan asosiasi terkait Pemodal dan/atau Penerbit, yang
                  ada pada yurisdiksi manapun
                </li>
                <li>
                  b. Pemerintah atau badan pemerintahan atau badan otoritas.
                </li>
                <li>
                  c. Setiap calon pengalihan hak Penerbit atau pihak yang telah
                  atau dapat memiliki hubungan kontraktual dengan Penerbit dalam
                  kaitannya dengan kerjasama bisnisnya;
                </li>
                <li>
                  d. Biro kredit, termasuk anggota biro kredit tersebut
                  (sebagaimana relevan);
                </li>
                <li>
                  e. Setiap pihak ketiga, penyedia jasa, agen, atau partner
                  bisnis (termasuk, tidak terbatas pada, referensi kredit atau
                  agen evaluasi) dimanapun situasinya mungkin terjadi; dan
                </li>
                <li>
                  f. Kepada pihak yang membuka informasi yang diperbolehkan oleh
                  Hukum untuk membuka informasi.
                </li>
              </ul>
            </li>
            <li>
              8. Masing-masing Pihak berkewajiban untuk menyimpan segala rahasia
              data atau sistem yang diketahuinya baik secara langsung maupun
              tidak langsung sehubungan Layanan Urun Dana yang dilaksanakan
              sesuai dengan Syarat dan Ketentuan ini dan bertanggung jawab atas
              segala kerugian yang diakibatkan karena pembocoran Informasi
              Rahasia tersebut, baik oleh masing-masing Pihak maupun karyawannya
              maupun perwakilannya
            </li>
          </ul>
          <p className="font-bold">Keamanan dan Kerahasiaan Informasi</p>
          <p>
            Fulusme.id melakukan upaya keamanan dan penyimpanan dengan sangat
            hati-hati untuk melindungi kerahasiaan informasi, data, dan dokumen
            Anda. Fulusme.id menjamin bahwa setiap informasi, data, dan dokumen
            yang Anda unggah dan kirim ke platform Fulusme.id akan diproses dan
            disimpan secara aman dan rahasia dengan menggunakan standar keamanan
            informasi elektronik (ISO27001).{" "}
          </p>
          <p>
            Fulusme.id menjamin bahwa hanya Anda dan pihak yang Anda beri izin
            yang dapat melihat informasi, data, dan dokumen elektronik yang Anda
            unggah ke dalam sistem Fulusme.id.{" "}
          </p>
          <p>
            Fulusme.id akan memberi tahu Anda jika terjadi kegagalan dalam
            melindungi kerahasiaan data Anda di sistem elektronik Fulusme.id
            berdasarkan ketentuan peraturan perundang-undangan yang berlaku.
          </p>
          <p>
            Anda membebaskan Fulusme.id dari tuntutan apapun jika terdapat
            kebocoran informasi dalam hal
          </p>
          <ul className="space-y-1">
            <li>
              ● setiap Informasi Rahasia yang telah berada di dalam ranah publik
              sebelum adanya pengungkapan dari salah satu Pihak dan bukan
              disebabkan oleh kesengajaan dan/atau kelalaian dari Pihak
              tersebut;
            </li>
            <li>
              ● dalam hal salah satu Pihak mengungkapkan Informasi Rahasia
              berdasarkan persetujuan tertulis dari Pihak lainnya; atau
            </li>
            <li>
              ● dalam hal pengungkapan oleh salah satu Pihak diwajibkan oleh
              hukum dan peraturan perundang-undangan yang berlaku, pengadilan,
              dan/atau pejabat yang berwenang, dengan pemberitahuan sebelumnya
              kepada Pihak lainnya.
            </li>
            <li>
              ● Pelanggaran S&K Layanan ini dan Perjanjian Layanan Urun Dana
            </li>
            <li>
              ● Permintaan dari badan hukum atau instansi milik pemerintah
            </li>
            <li>● Permintaan dari Pengguna sendiri </li>
            <li>● Periode ketidakaktifan akun yang cukup lama</li>
            <li>
              ● Kasus penipuan atau penggelapan yang dilakukan oleh Pengguna
              atau hal-hal yang telah atau berpotensi merugikan pihak lain{" "}
            </li>
          </ul>
          <p>Pembatalan akun Pengguna dapat berakibat sebagai berikut:</p>
          <ul className="space-y-1">
            <li>● Pembatasan keikutsertaan Pemodal dalam penggunaan Layanan</li>
            <li>
              ● Password Pengguna tidak akan berlaku lagi sehingga Pengguna
              tidak dapat mengakses bagian-bagian situs yang dilindungi dengan
              password dan/atau Pengguna tidak dapat lagi menggunakan Layanan{" "}
            </li>
          </ul>
          <p className="font-bold">PEMBATASAN TANGGUNG JAWAB </p>
          <p>
            Penyelenggara tidak bertanggung jawab atas segala kerugian langsung
            dan/atau tidak langsung termasuk namun tidak terbatas pada, kerugian
            atas kehilangan atau berkurangnya laba, potensi keuntungan,
            penggunaan, hilangnya data atau kehilangan tidak berwujud lainnya,
            yang diakibatkan oleh:
          </p>
          <ul className="space-y-1">
            <li>
              ● Ketidakmampuan penggunaan Layanan (secara keseluruhan atau
              sebagian) oleh Pengguna
            </li>
            <li>
              ● Akses yang tidak sah pada, atau perubahan dari, komunikasi atau
              data Anda
            </li>
            <li>● Tindakan pihak ketiga sehubungan dengan Layanan</li>
            <li>● Pelanggaran S&K Layanan oleh Anda</li>
            <li>
              ● Tuntutan atas pelanggaran hak kekayaan intelektual pihak ketiga
              atau hak-hak lainnya, pencemaran nama baik
            </li>
          </ul>
          <p>
            Pelanggaran oleh Anda atas hukum yang berlaku atau perjanjian
            manapun terkait ketentuan dengan pihak ketiga, dalam hal mana Anda
            terikat dan/atau pelanggaran hal lainnya sehubungan dengan serta
            penggunaan Layanan.
          </p>
          <p className="font-bold">LAYANAN APA ADANYA </p>
          <ul className="space-y-1">
            <li>
              1. Anda memahami dan setuju bahwa Layanan yang disediakan oleh
              Penyelenggara adalah bersifat “apa adanya” (as is) dan
              “sebagaimana tersedia” (as available), dan Pengguna memahami
              segala risiko dari Penggunaan Layanan.
            </li>
            <li>
              2. Anda memahami dan setuju bahwa Penyelenggara tidak memberikan
              jaminan apapun bahwa:{" "}
              <ul className="space-y-1">
                <li>● Layanan akan memenuhi kebutuhan spesifik dari Anda</li>
                <li>
                  ● Layanan akan selalu tersedia kapanpun, aman dan bebas dari
                  kesalahan (error), gangguan, kejahatan dari pihak ketiga atau
                  kerusakan
                </li>
                <li>
                  ● Layanan akan selalu akurat, sesuai ekspektasi, dan dapat
                  diandalkan
                </li>
                <li>
                  ● Setiap kesalahan (error) pada Layanan akan diperbaiki sesuai
                  yang Anda harapkan
                </li>
                <li>
                  ● Layanan dapat diakses dan/atau akan kompatibel dengan setiap
                  perangkat komputer, peripheral komputer, sistem operasi atau
                  perangkat lainnya
                </li>
                <li>
                  ● Layanan yang disediakan sepenuhnya aman dan bebas dari bugs,
                  virus, trojans dan komponen perangkat lunak berbahaya lainnya.
                  Anda wajib untuk memastikan bahwa sistem komputer dan
                  perangkat Anda memiliki anti-virus dan secara rutin
                  diperbaharui, dan bahwa Anda melakukan penyimpanan cadangan
                  (back-up) secara rutin atas sistem komputer dan perangkat Anda
                </li>
              </ul>
            </li>
            <li>
              3. Anda memahami dan setuju bahwa dalam menyediakan perangkat
              keras (apabila ada), perangkat lunak, jaringan, konektivitas,
              penyimpanan dan teknologi lainnya yang digunakan untuk mendukung
              penyediaan Layanan, Penyelenggara dapat menggunakan pemasok dari
              pihak ketiga. Penyelenggara akan selalu memastikan bahwa
              penyediaan perangkat keras, perangkat lunak, jaringan,
              konektivitas (jaringan), penyimpanan (storage), dan teknologi
              lainnya yang digunakan untuk mendukung penyediaan Layanan telah
              sesuai dengan standar yang ditetapkan oleh Penyelenggara, tetapi
              segala tindakan, perbuatan, kualitas barang, dan apapun yang
              disediakan dari pemasok mungkin dapat di luar kendali
              Penyelenggara, dan Penyelenggara tidak bertanggung jawab atas
              adanya kerugian atau kerusakan yang diderita oleh Pengguna akibat
              dari tindakan atau perbuatan pemasok tersebut, sejauh mana
              diperbolehkan oleh peraturan perundang-undangan dan hukum yang
              berlaku.
            </li>
          </ul>
          <p>
            Sehubungan dengan hukum dan peraturan perundang-undangan yang
            berlaku yang mengatur mengenai Informasi dan Transaksi Elektronik
            (Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan. Transaksi
            Elektronik, Peraturan Pemerintah Nomor 71 tahun 2018 tentang
            Penyelenggaraan Sistem dan Transaksi Elektronik, Peraturan Menteri
            Komunikasi dan Informatika Nomor 11 Tahun 2022 tentang Tata Kelola
            Penyelenggaraan Sertifikasi Elektronik), Pengguna memahami bahwa
            tanda tangan elektronik berbasis sertifikat elektronik dalam suatu
            transaksi dan/atau dokumen elektronik merupakan suatu bentuk
            persetujuan dan penerimaan Pengguna:{" "}
          </p>
          <ul className="space-y-1">
            <li>
              1. Untuk mengikatkan diri terhadap hubungan hukum dengan pihak
              lain yang disebutkan dalam dokumen yang bersangkutan dan/atau
            </li>
            <li>
              2. Atas seluruh informasi yang tertulis dalam dokumen elektronik
              tersebut; yang keduanya berkaitan dengan penggunaan Layanan ini.
              Guna menyediakan fasilitas pembubuhan tanda tangan elektronik
              berbasis sertifikat elektronik, Fulusme bekerja sama dengan PT
              Privy Identitas Digital (PRIVY) sebagai Penyelenggara Sertifikasi
              Elektronik tersertifikasi oleh Kementerian Telekomunikasi dan
              Informasi.{" "}
            </li>
          </ul>
          <p>
            Anda telah membaca, memahami, dan setuju untuk terikat pada syarat
            dan ketentuan layanan Penyelenggara Sertifikat Elektronik yang
            terdapat pada Perjanjian Kepemilikan Sertifikat Elektronik
            (Subscriber Agreement), Kebijakan Privasi PSrE (CA Privacy Policy),
            serta Pernyataan Penyelenggaraan Sertifikasi Elektronik
            (Certification Practice Statement) Privy.{" "}
          </p>
          <p className="font-bold">Customer Due Diligence</p>
          <p>
            Anda diharuskan untuk melakukan proses Customer Due Diligence (CDD)
            sebelum menggunakan layanan Fulusme.id. Proses CDD ditujukan untuk
            memastikan bahwa perusahaan Anda adalah badan hukum yang benar dan
            sah. Anda diwajibkan untuk memberikan informasi, data, dan dokumen
            yang valid dan masih berlaku dalam proses CDD. Fulusme.id memiliki
            hak untuk menolak permohonan CDD Anda apabila terdapat indikasi
            bahwa data yang Anda berikan tidak valid dan/atau terdapat kriteria
            CDD lainnya yang tidak terpenuhi. Anda memiliki hak untuk mengajukan
            kembali proses CDD jika proses CDD sebelumnya ditolak.{" "}
          </p>
          <p>
            Fulusme.id akan melakukan proses CDD secara transparan, teliti,
            objektif, taat prosedur, dan taat aturan berdasarkan informasi,
            data, dan dokumen yang Anda kirim. Anda menyadari bahwa terdapat
            keterbatasan CDD dalam melakukan pencocokan dan validasi data. Oleh
            sebab itu, Anda memahami bahwasanya sewaktu-waktu CDD dapat
            menghubungi Anda untuk melakukan konfirmasi terkait dengan
            informasi, data, dan/atau dokumen yang Anda kirim.
          </p>
          <p>
            Anda menyetujui bahwasanya status CDD Anda yang sudah diterima bisa
            diubah menjadi ditolak apabila Fulusme.id menemukan bukti mengenai
            tidak validnya informasi, data, dan/atau dokumen Anda di kemudian
            hari, baik dari pihak internal ataupun dari pihak ketiga yang
            bekerja sama dengan Fulusme.id.{" "}
          </p>
          <p className="font-bold">Penandatanganan Perjanjian</p>
          <p>
            Setiap penandatanganan perjanjian dalam layanan Fulusme.id
            menggunakan platform Tanda Tangan Elektronik. Anda menyetujui bahwa
            penggunaan Tanda Tangan Elektronik adalah sah dan mengikat, dengan
            demikian, Anda tidak akan mengajukan keberatan atas keabsahan
            perjanjian-perjanjian yang ditandatangani secara elektronik dengan
            alasan apapun.
          </p>
          <p>
            Apabila terdapat kegagalan sistem pada platform Tanda Tangan
            Elektronik, atau terdapat kendala lainnya, sehingga menyebabkan
            penandatanganan perjanjian menggunakan platform Tanda Tangan
            Elektronik tidak bisa dilakukan dalam jangka waktu lebih dari 1
            (satu) minggu, Fulusme.id menyediakan metode alternatif untuk proses
            penandatangan perjanjian. Metode penandatanganan alternatif dapat
            dilakukan dengan kesepakatan bersama antara Anda dan Fulusme.id.
          </p>
          <p>
            Jika Anda belum memiliki akun Tanda Tangan Elektronik yang digunakan
            dalam platform Fulusme.id, Anda menyetujui Fulusme.id untuk mewakili
            Anda dalam hal pembuatan akun Tanda Tangan Elektronik.{" "}
          </p>
          <p className="font-bold">Escrow Account</p>
          <p>
            Setiap dana investasi dari Pemodal di pasar primer akan disimpan
            dalam escrow account. Dana tersebut hanya akan dipindahbukukan ke
            rekening giro perusahaan Anda apabila penawaran telah mencapai
            target ataupun dikembalikan kepada Pemodal apabila penawaran batal
            demi hukum.{" "}
          </p>
          <p className="font-bold">Biaya-Biaya</p>
          <p>
            Anda menyetujui bahwa terdapat biaya-biaya yang mungkin dibebankan
            kepada Anda yaitu sebagai berikut
          </p>
          <ul className="space-y-1">
            <li>
              <h4>● Biaya layanan (platform fee)</h4>
              <p>
                Biaya layanan dikenakan kepada penerbit dan pemodal yang
                menggunakan platform Fulusme.id.{" "}
              </p>
            </li>
            <li>
              <h4>● Biaya pembatalan</h4>
              <p>
                Biaya pembatalan dikenakan kepada penerbit jika penerbit efek
                bersifat ekuitas atau penerbit efek bersifat utang melakukan
                pembatalan proses penawaran setelah penandatanganan Perjanjian
                Kerjasama (PKS). Jika penerbit belum menandatangani Perjanjian
                Kerja Sama (PKS) maka penerbit hanya akan dikenakan biaya yang
                timbul dari proses uji kelayakan.
              </p>
            </li>
            <li>
              <h4>● Biaya Tahunan KSEI</h4>
              <p>
                Biaya tahunan KSEI dikenakan kepada penerbit efek terhitung
                sejak januari hingga desember setiap tahunnya.
              </p>
            </li>
            <li>
              <h4>● Biaya pendaftaran efek bersifat ekuitas di KSEI</h4>
              <p>
                Biaya ini dikenakan kepada penerbit efek untuk pendaftaran efek
                di KSEI.
              </p>
            </li>
            <li>
              <h4>
                ● Biaya pembelian kembali (buy back) efek bersifat ekuitas
              </h4>
              <p>
                Biaya ini dikenakan kepada penerbit bersifat ekuitas jika ingin
                melakukan pembelian kembali (buy back) seluruh efek bersifat
                ekuitas yang pernah diterbitkan.
              </p>
            </li>
            <li>
              <h4>
                ● Pembebanan pajak yang timbul dalam Layanan Urun Dana ini
                menjadi beban masing-masing pihak sesuai dengan ketentuan hukum
                perpajakkan yang berlaku di wilayah Negara Republik Indonesia
              </h4>
            </li>
          </ul>
          <p>
            Detail nominal biaya terdapat pada halaman Biaya Layanan yang
            menjadi satu kesatuan dalam syarat dan ketentuan ini
          </p>
          <p className="font-bold">Keadaan Kahar (Force Majeure)</p>
          <ul className="space-y-1">
            <li>
              1. Keadaan Kahar atau Force Majeure adalah kejadian-kejadian yang
              terjadi diluar kemampuan dan kekuasaan Para Pihak sehingga
              menghalangi Para Pihak untuk melaksanakan Layanan Urun Dana ini,
              termasuk namun tidak terbatas pada adanya kebakaran, banjir, gempa
              bumi, likuifaksi, badai, huru-hara, peperangan, epidemi,
              pertempuran, pemogokan, sabotase, embargo, peledakan yang
              mengakibatkan kerusakan sistem teknologi informasi yang menghambat
              pelaksanaan Layanan Urun Dana ini, serta kebijaksanaan pemerintah
              Republik Indonesia yang secara langsung berpengaruh terhadap
              pelaksanaan Layanan Urun Dana ini
            </li>
            <li>
              2. Masing-masing Pihak dibebaskan untuk membayar denda apabila
              terlambat dalam melaksanakan kewajibannya dalam Layanan Urun Dana
              ini, karena adanya hal-hal keadaan Memaksa
            </li>
            <li>
              3. Keadaan Memaksa sebagaimana dimaksud harus diberitahukan oleh
              Pihak yang mengalami Keadaan Memaksa kepada Pihak lainnya dalam
              Layanan Urun Dana ini paling lambat 7 (tujuh) Hari Kalender dengan
              melampirkan pernyataan atau keterangan tertulis dari pemerintah
              untuk dipertimbangkan oleh Pihak lainnya beserta rencana pemenuhan
              kewajiban yang tertunda akibat terjadinya Keadaan Memaksa
            </li>
            <li>
              4. Keadaan Memaksa yang menyebabkan keterlambatan pelaksanaan
              Layanan Urun Dana ini baik untuk seluruhnya maupun sebagian bukan
              merupakan alasan untuk pembatalan Layanan Urun Dana ini sampai
              dengan diatasinya Keadaan Memaksa tersebut
            </li>
          </ul>
          <p className="font-bold">Pengalihan Layanan Urun Dana</p>
          <ul className="space-y-1">
            <li>
              1. Pemodal setuju dan sepakat untuk tidak mengalihkan sebagian
              atau keseluruhan hak dan kewajiban Penerbit dalam Layanan Urun
              Dana ini kepada pihak lainnya atau pihak manapun
            </li>
            <li>
              2. Dalam hal adanya permintaan peralihan atas hak kepemilikan Efek
              dikarenakan Pemodal meninggal dunia, maka ahli waris mengajukan
              permohonan perubahan kepemilikan Efek kepada Penyelenggara dengan
              melengkapi dokumen sebagai sebagai berikut :
              <ul className="space-y-1">
                <li>
                  a. Surat permohonan peralihan kepemilikan Efek dikarenakan
                  Pemodal meninggal dunia.
                </li>
                <li>b. Softcopy surat kematian dari instansi berwenang.</li>
                <li>
                  c. Softcopy surat keterangan ahli waris dari instansi
                  berwenang dan/atau surat penetapan pengadilan tentang ahli
                  waris.
                </li>
                <li>
                  d. Softcopy E-KTP Pemodal (almarhum/almarhumah) dan ahli
                  waris.
                </li>
                <li>
                  e. Softcopy Kartu Keluarga (KK) Pemodal (almarhum/almarhumah).
                </li>
              </ul>
            </li>
          </ul>
          <p className="font-bold">Pengaduan</p>
          <p>
            Silahkan hubungi Fulusme.id di Layanan Pengaduan apabila Anda
            mengalami kendala ataupun terdapat aduan lainnya melalui
          </p>
          <ul className="space-y-1">
            <li>Telepon : +62 21 388 20 133</li>
            <li>Whatsapp : +6281299900150</li>
            <li>Email : info@fulusme.id</li>
          </ul>
          <p>
            Jam operasional penerimaan aduan adalah hari Senin - Jumat pukul
            09.00 - 17.00 WIB (diluar hari libur nasional).
          </p>
          <p className="font-bold">Hukum yang Berlaku</p>
          <p>
            Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan
            hukum yang berlaku di Republik Indonesia. Apabila terjadi
            perselisihan antara Anda dan Fulusme sehubungan dengan pelaksanaan
            Perjanjian ini, maka Anda sepakat untuk menyelesaikannya secara
            musyawarah untuk mencapai mufakat. Dalam hal musyawarah tidak
            mencapai mufakat, maka Anda sepakat untuk melakukan mediasi yang
            diperantarai oleh ALUDI sebagai asosiasi resmi Layanan Urun Dana di
            Republik Indonesia. Apabila setelah dilakukan mediasi sebagaimana
            perselisihan juga tidak dapat diselesaikan, maka Para Pihak sepakat
            untuk menyelesaikan perselisihan sehubungan dengan Perjanjian ini
            melalui Badan Arbitrase Pasar Modal Indonesia (BAPMI) dan Lembaga
            Alternatif Penyelesaian Sengketa Sektor Jasa Keuangan (LAPS){" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SyaratKetentuan;

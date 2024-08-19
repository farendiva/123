import TermServices from "@/app/components/TermServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | FULUSME",
  description: "Halaman Kebijakan dan Privasi FULUSME",
};

const KebijakanPrivasi = () => {
  return (
    <div className="w-4/5 lg:w-3/5 mx-auto mb-16 text-sky space-y-6">
      <div className="flex items-center my-8 gap-2 lg:gap-4 lg:my-0">
        <img src="/icons/fulusme.svg" alt="Fulusme Icon" />
        <h1 className="text-2xl lg:text-[40px]">
          Kebijakan dan Privasi <span className="font-bold">Fulusme</span>
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <div
          id="terms"
          className="h-128 text-justify overflow-y-scroll bg-[#f7f7ff] rounded-xl space-y-2 p-4 w-full"
        >
          <ul className="space-y-4">
            <li>
              <p className="font-bold">I. INFORMASI RAHASIA</p>
              <ul className="list-decimal px-4 space-y-2">
                <li>
                  <span className="font-semibold">Bahwa</span>, dalam rangka
                  Layanan Urun Dana, salah satu Pihak dapat mengungkapkan “
                  <span className="font-semibold">Informasi Rahasia</span>”,
                  (selanjutnya disebut “
                  <span className="font-semibold">Pemberi</span>”), kepada Pihak
                  lainnya (selanjutnya disebut “
                  <span className="font-semibold">Penerima</span>”) dan Pemberi
                  tidak menginginkan Informasi Rahasia tersebut menjadi terbuka
                  untuk umum atau pengetahuan
                </li>
                <li>
                  Untuk kepentingan Layanan Urun Dana ini, definisi dari “{" "}
                  <span className="font-semibold">Informasi Rahasia</span>”
                  adalah sebagai berikut:
                  <ul className="list-item space-y-2">
                    <li>
                      a. Setiap informasi yang berhubungan dengan Pemberi, anak
                      perusahaannya, pelanggannya, dan kegiatan usaha serta
                      operasionalnya, termasuk setiap informasi yang secara
                      langsung maupun tidak langsung terkait dengan Program
                      Investasi, baik secara lisan, tertulis, grafik, magnetik,
                      elektronik, atau bentuk lain yang secara langsung maupun
                      tidak langsung disampaikan oleh atau diungkapkan untuk
                      atau diperoleh Penerima atau
                      anggota-anggotanya,direktur-direkturnya,
                      karyawan-karyawannya, dalam serangkaian pembicaraan atau
                      kerja sama lain yang dilakukan diantara Para Pihak; atau
                    </li>
                    <li>
                      b. Segala komunikasi antara Para Pihak, baik secara lisan
                      maupun tulisan yang diketahui atau semestinya diketahui
                      oleh Para Pihak untuk menjadi rahasia atau menjadi milik
                      perusahaan secara alami. dan yang dibuat di dalam
                      serangkaian diskusi atau kerja sama lain yang dilakukan di
                      antara Para Pihak
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold">II. INFORMASI YANG TIDAK DILINDUNGI</p>
              <p>
                Untuk kepentingan Program Investasi ini, yang dimaksud dengan “
                <span className="font-semibold">
                  Informasi yang Tidak Dilindungi
                </span>
                ” adalah sebagai berikut:
              </p>
              <ul className="list-decimal space-y-2 px-4">
                <li>
                  Informasi yang, pada saat pengungkapannya, sudah berada pada
                  kepemilikan yang sah dari Penerima atau tersedia pada Penerima
                  atau Perwakilannya (sebagaimana didefinisikan dibawah ini)
                  yang diperoleh dengan cara-cara yang sesuai dengan hukum
                  (tidak melanggar hukum) dan dari sumber lain yang tidak
                  memiliki kewajiban untuk tidak mengungkapkannya; atau
                </li>
                <li>
                  Informasi yang telah atau akan menjadi tersedia untuk umum,
                  yang tersedia bukan dari pelanggaran Privacy Policy ini oleh
                  Penerima atau Perwakilannya.
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold">III. TANGGUNG JAWAB</p>
              <ul className="list-decimal space-y-2 px-4">
                <li>
                  Penerima setuju untuk tidak akan mengungkapkan, dan akan
                  mengambil seluruh tindakan yang diperlukan untuk melindungi
                  kerahasiaan dari, dan menghindari pengungkapan atau
                  penyalahgunaan dari, Informasi Rahasia, tanpa persetujuan
                  tertulis sebelumnya yang diberikan oleh petugas yang berwenang
                  dari Pemberi, kecuali sebagaimana diatur dalam Ketentuan
                  Privacy Policy Romawi III Nomor 2 dibawah Secara khusus,
                  Penerima hanya akan menggunakan Informasi Rahasia untuk
                  kepentingan Layanan Urun Dana dan tidak untuk tujuan yang
                  lain.
                </li>
                <li>
                  Tanpa membatasi hal yang telah disebutkan sebelumnya, dan
                  tunduk pada Ketentuan Privacy Policy Romawi IV dibawah ini,
                  Penerima diperbolehkan untuk mengungkapkan Informasi Rahasia
                  kepada anggota-anggotanya, direktur-direkturnya,
                  karyawan-karyawannya, afiliasinya, subkontraktor, agennya atau
                  pihak yang ditunjuk (secara bersama-sama disebut sebagai
                  “Perwakilan”) yang dibutuhkan untuk mengetahui Informasi
                  Rahasia dengan tujuan yang sama dengan Informasi Rahasia yang
                  diterima oleh Penerima setuju untuk mengambil segala tindakan
                  pencegahan yang diperlukan untuk menjaga kerahasiaan dari
                  Informasi Rahasia dan untuk menyediakan segala perlindungan
                  yang diperlukan terhadap segala pengungkapan yang tidak sah,
                  tiruan atau penggunaan, dan untuk meminta kepada Perwakilannya
                  yang menerima Informasi Rahasia tersebut untuk tunduk pada
                  kewajiban menjaga kerahasiaan dari Informasi Rahasia sesuai
                  dengan Privacy Policy ini.
                </li>
                <li>
                  Penerima dengan ini sepakat untuk menjamin dan membebaskan
                  Pemberi terhadap setiap dan segala tindakan, klaim, kerusakan
                  dan kerugian yang terjadi pada Pemberi dikarenakan
                  pengungkapan yang tidak sah terhadap Informasi Rahasia
                  terhadap Pihak Ketiga yang dibuat secara bertentangan dengan
                  Privacy Policy ini atau segala pelanggaran terhadap perjanjian
                  yang dilakukan oleh Penerima atau Perwakilannya, termasuk tapi
                  tidak terbatas pada klaim dari pemegang Saham atau pemegang
                  kepentingan dari Pemberi disebabkan oleh perlakuan yang tidak
                  sama pada pengungkapan informasi yang disebabkan penyediaan
                  Informasi Rahasia dari Pemberi kepada Penerima atau
                  Perwakilannya.
                </li>
                <li>
                  Penerima dengan ini bertanggungjawab untuk menyimpan semua
                  dokumen yang memuat atau merupakan Informasi Rahasia terpisah
                  dari semua dokumen lain pada tempat usaha Penerima yang umum
                </li>
                <li>
                  Penerima akan memberitahu Pemberi dengan segera pada saat
                  penemuan atas setiap penggunaan secara tidak sah atau
                  pengungkapan Informasi Rahasia atau pelanggaran Perjanjian
                  oleh Penerima atau Perwakilan-nya, dan akan bekerjasama dengan
                  Pemberi dalam setiap cara untuk membantu Pemberi mendapatkan
                  kembali penguasaan atas Informasi Rahasia dan untuk mencegah
                  penyalahgunaan lebih lanjut
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold">IV. PIHAK KETIGA</p>
              <p>
                Kecuali untuk pemberian informasi sebagaimana dimaksud dalam
                Ketentuan <span className="italic">Privacy Policy</span> Romawi
                VII, sebelum pengungkapan Informasi Rahasia kepada suatu pihak
                ketiga, termasuk tetapi tidak terbatas pada para konsultan,
                akuntan publik atau pejabat lokal, Penerima akan (a) mendapatkan
                persetujuan secara tertulis terlebih dahulu dari Pemberi untuk
                mengungkapkan Informasi Rahasia kepada pihak ketiga tersebut,
                dan (b) mendapatkan persetujuan tertulis, yang diberikan oleh
                pihak ketiga tersebut, antara Pemberi dan pihak ketiga (i) untuk
                menahan semua Informasi Rahasia dengan keyakinan pada ketentuan
                yang mirip dengan ketentuan dalam{" "}
                <span className="italic">Privacy Policy</span> ini dan untuk
                tidak menggunakannya untuk tujuan selain yang berhubungan dengan
                pembicaraan atau hubungan bisnis yang akan datang antara para
                pihak, dan (iii) untuk mengembalikan semua Informasi Rahasia
                kepada Pemberi tidak lebih dari 2 (dua) hari kalender setelah
                pihak ketiga tersebut menyelesaikan pekerjaannya. Setiap
                pengungkapan dari Informasi Rahasia harus sesuai dengan hukum
                yang berlaku.
              </p>
            </li>
            <li>
              <p className="font-bold">V. JANGKA WAKTU PRIVACY POLICY</p>
              <span className="italic">Privacy Policy</span> ini akan berlaku
              secara terus menerus selama Layanan Urun Dana berlangsung,
              terhitung sejak disetujuinya{" "}
              <span className="italic">Privacy Policy</span> ini kecuali
              diakhiri dengan persetujuan tertulis Para Pihak. Kewajiban untuk
              menjaga kerahasiaan Informasi Rahasia tetap mengikat Para Pihak
              walaupun Layanan Urun Dana ini berakhir.
            </li>
            <li>
              <p className="font-bold">VI. PENGEMBALIAN INFORMASI RAHASIA</p>
              <p>
                Penerima setuju untuk dengan segera menyerahkan kepada Pemberi,
                atas permintaan Pemberi, setiap dokumen yang mengandung atau
                dengan cara lain mencerminkan Informasi Rahasia dan setiap
                salinan yang dibuat oleh karenanya yang Penerima mungkin miliki,
                memiliki akses kepadanya, atau mungkin dapatkan atau kuasai
                selama periode pembicaraan itu dan/atau hubungan bisnis dengan
                Pemberi. Atas penghentian pembicaraan dan/atau hubungan bisnis
                antara Para Pihak, Penerima harus menyampaikan kepada Pemberi,
                atas permintaan Pemberi, segala Informasi Rahasia yang
                dikuasainya atau dibawah kendalinya tidak lebih dari 3 (tiga)
                hari kalender. Setiap informasi yang disiapkan oleh Penerima
                untuk keperluan evaluasi internal akan menjadi milik Penerima
                dan tidak perlu diungkapkan kepada Pemberi. Akan tetapi, selama
                periode Layanan Urun Dana ini, informasi tersebut hanya dapat
                digunakan untuk evaluasi internal Penerima atas Layanan Urun
                Dana saja.
              </p>
            </li>
            <li>
              <p className="font-bold">VII. PENGUNGKAPAN YANG DIWAJIBKAN</p>
              <ul className="space-y-2 list-decimal px-4">
                <li>
                  Apabila disyaratkan oleh peraturan atau undang-undang yang
                  berlaku, atau berdasarkan perintah suatu kewenangan atau
                  pengadilan, Penerima diwajibkan untuk mengungkapkan suatu
                  Informasi Rahasia tanpa kesempatan untuk mendapatkan
                  persetujuan sebelumnya dari Pemberi sebagaimana diatur dalam
                  Ketentuan Privacy Policy Romawi IV di atas, maka Penerima akan
                  memberitahu Pemberi dengan segera sehingga Pemberi dapat
                  mengusahakan permintaan perlindungan atau bantuan lain, yang
                  dianggap perlu, dengan ketentuan bahwa Penerima harus berusaha
                  sebaik-baiknya untuk memberikan Pemberi pemberitahuan 3 (tiga)
                  hari kalender sebelumnya.
                </li>
                <li>
                  Bahwa PT Fintek Andalan Solusi Teknologi dalam hal selaku
                  Penerima maka PT Fintek Andalan Solusi Teknologi menyatakan
                  dan menjamin tidak memiliki hak akses ke local storage milik
                  si Pemberi kecuali untuk kebutuhan mengunggah (upload) bukti
                  transfer data oleh Pemberi kepada Penerima.
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold">
                VIII. TIDAK ADANYA PEMINDAHAN HAK MILIK ATAU LISENSI
              </p>
              <ul className="space-y-2 list-decimal px-4">
                <li>
                  Tidak ada dalam <span className="italic">Privacy Policy</span>{" "}
                  ini yang akan diartikan untuk memindahkan segala hak, jabatan
                  atau kepentingan atau hak cipta atas Informasi Rahasia kepada
                  Penerima, atau lisensi untuk menggunakan, menjual,
                  memanfaatkan, meniru atau mengembangkan lebih lanjut Informasi
                  Rahasia tersebut.{" "}
                  <span className="italic">Privacy Policy</span> ini tidak dalam
                  cara apapun mengikat Para Pihak untuk melakukan hubungan
                  bisnis dalam segala Perjanjian apapun untuk hubungan bisnis
                  tersebut akan dibuktikan dengan perjanjian tertulis secara
                  terpisah yang dilakukan oleh Para Pihak.
                </li>
                <li>
                  Hak atas kekayaan intelektual yang timbul atas pelaksanaan
                  Perjanjian dan izin Pemberi, beserta fasilitas-fasilitas lain
                  yang dimiliki Pemberi dan digunakan dalam Layanan Urun Dana
                  ini adalah tetap dan seterusnya milik Pemberi dan tidak ada
                  penyerahan hak dari Pemberi kepada Penerima dalam Layanan Urun
                  Dana ini
                </li>
                <li>
                  Penerima tidak berhak untuk mengubah, mengembangkan,
                  membagikan dan/atau menjual baik seluruh maupun sebagian hak
                  atas kekayaan intelektual yang timbul atas pengembangan,
                  inovasi, perubahan berupa fitur dan/atau fungsi terhadap
                  sistem teknologi informasi.
                </li>
                <li>
                  Pemberi dengan ini menjamin bahwa hak atas kekayaan
                  intelektual yang terkandung dalam pelaksanaan Perjanjian ini
                  tidak melanggar hak atas kekayaan intelektual milik pihak
                  manapun, dan Pemberi membebaskan Penerima dari segala
                  tuntutan, gugatan dari pihak manapun, sehubungan dengan
                  pelanggaran terhadap hak atas kekayaan intelektual yang
                  terkandung dalam Layanan Urun Dana ini
                </li>
                <li>
                  Dalam hal terdapat hak atas kekayaan intelektual milik pihak
                  manapun (eksternal) maupun{" "}
                  <span className="italic">principal</span> maka Pemberi
                  menyatakan dan menjamin bahwa Pemberi tidak menggunakan hak
                  atas kekayaan intelektual tersebut dan tetap menjadi milik
                  pihak manapun (eksternal) maupun{" "}
                  <span className="italic">principal</span>.
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold">IX. PERNYATAAN PUBLIK</p>
              <p>
                Para Pihak sepakat bahwa segala pembicaraan diantara Para Pihak
                akan dilakukan secara rahasia. Penerima tidak akan memberikan
                pernyataan kepada pers atau publik mengenai pembicaraan yang
                berhubungan dengan suatu Layanan Urun Dana antara Para Pihak
                atau membuka dengan suatu cara kepada pihak ketiga fakta dari
                pembicaraan yang telah dilakukan, tanpa persetujuan tertulis
                sebelumnya dari Pemberi.
              </p>
            </li>
            <li>
              <p className="font-bold">X. KEBERLAKUAN KETENTUAN</p>
              <p>
                Apabila salah satu dari ketentuan dalam{" "}
                <span className="italic">Privacy Policy</span> ini menjadi tidak
                berlaku atau tidak dapat dipaksakan, ketentuan tersebut akan
                dipisahkan dari <span className="italic">Privacy Policy</span>{" "}
                ini, dimana ketentuan yang lain akan tetap berlaku dan efektif
                tapi hanya pada batas, bahwa tujuan asli dari{" "}
                <span className="italic">Privacy Policy</span> ini tidak diubah
                secara materi.
              </p>
            </li>
            <li>
              <p className="font-bold">XI. PERBAIKAN</p>
              <ul className="list-decimal px-4 space-y-2">
                <li>
                  Para Pihak sepakat bahwa apabila Penerima atau Perwakilannya
                  melanggar <span className="italic">Privacy Policy</span> ini,
                  Pemberi memiliki hak untuk mencari perbaikan berdasarkan hukum
                  dan/atau keadilan termasuk, tetapi tidak terbatas pada,
                  bantuan pengadilan yang pantas atau penyelesaian tertentu yang
                  mungkin diberikan oleh pengadilan yang memiliki kompetensi
                  yurisdiksi
                </li>
                <li>
                  Penerima mengakui dan sepakat bahwa ganti rugi finansial
                  mungkin tidak memadai dalam hal terjadi pelanggaran terhadap
                  ketentuan dalam <span className="italic">Privacy Policy</span>{" "}
                  oleh Penerima. Apabila pelanggaran tersebut dapat dibuktikan
                  oleh Pemberi, Pemberi dapat meminta ganti rugi terhadap
                  pelanggaran atau ancaman pelanggaran dari{" "}
                  <span className="italic">Privacy Policy</span> ini. Ganti rugi
                  tersebut tidak merupakan ganti rugi eksklusif tetapi merupakan
                  tambahan atas segala ganti rugi yang dimungkinkan oleh hukum
                  bagi Pihak Pemberi.
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold"> XII. PENERUS DAN PENGGANTI HAK</p>
              <p>
                <span className="italic">Privacy Policy</span> ini tidak dapat
                dialihkan oleh Pihak manapun tanpa persetujuan tertulis
                sebelumnya dari Pihak lainnya. Dalam hal Pihak lainnya
                menyetujui adanya pengalihan, maka{" "}
                <span className="italic">Privacy Policy</span> ini akan mengikat
                penerus hak dan pengganti dari Pihak yang mengalihkan tersebut.
              </p>
            </li>
            <li>
              <p className="font-bold">
                {" "}
                XIII. HUKUM YANG BERLAKU DAN PENYELESAIAN SENGKETA
              </p>
              <ul className="list-decimal px-4 space-y-2">
                <li>
                  <span className="italic">Privacy Policy</span> ini akan diatur
                  dan ditafsirkan berdasarkan hukum Negara Republik Indonesia
                </li>
                <li>
                  Apabila timbul perselisihan atau perbedaan (“Perselisihan”)
                  antara Para Pihak sehubungan dengan{" "}
                  <span className="italic">Privacy Policy</span> ini, Para Pihak
                  akan mencoba, dalam periode 30 (tiga puluh) hari kalender
                  setelah penerimaan pemberitahuan dari salah satu Pihak
                  mengenai timbulnya Perselisihan kepada Pihak lainnya, untuk
                  menyelesaikan Perselisihan tersebut pertama-tama dengan
                  musyawarah untuk mencapai kata mufakat antara Para Pihak
                </li>
                <li>
                  Apabila Perselisihan tersebut tidak dapat diselesaikan dalam
                  waktu 30 (tiga puluh) hari kalender secara musyawarah untuk
                  mufakat, Perselisihan akan diselesaikan dan diputuskan oleh
                  Pengadilan Negeri Jakarta Selatan
                </li>
                <li>
                  Tanpa mengesampingkan penyelesaian sengketa atau perselisihan
                  melalui pengadilan negeri, Para Pihak setuju dan sepakat
                  apabila penyelesaian sengketa atau perselisihan di badan
                  arbitrase dan badan alternatif penyelesaian sengketa yang
                  ditunjuk oleh Otoritas Jasa Keuangan maupun regulator
                  berwenang lainnya
                </li>
                <li>
                  Hasil putusan pengadilan negeri maupun badan arbitrase dan
                  badan alternatif penyelesaian sengketa yang ditunjuk oleh
                  Otoritas Jasa Keuangan maupun regulator berwenang lainnya
                  bersifat final dan mempunyai kekuatan hukum tetap dan mengikat
                  bagi Para Pihak
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold">
                {" "}
                XIV. TIDAK ADA KEWAJIBAN UNTUK MEMASUKI TAHAPAN BISNIS
                SELANJUTNYA
              </p>
              <p>
                Para Pihak mengakui dan menegaskan bahwa dengan pertukaran
                Informasi Rahasia sebagaimana disebutkan dalam{" "}
                <span className="italic">Privacy Policy</span>
                ini, tidak berarti bahwa Para Pihak berkewajiban untuk melakukan
                kerjasama bisnis di antara mereka di kemudian hari.
              </p>
            </li>
            <li>
              <p className="font-bold">XV. LAIN-LAIN</p>
              <ul className="list-decimal space-y-2 px-4">
                <li>
                  Kecuali secara tegas diatur lain, segala perubahan, modifikasi
                  ataupun pengesampingan atas ketentuan{" "}
                  <span className="italic">Privacy Policy</span> ini dilakukan
                  berdasarkan persetujuan tertulis Para Pihak
                </li>
                <li>
                  <span className="italic">Privacy Policy</span> ini tetap
                  berlaku setelah penyelesaian, pemutusan ataupun pembatalan
                  Layanan Urun Dana
                </li>
                <li>
                  Para Pihak menjamin bahwa semua hak dan kewajiban yang
                  tercantum dalam <span className="italic">Privacy Policy</span>{" "}
                  ini adalah sah dan mengikat Para Pihak
                </li>
              </ul>
            </li>
            <li className="font-bold">
              <span className="italic">PRIVACY POLICY</span> INI DIBUAT DAN
              DIBERIKAN PERSETUJUAN SECARA ELEKTRONIK OLEH PENERBIT MAUPUN
              PEMODAL DALAM KEADAAN SEHAT DAN SADAR SERTA TANPA ADA PAKSAAN DARI
              PIHAK MANAPUN JUGA.
            </li>
            <li>
              SETELAH PENERBIT MAUPUN PEMODAL MEMBUBUHKAN TANDA CENTANG (√) PADA
              KOTAK PERSETUJUAN SECARA ELEKTRONIK ATAS{" "}
              <span className="italic">PRIVACY POLICY</span> INI, MAKA PENERBIT
              MAUPUN PEMODAL DENGAN INI MENYATAKAN SETUJU TELAH MEMBACA,
              MENGERTI, MEMAHAMI SECARA SEKSAMA DAN TUNDUK PADA SETIAP DAN
              KESELURUHAN <span className="italic">PRIVACY POLICY</span>, SERTA
              TUNDUK PADA PERATURAN OTORITAS JASA KEUANGAN NOMOR 57/POJK.04/2020
              BESERTA PERUBAHAN-PERUBAHANNYA.
            </li>
            <li className="font-bold">
              DAN OLEH KARENA ITU, DALAM PELAKSANAAN LAYANAN URUN DANA, PENERBIT
              DAN PEMODAL MENYATAKAN DAN MENJAMIN BAHWA PENERBIT DAN PEMODAL
              SELALU TETAP MEMATUHI DAN MELAKSANAKAN SETIAP KETENTUAN YANG ADA
              DALAM <span className="italic">PRIVACY POLICY</span> INI DENGAN
              PENUH TANGGUNG JAWAB DAN PROFESIONAL.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KebijakanPrivasi;

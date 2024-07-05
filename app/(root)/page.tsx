import Link from "next/link";
import BusinessCard from "../components/BusinessCard";
import TabsQuestions from "../components/TabsQuestions";

export default async function Home() {
  return (
    <main className="w-full">
      <div className="w-full absolute top-0">
        <img
          className="w-full hidden lg:block relative rounded-b-5xl -z-50"
          src="/images/cover.png"
          alt="Background image Cover"
        />
        <div className="absolute inset-0 bg-custom-gradient rounded-b-5xl z-10"></div>
      </div>
      {/* gradient bawah ini */}
      <div className="block lg:hidden absolute inset-0 bg-custom-gradient z-10"></div>
      <section className="w-4/5 lg:w-11/12 mx-auto py-8 md:py-16 xl:py-24 flex flex-col lg:flex-row justify-between items-center gap-12 md:gap-24 lg:gap-32">
        <section className="w-full lg:w-1/2 text-white space-y-3 z-20 ">
          <h1 className="text-2xl font-bold">Selamat Datang di Fulusme</h1>
          <p className="text-base text-justify lg:text-left font-normal">
            Selamat datang di Jaman Now. Dimana Kecepatan dan instan sudah
            menjadi keseharian kita. Dimana Berinvestasi dan usaha tidak lagi
            dibatasi ruang dan waktu. Saatnya bergabung bersama Fulusme.
          </p>
          <section className="flex flex-col sm:flex-row text-sm lg:text-base font-bold gap-2 lg:gap-0">
            <Link
              href="/penerbit"
              className="relative z-10 my-0 lg:my-8 py-3 px-3 lg:py-6 lg:px-6 bg-emerald hover:bg-green-700 rounded-xl lg:rounded-l-xl text-white"
            >
              Daftar Sebagai Penerbit
            </Link>
            <Link
              href="/pemodal"
              className="relative z-10 my-0 lg:my-8 lg:-ml-4 py-3 px-3 lg:py-6 lg:px-6 bg-white hover:bg-slate-200 rounded-xl text-black"
            >
              Daftar Sebagai Pemodal
            </Link>
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
        {/* Section bawah ini */}
        <section className="w-11/12 lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2 lg:gap-16 z-20 mb-0 lg:mb-20  text-white">
          <section className="flex items-center gap-8 lg:gap-2">
            <img
              className="w-[24px] h-[24px]"
              src="/icons/people.svg"
              alt="People Icon"
            />
            <section className="">
              <h3 className="">Dana Tersalurkan</h3>
              <h4 className="text-2xl font-bold">Rp 250.665.000.000</h4>
            </section>
          </section>
          <section className="flex items-center gap-8 lg:gap-2">
            <img src="/icons/check.svg" alt="Check Icon" />
            <section className="">
              <h3 className="">Investor Aktif</h3>
              <h4 className="text-2xl font-bold">25.1rb</h4>
            </section>
          </section>
          <section className="flex items-center gap-8 lg:gap-2">
            <img src="/icons/undo.svg" alt="Undo Icon" />
            <section className="">
              <h3 className="">Pengembalian Dana</h3>
              <h4 className="text-2xl font-bold"> Rp 1.305.595.000</h4>
            </section>
          </section>
          <section className="flex items-center gap-8 lg:gap-2">
            <img src="/icons/stats.svg" alt="Stats Icon" />
            <section className="">
              <h3 className="">Rata-rata Realisasi ROI</h3>
              <h4 className="text-2xl font-bold">15%</h4>
            </section>
          </section>
        </section>
      </section>

      <section className="space-y-4 mt-4 2xl:mt-16 text-center">
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
      <section className="w-11/12 mx-auto flex flex-col justify-center items-center gap-y-8 md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0 my-8">
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
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
          src="/images/phone.png"
          alt="Fulusme Aplikasi Preview"
          className="h-full block lg:hidden"
        />
        <img
          src="/images/phone2.png"
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
          Hal yang perlu Diperhatikan
        </h4>
        <section className="flex flex-col gap-4 h-72 lg:h-128 overflow-scroll">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            libero, in minima dignissimos laborum assumenda placeat nostrum
            maxime porro nisi eos possimus quisquam doloremque sint autem
            pariatur a vero quasi. Voluptatibus in fuga neque! Voluptatibus
            ratione enim vitae, consectetur animi eligendi fugiat consequuntur
            consequatur rem expedita iure placeat sint tempora modi qui esse
            rerum possimus delectus tempore ullam magnam quia. Iusto officia
            eveniet cum iste est odit vero modi impedit numquam sit, molestiae
            ipsam laudantium perferendis id magnam quidem hic. Maxime illum
            ratione corrupti at vitae quibusdam nostrum tempore itaque animi
            similique nam eaque soluta harum enim incidunt, aliquid voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            molestias recusandae in ratione, laudantium esse reiciendis?
            Inventore quo odit, fugit dicta temporibus, id cupiditate impedit
            voluptates expedita illo mollitia magnam. Dolor amet qui, nam saepe
            tempora impedit a, ipsum repellendus, hic mollitia suscipit alias
            laboriosam nesciunt consectetur deserunt sint voluptatem asperiores?
            Quod vero enim cum dicta error commodi repellat explicabo quisquam
            consectetur aliquid officiis obcaecati, reiciendis a eveniet facere
            ad pariatur quibusdam eum accusamus molestiae quidem dolorem
            molestias. Amet veritatis sed quisquam nobis ipsam nesciunt illo
            consectetur expedita laborum autem tempore facilis nisi quod quia
            architecto quasi rerum reiciendis, modi iure deserunt, quos eligendi
            voluptas fugiat. Autem, quidem. Nesciunt at eligendi recusandae, ab
            in nemo non blanditiis. Assumenda, quos voluptas ipsam quidem
            corporis iure facere sit asperiores perspiciatis suscipit quod nam
            esse et fugiat, aut quaerat iusto iste impedit. Quisquam architecto
            nisi sapiente id blanditiis laborum at cupiditate, sunt deleniti,
            necessitatibus error voluptas, voluptatibus reprehenderit maiores
            sequi mollitia ratione quae dignissimos? Facilis earum tenetur
            consequatur, totam, magni reiciendis tempora fuga nemo beatae
            commodi blanditiis? Voluptatum quasi dolorum amet magnam odit
            voluptatibus omnis repellat error! Quod vitae modi animi
            exercitationem adipisci facilis perferendis asperiores ipsam
            quibusdam incidunt? Obcaecati veniam sequi ducimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            quis ipsam autem. Voluptate eligendi qui ad dolor id sequi velit ab
            voluptatibus labore aliquam, impedit dignissimos dolores totam,
            molestias assumenda eos magni explicabo quae pariatur recusandae
            consectetur dolore? Animi libero voluptatibus consequuntur dolorem
            dicta. Ea officiis dolores qui sunt sit totam libero iure
            exercitationem, deleniti suscipit aspernatur. Facilis nisi porro
            eius perferendis cumque libero minima voluptatem, inventore numquam
            quas. Quae voluptatem eum autem aliquam dolor, laboriosam laborum
            culpa nihil esse consectetur labore reiciendis quasi quam inventore,
            fuga ducimus minima iure non. Aperiam minus, officiis reprehenderit
            quod laboriosam veniam! Consequuntur exercitationem repudiandae,
            quasi omnis accusantium quisquam ipsum expedita animi architecto
            asperiores iusto dignissimos vero autem deserunt maiores, qui a
            assumenda ipsa alias molestiae accusamus, eum consectetur rem. Eos,
            quidem ut tenetur quis alias eius amet sunt blanditiis quaerat iusto
            minus at laudantium pariatur asperiores sint! Est mollitia
            repellendus iusto dolorem aliquam animi fuga qui illo, iste ab
            explicabo accusamus, doloribus, dignissimos quasi earum corporis
            vero ipsam! Quod magni in cumque voluptates rem. Fuga reiciendis
            tempora dignissimos molestias repellendus magni ratione eius
            corporis, sapiente velit quaerat molestiae ipsum fugiat quae nisi
            aperiam amet voluptas illo! Cupiditate assumenda commodi eveniet sed
            placeat. Tempore voluptatem perspiciatis cupiditate dolore.
            Excepturi expedita rerum porro quos sed! Obcaecati officia tempora
            perferendis molestiae rerum amet id rem quod, cumque, et atque
            mollitia deserunt nihil doloribus fuga quis voluptatibus illum
            assumenda voluptatum facere debitis velit natus. Explicabo, impedit
            a unde ducimus minus eligendi nisi doloribus amet, saepe corrupti
            perferendis voluptatum deserunt, quia provident placeat qui!
            Obcaecati deserunt reprehenderit, suscipit temporibus fugiat aut?
            Voluptate suscipit ab aliquid mollitia a repellat, aperiam
            doloremque voluptates neque enim soluta iste voluptatibus facilis
            natus placeat animi provident dignissimos labore quisquam expedita
            nam! Quia error enim sit dolores earum facere doloremque repellat
            explicabo ab? Tenetur.
          </p>
        </section>
      </section>
    </main>
  );
}

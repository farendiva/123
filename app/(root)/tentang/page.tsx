import ProfileCard from "@/app/components/ProfileCard";

export default async function Tentang() {
  return (
    <main className="bg-sky text-white">
      <section className="w-10/12 mx-auto py-28 flex justify-between items-center gap-20 text-justify">
        <section className="space-y-8">
          <section className="space-y-2">
            <h1 className="text-xl text-emerald-light font-bold">FULUSME</h1>
            <p>
              berkomitmen untuk memberikan akses investasi yang mudah dan
              terjangkau bagi semua orang dengan berbagai pilihan produk
              investasi yang sesuai dengan profil risiko dan tujuan keuangan
              Anda.
            </p>
          </section>
          <section className="flex justify-between items-center leading-relaxed gap-2">
            <section className="space-y-1">
              <img src="/images/ojk2.png" alt="Otoritas Jasa Keuangan Logo" />
              <p>
                Fulusme telah Berizin dan Diawasi Oleh{" "}
                <span className="font-bold">Otoritas Jasa Keuangan RI</span>
              </p>
            </section>
            <section>
              <img src="/images/iso-badge.png" alt="InfoSec Management Badge" />
              <p>
                Keamanan Data Terjamin dengan Sertifikasi
                <span className="font-bold"> ISO 27001:2013</span>
              </p>
            </section>
          </section>
        </section>
        <section className="space-y-8">
          <section className="space-y-1">
            <img src="/icons/eye.svg" alt="Eye Icon" />
            <h2 className="text-xl font-bold ">VISI</h2>
            <p>
              Menjadi Perusahaan Teknologi Finansial terkemuka di Regional Asia
              Tenggara yang berkepribadian Indonesia.
            </p>
          </section>
          <section className="space-y-1">
            <img src="/icons/rocket.svg" alt="Rocket Icon" />
            <h2 className="text-xl font-bold">MISI</h2>
            <p>
              Memajukan percepatan ekonomi Indonesia dengan menggunakan
              teknologi yang tetap berprinsip kepada nilai keadilan dan
              manusiawi Membangun peradaban digital di wilayah regional dengan
              membawa nilai Indonesia.
            </p>
          </section>
        </section>
      </section>
      <section className="bg-sky-dark h-[355px]">
        <h1 className="text-[32px] pt-10 pb-14 text-center font-bold mx-auto ">
          <span className="text-emerald-light">Fulusme</span> Sinergi
        </h1>
        <section className="w-11/12 mx-auto flex justify-between items-start">
          <section className="w-1/4 flex flex-col justify-center items-start">
            <img src="/icons/portrait.svg" alt="Penerbit Logo" />
            <div className="h-1 bg-emerald-light mt-2 w-8"></div>
            <h2 className="text-xl font-bold">Penerbit</h2>
            <p>Memprioritaskan calon penerbit yang potensial</p>
          </section>
          <section className="w-1/4 flex flex-col justify-center items-start ">
            <img
              className="w-6 h-6"
              src="/icons/fulusme-small.svg"
              alt="Fulusme Logo"
            />
            <div className="h-1 bg-emerald-light mt-2 w-8"></div>
            <h2 className="text-xl font-bold">Fulusme</h2>
            <p>
              Selalu menjaga keseimbangan, kebutuhan kenyamanan dan keamanan
              pemodal dan penerbit
            </p>
          </section>
          <section className="w-1/4 flex flex-col justify-center items-start ">
            <img src="/icons/tulip.svg" alt="Pemodal Logo" />
            <div className="h-1 bg-emerald-light mt-2 w-8"></div>
            <h2 className="text-xl font-bold">Pemodal</h2>
            <p>
              Secara konsisten menampilkan proyek dengan dividen yang menarik
            </p>
          </section>
        </section>
      </section>
      <section className="h-128 bg-white text-black flex flex-col justify-evenly items-center">
        <h1 className="text-5xl font-bold">Board Of Commisioner</h1>
        <section className="w-2/3 flex justify-center items-center gap-12">
          <img
            className="rounded-full"
            src="https://i.pinimg.com/236x/69/47/ae/6947ae53e2807e7e041d14ae17cc0c01.jpg"
            alt="Board"
          />
          <section className="space-y-2">
            <h2 className="text-2xl font-bold">Donald Akbar</h2>
            <h4 className="text-2xl text-emerald-light">
              President Commisioner
            </h4>
            <div className="h-1 bg-emerald-light mt-2 w-8"></div>
            <p>
              Berkecimpung sebagai komisaris dan komisaris utama di beberapa
              perusahaan multi industri, membuatnya memiliki pengalaman yang
              panjang dan tajam sebagai pengawas jalannya FuLusme. Dengan
              memiliki visi dan misi untuk memajukan bisnis dengan konsep Urun
              Dana/ securities Crowdfunding bagi seluruh masyarakat, diharapkan
              Fulusme dapat bermanfaat bagi dunia bisnis di Indonesia.
            </p>
          </section>
        </section>
      </section>
      <section className="w-full h-[720px] bg-[#f9f9f9] text-black text-justify flex justify-center items-center">
        <section className="w-11/12 mx-auto grid grid-cols-4 gap-16">
          <ProfileCard
            name="Chris Agustono W"
            position="Comissioner"
            description="Berpengalaman lebih dari 20 tahun sebagai praktisi, konsultan dan Auditor IT. Beberapa kali menjadi pembicara dan moderator untuk event IT nasional. Pengalamannya menjadi dasar bagi pengembangan finansial berbasis teknologi saat ini dengan membangun platform Securities Crowd Funding, utamanya utk memenuhi kebutuhan akan Pendanaan dan Pemodalan yang tepat sasaran dan memberikan kontribusi bagi seluruh lapisan masyarakat tanpa dibatasi oleh ruang dan waktu"
          />
          <ProfileCard
            name="Helmi Yusuf"
            position="Comissioner"
            description="Memiliki pengalaman yang panjang dalam dunia telekomunikasi dan pernah berdinas di perusahaan operator selular terkemuka di Indonesia selama beberapa tahun. Saat ini masih menjabat sebagai komisaris di beberapa perusahaan. Dengan adanya beliau, memungkinkan FuLusme untuk memiliki pengawas yang handal untuk lebih berkembang kedalam bisnis Securities Crowdfunding."
          />
          <ProfileCard
            name="Doni Yuliardi"
            position="Comissioner"
            description="Saat ini masih menjabat sebagai komisaris dan direktur di beberapa perusahaan. Dengan pengalaman multi talenta dan multi industri, menjadikannya matang sebagai pengawas di FuLusme . Selain berpengalaman sebagai teknokrat, juga berpengalaman dalam bisnis praktis dan enterpreneur. Di sela kesibukannya, masih sempat mengajar sebagai dosen di Universitas Bina Nusantara."
          />
          <ProfileCard
            name="Cacan Somantri Agis"
            position="Comissioner"
            description="Berpengalaman selama bertahun – tahun di dunia keuangan dan asuransi. Saat ini masih menjabat sebagai direktur dan komisaris di beberapa perusahaan serta menjadi pengajar untuk pelatihan dan pengembangan manajemen dan SDM. Karena pengalaman di bidang bisnis dan keuangan inilah menjadikan beliau sebagai pengawas di FuLusme."
          />
        </section>
      </section>
      <section className="w-full h-[840px] bg-white text-black text-justify flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold my-16">Board Of Director</h1>
        <section className="w-11/12 mx-auto grid grid-cols-4 gap-16">
          <ProfileCard
            name="Emil Dharma"
            position="Chief Executive Officer"
            description="Berpengalaman lebih dari 20 tahun sebagai praktisi, konsultan dan Auditor IT. Beberapa kali menjadi pembicara dan moderator untuk event IT nasional. Pengalamannya menjadi dasar bagi pengembangan finansial berbasis teknologi saat ini dengan membangun platform Securities Crowd Funding, utamanya utk memenuhi kebutuhan akan Pendanaan dan Pemodalan yang tepat sasaran dan memberikan kontribusi bagi seluruh lapisan masyarakat tanpa dibatasi oleh ruang dan waktu"
          />
          <ProfileCard
            name="Nandana Pawitra"
            position="Chief Operation Officer"
            description="Memiliki pengalaman yang panjang dalam dunia telekomunikasi dan pernah berdinas di perusahaan operator selular terkemuka di Indonesia selama beberapa tahun. Saat ini masih menjabat sebagai komisaris di beberapa perusahaan. Dengan adanya beliau, memungkinkan FuLusme untuk memiliki pengawas yang handal untuk lebih berkembang kedalam bisnis Securities Crowdfunding."
          />
          <ProfileCard
            name="Rumaida"
            position="Chief Finance Officer"
            description="Saat ini masih menjabat sebagai komisaris dan direktur di beberapa perusahaan. Dengan pengalaman multi talenta dan multi industri, menjadikannya matang sebagai pengawas di FuLusme . Selain berpengalaman sebagai teknokrat, juga berpengalaman dalam bisnis praktis dan enterpreneur. Di sela kesibukannya, masih sempat mengajar sebagai dosen di Universitas Bina Nusantara."
          />
          <ProfileCard
            name="Andi Chesyah M"
            position="Chief Technology Officer"
            description="Berpengalaman selama bertahun – tahun di dunia keuangan dan asuransi. Saat ini masih menjabat sebagai direktur dan komisaris di beberapa perusahaan serta menjadi pengajar untuk pelatihan dan pengembangan manajemen dan SDM. Karena pengalaman di bidang bisnis dan keuangan inilah menjadikan beliau sebagai pengawas di FuLusme."
          />
        </section>
      </section>
    </main>
  );
}

import ProfileCard from "@/app/components/ProfileCard";

export default async function Tentang() {
  return (
    <main className="bg-sky text-white">
      <section className="w-11/12 lg:w-10/12 mx-auto py-16 lg:py-28 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20 text-justify">
        <section className="space-y-8">
          <section className="space-y-2">
            <h1 className="text-xl text-emerald-light font-bold">
              KOMITMEN KAMI
            </h1>
            <p>
              FULUSME berkomitmen untuk memberikan akses pembiayaan dan
              investasi yang lebih menguntungkan untuk investor dan pemilik
              bisnis
            </p>
          </section>
          <section className="flex flex-col lg:flex-row items-center leading-relaxed gap-6 lg:gap-2">
            <section>
              <img src="/images/ojk2.png" alt="Otoritas Jasa Keuangan Logo" />
            </section>
            <section>
              <img src="/images/iso-badge.png" alt="InfoSec Management Badge" />
            </section>
          </section>
        </section>
        <section className="space-y-8">
          <section className="space-y-1">
            <img src="/icons/eye.svg" alt="Eye Icon" />
            <h2 className="text-xl font-bold">VISI</h2>
            <p>
              Menjadi Perusahaan Teknologi Finansial terkemuka di Indonesia dan
              Regional Asia.
            </p>
          </section>
          <section className="space-y-1">
            <img src="/icons/rocket.svg" alt="Rocket Icon" />
            <h2 className="text-xl font-bold">MISI</h2>
            <p>
              Memajukan perekonomian Indonesia khususnya pada sektor UKM melalui
              teknologi finansial agar dapat tumbuh berkembang dan tetap
              berpegang pada nilai-nilai keadilan dan kejujuran.
            </p>
          </section>
        </section>
      </section>
      <section className="bg-sky-dark py-10 lg:py-28">
        <h1 className="text-3xl lg:text-4xl text-center font-bold mx-auto">
          <span className="text-emerald-light">Fulusme</span> Sinergi
        </h1>
        <section className="mt-8 w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-4">
          <section className="w-full lg:w-1/4 flex flex-col justify-center items-start">
            <img src="/icons/portrait.svg" alt="Penerbit Logo" />
            <div className="h-1 bg-emerald-light mt-2 w-8"></div>
            <h2 className="text-xl font-bold">Penerbit</h2>
            <p>Memprioritaskan calon penerbit yang potensial</p>
          </section>
          <section className="w-full lg:w-1/4 flex flex-col justify-center items-start">
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
          <section className="w-full lg:w-1/4 flex flex-col justify-center items-start">
            <img src="/icons/tulip.svg" alt="Pemodal Logo" />
            <div className="h-1 bg-emerald-light mt-2 w-8"></div>
            <h2 className="text-xl font-bold">Pemodal</h2>
            <p>
              Secara konsisten menampilkan proyek dengan dividen yang menarik
            </p>
          </section>
        </section>
      </section>
      <h1 className="py-10 lg:py-16 text-3xl lg:text-5xl text-center bg-white text-black font-bold">
        Board Of Commissioner
      </h1>
      <section className="w-full bg-white text-black text-justify flex justify-center items-center">
        <section className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 lg:gap-16">
          <ProfileCard
            name="Donald Akbar"
            grid={3}
            position="President Commissioner"
            imageSrc="images/commisioner_donaldakbar.png"
            description="Berkecimpung sebagai komisaris dan komisaris utama di beberapa perusahaan multi industri, membuatnya memiliki pengalaman yang panjang dan tajam sebagai pengawas jalannya FuLusme . Dengan memiliki visi dan misi untuk memajukan bisnis dengan konsep Urun Dana/ securities Crowdfunding bagi seluruh masyarakat, diharapkan FuLusme dapat bermanfaat bagi dunia bisnis di Indonesia."
          />
          <ProfileCard
            name="Antasari Irawanto "
            grid={3}
            position="Commissioner"
            imageSrc="/images/comisionner_antasasri.png"
            description="Bachelor Of Engineering (B.ENG), lulusan New Mexico State University. Berpengalaman di telekomunikasi Industri, menduduki beberapa posisi sebagai presiden direktur dan co-founder di beberapa perusahaan telekomunikasi."
          />
          <ProfileCard
            name="Chris Agustono W"
            grid={3}
            position="Commissioner"
            imageSrc="/images/commisioner_chris.png"
            description="Berpengalaman lebih dari 20 tahun sebagai praktisi, konsultan dan Auditor IT. Beberapa kali menjadi pembicara dan moderator untuk event IT nasional. Pengalamannya menjadi dasar bagi pengembangan finansial berbasis teknologi saat ini dengan membangun platform Securities Crowd Funding, utamanya utk memenuhi kebutuhan akan Pendanaan dan Pemodalan yang tepat sasaran dan memberikan kontribusi bagi seluruh lapisan masyarakat tanpa dibatasi oleh ruang dan waktu."
          />
        </section>
      </section>
      <section className="w-full py-16 bg-white text-black text-justify flex flex-col justify-center items-center">
        <h1 className="text-3xl lg:text-5xl font-bold my-10 lg:my-16">
          Board Of Director
        </h1>
        <section className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProfileCard
            name="Emil Dharma"
            grid={4}
            position="Chief Executive Officer"
            imageSrc="/images/ceo_emildharma.png"
            description="Master of Commerce dari University of New South Wales, Australia. Berpengalaman di bidang Perbankan, Lembaga Keuangan dan Capital Market selama kurang lebih 15 tahun, Berpengalaman sebagai komisaris dan direktur di berbagai bidang usaha, Berpengalaman pada industri Finansial Teknologi, Penasehat Keuangan di beberapa Perusahaan."
          />
          <ProfileCard
            name="Nandana Pawitra"
            grid={4}
            position="Chief Business Officer"
            imageSrc="/images/cbo_nandana.png"
            description="Berpengalaman lebih dari 20 tahun sebagai profesional, pelaku pasar di Bursa Efek dan pemilik Anggota Bursa Berjangka Jakarta. Juga pendiri The Jakarta Commodity Exchange. Pengalaman yang cukup dalam industri Capital Market dapat menjadi landasan dalam mengembangkan industri Securities Crowdfunding yang Insya AlLah dapat menjadi manfaat bagi sebanyak-banyak umat."
          />
          <ProfileCard
            name="Eva Marlina"
            grid={4}
            position="Chief Finance Officer"
            imageSrc="/images/cfo_evamarlina.jpg"
            description="Berpengalaman di industri telekomunikasi sebagai Associate director dan Chief of Corporate Relation Affairs, dan memiliki pengalaman finansial yang mumpuni untuk mendukung jalannya Fulusme."
          />
          <ProfileCard
            name="Rahmat Kurniatapa"
            grid={4}
            position="Chief Technology Officer"
            imageSrc="/images/cto_rahmat.png"
            description="Berpengalaman lebih dari 15 tahun di industri Paymen, memiliki pengalaman di industri financial teknologi dan digital payment, dan pengalaman di dunia perbankan yaitu Citibank dan Mandiri, pernah menjabat sebagai direktur di beberapa perusahaan EDC dan Fintek."
          />
        </section>
      </section>
    </main>
  );
}

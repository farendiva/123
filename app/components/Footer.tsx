const Footer = () => {
  const menuItems = [
    { href: "/", label: "Beranda" },
    { href: "/daftar-bisnis", label: "Daftar Bisnis" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "#", label: "Pasar Sekunder" },
    { href: "#", label: "Berita" },
  ];

  return (
    <footer className="w-full bg-sky text-white text-xs lg:text-sm rounded-t-5xl">
      <div className="w-4/5 max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start gap-8">
        <section className="">
          <img
            src="/icons/fulusme-white.svg"
            alt="Fulusme Logo"
            className="h-18"
          />
          <ul className="space-y-2">
            <li>
              <a href="/syarat-dan-ketentuan" className="hover:underline">
                Syarat dan Ketentuan
              </a>
            </li>
            <li>
              <a href="/kebijakan-privasi" className="hover:underline">
                Kebijakan Privasi
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </section>

        <section className="">
          <h5 className="font-bold mb-4">ALAMAT</h5>
          <p className="leading-relaxed">
            Gedung Menara 165 Lt. 3<br />
            Jl. Tahi Bonar Simatupang <br />
            No.Kav.1, Cilandak, Pasar Minggu,
            <br />
            Kota Jakarta Selatan <br /> Daerah Khusus Ibukota Jakarta 12560
          </p>
        </section>

        <nav className="">
          <h6 className="font-bold mb-4">INFORMASI</h6>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="">
          <h5 className="font-bold mb-4">HUBUNGI KAMI</h5>
          <ul className="space-y-4">
            <li>
              Nomor Telepon
              <br />
              <span className="font-bold">+62 21 388 20 133</span>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=6281299900150"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Whatsapp
                <br />
                <span className="font-bold">+62 812 9990 0150</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@fulusme.id" className="hover:underline">
                Email
                <br />
                <span className="font-bold">info@fulusme.id</span>
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <p className="mb-2">Follow Us</p>
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://www.facebook.com/fulusme/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/facebook-logo.svg"
                    alt="Facebook Logo"
                    className="h-6"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/fulusme/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/instagram-logo.svg"
                    alt="Instagram Logo"
                    className="h-6"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/icons/telegram-logo.svg"
                    alt="Twitter Logo"
                    className="h-6"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/icons/youtube-logo.svg"
                    alt="Youtube Logo"
                    className="h-6"
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="">
          <h6 className="font-bold mb-4">BERIZIN DAN DIAWASI OLEH</h6>
          <div className="flex flex-col lg:flex-row items-start gap-4">
            <img
              src="/images/ojk_white.png"
              alt="Otoritas Jasa Keuangan Logo"
              className="h-16"
            />
            <img
              src="/images/iso-badge.png"
              alt="InfoSec Management ISO 2013 Badge"
              className="h-16"
            />
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

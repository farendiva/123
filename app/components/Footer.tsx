import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8f8ff] py-16 text-sm lg:text-base">
      <section className="w-4/5 lg:w-11/12 mx-auto flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center">
        <section className="space-y-4">
          <img src="/icons/fulusme.svg" alt="Fulusme Logo" />
          <h5 className="font-bold">ALAMAT</h5>
          <p>
            Gedung Menara 165 Lt. 3 <br />
            Jl. Tahi Bonar Simatupang <br /> No.Kav.1, Cilandak, Pasar Minggu,
            Kota Jakarta Selatan <br /> Daerah Khusus Ibukota Jakarta 12560
          </p>
          <h5 className="font-bold">HUBUNGI KAMI</h5>
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <li>
              Nomor Telefon <br />
              <span className="font-bold">+62 21 2520 934</span>
            </li>
            <li>
              Whatsapp <br />
              <span className="font-bold">+62 822 9999 6862</span>
            </li>
            <li>
              Email <br />
              <span className="font-bold">info@fulusme.id</span>
            </li>
            <li>
              Follow Us <br />
              <ul className="flex gap-4 mt-0.5">
                <li>
                  <a href="">
                    <img src="/icons/facebook.svg" alt="Facebook Logo" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/icons/instagram.svg" alt="Instagram Logo" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/icons/twitter.svg" alt="Twitter Logo" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/icons/youtube.svg" alt="Youtube Logo" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="flex flex-col space-y-12 lg:space-y-20">
          <section className="space-y-4">
            <h6 className="font-bold">BERIZIN DAN DIAWASI OLEH</h6>
            <section className="flex items-center gap-8">
              <img
                className=""
                src="/images/ojk2.png"
                alt="Otoritas Jasa Keuangan Logo"
              />
              <img
                className=""
                src="/images/iso-badge.png"
                alt="InfoSec Management ISO 2013 Badge"
              />
            </section>
          </section>
          <section className="space-y-8">
            <h6 className="font-bold">DIDUKUNG OLEH</h6>
            <ul className="w-full grid grid-cols-4 justify-center items-center">
              <li>
                <img src="/icons/kominfo.svg" alt="Kominfo Logo" />
              </li>
              <li>
                <img src="/images/Danamon.png" alt="Danamon Logo" />
              </li>
              <li>
                <img src="/images/Aludi.png" alt="Aludi Logo" />
              </li>
              <li>
                <img src="/images/Ksei.png" alt="Ksei Logo" />
              </li>
              <li>
                <img src="/images/pse.png" alt="PSE Logo" />
              </li>
              <li>
                <img
                  className="pl-6"
                  src="/images/Pefindo.png"
                  alt="Pefindo Logo"
                />
              </li>
              <li>
                <img src="/images/rapid-ssl.png" alt="Rapid SSL Logo" />
              </li>
            </ul>
          </section>
        </section>
      </section>
    </footer>
  );
};

export default Footer;

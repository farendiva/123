import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8f8ff] py-8 text-sm lg:text-base">
      <section className="w-11/12 mx-auto flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center">
        <section className="space-y-4">
          <img src="/icons/fulusme.svg" alt="Fulusme Logo" />
          <h5 className="font-bold">ALAMAT</h5>
          <p>
            Gedung Menara 165 Lt. 3 <br />
            Jl. TB Simatupang Kav. 1 <br />
            Cilandak, Pasar Minggu, Kota Jakarta Selatan <br /> Daerah Khusus
            Ibukota Jakarta 12560
          </p>
          <h5 className="font-bold">HUBUNGI KAMI</h5>
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <li>
              Nomor Telepon <br />
              <span className="font-bold">+62 21 388 20 133</span>
            </li>
            <li>
              <a
                target="__blank"
                href="https://api.whatsapp.com/send?phone=6281299900150"
              >
                Whatsapp <br />
                <span className="font-bold">+62 812 9990 0150</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@fulusme.id">
                Email <br />
                <span className="font-bold">info@fulusme.id</span>
              </a>
            </li>
            <li>
              Follow Us <br />
              <ul className="flex gap-4 mt-0.5">
                <li>
                  <a href="https://www.facebook.com/fulusme/" target="__blank">
                    <img src="/icons/facebook.svg" alt="Facebook Logo" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/fulusme/" target="__blank">
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
          {/* <section className="space-y-8">
            <h6 className="font-bold">DIDUKUNG OLEH</h6>
            <ul className="w-full grid grid-cols-4 justify-center items-center space-x-2">
              <li>
                <img
                  src="/icons/kominfo.svg"
                  alt="Kominfo Logo"
                  className="w-12"
                />
              </li>
              <li>
                <img
                  src="/images/MUFG_Danamon.png"
                  alt="Danamon Logo"
                  className="w-20"
                />
              </li>
              <li>
                <img
                  src="/images/logo_aludi.png"
                  alt="Aludi Logo"
                  className="w-20"
                />
              </li>
              <li>
                <img src="/icons/Ksei.svg" alt="Ksei Logo" className="w-20" />
              </li>
              <li>
                <img src="/icons/pse.svg" alt="PSE Logo" className="w-16" />
              </li>
              <li>
                <img
                  className="w-16"
                  src="/icons/Pefindo.svg"
                  alt="Pefindo Logo"
                />
              </li>
              <li>
                <img
                  src="/icons/Rapid SSL.svg"
                  alt="Rapid SSL Logo"
                  className="w-16"
                />
              </li>
            </ul>
          </section> */}
        </section>
      </section>
    </footer>
  );
};

export default Footer;

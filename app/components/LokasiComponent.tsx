"use client";

import { useState } from "react";
import { Share2, X, Check, MapPin } from "lucide-react";

type ShareProps = {
  text: string;
  tipe: string;
  id: string;
};

const LokasiComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const shareUrl = "https://maps.app.goo.gl/W9ZER78xfuXsdbx98";

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <>
      <button className="w-full flex items-center gap-2" onClick={toggleModal}>
        <MapPin fill="black" color="white" />
        Lokasi
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg space-y-4 w-1/3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MapPin fill="black" color="white" />
                <h2 className="text-lg font-semibold">Lokasi</h2>
              </div>
              <button
                onClick={toggleModal}
                className="hover:bg-gray-200 rounded-full p-2"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <iframe
                className="w-full h-72 "
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3845867817245!2d106.80772903488766!3d-6.2129035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7134b9327c5%3A0xe4982bf27c73eb8c!2sFulusme.id!5e0!3m2!1sen!2sid!4v1721881916895!5m2!1sen!2sid"
                loading="lazy"
              ></iframe>
              <p className="text-sm leading-loose">
                Aeon mall, West Tanjung, Jagakarsa, South Jakarta City, Jakarta
                Jl. Raya Tj. Barat, Tj. Bar., Kec. Jagakarsa, Kota Jakarta
                Selatan, Daerah Khusus Ibukota Jakarta 12530
              </p>
              <div className="flex">
                <input
                  type="text"
                  value={shareUrl}
                  readOnly
                  className="flex-grow p-2 border rounded-l-lg"
                />
                <button
                  onClick={handleCopyLink}
                  className="p-2 bg-[#667AB9] hover:bg-[#475da9] text-white rounded-r-lg flex items-center justify-center"
                >
                  {isCopied ? <Check size={20} /> : "Salin"}
                </button>
              </div>
              <button className="w-full bg-[#667AB9] hover:bg-[#475da9] py-2 text-sm text-white font-semibold rounded-xl">
                Go To Maps
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LokasiComponent;

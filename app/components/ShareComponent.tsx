"use client";

import { useState } from "react";
import { Share2, X, Check } from "lucide-react";
import {
  FacebookShare,
  LinkedinShare,
  TelegramShare,
  WhatsappShare,
} from "react-share-kit";

type ShareProps = {
  text: string;
  tipe: string;
  id: string;
};

const formatTitleForUrl = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const ShareComponent: React.FC<ShareProps> = ({ text, tipe, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const titleToShare = `Check out this amazing post: ${text}`;
  const formattedNamaEfek = formatTitleForUrl(text);
  const shareUrl = `https://fulusme.id/${tipe.toLowerCase()}/${formattedNamaEfek}-${id}`;

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
        <Share2 size={18} />
        Bagikan
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg space-y-4 w-96 h-64">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Share</h2>
              <button
                onClick={toggleModal}
                className="hover:bg-gray-200 rounded-full p-2"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-4 flex justify-around">
              <div className="flex flex-col gap-2 items-center">
                <div className="rounded-xl overflow-hidden">
                  <WhatsappShare
                    url={shareUrl}
                    title={titleToShare}
                    separator=":: "
                  />
                </div>
                <p>Whatsapp</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="rounded-xl overflow-hidden">
                  <LinkedinShare url={shareUrl} />
                </div>
                <p>Linkedin</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="rounded-xl overflow-hidden">
                  <TelegramShare url={shareUrl} />
                </div>
                <p>Telegram</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="rounded-xl overflow-hidden">
                  <FacebookShare url={shareUrl} quote={titleToShare} />
                </div>
                <p>Facebook</p>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm">Or copy link</label>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareComponent;

"use client";

import { useState } from "react";
import { Clipboard, CheckCircle } from "lucide-react";

interface CopyToClipboardProps {
  text: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={copyToClipboard}
        className="px-3 rounded-xl py-0.5 bg-[#667AB9] text-white focus:outline-none"
      >
        Salin
      </button>
      <span className="font-semibold">{text}</span>
      {copySuccess && (
        <span className="ml-2 text-green-600 text-sm flex items-center">
          <CheckCircle className="mr-1" /> Copied!
        </span>
      )}
    </div>
  );
};

export default CopyToClipboard;

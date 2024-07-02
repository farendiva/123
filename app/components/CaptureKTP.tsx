"use client";

import { FC, useState } from "react";
import Capture from "./Capture";

interface CaptureKTPProps {
  onCaptured: (image: string) => void;
}

const CaptureKTP: FC<CaptureKTPProps> = ({ onCaptured }) => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const handleCapture = (image: string) => {
    setCapturedImage(image);
  };

  const handleRetake = () => {
    setCapturedImage(null);
  };

  return (
    <div className="text-center">
      {capturedImage ? (
        <div className="flex flex-col items-center">
          <img
            src={capturedImage}
            alt="Captured KTP"
            className="mb-4 w-56 h-36"
          />
          <p className="mb-4 text-2xl lg:text-4xl">Sukses Upload Foto</p>

          <button
            className=" bg-emerald-light px-12 font-bold rounded-3xl py-2 text-white"
            onClick={() => onCaptured(capturedImage)}
          >
            Selanjutnya
          </button>

          <button
            className="mr-2 text-xl font-bold px-4 py-2 text-sky mb-2"
            onClick={handleRetake}
          >
            Ambil Kembali Foto KTP
          </button>
        </div>
      ) : (
        <Capture onCapture={handleCapture} captureType="ktp" />
      )}
    </div>
  );
};

export default CaptureKTP;

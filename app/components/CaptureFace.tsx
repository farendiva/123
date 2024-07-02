"use client";

import { FC, useState } from "react";
import Capture from "./Capture";

interface CaptureFaceProps {
  onCaptured: (image: string) => void;
}

const CaptureFace: FC<CaptureFaceProps> = ({ onCaptured }) => {
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
            alt="Captured Face"
            className="mb-4 rounded-full w-40 h-40"
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
            Ambil Kembali Foto Selfie
          </button>
        </div>
      ) : (
        <Capture onCapture={handleCapture} captureType="face" />
      )}
    </div>
  );
};

export default CaptureFace;

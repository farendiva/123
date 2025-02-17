"use client";

import { FC, useState } from "react";
import Capture from "./Capture";
import {
  UseFormRegister,
  Control,
  FieldErrors,
  UseFormSetValue,
  UseFormTrigger,
  Controller,
  UseFormWatch,
} from "react-hook-form";
import { z } from "zod";
import { KycPemodalFormSchema } from "@/lib/schema";

type Inputs = z.infer<typeof KycPemodalFormSchema>;

interface CaptureFaceProps {
  register: UseFormRegister<Inputs>;
  control: Control<Inputs>;
  setValue: UseFormSetValue<Inputs>;
  trigger: UseFormTrigger<Inputs>;
  errors: FieldErrors<Inputs>;
  watch: UseFormWatch<Inputs>;
  ktpImage: File;
  faceImage: File;
  onCaptured: (image: File) => void;
}

const CaptureFace: FC<CaptureFaceProps> = ({ onCaptured, register }) => {
  const [capturedImage, setCapturedImage] = useState<File | null>(null);

  const handleCapture = (image: File) => {
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
            src={capturedImage ? URL.createObjectURL(capturedImage) : ""}
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

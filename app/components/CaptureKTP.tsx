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

interface CaptureKTPProps {
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

const CaptureKTP: FC<CaptureKTPProps> = ({ onCaptured, register, errors }) => {
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
            alt="Captured KTP"
            className="mb-4 w-56 h-36"
          />
          <p className="mb-4 text-2xl lg:text-4xl">Sukses Upload KTP</p>
          <div className="w-72 lg:w-96">
            <label
              htmlFor="no_ktp"
              className="block text-sm my-2 leading-6 font-bold"
            >
              Nomor Kartu KTP
            </label>
            <div className="">
              <input
                id="no_ktp"
                type="tel"
                {...register("no_ktp")}
                autoComplete="tel"
                className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
              <div className="mt-1 h-1">
                {errors.no_ktp?.message && (
                  <p className="text-sm text-red-400">
                    {errors.no_ktp.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <button
            className="my-4 bg-emerald-light px-12 font-bold rounded-3xl py-2 text-white"
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

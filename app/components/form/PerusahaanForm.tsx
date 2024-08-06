"use client";

import React, { ChangeEvent, FC, useState } from "react";
import {
  UseFormRegister,
  Control,
  FieldErrors,
  UseFormSetValue,
  Controller,
} from "react-hook-form";
import { z } from "zod";
import { KycPenerbitFormSchema } from "../../../lib/schema";

type Inputs = z.infer<typeof KycPenerbitFormSchema>;

type FileNamesType = {
  [K in keyof Inputs]?: string;
};

interface PerusahaanFormProps {
  register: UseFormRegister<Inputs>;
  control: Control<Inputs>;
  setValue: UseFormSetValue<Inputs>;
  errors: FieldErrors<Inputs>;
}

export const perusahaanFields: (keyof Inputs)[] = [
  "nomor_akta",
  "nomor_akta_perusahaan",
  "dokumen_siup",
  "dokumen_tdp",
  "nomor_npwp",
  "nomor_npwp_perusahaan",
  "dokumen_profil_perusahaan",
  "dokumen_laporan_keuangan",
];

const PerusahaanForm: FC<PerusahaanFormProps> = ({
  register,
  control,
  errors,
  setValue,
}) => {
  const [fileNames, setFileNames] = useState<FileNamesType>({
    nomor_akta_perusahaan: "No file chosen",
    dokumen_siup: "No file chosen",
    dokumen_tdp: "No file chosen",
    nomor_npwp_perusahaan: "No file chosen",
    dokumen_profil_perusahaan: "No file chosen",
    dokumen_laporan_keuangan: "No file chosen",
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, field: any) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setValue(field.name, file); // Use setValue to set the file in the form data
      field.onChange(file); // Notify react-hook-form of the change
      setFileNames((prev) => ({ ...prev, [field.name]: file.name })); // Update the file name state
    }
  };

  return (
    <>
      <div className="h-24 lg:h-36 flex justify-center items-center gap-2 px-2 lg:px-0 bg-[#f5f4ff] rounded-xl  border border-dashed border-[#322783]">
        <img src="/icons/file.svg" alt="" />
        <div className="text-sky leading-none">
          <h1 className="text-sm md:text-base lg:text-2xl font-bold">
            UNGGAH DOKUMEN PERUSAHAAN
          </h1>
          <p className="text-xs md:text-sm lg:text-base">
            Unggah dokumen dengan format PDF maksimal 10mb{" "}
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-x-3 gap-y-4 lg:gap-x-6 lg:gap-y-8 sm:grid-cols-8">
        <div className="sm:col-span-4">
          <label
            htmlFor="nomor_akta"
            className="block text-sm leading-6 font-bold"
          >
            Nomor Akta Perusahaan
          </label>
          <div className="w-full">
            <input
              type="text"
              id="nomor_akta"
              className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              {...register("nomor_akta")}
            />
            {errors.nomor_akta && (
              <p className="text-sm text-red-400">
                {errors.nomor_akta.message}
              </p>
            )}
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="nomor_akta_perusahaan"
            className="block text-sm leading-6 font-bold"
          >
            Unggah Akta Perusahaan
          </label>
          <div className="w-full flex items-center">
            <Controller
              name="nomor_akta_perusahaan"
              control={control}
              render={({ field: controllerField }) => (
                <div className="w-full flex items-center justify-between">
                  <input
                    type="text"
                    className="block w-3/4 rounded-l-md border-0 py-3 px-3 placeholder:text-sky bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    placeholder={fileNames.nomor_akta_perusahaan}
                    readOnly
                  />
                  <label className="block w-1/4 text-white font-bold rounded-r-md border-0 py-3 px-3 bg-emerald-light text-center cursor-pointer shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
                    Unggah
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, controllerField)}
                    />
                  </label>
                </div>
              )}
            />
          </div>
          {errors.nomor_akta_perusahaan && (
            <p className="text-sm text-red-400">
              {String(errors.nomor_akta_perusahaan?.message)}
            </p>
          )}
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="dokumen_siup"
            className="block text-sm leading-6 font-bold"
          >
            Unggah SIUP
          </label>
          <div className="w-full flex items-center">
            <Controller
              name="dokumen_siup"
              control={control}
              render={({ field: controllerField }) => (
                <div className="w-full flex items-center justify-between">
                  <input
                    type="text"
                    className="block w-3/4 rounded-l-md border-0 py-3 px-3 placeholder:text-sky bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    placeholder={fileNames.dokumen_siup}
                    readOnly
                  />
                  <label className="block w-1/4 text-white font-bold rounded-r-md border-0 py-3 px-3 bg-emerald-light text-center cursor-pointer shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
                    Unggah
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, controllerField)}
                    />
                  </label>
                </div>
              )}
            />
          </div>
          {errors.dokumen_siup && (
            <p className="text-sm text-red-400">
              {String(errors.dokumen_siup?.message)}
            </p>
          )}
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="dokumen_tdp"
            className="block text-sm leading-6 font-bold"
          >
            Unggah TDP
          </label>
          <div className="w-full flex items-center">
            <Controller
              name="dokumen_tdp"
              control={control}
              render={({ field: controllerField }) => (
                <div className="w-full flex items-center justify-between">
                  <input
                    type="text"
                    className="block w-3/4 rounded-l-md border-0 py-3 px-3 placeholder:text-sky bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    placeholder={fileNames.dokumen_tdp}
                    readOnly
                  />
                  <label className="block w-1/4 text-white font-bold rounded-r-md border-0 py-3 px-3 bg-emerald-light text-center cursor-pointer shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
                    Unggah
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, controllerField)}
                    />
                  </label>
                </div>
              )}
            />
          </div>
          {errors.dokumen_tdp && (
            <p className="text-sm text-red-400">
              {String(errors.dokumen_tdp?.message)}
            </p>
          )}
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="nomor_npwp"
            className="block text-sm leading-6 font-bold"
          >
            Nomor NPWP
          </label>
          <div className="w-full">
            <input
              type="text"
              id="nomor_npwp"
              className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              {...register("nomor_npwp")}
            />
            {errors.nomor_npwp && (
              <p className="text-sm text-red-400">
                {errors.nomor_npwp.message}
              </p>
            )}
          </div>
        </div>

        {perusahaanFields.slice(5).map((field) => (
          <div key={field} className="sm:col-span-4">
            <label
              htmlFor={field}
              className="block text-sm leading-6 font-bold"
            >
              {`Unggah ${field}`}
            </label>
            <div className="w-full flex items-center">
              <Controller
                name={field}
                control={control}
                render={({ field: controllerField }) => (
                  <div className="w-full flex items-center justify-between">
                    <input
                      type="text"
                      className="block w-3/4 rounded-l-md border-0 py-3 px-3 placeholder:text-sky bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      placeholder={fileNames[field]}
                      readOnly
                    />
                    <label className="block w-1/4 text-white font-bold rounded-r-md border-0 py-3 px-3 bg-emerald-light text-center cursor-pointer shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
                      Unggah
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, controllerField)}
                      />
                    </label>
                  </div>
                )}
              />
            </div>
            {errors[field] && (
              <p className="text-sm text-red-400">
                {String(errors[field]?.message)}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default PerusahaanForm;

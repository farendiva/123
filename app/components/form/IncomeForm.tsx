"use client";

import React, { ChangeEvent, FC, useState, useEffect } from "react";
import {
  UseFormRegister,
  Control,
  FieldErrors,
  UseFormSetValue,
  Controller,
  UseFormWatch,
} from "react-hook-form";
import { z } from "zod";
import { KycPemodalFormSchema } from "../../../lib/schema";
import usePreferences from "@/hooks/usePreferences";

type Inputs = z.infer<typeof KycPemodalFormSchema>;

interface IncomeFormProps {
  register: UseFormRegister<Inputs>;
  control: Control<Inputs>;
  setValue: UseFormSetValue<Inputs>;
  errors: FieldErrors<Inputs>;
  watch: UseFormWatch<Inputs>;
}

interface Profession {
  id: number;
  pekerjaan: string;
}

interface Industry {
  id: number;
  industri_pekerjaan: string;
}

interface Salary {
  id: number;
  pendapatan: string;
}

export const incomeFields: (keyof Inputs)[] = [
  "pekerjaan",
  "industri_pekerjaan",
  "pendapatan_per_bulan",
  "slip_gaji",
  "nomor_rekening",
  "nama_pemilik_rekening",
  "nomor_rekening_kustodian",
  "nama_pemilik_rekening_kustodian",
];

const IncomeForm: FC<IncomeFormProps> = ({
  register,
  control,
  errors,
  watch,
  setValue,
}) => {
  const pekerjaan = watch("pekerjaan");
  const [isSlipGajiDisabled, setIsSlipGajiDisabled] = useState(false);
  const [fileName, setFileName] = useState("Unggah Slip Gaji");
  const { profession, industries, salaries } = usePreferences();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, field: any) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setValue(field.name, file); // Use setValue to set the file in the form data
      field.onChange(file); // Notify react-hook-form of the change
      setFileName(file.name); // Update the file name state
    }
  };

  useEffect(() => {
    if (pekerjaan === "direktur" || pekerjaan === "wiraswasta") {
      setIsSlipGajiDisabled(true);
      setValue("slip_gaji", undefined);
    } else {
      setIsSlipGajiDisabled(false);
    }
  }, [pekerjaan, setValue]);

  return (
    <>
      {/* Income Fields */}
      <div className="mt-10 grid grid-cols-1 gap-x-3 gap-y-4 lg:gap-x-6 lg:gap-y-8 sm:grid-cols-8">
        <div className="sm:col-span-4">
          <label
            htmlFor="pekerjaan"
            className="block text-sm leading-6 font-bold"
          >
            Pilih Pekerjaan
          </label>
          <div className="w-full">
            <select
              className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              id="pekerjaan"
              value={pekerjaan || ""}
              {...register("pekerjaan", {
                required: "Pilih pekerjaan diperlukan",
              })}
            >
              <option value="" disabled>
                Pilih pekerjaan
              </option>
              {profession.map((item: Profession) => (
                <option key={item.id} value={item.id}>
                  {item.pekerjaan.toUpperCase()}
                </option>
              ))}
            </select>
            <div className="mt-1 h-1">
              {errors.pekerjaan && (
                <p className="text-sm text-red-400">
                  {errors.pekerjaan.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="industri_pekerjaan"
            className="block text-sm leading-6 font-bold"
          >
            Pilih Bidang Pekerjaan
          </label>
          <div className="w-full">
            <select
              className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              id="industri_pekerjaan"
              value={watch("industri_pekerjaan") || ""}
              {...register("industri_pekerjaan", {
                required: "Pilih bidang pekerjaan diperlukan",
              })}
            >
              <option value="" disabled>
                Pilih Bidang Pekerjaan
              </option>
              {industries.map((industry: Industry) => (
                <option key={industry.id} value={industry.id}>
                  {industry.industri_pekerjaan.toUpperCase()}
                </option>
              ))}
            </select>
            <div className="mt-1 h-1">
              {errors.industri_pekerjaan && (
                <p className="text-sm text-red-400">
                  {errors.industri_pekerjaan.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="slipGaji"
            className="block text-sm leading-6 font-bold"
          >
            Upload Slip Gaji
          </label>
          <div className="w-full flex items-center">
            <Controller
              name="slip_gaji"
              control={control}
              render={({ field }) => (
                <div className="w-full flex items-center justify-between">
                  <input
                    type="text"
                    className="block w-full rounded-l-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-sky focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    placeholder={isSlipGajiDisabled ? "" : fileName}
                    disabled
                  />
                  <label
                    className={`inline-flex items-center px-8 py-4 border border-transparent text-sm leading-4 font-medium rounded-md text-white 
              ${
                isSlipGajiDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-emerald-light hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              }`}
                  >
                    Unggah
                    <input
                      type="file"
                      className="hidden"
                      disabled={isSlipGajiDisabled}
                      onChange={(e) => handleFileChange(e, field)}
                    />
                  </label>
                </div>
              )}
            />
          </div>
          <div className="mt-1 h-1">
            {errors.slip_gaji?.message && (
              <p className="text-sm text-red-400">
                {String(errors.slip_gaji?.message)}
              </p>
            )}
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="pendapatan_per_bulan"
            className="block text-sm leading-6 font-bold"
          >
            Total Gaji dalam Sebulan
          </label>
          <div className="w-full">
            <select
              className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              id="pendapatan_per_bulan"
              value={watch("pendapatan_per_bulan") || ""}
              {...register("pendapatan_per_bulan", {
                required: "Pilih total gaji diperlukan",
              })}
            >
              <option value="" disabled>
                Pilih Total Gaji
              </option>
              {salaries.map((salary: Salary) => (
                <option key={salary.id} value={salary.id}>
                  {salary.pendapatan}
                </option>
              ))}
            </select>
            <div className="mt-1 h-1">
              {errors.pendapatan_per_bulan && (
                <p className="text-sm text-red-400">
                  {errors.pendapatan_per_bulan.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="nomor_rekening_kustodian"
            className="block text-sm leading-6 font-bold"
          >
            Nomor Rekening Kustodian (Opsional)
          </label>
          <div className="w-full">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              id="nomor_rekening_kustodian"
              {...register("nomor_rekening_kustodian")}
            />
            <div className="mt-1 h-1">
              {errors.nomor_rekening_kustodian && (
                <p className="text-sm text-red-400">
                  {errors.nomor_rekening_kustodian.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="nama_pemilik_rekening_kustodian"
            className="block text-sm leading-6 font-bold"
          >
            Nama Pemilik Rekening Kustodian (Opsional)
          </label>
          <div className="w-full">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              id="nama_pemilik_rekening_kustodian"
              {...register("nama_pemilik_rekening_kustodian")}
            />
            <div className="mt-1 h-1">
              {errors.nama_pemilik_rekening_kustodian && (
                <p className="text-sm text-red-400">
                  {errors.nama_pemilik_rekening_kustodian.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="nomor_rekening"
            className="block text-sm leading-6 font-bold"
          >
            Nomor Rekening
          </label>
          <div className="w-full">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              id="nomor_rekening"
              {...register("nomor_rekening")}
            />
            <div className="mt-1 h-1">
              {errors.nomor_rekening && (
                <p className="text-sm text-red-400">
                  {errors.nomor_rekening.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="nama_pemilik_rekening"
            className="block text-sm leading-6 font-bold"
          >
            Nama Pemilik Rekening
          </label>
          <div className="w-full">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              id="nama_pemilik_rekening"
              {...register("nama_pemilik_rekening")}
            />
            <div className="mt-1 h-1">
              {errors.nama_pemilik_rekening && (
                <p className="text-sm text-red-400">
                  {errors.nama_pemilik_rekening.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncomeForm;

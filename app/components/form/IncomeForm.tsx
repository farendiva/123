import React, { ChangeEvent, FC, useState } from "react";
import {
  UseFormRegister,
  Control,
  FieldErrors,
  UseFormSetValue,
  Controller,
} from "react-hook-form";
import { z } from "zod";
import { KycPemodalFormSchema } from "../../../lib/schema";

type Inputs = z.infer<typeof KycPemodalFormSchema>;

interface IncomeFormProps {
  register: UseFormRegister<Inputs>;
  control: Control<Inputs>;
  setValue: UseFormSetValue<Inputs>;
  errors: FieldErrors<Inputs>;
}

export const incomeFields: (keyof Inputs)[] = [
  "pekerjaan",
  "industri_pekerjaan",
  "pendapatan_per_bulan",
  "slip_gaji",
  "nomorRekening",
  "namaPemilikRekening",
  "nomorRekeningKustodian",
  "namaPemilikRekeningKustodian",
];

const IncomeForm: FC<IncomeFormProps> = ({
  register,
  control,
  errors,
  setValue,
}) => {
  const [isSlipGajiDisabled, setIsSlipGajiDisabled] = useState(false);
  const [fileName, setFileName] = useState("Unggah Slip Gaji");

  const handlePekerjaanChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedPekerjaan = e.target.value;
    setIsSlipGajiDisabled(
      selectedPekerjaan === "direktur" || selectedPekerjaan === "wiraswasta"
    );
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, field: any) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setValue(field.name, file); // Use setValue to set the file in the form data
      field.onChange(file); // Notify react-hook-form of the change
      setFileName(file.name); // Update the file name state
    }
  };

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
              {...register("pekerjaan", {
                required: "Pilih pekerjaan diperlukan",
              })}
              onChange={handlePekerjaanChange}
            >
              <option value="" disabled selected>
                Pilih pekerjaan
              </option>
              <option value="wiraswasta">Wiraswasta</option>
              <option value="direktur">Direktur Perusahaan</option>
              <option value="programmer">Programmer</option>
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
              {...register("industri_pekerjaan", {
                required: "Pilih bidang pekerjaan diperlukan",
              })}
            >
              <option value="" disabled selected>
                Pilih Bidang Pekerjaan
              </option>
              <option value="technology">Technology</option>
              <option value="finance">Finance</option>
              <option value="design">Design</option>
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
              <p className="text-sm text-red-400">{errors.slip_gaji.message}</p>
            )}
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="pendapatan_per_bulan"
            className="block text-sm leading-6 font-bold"
          >
            Total Gaji dalam Setahun
          </label>
          <div className="w-full">
            <select
              className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              id="pendapatan_per_bulan"
              {...register("pendapatan_per_bulan", {
                required: "Pilih total gaji diperlukan",
              })}
            >
              <option value="" disabled selected>
                Pilih Total Gaji
              </option>
              <option value="<500000000">{"< Rp 500.000.000"}</option>
              <option value="<1000000000">{"< Rp 1.000.000.000"}</option>
              <option value="<10000000000">{"< Rp 10.000.000.000"}</option>
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
            htmlFor="nomorRekeningKustodian"
            className="block text-sm leading-6 font-bold"
          >
            Nomor Rekening Kustodian (Opsional)
          </label>
          <div className="w-full">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              id="nomorRekeningKustodian"
              {...register("nomorRekeningKustodian")}
            />
            <div className="mt-1 h-1">
              {errors.nomorRekeningKustodian && (
                <p className="text-sm text-red-400">
                  {errors.nomorRekeningKustodian.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="namaPemilikRekeningKustodian"
            className="block text-sm leading-6 font-bold"
          >
            Nama Pemilik Rekening Kustodian (Opsional)
          </label>
          <div className="w-full">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              id="namaPemilikRekeningKustodian"
              {...register("namaPemilikRekeningKustodian")}
            />
            <div className="mt-1 h-1">
              {errors.namaPemilikRekeningKustodian && (
                <p className="text-sm text-red-400">
                  {errors.namaPemilikRekeningKustodian.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="nomorRekening"
            className="block text-sm leading-6 font-bold"
          >
            Nomor Rekening
          </label>
          <div className="w-full">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              id="nomorRekening"
              {...register("nomorRekening")}
            />
            <div className="mt-1 h-1">
              {errors.nomorRekening && (
                <p className="text-sm text-red-400">
                  {errors.nomorRekening.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="namaPemilikRekening"
            className="block text-sm leading-6 font-bold"
          >
            Nama Pemilik Rekening
          </label>
          <div className="w-full">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              id="namaPemilikRekening"
              {...register("namaPemilikRekening")}
            />
            <div className="mt-1 h-1">
              {errors.namaPemilikRekening && (
                <p className="text-sm text-red-400">
                  {errors.namaPemilikRekening.message}
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

import { FC } from "react";
import {
  useForm,
  UseFormRegister,
  Control,
  FieldErrors,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import React from "react";

const schema = z.object({
  pep: z.string().nonempty("Pertanyaan harus diisi"),
  relationshipPep: z.string().nonempty("Pertanyaan harus diisi"),
  relationshipWna: z.string().nonempty("Pertanyaan harus diisi"),
  legalIssues: z.string().nonempty("Pertanyaan harus diisi"),
  suspect: z.string().nonempty("Pertanyaan harus diisi"),
  relationshipSuspect: z.string().nonempty("Pertanyaan harus diisi"),
  illegalFunds: z.string().nonempty("Pertanyaan harus diisi"),
});

type Inputs = z.infer<typeof schema>;

export const APUFields: (keyof Inputs)[] = [
  "pep",
  "relationshipPep",
  "relationshipWna",
  "legalIssues",
  "suspect",
  "relationshipSuspect",
  "illegalFunds",
];

interface APUFormProps {
  register: UseFormRegister<Inputs>;
  control: Control<Inputs>;
  setValue: UseFormSetValue<Inputs>;
  trigger: UseFormTrigger<Inputs>;
  errors: FieldErrors<Inputs>;
}

const APUForm: FC<APUFormProps> = ({ register, control, errors }) => {
  return (
    <>
      <h1 className="font-bold">
        Sehubungan dengan dukungan untuk menegakkan komitmen Anti Pencucian Uang
        (Anti Money Laundering) & Pencegahan Pendanaan Terorisme (PPT) sesuai
        dengan POJ No 12/POJK.01/2017, maka Saudara diminta untuk menjawab
        beberapa hal berikut ini:
      </h1>

      <div className="mt-6">
        <label className="block text-sm leading-6 ">
          Apakah saat ini calon Pemodal merupakan partisipan (pendukung aktif)
          partai, politik tertentu (Politically Exposed Person/PEP)?
        </label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="pepYes"
            value="Ya"
            {...register("pep", { required: "Harus memilih salah satu" })}
            className="mr-2"
          />
          <label htmlFor="pepYes" className="mr-4">
            Ya
          </label>
          <input
            type="radio"
            id="pepNo"
            value="Tidak"
            {...register("pep", { required: "Harus memilih salah satu" })}
            className="mr-2"
          />
          <label htmlFor="pepNo">Tidak</label>
        </div>
        {errors.pep && (
          <span className="text-red-500">{errors.pep.message}</span>
        )}
      </div>

      <div className="mt-6">
        <label className="block text-sm leading-6 ">
          Apakah memiliki hubungan kekerabatan/bisnis dengan PEP/Pejabat Negara
          (Pusat/Daerah)?
        </label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="relationshipPepYes"
            value="Ya"
            {...register("relationshipPep", {
              required: "Harus memilih salah satu",
            })}
            className="mr-2"
          />
          <label htmlFor="relationshipPepYes" className="mr-4">
            Ya
          </label>
          <input
            type="radio"
            id="relationshipPepNo"
            value="Tidak"
            {...register("relationshipPep", {
              required: "Harus memilih salah satu",
            })}
            className="mr-2"
          />
          <label htmlFor="relationshipPepNo">Tidak</label>
        </div>
        {errors.relationshipPep && (
          <span className="text-red-500">{errors.relationshipPep.message}</span>
        )}
      </div>

      <div className="mt-6">
        <label className="block text-sm leading-6 ">
          Apakah memiliki hubungan kekerabatan / bisnis dengan WNA?
        </label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="relationshipWnaYes"
            value="Ya"
            {...register("relationshipWna", {
              required: "Harus memilih salah satu",
            })}
            className="mr-2"
          />
          <label htmlFor="relationshipWnaYes" className="mr-4">
            Ya
          </label>
          <input
            type="radio"
            id="relationshipWnaNo"
            value="Tidak"
            {...register("relationshipWna", {
              required: "Harus memilih salah satu",
            })}
            className="mr-2"
          />
          <label htmlFor="relationshipWnaNo">Tidak</label>
        </div>
        {errors.relationshipWna && (
          <span className="text-red-500">{errors.relationshipWna.message}</span>
        )}
      </div>

      <div className="mt-6">
        <label className="block text-sm leading-6 ">
          Apakah saat ini sedang menghadapi permasalahan hukum?
        </label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="legalIssuesYes"
            value="Ya"
            {...register("legalIssues", {
              required: "Harus memilih salah satu",
            })}
            className="mr-2"
          />
          <label htmlFor="legalIssuesYes" className="mr-4">
            Ya
          </label>
          <input
            type="radio"
            id="legalIssuesNo"
            value="Tidak"
            {...register("legalIssues", {
              required: "Harus memilih salah satu",
            })}
            className="mr-2"
          />
          <label htmlFor="legalIssuesNo">Tidak</label>
        </div>
        {errors.legalIssues && (
          <span className="text-red-500">{errors.legalIssues.message}</span>
        )}
      </div>

      <div className="mt-6">
        <label className="block text-sm leading-6 ">
          Apakah ditetapkan sebagai Tersangka / Terdakwa?
        </label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="suspectYes"
            value="Ya"
            {...register("suspect", { required: "Harus memilih salah satu" })}
            className="mr-2"
          />
          <label htmlFor="suspectYes" className="mr-4">
            Ya
          </label>
          <input
            type="radio"
            id="suspectNo"
            value="Tidak"
            {...register("suspect", { required: "Harus memilih salah satu" })}
            className="mr-2"
          />
          <label htmlFor="suspectNo">Tidak</label>
        </div>
        {errors.suspect && (
          <span className="text-red-500">{errors.suspect.message}</span>
        )}
      </div>

      <div className="mt-6">
        <label className="block text-sm leading-6 ">
          Apakah memiliki hubungan kekerabatan / bisnis dengan Tersangka /
          Terdakwa?
        </label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="relationshipSuspectYes"
            value="Ya"
            {...register("relationshipSuspect", {
              required: "Harus memilih salah satu",
            })}
            className="mr-2"
          />
          <label htmlFor="relationshipSuspectYes" className="mr-4">
            Ya
          </label>
          <input
            type="radio"
            id="relationshipSuspectNo"
            value="Tidak"
            {...register("relationshipSuspect", {
              required: "Harus memilih salah satu",
            })}
            className="mr-2"
          />
          <label htmlFor="relationshipSuspectNo">Tidak</label>
        </div>
        {errors.relationshipSuspect && (
          <span className="text-red-500">
            {errors.relationshipSuspect.message}
          </span>
        )}
      </div>

      <div className="mt-6">
        <label className="block text-sm leading-6 ">
          Apakah sumber dana yang Anda miliki untuk investasi dan pembayaran
          biaya - biaya berasal dari pendapatan / usaha yang tidak sah / ilegal
          atau terkait dengan kegiatan pencucian uang (money laundering)?
        </label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="illegalFundsYes"
            value="Ya"
            {...register("illegalFunds", {
              required: "Harus memilih salah satu",
            })}
            className="mr-2"
          />
          <label htmlFor="illegalFundsYes" className="mr-4">
            Ya
          </label>
          <input
            type="radio"
            id="illegalFundsNo"
            value="Tidak"
            {...register("illegalFunds", {
              required: "Harus memilih salah satu",
            })}
            className="mr-2"
          />
          <label htmlFor="illegalFundsNo">Tidak</label>
        </div>
        {errors.illegalFunds && (
          <span className="text-red-500">{errors.illegalFunds.message}</span>
        )}
      </div>
    </>
  );
};
export default APUForm;

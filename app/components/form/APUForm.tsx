import { FC } from "react";
import {
  UseFormRegister,
  Control,
  FieldErrors,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import { z } from "zod";
import { FormDataSchema } from "../../../lib/schema";
import React from "react";
type Inputs = z.infer<typeof FormDataSchema>;

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
      {/* APU Fields */}
      <h1>
        Sehubungan dengan dukungan untuk menegakkan komitmen Anti Pencucian Uang
        (Anti Money Laundering) & Pencegahan Pendanaan Terorisme (PPT) sesuai
        dengan POJ No 12/POJK.01/2017, maka Saudara diminta untuk menjawab
        beberapa hal berikut ini:
      </h1>

      <div className="mt-6">
        <label className="block text-sm leading-6 font-bold">
          Apakah saat ini calon Pemodal merupakan partisipan (pendukung aktif)
          partai, politik tertentu (Politically Exposed Person/PEP)?
        </label>
        <div className="flex items-center mt-2">
          <input type="radio" id="pepYes" value="Ya" className="mr-2" />
          <label htmlFor="pepYes" className="mr-4">
            Ya
          </label>
          <input type="radio" id="pepNo" value="Tidak" className="mr-2" />
          <label htmlFor="pepNo">Tidak</label>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm leading-6 font-bold">
          Apakah memiliki hubungan kekerabatan/bisnis dengan PEP/Pejabat Negara
          (Pusat/Daerah)?
        </label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="relationshipPepYes"
            value="Ya"
            className="mr-2"
          />
          <label htmlFor="relationshipPepYes" className="mr-4">
            Ya
          </label>
          <input
            type="radio"
            id="relationshipPepNo"
            value="Tidak"
            className="mr-2"
          />
          <label htmlFor="relationshipPepNo">Tidak</label>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm leading-6 font-bold">
          Apakah memiliki hubungan kekerabatan / bisnis dengan WNA?
        </label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="relationshipWnaYes"
            value="Ya"
            className="mr-2"
          />
          <label htmlFor="relationshipWnaYes" className="mr-4">
            Ya
          </label>
          <input
            type="radio"
            id="relationshipWnaNo"
            value="Tidak"
            className="mr-2"
          />
          <label htmlFor="relationshipWnaNo">Tidak</label>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm leading-6 font-bold">
          Apakah saat ini sedang menghadapi permasalahan hukum?
        </label>
        <div className="flex items-center mt-2">
          <input type="radio" id="legalIssuesYes" value="Ya" className="mr-2" />
          <label htmlFor="legalIssuesYes" className="mr-4">
            Ya
          </label>
          <input
            type="radio"
            id="legalIssuesNo"
            value="Tidak"
            className="mr-2"
          />
          <label htmlFor="legalIssuesNo">Tidak</label>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm leading-6 font-bold">
          Apakah ditetapkan sebagai Tersangka / Terdakwa?
        </label>
        <div className="flex items-center mt-2">
          <input type="radio" id="suspectYes" value="Ya" className="mr-2" />
          <label htmlFor="suspectYes" className="mr-4">
            Ya
          </label>
          <input type="radio" id="suspectNo" value="Tidak" className="mr-2" />
          <label htmlFor="suspectNo">Tidak</label>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm leading-6 font-bold">
          Apakah memiliki hubungan kekerabatan / bisnis dengan Tersangka /
          Terdakwa?
        </label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="relationshipSuspectYes"
            value="Ya"
            className="mr-2"
          />
          <label htmlFor="relationshipSuspectYes" className="mr-4">
            Ya
          </label>
          <input
            type="radio"
            id="relationshipSuspectNo"
            value="Tidak"
            className="mr-2"
          />
          <label htmlFor="relationshipSuspectNo">Tidak</label>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm leading-6 font-bold">
          Apakah sumber dana yang Anda miliki untuk investasi dan pembayaran
          biaya - biaya berasal dari pendapatan / usaha yang tidak sah / ilegal
          atau terkait dengan kegiatan pencucian uang (money laundering)?
        </label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="illegalFundsYes"
            value="Ya"
            className="mr-2"
          />
          <label htmlFor="illegalFundsYes" className="mr-4">
            Ya
          </label>
          <input
            type="radio"
            id="illegalFundsNo"
            value="Tidak"
            className="mr-2"
          />
          <label htmlFor="illegalFundsNo">Tidak</label>
        </div>
      </div>
    </>
  );
};

export default APUForm;

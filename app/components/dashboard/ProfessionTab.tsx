import React from "react";
import { SquarePen, CircleX } from "lucide-react";

interface Profile {
  no_handphone?: string;
  tanggal_lahir?: string;
  no_ktp?: string;
  kewarganegaraan?: string;
  agama?: string;
  telp_kontak_darurat?: string;
  nama_kontak_darurat?: string;
  [key: string]: any; // For other possible profile fields
}

interface User {
  profile?: Profile;
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

interface ProfessionTabProps {
  user: User | null;
  isEditing: boolean;
  formData: Partial<Profile> | undefined;
  handleEditClick: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  profession: Profession[];
  salaries: Salary[];
  industries: Industry[];
}

interface InfoItemProps {
  label: string;
  value?: string;
  onEditClick?: () => void;
}

const ProfessionTab: React.FC<ProfessionTabProps> = ({
  user,
  isEditing,
  formData,
  handleEditClick,
  handleInputChange,
  handleSelectChange,
  handleFormSubmit,
  setIsEditing,
  salaries,
  profession,
  industries,
}) => {
  return (
    <div className="my-8 divide-y-2">
      {isEditing ? (
        <form onSubmit={handleFormSubmit}>
          <div className="flex justify-between items-center py-3">
            <div className="w-full">
              <label className="font-bold">Pekerjaan</label> <br />
              <select
                name="pekerjaan"
                value={formData?.pekerjaan || ""}
                onChange={handleSelectChange}
                className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
              >
                {profession.map((item: Profession, index: number) => (
                  <option key={index} value={item.id}>
                    {item.pekerjaan}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="w-full">
              <label className="font-bold">Industri Pekerjaan</label> <br />
              <select
                name="industri_pekerjaan"
                value={formData?.industri_pekerjaan || ""}
                onChange={handleSelectChange}
                className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
              >
                {industries.map((item: Industry, index: number) => (
                  <option key={index} value={item.id}>
                    {item.industri_pekerjaan}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="w-full">
              <label className="font-bold">Pendapatan</label> <br />
              <select
                name="pendapatan_per_bulan"
                value={formData?.pendapatan_per_bulan || ""}
                onChange={handleSelectChange}
                className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
              >
                {salaries.map((item: Salary, index: number) => (
                  <option key={index} value={item.id}>
                    {item.pendapatan}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-6 py-3 flex items-center gap-2 rounded-xl bg-red-600 text-white"
            >
              <CircleX />
              Batalkan
            </button>
            <button
              type="submit"
              className="px-6 py-3 flex items-center gap-2 rounded-xl bg-emerald-light text-white"
            >
              <img src="/icons/save.svg" alt="Save Icon" />
              Simpan
            </button>
          </div>
        </form>
      ) : (
        <>
          <InfoItem
            label="Pekerjaan"
            value={user?.profile?.pekerjaan}
            onEditClick={handleEditClick}
          />
          <InfoItem
            label="Industri Pekerjaan"
            value={user?.profile?.industri_pekerjaan}
            onEditClick={handleEditClick}
          />
          <InfoItem
            label="Pendapatan"
            value={user?.profile?.pendapatan}
            onEditClick={handleEditClick}
          />
        </>
      )}
    </div>
  );
};

const InfoItem: React.FC<InfoItemProps> = ({ label, value, onEditClick }) => (
  <div className="flex justify-between items-center py-3">
    <div>
      <label className="font-bold">{label}</label> <br />
      <span className="text-sm">{value}</span>
    </div>
    <SquarePen
      strokeWidth={1.5}
      onClick={onEditClick}
      className="cursor-pointer"
    />
  </div>
);

export default ProfessionTab;

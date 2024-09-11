import React from "react";
import { SquarePen, CircleX } from "lucide-react";
import banks from "@/app/data/bank.json";

interface Profile {
  nomor_rekening: string;
  nama_pemilik_rekening: string;
  nama_bank: string;
  nama_ibu_kandung: string;
  nama_rekening_custodian: string;
  nomor_rekening_custodian: string;
  no_sid: string | null;
  [key: string]: any; // For other possible profile fields
}

interface User {
  profile?: Profile;
}

interface AccountTabProps {
  user: User | null;
  isEditing: boolean;
  formData: Partial<Profile> | undefined;
  handleEditClick: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

interface InfoItemProps {
  label: string;
  value?: string | null;
  onEditClick?: () => void;
}

const AccountTab: React.FC<AccountTabProps> = ({
  user,
  isEditing,
  formData,
  handleEditClick,
  handleInputChange,
  handleSelectChange,
  handleFormSubmit,
  setIsEditing,
}) => {
  return (
    <div className="my-8 divide-y-2">
      {isEditing ? (
        <form onSubmit={handleFormSubmit}>
          <div className="flex justify-between items-center py-3">
            <div className="w-full">
              <label className="font-bold">Nomor Rekening</label> <br />
              <input
                type="text"
                name="nomor_rekening"
                value={formData?.nomor_rekening || ""}
                onChange={handleInputChange}
                className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
              />
            </div>
          </div>

          <div className="flex justify-between items-center py-3">
            <div className="w-full">
              <label className="font-bold">Nama Pemilik Rekening</label> <br />
              <input
                type="text"
                name="nama_pemilik_rekening"
                value={formData?.nama_pemilik_rekening || ""}
                onChange={handleInputChange}
                className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
              />
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="w-full">
              <label className="font-bold">Pendapatan</label> <br />
              <select
                name="nama_bank"
                value={formData?.nama_bank || ""}
                onChange={handleSelectChange}
                className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
              >
                {banks.map((bank, index) => (
                  <option key={index} value={bank.name}>
                    {bank.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="w-full">
              <label className="font-bold">Nomor SID</label> <br />
              <input
                type="text"
                name="no_sid"
                value={formData?.no_sid || ""}
                onChange={handleInputChange}
                className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
              />
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="w-full">
              <label className="font-bold">Nomor Rekening Kustodian</label>{" "}
              <br />
              <input
                type="text"
                name="nomor_rekening_custodian"
                value={formData?.nomor_rekening_custodian || ""}
                onChange={handleInputChange}
                className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
              />
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="w-full">
              <label className="font-bold">
                Nama Pemilik Rekening Kustodian
              </label>{" "}
              <br />
              <input
                type="text"
                name="nama_rekening_custodian"
                value={formData?.nama_rekening_custodian || ""}
                onChange={handleInputChange}
                className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
              />
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="w-full">
              <label className="font-bold">Nama Ibu Kandung</label> <br />
              <input
                type="text"
                name="nama_ibu_kandung"
                value={formData?.nama_ibu_kandung || ""}
                onChange={handleInputChange}
                className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
              />
            </div>
          </div>
          <div className="flex py-2 justify-end gap-2">
            <button
              type="button"
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
            label="Nomor Rekening"
            value={user?.profile?.nomor_rekening}
            onEditClick={handleEditClick}
          />
          <InfoItem
            label="Nama Pemilik Rekening"
            value={user?.profile?.nama_pemilik_rekening}
            onEditClick={handleEditClick}
          />
          <InfoItem
            label="Nama Bank"
            value={user?.profile?.nama_bank}
            onEditClick={handleEditClick}
          />
          <InfoItem
            label="Nomor SID"
            value={user?.profile?.no_sid}
            onEditClick={handleEditClick}
          />
          <InfoItem
            label="Nomor Rekening Kustodian"
            value={user?.profile?.nomor_rekening_custodian}
            onEditClick={handleEditClick}
          />{" "}
          <InfoItem
            label="Nama Pemilik Rekening Kustodian"
            value={user?.profile?.nama_rekening_custodian}
            onEditClick={handleEditClick}
          />
          <InfoItem
            label="Nama Ibu Kandung"
            value={user?.profile?.nama_ibu_kandung}
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

export default AccountTab;

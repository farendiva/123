import React from "react";
import { SquarePen, CircleX } from "lucide-react";
import usePreferences from "@/hooks/usePreferences";

interface Profile {
  no_handphone?: string;
  tanggal_lahir?: string;
  no_ktp?: string;
  kewarganegaraan?: string;
  agama?: string;
  telp_kontak_darurat?: string;
  handphone_kontak_darurat?: string;
  nama_kontak_darurat?: string;
  [key: string]: any; // For other possible profile fields
}

interface User {
  email?: string;
  profile?: Profile;
}

interface ProfileInfoTabProps {
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
  value?: string;
  editable?: boolean;
  onEditClick?: () => void;
}

const ProfileInfoTab: React.FC<ProfileInfoTabProps> = ({
  user,
  isEditing,
  formData,
  handleEditClick,
  handleInputChange,
  handleSelectChange,
  handleFormSubmit,
  setIsEditing,
}) => {
  const { educations } = usePreferences();
  return (
    <div className="my-8 divide-y-2">
      {isEditing ? (
        <form onSubmit={handleFormSubmit}>
          <div className="flex justify-between items-center py-3">
            <div>
              <label className="font-bold">Email</label> <br />
              <span className="text-sm">{user?.email}</span>
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div>
              <label className="font-bold">Nomor Handphone</label> <br />
              <span className="text-sm">{user?.profile?.no_handphone}</span>
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div>
              <label className="font-bold">Nik KTP</label> <br />
              <span className="text-sm">{user?.profile?.no_ktp}</span>
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="w-full">
              <label className="block text-sm font-bold leading-6">
                Tanggal Lahir Sesuai KTP
              </label>
              <input
                type="date"
                name="tanggal_lahir"
                value={formData?.tanggal_lahir || ""}
                onChange={handleInputChange}
                className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
              />
            </div>
          </div>
          {/* <div className="flex justify-between items-center py-3">
            <div className="w-full">
              <label className="font-bold">Pendidikan Terakhir</label> <br />
              <select
                name="pendidikan"
                value={formData?.pendidikan || ""}
                onChange={handleSelectChange}
                className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
              >
                {educations.map((education) => (
                  <option key={education.id} value={education.id}>
                    {education.pendidikan}
                  </option>
                ))}
              </select>
            </div>
          </div> */}
          <div className="flex justify-between items-center py-3">
            <div className="w-full">
              <label className="font-bold">Kewarganegaraan</label> <br />
              <select
                name="kewarganegaraan"
                value={formData?.kewarganegaraan || ""}
                onChange={handleSelectChange}
                className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
              >
                <option value="" disabled>
                  Pilih Kewarganegaraan
                </option>
                <option value="1">WNI TINGGAL DI INDONESIA</option>
                <option value="2">WNI TINGGAL DI LUAR NEGERI</option>
                <option value="3">WNA TINGGAL DI INDONESIA</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="w-full">
              <label className="font-bold">Agama</label> <br />
              <select
                name="agama"
                value={formData?.agama || ""}
                onChange={handleSelectChange}
                className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
              >
                <option value="" disabled>
                  Pilih Agama
                </option>
                <option value="1">Islam</option>
                <option value="2">Kristen</option>
                <option value="3">Katolik</option>
                <option value="4">Hindu</option>
                <option value="5">Budha</option>
                <option value="6">Konghucu</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="w-full">
              <label className="font-bold">Nomor Telepon Darurat</label> <br />
              <input
                type="text"
                name="telp_kontak_darurat"
                value={formData?.telp_kontak_darurat || ""}
                onChange={handleInputChange}
                className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
              />
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="w-full">
              <label className="font-bold">Nama Kontak Darurat</label> <br />
              <input
                type="text"
                name="nama_kontak_darurat"
                value={formData?.nama_kontak_darurat || ""}
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
          <InfoItem label="Email" value={user?.email} />
          <InfoItem
            label="Nomor Handphone"
            value={user?.profile?.no_handphone}
          />
          <InfoItem label="Nik KTP" value={user?.profile?.no_ktp} />
          <InfoItem
            label="Tanggal Lahir"
            value={user?.profile?.tanggal_lahir}
            editable
            onEditClick={handleEditClick}
          />
          {/* <InfoItem
            label="Pendidikan Terakhir"
            value={user?.profile?.pendidikan}
            editable
            onEditClick={handleEditClick}
          /> */}
          <InfoItem
            label="Kewarganegaraan"
            value={user?.profile?.kewarganegaraan?.toUpperCase()}
            editable
            onEditClick={handleEditClick}
          />
          <InfoItem
            label="Agama"
            value={user?.profile?.agama}
            editable
            onEditClick={handleEditClick}
          />
          <InfoItem
            label="Nomor Telepon Darurat"
            value={user?.profile?.handphone_kontak_darurat}
            editable
            onEditClick={handleEditClick}
          />
          <InfoItem
            label="Nama Kontak Darurat"
            value={user?.profile?.nama_kontak_darurat}
            editable
            onEditClick={handleEditClick}
          />
        </>
      )}
    </div>
  );
};

const InfoItem: React.FC<InfoItemProps> = ({
  label,
  value,
  editable = false,
  onEditClick,
}) => (
  <div className="flex justify-between items-center py-3">
    <div>
      <label className="font-bold">{label}</label> <br />
      <span className="text-sm">{value}</span>
    </div>
    {editable && (
      <SquarePen
        strokeWidth={1.5}
        onClick={onEditClick}
        className="cursor-pointer"
      />
    )}
  </div>
);

export default ProfileInfoTab;

"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
} from "react";

interface Profile {
  nama_depan: string;
  nama_belakang: string;
  jenis_kelamin: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  no_handphone: string;
  no_ktp: string;
  no_npwp: string | null;
  no_sid: string | null;
  agama: string;
  kewarganegaraan: string;
  alamat_ktp: string;
  kelurahan_ktp: string;
  kecamatan_ktp: string;
  kabupaten_ktp: string;
  provinsi_ktp: string;
  alamat_domisili: string;
  kelurahan_domisili: string;
  kecamatan_domisili: string;
  kabupaten_domisili: string;
  provinsi_domisili: string;
  pendidikan: string;
  pekerjaan: string;
  industri_pekerjaan: string;
  pendapatan: string;
  sumber_pendapatan: string;
  status_id: number;
  status: string;
  nomor_rekening: string;
  nama_pemilik_rekening: string;
  nama_bank: string;
  kabupaten_cabang_bank: string;
  ktp: string;
  npwp: string;
  swa_photo: string;
  slip_gaji: string;
  kartu_keluarga: string;
  nama_rekening_custodian: string;
  nomor_rekening_custodian: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  user_type: string;
  pemodal_id: number;
  pemodal_status: number;
  pemodal_status_description: string;
  profile: Profile;
}

interface UserContextType {
  user: User | null;
  updateUser: (newData: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<{
  children: ReactNode;
  initialUser: User | null;
}> = ({ children, initialUser }) => {
  const [user, setUser] = useState<User | null>(initialUser);

  const updateUser = (newData: User) => {
    setUser(newData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

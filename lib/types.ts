export interface Profile {
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
  kodepos_ktp: string;
  kodepos_domisili: string;
  rt_rw_ktp: string;
  rt_rw_domisili: string;
  alamat_domisili: string;
  kelurahan_domisili: string;
  kecamatan_domisili: string;
  kabupaten_domisili: string;
  provinsi_domisili: string;
  pendidikan: string;
  pekerjaan: string;
  industri_pekerjaan: string;
  pendapatan: string;
  pendapatan_per_bulan: string;
  sumber_pendapatan: string;
  status_id: number;
  status: string;
  nomor_rekening: string;
  nama_pemilik_rekening: string;
  nama_bank: string;
  nama_ibu_kandung: string;
  kabupaten_cabang_bank: string | null;
  ktp: string | File;
  npwp: string | File;
  swa_photo: string | File;
  slip_gaji: string | File;
  kartu_keluarga: string | File;
  nama_rekening_custodian: string;
  nomor_rekening_custodian: string;
  telp_kontak_darurat: string;
  nama_kontak_darurat: string;
}

export interface User {
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
  profile: Profile[];
}

export interface Province {
  province_code: string;
  province: string;
}

export interface City {
  city_code: string;
  city: string;
}

export interface District {
  district_code: string;
  district: string;
}

export interface Subdistrict {
  sub_district_code: string;
  sub_district: string;
}

export interface PostalCode {
  postal_code: string;
}

export interface Profession {
  id: number;
  pekerjaan: string;
}

export interface Industry {
  id: number;
  industri_pekerjaan: string;
}

export interface Salary {
  id: number;
  pendapatan: string;
}

export interface Nationality {
  id: number;
  kewarganegaraan: string;
}

export interface Education {
  id: number;
  pendidikan: string;
}

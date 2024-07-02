import { z } from "zod";

export const RegistrationDataSchema = z
  .object({
    namaDepan: z.string().min(1, "Nama Depan Harus Diisi"),
    namaBelakang: z.string().min(1, "Last name is required"),
    email: z
      .string()
      .min(1, "Email Harus Diisi")
      .email("Alamat Email Tidak Valid"),
    phone: z
      .string()
      .min(1, "Nomor Handphone Diisi")
      .regex(
        /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/,
        "Nomor Handphone Tidak Valid"
      ),
    password: z
      .string()
      .min(8, "Kata Sandi harus minimal 8 karakter")
      .max(128, "Kata Sandi harus maksimal 128 karakter")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Kata Sandi harus mengandung setidaknya satu huruf kecil, satu huruf besar, satu angka, dan satu karakter spesial"
      ),
    passwordConfirmation: z
      .string()
      .min(8, "Kata Sandi harus minimal 8 karakter")
      .max(128, "Kata Sandi harus maksimal 128 karakter")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Kata Sandi harus mengandung setidaknya satu huruf kecil, satu huruf besar, satu angka, dan satu karakter spesial"
      ),
  })
  .refine(
    (values) => {
      return values.password === values.passwordConfirmation;
    },
    {
      message: "Kata Sandi Konfirmasi Harus Sama",
      path: ["passwordConfirmation"],
    }
  );

export const LoginDataSchema = z.object({
  email: z
    .string()
    .min(1, "Email Harus Diisi")
    .email("Alamat Email Tidak Valid"),
  password: z
    .string()
    .min(8, "Kata Sandi harus minimal 8 karakter")
    .max(128, "Kata Sandi harus maksimal 128 karakter")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Kata Sandi harus mengandung setidaknya satu huruf kecil, satu huruf besar, satu angka, dan satu karakter spesial"
    ),
});

// export const FormDataSchema = z.object({
//   title: z.string().min(1, "Title Harus Diisi"),
//   namaDepan: z.string().min(1, "Nama Depan Harus Diisi"),
//   namaBelakang: z.string().min(1, "Last name is required"),
//   email: z
//     .string()
//     .min(1, "Email Harus Diisi")
//     .email("Alamat Email Tidak Valid"),
//   phone: z
//     .string()
//     .min(1, "Nomor Handphone Diisi")
//     .regex(
//       /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/,
//       "Nomor Handphone Tidak Valid"
//     ),
//   password: z
//     .string()
//     .min(8, "Password harus minimal 8 karakter")
//     .max(128, "Password harus maksimal 128 karakter")
//     .regex(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//       "Password harus mengandung setidaknya satu huruf kecil, satu huruf besar, satu angka, dan satu karakter spesial"
//     ),

//   noKtp: z
//     .string()
//     .length(16, "Nomor KTP harus terdiri dari 16 digit.")
//     .regex(/^[0-9]+$/, "Nomor KTP harus berupa angka."),
//   tempatLahir: z.string().min(2, "Tempat Lahir Harus Diisi."),
//   tanggalLahir: z.date({
//     required_error: "Tanggal Lahir Harus Diisi.",
//     invalid_type_error: "Tanggal Lahir Tidak Valid.",
//   }),
//   agama: z.string().min(1, "Agama Harus Diisi."),
//   pendidikan: z.string().min(1, "Pendidikan Harus Diisi."),
//   noDarurat: z
//     .string()
//     .min(10, "Nomor darurat harus terdiri dari minimal 10 digit.")
//     .regex(/^[0-9]+$/, "Nomor darurat harus berupa angka."),
//   ahliWaris: z.string().min(2, "Ahli waris Harus Diisi."),
//   kewarganegaraan: z.string().min(2, "Kewarganegaraan Harus Diisi."),
//   alamat_ktp: z.string().min(1, "Alamat Harus Diisi."),
//   provinsi_ktp: z.string().min(1, "Provinsi Harus Diisi."),
//   kabupaten_ktp: z.string().min(1, "Kota/Kabupaten Harus Diisi."),
//   kecamatan_ktp: z.string().min(1, "Kecamatan Harus Diisi."),
//   kelurahan_ktp: z.string().min(1, "Kelurahan Harus Diisi."),
//   kodePos_ktp: z
//     .string()
//     .min(5, "Kode Pos harus terdiri dari 5 digit.")
//     .regex(/^[0-9]+$/, "Kode Pos harus berupa angka."),
//   alamat_domisili: z.string().min(1, "Alamat Harus Diisi."),
//   provinsi_domisili: z.string().min(1, "Provinsi Harus Diisi."),
//   kabupaten_domisili: z.string().min(1, "Kota/Kabupaten Harus Diisi."),
//   kecamatan_domisili: z.string().min(1, "Kecamatan Harus Diisi."),
//   kelurahan_domisili: z.string().min(1, "Kelurahan Harus Diisi."),
//   kodePos_domisili: z
//     .string()
//     .min(5, "Kode Pos harus terdiri dari 5 digit.")
//     .regex(/^[0-9]+$/, "Kode Pos harus berupa angka."),
//   pekerjaan: z.string().min(1, "Pekerjaan Harus Diisi."),
//   bidangPekerjaan: z.string().min(1, "Bidang Pekerjaan Harus Diisi."),
//   slipGaji: z.instanceof(FileList).optional(),
//   totalGaji: z.string().min(1, "Total Gaji Harus Diisi."),
//   nomorRekeningKustodian: z.string().optional(),
//   namaPemilikRekeningKustodian: z.string().optional(),
//   nomorRekening: z.string().min(1, "Nomor rekening Harus Diisi."),
//   namaPemilikRekening: z.string().min(1, "Nama pemilik rekening Harus Diisi."),
//   faceImage: z.string().min(1, "Gambar wajah harus diisi."),
//   ktpImage: z.string().min(1, "Gambar KTP harus diisi."),
//   nomorAkta: z.string().min(1, "Nomor Akta Perusahaan Harus Diisi"),
//   aktaPerusahaan: z.instanceof(FileList).optional(),
//   siup: z.instanceof(FileList).optional(),
//   tdp: z.instanceof(FileList).optional(),
//   npwp: z.string().min(1, "Nomor NPWP Harus Diisi"),
//   unggahNpwp: z.instanceof(FileList).optional(),
//   profilPerusahaan: z.instanceof(FileList).optional(),
//   laporanKeuangan: z.instanceof(FileList).optional(),
// });

export const KycPemodalFormSchema = z.object({
  title: z.string().min(1, "Title Harus Diisi"),
  nama_depan: z.string().min(1, "Nama Depan Harus Diisi"),
  nama_belakang: z.string().min(1, "Last name is required"),
  no_handphone: z
    .string()
    .min(1, "Nomor Handphone Diisi")
    .regex(
      /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/,
      "Nomor Handphone Tidak Valid"
    ),
  no_ktp: z
    .string()
    .length(16, "Nomor KTP harus terdiri dari 16 digit.")
    .regex(/^[0-9]+$/, "Nomor KTP harus berupa angka."),
  tempat_lahir: z.string().min(2, "Tempat Lahir Harus Diisi."),
  tanggal_lahir: z.date({
    required_error: "Tanggal Lahir Harus Diisi.",
    invalid_type_error: "Tanggal Lahir Tidak Valid.",
  }),
  agama: z.string().min(1, "Agama Harus Diisi."),
  pendidikan_terakhir: z.string().min(1, "Pendidikan Harus Diisi."),
  noDarurat: z
    .string()
    .min(10, "Nomor darurat harus terdiri dari minimal 10 digit.")
    .regex(/^[0-9]+$/, "Nomor darurat harus berupa angka."),
  ahliWaris: z.string().min(2, "Ahli waris Harus Diisi."),
  kewarganegaraan: z.string().min(2, "Kewarganegaraan Harus Diisi."),
  alamat_ktp: z.string().min(1, "Alamat Harus Diisi."),
  provinsi_ktp: z.string().min(1, "Provinsi Harus Diisi."),
  kabupaten_ktp: z.string().min(1, "Kota/Kabupaten Harus Diisi."),
  kecamatan_ktp: z.string().min(1, "Kecamatan Harus Diisi."),
  kelurahan_ktp: z.string().min(1, "Kelurahan Harus Diisi."),
  kodePos_ktp: z
    .string()
    .min(5, "Kode Pos harus terdiri dari 5 digit.")
    .regex(/^[0-9]+$/, "Kode Pos harus berupa angka."),
  alamat_domisili: z.string().min(1, "Alamat Harus Diisi."),
  provinsi_domisili: z.string().min(1, "Provinsi Harus Diisi."),
  kabupaten_domisili: z.string().min(1, "Kota/Kabupaten Harus Diisi."),
  kecamatan_domisili: z.string().min(1, "Kecamatan Harus Diisi."),
  kelurahan_domisili: z.string().min(1, "Kelurahan Harus Diisi."),
  kodePos_domisili: z
    .string()
    .min(5, "Kode Pos harus terdiri dari 5 digit.")
    .regex(/^[0-9]+$/, "Kode Pos harus berupa angka."),
  pekerjaan: z.string().min(1, "Pekerjaan Harus Diisi."),
  industri_pekerjaan: z.string().min(1, "Bidang Pekerjaan Harus Diisi."),
  slip_gaji: z.instanceof(File).optional(),
  pendapatan_per_bulan: z.string().min(1, "Total Gaji Harus Diisi."),
  nomorRekeningKustodian: z.string().optional(),
  namaPemilikRekeningKustodian: z.string().optional(),
  nomorRekening: z.string().min(1, "Nomor rekening Harus Diisi."),
  namaPemilikRekening: z.string().min(1, "Nama pemilik rekening Harus Diisi."),
  swa_photo: z.string().min(1, "Gambar wajah harus diisi."),
  ktp: z.string().min(1, "Gambar KTP harus diisi."),
});

export const KycPenerbitFormSchema = z.object({
  title: z.string().min(1, "Title Harus Diisi"),
  nama_depan: z.string().min(1, "Nama Depan Harus Diisi"),
  nama_belakang: z.string().min(1, "Last name is required"),
  no_handphone: z
    .string()
    .min(1, "Nomor Handphone Diisi")
    .regex(
      /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/,
      "Nomor Handphone Tidak Valid"
    ),
  no_ktp: z
    .string()
    .length(16, "Nomor KTP harus terdiri dari 16 digit.")
    .regex(/^[0-9]+$/, "Nomor KTP harus berupa angka."),
  tempat_lahir: z.string().min(2, "Tempat Lahir Harus Diisi."),
  tanggal_lahir: z.date({
    required_error: "Tanggal Lahir Harus Diisi.",
    invalid_type_error: "Tanggal Lahir Tidak Valid.",
  }),
  agama: z.string().min(1, "Agama Harus Diisi."),
  pendidikan_terakhir: z.string().min(1, "Pendidikan Harus Diisi."),
  noDarurat: z
    .string()
    .min(10, "Nomor darurat harus terdiri dari minimal 10 digit.")
    .regex(/^[0-9]+$/, "Nomor darurat harus berupa angka."),
  ahliWaris: z.string().min(2, "Ahli waris Harus Diisi."),
  kewarganegaraan: z.string().min(2, "Kewarganegaraan Harus Diisi."),
  alamat_ktp: z.string().min(1, "Alamat Harus Diisi."),
  provinsi_ktp: z.string().min(1, "Provinsi Harus Diisi."),
  kabupaten_ktp: z.string().min(1, "Kota/Kabupaten Harus Diisi."),
  kecamatan_ktp: z.string().min(1, "Kecamatan Harus Diisi."),
  kelurahan_ktp: z.string().min(1, "Kelurahan Harus Diisi."),
  kodePos_ktp: z
    .string()
    .min(5, "Kode Pos harus terdiri dari 5 digit.")
    .regex(/^[0-9]+$/, "Kode Pos harus berupa angka."),
  alamat_domisili: z.string().min(1, "Alamat Harus Diisi."),
  provinsi_domisili: z.string().min(1, "Provinsi Harus Diisi."),
  kabupaten_domisili: z.string().min(1, "Kota/Kabupaten Harus Diisi."),
  kecamatan_domisili: z.string().min(1, "Kecamatan Harus Diisi."),
  kelurahan_domisili: z.string().min(1, "Kelurahan Harus Diisi."),
  kodePos_domisili: z
    .string()
    .min(5, "Kode Pos harus terdiri dari 5 digit.")
    .regex(/^[0-9]+$/, "Kode Pos harus berupa angka."),
  pekerjaan: z.string().min(1, "Pekerjaan Harus Diisi."),
  industri_pekerjaan: z.string().min(1, "Bidang Pekerjaan Harus Diisi."),
  slip_gaji: z.instanceof(File).optional(),
  pendapatan_per_bulan: z.string().min(1, "Total Gaji Harus Diisi."),
  nomorRekeningKustodian: z.string().optional(),
  namaPemilikRekeningKustodian: z.string().optional(),
  nomorRekening: z.string().min(1, "Nomor rekening Harus Diisi."),
  namaPemilikRekening: z.string().min(1, "Nama pemilik rekening Harus Diisi."),
  swa_photo: z.string().min(1, "Gambar wajah harus diisi."),
  ktp: z.string().min(1, "Gambar KTP harus diisi."),
  posisi: z.string().min(1, "Gambar KTP harus diisi."),
  dokumen_siup: z.instanceof(File).optional(),
  dokumen_tdp: z.instanceof(File).optional(),
  dokumen_profil_perusahaan: z.instanceof(File).optional(),
  dokumen_laporan_keuangan: z.instanceof(File).optional(),
  nomor_npwp_perusahaan: z.instanceof(File).optional(),
  nomor_akta_perusahaan: z.instanceof(File).optional(),
  nomor_akta: z.string().min(1, "Nomor Akta Harus Diisi"),
  nomor_npwp: z.string().min(1, "Nomor NPWP Harus Diisi"),
});

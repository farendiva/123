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
      .regex(/^(62|0)[8][1-9]\d{7,11}$/, "Nomor Handphone Tidak Valid"),
    pin: z
      .string()
      .length(6, "OTP harus terdiri dari 6 digit")
      .regex(/^\d+$/, "OTP hanya boleh mengandung angka"),
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
    terms: z.literal(true, {
      errorMap: () => ({
        message: "Anda harus menyetujui syarat dan ketentuan",
      }),
    }),
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

export const FormDataSchema = z.object({
  title: z.string().min(1, "Title Harus Diisi"),
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
    .min(8, "Password harus minimal 8 karakter")
    .max(128, "Password harus maksimal 128 karakter")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password harus mengandung setidaknya satu huruf kecil, satu huruf besar, satu angka, dan satu karakter spesial"
    ),

  noKtp: z
    .string()
    .length(16, "Nomor KTP harus terdiri dari 16 digit.")
    .regex(/^[0-9]+$/, "Nomor KTP harus berupa angka."),
});

const isPDF = (file: any) =>
  file instanceof File && file.type === "application/pdf";

export const KycPemodalFormSchema = z
  .object({
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
    kewarganegaraan: z.string().min(1, "Kewarganegaraan Harus Diisi."),
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
    slip_gaji: z
      .any()
      .refine((file) => file === undefined || file instanceof File, {
        message: "Slip Gaji harus berupa file.",
      })
      .refine((file) => file === undefined || isPDF(file), {
        message: "Slip Gaji harus berupa file PDF.",
      })
      .optional(),
    pendapatan_per_bulan: z.string().min(1, "Total Gaji Harus Diisi."),
    nomor_rekening_kustodian: z.string().optional(),
    nama_pemilik_rekening_kustodian: z.string().optional(),
    nomor_rekening: z.string().min(1, "Nomor rekening Harus Diisi."),
    nama_pemilik_rekening: z
      .string()
      .min(1, "Nama pemilik rekening Harus Diisi."),
    swa_photo: z.instanceof(File),
    ktp: z.instanceof(File),
    pep: z
      .union([z.enum(["Ya", "Tidak"]), z.null()])
      .refine((val) => val !== null, {
        message: "Pertanyaan harus diisi",
      }),
    relationshipPep: z
      .union([z.enum(["Ya", "Tidak"]), z.null()])
      .refine((val) => val !== null, {
        message: "Pertanyaan harus diisi",
      }),
    relationshipWna: z
      .union([z.enum(["Ya", "Tidak"]), z.null()])
      .refine((val) => val !== null, {
        message: "Pertanyaan harus diisi",
      }),
    legalIssues: z
      .union([z.enum(["Ya", "Tidak"]), z.null()])
      .refine((val) => val !== null, {
        message: "Pertanyaan harus diisi",
      }),
    suspect: z
      .union([z.enum(["Ya", "Tidak"]), z.null()])
      .refine((val) => val !== null, {
        message: "Pertanyaan harus diisi",
      }),
    relationshipSuspect: z
      .union([z.enum(["Ya", "Tidak"]), z.null()])
      .refine((val) => val !== null, {
        message: "Pertanyaan harus diisi",
      }),
    illegalFunds: z
      .union([z.enum(["Ya", "Tidak"]), z.null()])
      .refine((val) => val !== null, {
        message: "Pertanyaan harus diisi",
      }),
  })
  .refine(
    (data) => {
      if (
        data.pekerjaan !== "direktur" &&
        data.pekerjaan !== "wiraswasta" &&
        !data.slip_gaji
      ) {
        return false;
      }
      return true;
    },
    {
      message: "Slip Gaji Harus Diisi",
      path: ["slip_gaji"],
    }
  );

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
  kewarganegaraan: z.string().min(1, "Kewarganegaraan Harus Diisi."),
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
  swa_photo: z.instanceof(File),
  ktp: z.instanceof(File),
  posisi: z.string().min(1, "Gambar KTP harus diisi."),
  dokumen_siup: z
    .any()
    .refine((file) => !!file, { message: "Dokumen SIUP Harus Diisi." })
    .refine(isPDF, { message: "Dokumen SIUP harus berupa file PDF." }),
  dokumen_tdp: z
    .any()
    .refine((file) => !!file, { message: "Dokumen TDP Harus Diisi." })
    .refine(isPDF, { message: "Dokumen TDP harus berupa file PDF." }),
  dokumen_profil_perusahaan: z
    .any()
    .refine((file) => !!file, {
      message: "Dokumen Profil Perusahaan Harus Diisi.",
    })
    .refine(isPDF, {
      message: "Dokumen Profil Perusahaan harus berupa file PDF.",
    }),
  dokumen_laporan_keuangan: z
    .any()
    .refine((file) => !!file, {
      message: "Dokumen Laporan Keuangan Harus Diisi.",
    })
    .refine(isPDF, {
      message: "Dokumen Laporan Keuangan harus berupa file PDF.",
    }),
  nomor_npwp_perusahaan: z
    .any()
    .refine((file) => !!file, {
      message: "Dokumen NPWP Perusahaan Harus Diisi.",
    })
    .refine(isPDF, {
      message: "Dokumen NPWP Perusahaan harus berupa file PDF.",
    }),
  nomor_akta_perusahaan: z
    .any()
    .refine((file) => !!file, {
      message: "Dokumen Akta Perusahaan Harus Diisi.",
    })
    .refine(isPDF, {
      message: "Dokumen Akta Perusahaan harus berupa file PDF.",
    }),
  nomor_akta: z.string().min(1, "Nomor Akta Harus Diisi"),
  nomor_npwp: z.string().min(1, "Nomor NPWP Harus Diisi"),
  no_telp_perusahaan: z
    .string()
    .min(1, "Nomor Telefon Perusahaan Harus Diisi."),
  situs_perusahaan: z.string().min(1, "Situs Perusahaan Harus Diisi."),
  jenis_perusahaan: z.string().min(1, "Jenis Perusahaan Harus Diisi."),
  nama_perusahaan: z.string().min(1, "Nama Perusahaan Harus Diisi."),
  status_kantor: z.string().min(1, "Status Kantor Harus Diisi."),
  alamat_perusahaan: z.string().min(1, "Alamat Harus Diisi."),
  provinsi_perusahaan: z.string().min(1, "Provinsi Harus Diisi."),
  kota_perusahaan: z.string().min(1, "Kota/Kabupaten Harus Diisi."),
  kecamatan_perusahaan: z.string().min(1, "Kecamatan Harus Diisi."),
  kodePos_perusahaan: z
    .string()
    .min(5, "Kode Pos harus terdiri dari 5 digit.")
    .regex(/^[0-9]+$/, "Kode Pos harus berupa angka."),
  nomor_rekening_perusahaan: z
    .string()
    .min(1, "Nomor Rekening Perusahaan Harus Diisi."),
  nama_rekening_perusahaan: z
    .string()
    .min(1, "Nama Rekening Perusahaan Harus Diisi."),
  nama_bank_rekening: z.string().min(1, "Nama Bank Harus Diisi."),
  pep: z
    .union([z.enum(["Ya", "Tidak"]), z.null()])
    .refine((val) => val !== null, {
      message: "Pertanyaan harus diisi",
    }),
  relationshipPep: z
    .union([z.enum(["Ya", "Tidak"]), z.null()])
    .refine((val) => val !== null, {
      message: "Pertanyaan harus diisi",
    }),
  relationshipWna: z
    .union([z.enum(["Ya", "Tidak"]), z.null()])
    .refine((val) => val !== null, {
      message: "Pertanyaan harus diisi",
    }),
  legalIssues: z
    .union([z.enum(["Ya", "Tidak"]), z.null()])
    .refine((val) => val !== null, {
      message: "Pertanyaan harus diisi",
    }),
  suspect: z
    .union([z.enum(["Ya", "Tidak"]), z.null()])
    .refine((val) => val !== null, {
      message: "Pertanyaan harus diisi",
    }),
  relationshipSuspect: z
    .union([z.enum(["Ya", "Tidak"]), z.null()])
    .refine((val) => val !== null, {
      message: "Pertanyaan harus diisi",
    }),
  illegalFunds: z
    .union([z.enum(["Ya", "Tidak"]), z.null()])
    .refine((val) => val !== null, {
      message: "Pertanyaan harus diisi",
    }),
});

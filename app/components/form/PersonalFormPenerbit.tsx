// "use client";

// import React, { useEffect, useState } from "react";
// import { FC } from "react";
// import {
//   UseFormRegister,
//   Control,
//   FieldErrors,
//   UseFormSetValue,
//   UseFormTrigger,
//   Controller,
//   UseFormWatch,
// } from "react-hook-form";
// import { KycPenerbitFormSchema } from "../../../lib/schema";
// import { z } from "zod";
// import { DatePicker } from "../../../components/ui/datepicker";
// import usePreferences from "@/hooks/usePreferences";

// type Inputs = z.infer<typeof KycPenerbitFormSchema>;

// interface PersonalInfoFormProps {
//   register: UseFormRegister<Inputs>;
//   control: Control<Inputs>;
//   setValue: UseFormSetValue<Inputs>;
//   trigger: UseFormTrigger<Inputs>;
//   errors: FieldErrors<Inputs>;
//   watch: UseFormWatch<Inputs>;
//   ktpImage: File;
//   faceImage: File;
// }

// interface Province {
//   province: string;
//   province_code: string;
// }

// interface City {
//   city: string;
//   city_code: string;
// }

// interface District {
//   district: string;
//   district_code: string;
// }

// interface Subdistrict {
//   sub_district: string;
//   sub_district_code: string;
// }

// interface PostalCode {
//   postal_code: string;
// }

// interface Nationality {
//   id: number;
//   kewarganegaraan: string;
// }

// interface Education {
//   id: number;
//   pendidikan: string;
// }

// export const personalInfoFields: (keyof Inputs)[] = [
//   "title",
//   "nama_depan",
//   "nama_belakang",
//   "no_handphone",
//   "no_ktp",
//   "tempat_lahir",
//   "tanggal_lahir",
//   "agama",
//   "pendidikan_terakhir",
//   "noDarurat",
//   "ahliWaris",
//   "kewarganegaraan",
//   "alamat_ktp",
//   "provinsi_ktp",
//   "kabupaten_ktp",
//   "kecamatan_ktp",
//   "kelurahan_ktp",
//   "alamat_domisili",
//   "provinsi_domisili",
//   "kabupaten_domisili",
//   "kecamatan_domisili",
//   "kelurahan_domisili",
//   "kodePos_ktp",
//   "kodePos_domisili",
//   "posisi",
// ];

// const PersonalFormPenerbit: FC<PersonalInfoFormProps> = ({
//   register,
//   control,
//   setValue,
//   watch,
//   errors,
//   ktpImage,
//   faceImage,
// }) => {
//   const [isChecked, setIsChecked] = useState(false);
//   const {
//     provinces,
//     nationalities,
//     religions,
//     educations,
//     cities,
//     districts,
//     subdistricts,
//     postalCodes,
//     fetchCities,
//     fetchDistricts,
//     fetchSubDistricts,
//     fetchPostalCodes,
//   } = usePreferences();
//   const alamat_ktp = watch("alamat_ktp");
//   const provinsi_ktp = watch("provinsi_ktp");
//   const kabupaten_ktp = watch("kabupaten_ktp");
//   const kecamatan_ktp = watch("kecamatan_ktp");
//   const kelurahan_ktp = watch("kelurahan_ktp");
//   const kodePos_ktp = watch("kodePos_ktp");
//   const provinsi_domisili = watch("provinsi_domisili");
//   const kabupaten_domisili = watch("kabupaten_domisili");
//   const kecamatan_domisili = watch("kecamatan_domisili");

//   useEffect(() => {
//     if (isChecked) {
//       setValue("alamat_domisili", alamat_ktp);
//       setValue("provinsi_domisili", provinsi_ktp);
//       setValue("kabupaten_domisili", kabupaten_ktp);
//       setValue("kecamatan_domisili", kecamatan_ktp);
//       setValue("kelurahan_domisili", kelurahan_ktp);
//       setValue("kodePos_domisili", kodePos_ktp);
//     }
//   }, [
//     isChecked,
//     alamat_ktp,
//     provinsi_ktp,
//     kabupaten_ktp,
//     kecamatan_ktp,
//     kelurahan_ktp,
//     kodePos_ktp,
//     setValue,
//   ]);

//   useEffect(() => {
//     if (provinsi_ktp) {
//       fetchCities(provinsi_ktp);
//     }
//   }, [provinsi_ktp]); // eslint-disable-line react-hooks/exhaustive-deps

//   useEffect(() => {
//     if (kabupaten_ktp) {
//       fetchDistricts(kabupaten_ktp);
//     }
//   }, [kabupaten_ktp]); // eslint-disable-line react-hooks/exhaustive-deps

//   useEffect(() => {
//     if (kecamatan_ktp) {
//       fetchSubDistricts(kecamatan_ktp);
//       fetchPostalCodes(kecamatan_ktp);
//     }
//   }, [kecamatan_ktp]); // eslint-disable-line react-hooks/exhaustive-deps

//   useEffect(() => {
//     if (provinsi_domisili) {
//       fetchCities(provinsi_domisili);
//     }
//   }, [provinsi_domisili]); // eslint-disable-line react-hooks/exhaustive-deps

//   useEffect(() => {
//     if (kabupaten_domisili) {
//       fetchDistricts(kabupaten_domisili);
//     }
//   }, [kabupaten_domisili]); // eslint-disable-line react-hooks/exhaustive-deps

//   useEffect(() => {
//     if (kecamatan_domisili) {
//       fetchSubDistricts(kecamatan_domisili);
//       fetchPostalCodes(kecamatan_domisili);
//     }
//   }, [kecamatan_domisili]); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <>
//       {/* Personal Info Fields */}
//       <div className="grid grid-cols-1 gap-x-3 gap-y-4 lg:gap-x-6 lg:gap-y-8 sm:grid-cols-8">
//         <div className="col-span-4 flex items-center justify-center gap-4 rounded-xl border border-dashed border-[#322783] bg-[#f5f4ff] p-4">
//           {faceImage ? (
//             <div className="relative w-24 h-24">
//               <img
//                 className="w-full h-full rounded-full object-cover"
//                 src={faceImage ? URL.createObjectURL(faceImage) : ""}
//                 alt="Foto Wajah"
//               />
//               <img
//                 className="absolute bottom-0 right-0 w-6 h-6"
//                 src="/icons/checkbox.svg"
//                 alt="Verified Icon"
//               />
//             </div>
//           ) : ktpImage ? (
//             <div className="relative w-56 h-36">
//               <img
//                 className="w-full h-full object-contain"
//                 src={ktpImage ? URL.createObjectURL(ktpImage) : ""}
//                 alt="Foto KTP"
//               />
//               <img
//                 className="absolute bottom-0 right-0 w-6 h-6"
//                 src="/icons/checkbox.svg"
//                 alt="Verified Icon"
//               />
//             </div>
//           ) : null}
//           <p className="mt-2 text-sm">
//             {faceImage ? "Foto Wajah" : ktpImage ? "Foto KTP" : "No Image"}
//           </p>
//         </div>
//         <div className="col-span-4 flex items-center justify-center gap-4 rounded-xl border border-dashed border-[#322783] bg-[#f5f4ff] p-4">
//           <div className="relative w-36">
//             <img
//               className="w-full h-full object-contain"
//               src={ktpImage ? URL.createObjectURL(ktpImage) : ""}
//               alt="Foto KTP"
//             />
//             <img
//               className="absolute bottom-0 right-0 w-6 h-6"
//               src="/icons/checkbox.svg"
//               alt="Verified Icon"
//             />
//           </div>
//           <p className="mt-2 text-sm">Foto KTP</p>
//         </div>
//       </div>

//       <div className="mt-10 grid grid-cols-1 gap-x-3 gap-y-4 lg:gap-x-6 lg:gap-y-8 sm:grid-cols-8">
//         <div className="sm:col-span-4 lg:col-span-4">
//           <label
//             htmlFor="no_handphone"
//             className="block text-sm leading-6 font-bold"
//           >
//             Nomor Handphone
//           </label>
//           <div className="">
//             <input
//               id="no_handphone"
//               type="tel"
//               {...register("no_handphone")}
//               autoComplete="tel"
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//             />
//             <div className="mt-1 h-1">
//               {errors.no_handphone?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.no_handphone.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4 lg:col-span-4">
//           <label htmlFor="no_ktp" className="block text-sm leading-6 font-bold">
//             Nomor Kartu KTP
//           </label>
//           <div className="">
//             <input
//               id="no_ktp"
//               type="tel"
//               {...register("no_ktp")}
//               autoComplete="tel"
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//             />
//             <div className="mt-1 h-1">
//               {errors.no_ktp?.message && (
//                 <p className="text-sm text-red-400">{errors.no_ktp.message}</p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4 lg:col-span-8">
//           <label htmlFor="posisi" className="block text-sm leading-6 font-bold">
//             Posisi di Perusahaan
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("posisi") || ""}
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="posisi"
//               {...register("posisi")}
//             >
//               <option value="" disabled>
//                 Pilih Posisi di Perusahaan
//               </option>
//               <option value="direktur">Direktur</option>
//               <option value="manager">Manager</option>
//               <option value="engineer">Engineer</option>
//               <option value="supervisor">Supervisor</option>
//             </select>
//             <div className="mt-1 h-1">
//               {errors.posisi?.message && (
//                 <p className="text-sm text-red-400">{errors.posisi.message}</p>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="sm:col-span-2">
//           <label htmlFor="title" className="block text-sm leading-6 font-bold">
//             Title
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("title") || ""}
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="title"
//               {...register("title")}
//             >
//               <option value="" disabled>
//                 Pilih Title
//               </option>
//               <option value="Pria">Tn.</option>
//               <option value="Wanita">Ny.</option>
//               <option value="Wanita">Nn.</option>
//             </select>
//             <div className="mt-1 h-1">
//               {errors.title?.message && (
//                 <p className="text-sm text-red-400">{errors.title.message}</p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-3">
//           <label
//             htmlFor="nama_depan"
//             className="block text-sm leading-6 font-bold"
//           >
//             Nama Depan
//           </label>
//           <div className="">
//             <input
//               type="text"
//               id="nama_depan"
//               {...register("nama_depan")}
//               autoComplete="given-name"
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//             />
//             <div className="mt-1 h-1">
//               {errors.nama_depan?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.nama_depan.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="sm:col-span-3">
//           <label
//             htmlFor="nama_belakang"
//             className="block text-sm leading-6 font-bold"
//           >
//             Nama Belakang
//           </label>
//           <div className="">
//             <input
//               type="text"
//               id="nama_belakang"
//               {...register("nama_belakang")}
//               autoComplete="family-name"
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//             />
//             <div className="mt-1 h-1">
//               {errors.nama_belakang?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.nama_belakang.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="tempat_lahir"
//             className="block text-sm leading-6 font-bold"
//           >
//             Tempat Lahir Sesuai KTP
//           </label>
//           <div className="">
//             <input
//               type="text"
//               id="tempat_lahir"
//               {...register("tempat_lahir")}
//               autoComplete="given-name"
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//             />
//             <div className="mt-1 h-1">
//               {errors.tempat_lahir?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.tempat_lahir.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="sm:col-span-4">
//           <label
//             htmlFor="tanggal_lahir"
//             className="block text-sm leading-6 font-bold"
//           >
//             Tanggal Lahir Sesuai KTP
//           </label>
//           <div className="">
//             <Controller
//               name="tanggal_lahir"
//               control={control}
//               rules={{ required: "Tanggal lahir diperlukan." }}
//               render={({ field }) => (
//                 <DatePicker
//                   value={field.value}
//                   onChange={(date) => field.onChange(date)}
//                 />
//               )}
//             />
//             <div className="mt-1 h-1">
//               {errors.tanggal_lahir?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.tanggal_lahir.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="sm:col-span-4">
//           <label htmlFor="agama" className="block text-sm leading-6 font-bold">
//             Agama
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("agama") || ""}
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="agama"
//               {...register("agama")}
//             >
//               <option value="" disabled>
//                 Pilih Agama
//               </option>
//               {religions.slice(0, 6).map(({ id, agama }, index) => (
//                 <option key={index} value={id}>
//                   {agama}
//                 </option>
//               ))}
//             </select>
//             <div className="mt-1 h-1">
//               {errors.agama?.message && (
//                 <p className="text-sm text-red-400">{errors.agama.message}</p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="pendidikan_terakhir"
//             className="block text-sm leading-6 font-bold"
//           >
//             Pendidikan Terakhir
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("pendidikan_terakhir") || ""}
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="pendidikan_terakhir"
//               {...register("pendidikan_terakhir")}
//             >
//               <option value="" disabled>
//                 Pilih Pendidikan Terakhir
//               </option>
//               {educations.map((education: Education) => (
//                 <option key={education.id} value={education.id}>
//                   {education.pendidikan}
//                 </option>
//               ))}
//             </select>
//             <div className="mt-1 h-1">
//               {errors.pendidikan_terakhir?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.pendidikan_terakhir.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4 lg:col-span-4">
//           <label
//             htmlFor="noDarurat"
//             className="block text-sm leading-6 font-bold"
//           >
//             Nomor Telefon Darurat
//           </label>
//           <div className="">
//             <input
//               id="noDarurat"
//               type="tel"
//               {...register("noDarurat")}
//               autoComplete="tel"
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//             />
//             <div className="mt-1 h-1">
//               {errors.noDarurat?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.noDarurat.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4 lg:col-span-4">
//           <label
//             htmlFor="ahliWaris"
//             className="block text-sm leading-6 font-bold"
//           >
//             Nama Ahli Waris
//           </label>
//           <div className="">
//             <input
//               id="ahliWaris"
//               type="tel"
//               {...register("ahliWaris")}
//               autoComplete="tel"
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//             />
//             <div className="mt-1 h-1">
//               {errors.ahliWaris?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.ahliWaris.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="kewarganegaraan"
//             className="block text-sm leading-6 font-bold"
//           >
//             Pilih Kewarganegaraan
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("kewarganegaraan") || ""}
//               className="block w-full rounded-md border-0 py-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="kewarganegaraan"
//               {...register("kewarganegaraan")}
//             >
//               <option value="" disabled>
//                 Pilih Kewarganegaraan
//               </option>
//               {nationalities.map((nationality: Nationality, index: number) => (
//                 <option key={index} value={nationality.id}>
//                   {nationality.kewarganegaraan.toUpperCase()}
//                 </option>
//               ))}
//             </select>
//             <div className="mt-1 h-1">
//               {errors.kewarganegaraan?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.kewarganegaraan.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
//         <div className="sm:col-span-8">
//           <label
//             htmlFor="alamat_ktp"
//             className="block text-sm leading-6 font-bold"
//           >
//             Alamat Sesuai KTP
//           </label>
//           <div className="">
//             <input
//               type="text"
//               id="alamat_ktp"
//               {...register("alamat_ktp")}
//               autoComplete="given-name"
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//             />
//             <div className="mt-1 h-1">
//               {errors.alamat_ktp?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.alamat_ktp.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="provinsi_ktp"
//             className="block text-sm leading-6 font-bold"
//           >
//             Provinsi
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("provinsi_ktp") || ""}
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="provinsi_ktp"
//               {...register("provinsi_ktp")}
//             >
//               <option value="" disabled>
//                 Pilih Provinsi
//               </option>
//               {provinces.map((province: Province, index: number) => (
//                 <option key={index} value={province.province_code}>
//                   {province.province}
//                 </option>
//               ))}
//             </select>
//             <div className="mt-1 h-1">
//               {errors.provinsi_ktp?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.provinsi_ktp.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="kabupaten_ktp"
//             className="block text-sm leading-6 font-bold"
//           >
//             Kota/Kabupaten
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("kabupaten_ktp") || ""}
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="kabupaten_ktp"
//               {...register("kabupaten_ktp")}
//             >
//               <option value="" disabled>
//                 Pilih Kota/Kabupaten
//               </option>
//               {cities.map((city: City, index: number) => (
//                 <option key={index} value={city.city_code}>
//                   {city.city}
//                 </option>
//               ))}
//             </select>
//             <div className="mt-1 h-1">
//               {errors.kabupaten_ktp?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.kabupaten_ktp.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="kecamatan_ktp"
//             className="block text-sm leading-6 font-bold"
//           >
//             Kecamatan
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("kecamatan_ktp") || ""}
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="kecamatan_ktp"
//               {...register("kecamatan_ktp")}
//             >
//               <option value="" disabled>
//                 Pilih Kecamatan
//               </option>
//               {districts.map((district: District, index: number) => (
//                 <option key={index} value={district.district_code}>
//                   {district.district}
//                 </option>
//               ))}
//             </select>
//             <div className="mt-1 h-1">
//               {errors.kecamatan_ktp?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.kecamatan_ktp.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="kelurahan_ktp"
//             className="block text-sm leading-6 font-bold"
//           >
//             Kelurahan
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("kelurahan_ktp") || ""}
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="kelurahan_ktp"
//               {...register("kelurahan_ktp")}
//             >
//               <option value="" disabled>
//                 Pilih kelurahan
//               </option>
//               {subdistricts.map((subdistrict: Subdistrict, index: number) => (
//                 <option key={index} value={subdistrict.sub_district_code}>
//                   {subdistrict.sub_district}
//                 </option>
//               ))}
//             </select>
//             <div className="mt-1 h-1">
//               {errors.kelurahan_ktp?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.kelurahan_ktp.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="kodePos_ktp"
//             className="block text-sm leading-6 font-bold"
//           >
//             Kode Pos
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("kodePos_ktp") || ""}
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="kodePos_ktp"
//               {...register("kodePos_ktp")}
//             >
//               <option value="" disabled>
//                 Pilih Kode Pos
//               </option>
//               {postalCodes.map((postalCode: PostalCode, index: number) => (
//                 <option key={index} value={postalCode.postal_code}>
//                   {postalCode.postal_code}
//                 </option>
//               ))}
//             </select>
//             <div className="mt-1 h-1">
//               {errors.kodePos_ktp?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.kodePos_ktp.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center my-4 gap-2">
//         <input
//           className="w-4 h-4 text-emerald-light bg-emerald-light border-gray-300 rounded checked:bg-emerald-light checked:border-emerald-light focus:ring-blue-500"
//           type="checkbox"
//           name="domisili"
//           id="domisili"
//           checked={isChecked}
//           onChange={() => setIsChecked(!isChecked)}
//         />
//         <label htmlFor="domisili">Alamat domisili sama dengan alamat KTP</label>
//       </div>

//       {!isChecked && (
//         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
//           <div className="sm:col-span-8">
//             <label
//               htmlFor="alamat_domisili"
//               className="block text-sm leading-6 font-bold"
//             >
//               Alamat Domisili
//             </label>
//             <div className="">
//               <input
//                 type="text"
//                 id="alamat_domisili"
//                 {...register("alamat_domisili")}
//                 autoComplete="given-name"
//                 className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               />
//               <div className="mt-1 h-1">
//                 {errors.alamat_domisili?.message && (
//                   <p className="text-sm text-red-400">
//                     {errors.alamat_domisili.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className="sm:col-span-4">
//             <label
//               htmlFor="provinsi_domisili"
//               className="block text-sm leading-6 font-bold"
//             >
//               Provinsi
//             </label>
//             <div className="w-full">
//               <select
//                 value={watch("provinsi_domisili") || ""}
//                 className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//                 id="provinsi_domisili"
//                 {...register("provinsi_domisili")}
//               >
//                 <option value="" disabled>
//                   Pilih Provinsi
//                 </option>
//                 {provinces.map((province: Province, index: number) => (
//                   <option key={index} value={province.province_code}>
//                     {province.province}
//                   </option>
//                 ))}
//               </select>
//               <div className="mt-1 h-1">
//                 {errors.provinsi_domisili?.message && (
//                   <p className="text-sm text-red-400">
//                     {errors.provinsi_domisili.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className="sm:col-span-4">
//             <label
//               htmlFor="kabupaten_domisili"
//               className="block text-sm leading-6 font-bold"
//             >
//               Kota/Kabupaten
//             </label>
//             <div className="w-full">
//               <select
//                 value={watch("kabupaten_domisili") || ""}
//                 className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//                 id="kabupaten_domisili"
//                 {...register("kabupaten_domisili")}
//               >
//                 <option value="" disabled>
//                   Pilih Kabupaten
//                 </option>
//                 {cities.map((city: City, index: number) => (
//                   <option key={index} value={city.city_code}>
//                     {city.city}
//                   </option>
//                 ))}
//               </select>
//               <div className="mt-1 h-1">
//                 {errors.kabupaten_domisili?.message && (
//                   <p className="text-sm text-red-400">
//                     {errors.kabupaten_domisili.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className="sm:col-span-4">
//             <label
//               htmlFor="kecamatan_domisili"
//               className="block text-sm leading-6 font-bold"
//             >
//               Kecamatan
//             </label>
//             <div className="w-full">
//               <select
//                 value={watch("kecamatan_domisili") || ""}
//                 className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//                 id="kecamatan_domisili"
//                 {...register("kecamatan_domisili")}
//               >
//                 <option value="" disabled>
//                   Pilih Kecamatan
//                 </option>
//                 {districts.map((district: District, index: number) => (
//                   <option key={index} value={district.district_code}>
//                     {district.district}
//                   </option>
//                 ))}
//               </select>
//               <div className="mt-1 h-1">
//                 {errors.kecamatan_domisili?.message && (
//                   <p className="text-sm text-red-400">
//                     {errors.kecamatan_domisili.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className="sm:col-span-4">
//             <label
//               htmlFor="kelurahan_domisili"
//               className="block text-sm leading-6 font-bold"
//             >
//               Kelurahan
//             </label>
//             <div className="w-full">
//               <select
//                 value={watch("kelurahan_domisili") || ""}
//                 className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//                 id="kelurahan_domisili"
//                 {...register("kelurahan_domisili")}
//               >
//                 <option value="" disabled>
//                   Pilih Kelurahan
//                 </option>
//                 {subdistricts.map((subdistrict: Subdistrict, index: number) => (
//                   <option key={index} value={subdistrict.sub_district_code}>
//                     {subdistrict.sub_district}
//                   </option>
//                 ))}
//               </select>
//               <div className="mt-1 h-1">
//                 {errors.kelurahan_domisili?.message && (
//                   <p className="text-sm text-red-400">
//                     {errors.kelurahan_domisili.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className="sm:col-span-4">
//             <label
//               htmlFor="kodePos_domisili"
//               className="block text-sm leading-6 font-bold"
//             >
//               Kode Pos
//             </label>
//             <div className="w-full">
//               <select
//                 value={watch("kodePos_domisili") || ""}
//                 className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//                 id="kodePos_domisili"
//                 {...register("kodePos_domisili")}
//               >
//                 <option value="" disabled>
//                   Pilih Kode Pos
//                 </option>
//                 {postalCodes.map((postalCode: PostalCode, index: number) => (
//                   <option key={index} value={postalCode.postal_code}>
//                     {postalCode.postal_code}
//                   </option>
//                 ))}
//               </select>
//               <div className="mt-1 h-1">
//                 {errors.kodePos_domisili?.message && (
//                   <p className="text-sm text-red-400">
//                     {errors.kodePos_domisili.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default PersonalFormPenerbit;

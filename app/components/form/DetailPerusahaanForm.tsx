// "use client";

// import React, { FC, useEffect } from "react";
// import {
//   UseFormRegister,
//   Control,
//   FieldErrors,
//   UseFormSetValue,
//   UseFormWatch,
// } from "react-hook-form";
// import { z } from "zod";
// import { KycPenerbitFormSchema } from "../../../lib/schema";
// import usePreferences from "@/hooks/usePreferences";

// type Inputs = z.infer<typeof KycPenerbitFormSchema>;

// interface DetailPerusahaanFormProps {
//   register: UseFormRegister<Inputs>;
//   control: Control<Inputs>;
//   setValue: UseFormSetValue<Inputs>;
//   errors: FieldErrors<Inputs>;
//   watch: UseFormWatch<Inputs>;
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

// export const detailPerusahaanFields: (keyof Inputs)[] = [
//   "no_telp_perusahaan",
//   "situs_perusahaan",
//   "jenis_perusahaan",
//   "nama_perusahaan",
//   "status_kantor",
//   "alamat_perusahaan",
//   "provinsi_perusahaan",
//   "kota_perusahaan",
//   "kecamatan_perusahaan",
//   "kodePos_perusahaan",
//   "nomor_rekening_perusahaan",
//   "nama_rekening_perusahaan",
//   "nama_bank_rekening",
// ];

// const DetailPerusahaanForm: FC<DetailPerusahaanFormProps> = ({
//   register,
//   control,
//   errors,
//   watch,
//   setValue,
// }) => {
//   const {
//     provinces,
//     cities,
//     districts,
//     subdistricts,
//     postalCodes,
//     fetchCities,
//     fetchDistricts,
//     fetchSubDistricts,
//     fetchPostalCodes,
//   } = usePreferences();
//   const provinsi_perusahaan = watch("provinsi_perusahaan");
//   const kota_perusahaan = watch("kota_perusahaan");
//   const kecamatan_perusahaan = watch("kecamatan_perusahaan");

//   useEffect(() => {
//     if (provinsi_perusahaan) {
//       fetchCities(provinsi_perusahaan);
//     }
//   }, [provinsi_perusahaan]); // eslint-disable-line react-hooks/exhaustive-deps

//   useEffect(() => {
//     if (kota_perusahaan) {
//       fetchDistricts(kota_perusahaan);
//     }
//   }, [kota_perusahaan]); // eslint-disable-line react-hooks/exhaustive-deps

//   useEffect(() => {
//     if (kecamatan_perusahaan) {
//       fetchSubDistricts(kecamatan_perusahaan);
//       fetchPostalCodes(kecamatan_perusahaan);
//     }
//   }, [kecamatan_perusahaan]); // eslint-disable-line react-hooks/exhaustive-deps
//   return (
//     <>
//       <div className="mt-8 grid grid-cols-1 gap-x-3 gap-y-4 lg:gap-x-6 lg:gap-y-8 sm:grid-cols-8">
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="no_telp_perusahaan"
//             className="block text-sm leading-6 font-bold"
//           >
//             Nomor Telefon Perusahaan
//           </label>
//           <div className="w-full">
//             <input
//               type="text"
//               id="no_telp_perusahaan"
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               {...register("no_telp_perusahaan")}
//             />
//             {errors.no_telp_perusahaan && (
//               <p className="text-sm text-red-400">
//                 {errors.no_telp_perusahaan.message}
//               </p>
//             )}
//           </div>
//         </div>
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="situs_perusahaan"
//             className="block text-sm leading-6 font-bold"
//           >
//             Situs Perusahaan
//           </label>
//           <div className="w-full">
//             <input
//               type="text"
//               id="situs_perusahaan"
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               {...register("situs_perusahaan")}
//             />
//             {errors.situs_perusahaan && (
//               <p className="text-sm text-red-400">
//                 {errors.situs_perusahaan.message}
//               </p>
//             )}
//           </div>
//         </div>
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="jenis_perusahaan"
//             className="block text-sm leading-6 font-bold"
//           >
//             Jenis Perusahaan
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("jenis_perusahaan") || ""}
//               className="block w-full rounded-md border-0 py-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="jenis_perusahaan"
//               {...register("jenis_perusahaan")}
//             >
//               <option value="" disabled>
//                 Pilih Jenis Perusahaan
//               </option>
//               <option value="PT">PT</option>
//               <option value="CV">CV</option>
//               <option value="KOPERASI">KOPERASI</option>
//             </select>
//             <div className="mt-1 h-1">
//               {errors.jenis_perusahaan?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.jenis_perusahaan.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="nama_perusahaan"
//             className="block text-sm leading-6 font-bold"
//           >
//             Nama Perusahaan
//           </label>
//           <div className="w-full">
//             <input
//               type="text"
//               id="nama_perusahaan"
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               {...register("nama_perusahaan")}
//             />
//             {errors.nama_perusahaan && (
//               <p className="text-sm text-red-400">
//                 {errors.nama_perusahaan.message}
//               </p>
//             )}
//           </div>
//         </div>
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="status_kantor"
//             className="block text-sm leading-6 font-bold"
//           >
//             Status Kantor
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("status_kantor") || ""}
//               className="block w-full rounded-md border-0 py-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="status_kantor"
//               {...register("status_kantor")}
//             >
//               <option value="" disabled>
//                 Pilih Status Kantor
//               </option>
//               <option value="sewa">Sewa</option>
//               <option value="milik sendiri">Milik Sendiri</option>
//             </select>
//             <div className="mt-1 h-1">
//               {errors.status_kantor?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.status_kantor.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
//         <div className="sm:col-span-8">
//           <label
//             htmlFor="alamat_perusahaan"
//             className="block text-sm leading-6 font-bold"
//           >
//             Alamat Perusahaan
//           </label>
//           <div className="">
//             <input
//               type="text"
//               id="alamat_perusahaan"
//               {...register("alamat_perusahaan")}
//               autoComplete="given-name"
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//             />
//             <div className="mt-1 h-1">
//               {errors.alamat_perusahaan?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.alamat_perusahaan.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="provinsi_perusahaan"
//             className="block text-sm leading-6 font-bold"
//           >
//             Provinsi
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("provinsi_perusahaan") || ""}
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="provinsi_perusahaan"
//               {...register("provinsi_perusahaan")}
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
//               {errors.provinsi_perusahaan?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.provinsi_perusahaan.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="kota_perusahaan"
//             className="block text-sm leading-6 font-bold"
//           >
//             Kota/Kabupaten
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("kota_perusahaan") || ""}
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="kota_perusahaan"
//               {...register("kota_perusahaan")}
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
//               {errors.kota_perusahaan?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.kota_perusahaan.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="kecamatan_perusahaan"
//             className="block text-sm leading-6 font-bold"
//           >
//             Kecamatan
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("kecamatan_perusahaan") || ""}
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="kecamatan_perusahaan"
//               {...register("kecamatan_perusahaan")}
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
//               {errors.kecamatan_perusahaan?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.kecamatan_perusahaan.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="sm:col-span-4">
//           <label
//             htmlFor="kodePos_perusahaan"
//             className="block text-sm leading-6 font-bold"
//           >
//             Kode Pos
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("kodePos_perusahaan") || ""}
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="kodePos_perusahaan"
//               {...register("kodePos_perusahaan")}
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
//               {errors.kodePos_perusahaan?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.kodePos_perusahaan.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 grid grid-cols-1 gap-x-3 gap-y-4 lg:gap-x-6 lg:gap-y-8 sm:grid-cols-9">
//         <div className="sm:col-span-3">
//           <label
//             htmlFor="nomor_rekening_perusahaan"
//             className="block text-sm leading-6 font-bold"
//           >
//             Nomor Rekening Perusahaan
//           </label>
//           <div className="w-full">
//             <input
//               type="text"
//               id="nomor_rekening_perusahaan"
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               {...register("nomor_rekening_perusahaan")}
//             />
//             {errors.nomor_rekening_perusahaan && (
//               <p className="text-sm text-red-400">
//                 {errors.nomor_rekening_perusahaan.message}
//               </p>
//             )}
//           </div>
//         </div>
//         <div className="sm:col-span-3">
//           <label
//             htmlFor="nama_rekening_perusahaan"
//             className="block text-sm leading-6 font-bold"
//           >
//             Nama Rekening Perusahaan
//           </label>
//           <div className="w-full">
//             <input
//               type="text"
//               id="nama_rekening_perusahaan"
//               className="block w-full rounded-md border-0 py-3 px-3 bg-slate-100 shadow-sm focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               {...register("nama_rekening_perusahaan")}
//             />
//             {errors.nama_rekening_perusahaan && (
//               <p className="text-sm text-red-400">
//                 {errors.nama_rekening_perusahaan.message}
//               </p>
//             )}
//           </div>
//         </div>
//         <div className="sm:col-span-3">
//           <label
//             htmlFor="nama_bank_rekening"
//             className="block text-sm leading-6 font-bold"
//           >
//             Nama Bank
//           </label>
//           <div className="w-full">
//             <select
//               value={watch("nama_bank_rekening") || ""}
//               className="block w-full rounded-md border-0 py-3 bg-slate-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//               id="nama_bank_rekening"
//               {...register("nama_bank_rekening")}
//             >
//               <option value="" disabled>
//                 Pilih Nama Bank
//               </option>
//               <option value="bca">BCA</option>
//               <option value="bri">BRI</option>
//               <option value="bni">BNI</option>
//             </select>
//             <div className="mt-1 h-1">
//               {errors.nama_bank_rekening?.message && (
//                 <p className="text-sm text-red-400">
//                   {errors.nama_bank_rekening.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DetailPerusahaanForm;

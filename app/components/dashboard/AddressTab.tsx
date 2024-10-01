import React from "react";
import { SquarePen, CircleX } from "lucide-react";

interface Province {
  province_code: string;
  province: string;
}

interface City {
  city_code: string;
  city: string;
}

interface District {
  district_code: string;
  district: string;
}

interface Subdistrict {
  sub_district_code: string;
  sub_district: string;
}

interface PostalCode {
  postal_code: string;
}

interface Profile {
  alamat_ktp?: string;
  provinsi_ktp?: string;
  kabupaten_ktp?: string;
  kecamatan_ktp?: string;
  kelurahan_ktp?: string;
  kodepos_ktp?: string;
  kodepos_domisili?: string;
  rt_rw_ktp?: string;
  rt_rw_domisili?: string;
  alamat_domisili?: string;
  kelurahan_domisili?: string;
  kecamatan_domisili?: string;
  kabupaten_domisili?: string;
  provinsi_domisili?: string;
  [key: string]: any; // For other possible profile fields
}

interface User {
  profile?: Profile;
}

interface AddressTabProps {
  user: User | null;
  isEditing: boolean;
  formData: Partial<Profile> | undefined;
  handleEditClick: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  provinces: Province[];
  cities: City[];
  districts: District[];
  subdistricts: Subdistrict[];
  postalCodes: PostalCode[];
  domisiliCities: City[];
  domisiliDistricts: District[];
  domisiliSubdistricts: Subdistrict[];
  domisiliPostalCodes: PostalCode[];
  isSameAsKTP: boolean;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddressTab: React.FC<AddressTabProps> = ({
  user,
  isEditing,
  formData,
  handleEditClick,
  handleInputChange,
  handleSelectChange,
  handleFormSubmit,
  setIsEditing,
  provinces,
  cities,
  districts,
  subdistricts,
  postalCodes,
  domisiliCities,
  domisiliDistricts,
  domisiliSubdistricts,
  domisiliPostalCodes,
  isSameAsKTP,
  handleCheckboxChange,
}) => {
  return (
    <div className="my-8 divide-y-2">
      {isEditing ? (
        // <form onSubmit={handleFormSubmit}>
        //   <div className="flex justify-between items-center py-3">
        //     <div className="w-full">
        //       <label className="font-bold">Alamat KTP</label> <br />
        //       <input
        //         type="text"
        //         name="alamat_ktp"
        //         value={formData?.alamat_ktp}
        //         onChange={handleInputChange}
        //         className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
        //       />
        //     </div>
        //   </div>
        //   <div className="flex justify-between items-center py-3">
        //     <div className="w-full">
        //       <label className="font-bold">Provinsi KTP</label> <br />
        //       <select
        //         name="provinsi_ktp"
        //         value={formData?.provinsi_ktp}
        //         onChange={handleSelectChange}
        //         className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
        //       >
        //         <option value="">Pilih Provinsi KTP</option>
        //         {provinces.map((province: Province, index: number) => (
        //           <option key={index} value={province.province_code}>
        //             {province.province}
        //           </option>
        //         ))}
        //       </select>
        //     </div>
        //   </div>
        //   <div className="flex justify-between items-center py-3">
        //     <div className="w-full">
        //       <label className="font-bold">Kota/Kabupaten KTP</label> <br />
        //       <select
        //         name="kabupaten_ktp"
        //         value={formData?.kabupaten_ktp}
        //         onChange={handleSelectChange}
        //         className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
        //       >
        //         <option value="">Pilih Kota/Kabupaten KTP</option>
        //         {cities.map((city: City, index: number) => (
        //           <option key={index} value={city.city_code}>
        //             {city.city}
        //           </option>
        //         ))}
        //       </select>
        //     </div>
        //   </div>
        //   <div className="flex justify-between items-center py-3">
        //     <div className="w-full">
        //       <label className="font-bold">Kecamatan KTP</label> <br />
        //       <select
        //         name="kecamatan_ktp"
        //         value={formData?.kecamatan_ktp}
        //         onChange={handleSelectChange}
        //         className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
        //       >
        //         <option value="">Pilih Kecamatan KTP</option>
        //         {districts.map((district: District, index: number) => (
        //           <option key={index} value={district.district_code}>
        //             {district.district}
        //           </option>
        //         ))}
        //       </select>
        //     </div>
        //   </div>
        //   <div className="flex justify-between items-center py-3">
        //     <div className="w-full">
        //       <label className="font-bold">Kelurahan KTP</label> <br />
        //       <select
        //         name="kelurahan_ktp"
        //         value={formData?.kelurahan_ktp}
        //         onChange={handleSelectChange}
        //         className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
        //       >
        //         <option value="">Pilih Kelurahan KTP</option>
        //         {subdistricts.map((subdistrict: Subdistrict, index: number) => (
        //           <option key={index} value={subdistrict.sub_district_code}>
        //             {subdistrict.sub_district}
        //           </option>
        //         ))}
        //       </select>
        //     </div>
        //   </div>
        //   <div className="flex justify-between items-center py-3">
        //     <div className="w-full">
        //       <label className="font-bold">Kode Pos KTP</label> <br />
        //       <select
        //         name="kodepos_ktp"
        //         value={formData?.kodepos_ktp}
        //         onChange={handleSelectChange}
        //         className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
        //       >
        //         <option value="">Pilih Kode Pos KTP</option>
        //         {postalCodes.map((postalCode: PostalCode, index: number) => (
        //           <option key={index} value={postalCode.postal_code}>
        //             {postalCode.postal_code}
        //           </option>
        //         ))}
        //       </select>
        //     </div>
        //   </div>
        //   <div className="flex justify-between items-center py-3">
        //     <div className="w-full">
        //       <label className="font-bold">
        //         RT/RW Sesuai KTP (contoh: 001/001)
        //       </label>{" "}
        //       <br />
        //       <input
        //         type="text"
        //         name="rt_rw_ktp"
        //         value={formData?.rt_rw_ktp}
        //         onChange={handleInputChange}
        //         className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
        //       />
        //     </div>
        //   </div>
        //   <div>
        //     <label>
        //       <input
        //         className="w-4 h-4 mr-2 border-gray-300 rounded text-emerald-light bg-emerald-light checked:bg-emerald-light checked:border-emerald-light focus:ring-blue-500"
        //         type="checkbox"
        //         checked={isSameAsKTP}
        //         onChange={handleCheckboxChange}
        //       />
        //       Alamat domisili sama dengan alamat KTP{" "}
        //     </label>
        //   </div>
        //   {!isSameAsKTP && (
        //     <>
        //       <div className="flex justify-between items-center py-3">
        //         <div className="w-full">
        //           <label className="font-bold">Alamat Domisili</label> <br />
        //           <input
        //             type="text"
        //             name="alamat_domisili"
        //             value={formData?.alamat_domisili}
        //             onChange={handleInputChange}
        //             className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
        //           />
        //         </div>
        //       </div>
        //       <div className="flex justify-between items-center py-3">
        //         <div className="w-full">
        //           <label className="font-bold">Provinsi Domisili</label> <br />
        //           <select
        //             name="provinsi_domisili"
        //             value={formData?.provinsi_domisili}
        //             onChange={handleSelectChange}
        //             className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
        //           >
        //             <option value="">Pilih Provinsi Domisili</option>
        //             {provinces.map((province: Province, index: number) => (
        //               <option key={index} value={province.province_code}>
        //                 {province.province}
        //               </option>
        //             ))}
        //           </select>
        //         </div>
        //       </div>
        //       <div className="flex justify-between items-center py-3">
        //         <div className="w-full">
        //           <label className="font-bold">Kota/Kabupaten Domisili</label>{" "}
        //           <br />
        //           <select
        //             name="kabupaten_domisili"
        //             value={formData?.kabupaten_domisili}
        //             onChange={handleSelectChange}
        //             className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
        //           >
        //             <option value="">Pilih Kota/Kabupaten Domisili</option>
        //             {domisiliCities.map((city: City, index: number) => (
        //               <option key={index} value={city.city_code}>
        //                 {city.city}
        //               </option>
        //             ))}
        //           </select>
        //         </div>
        //       </div>
        //       <div className="flex justify-between items-center py-3">
        //         <div className="w-full">
        //           <label className="font-bold">Kecamatan Domisili</label> <br />
        //           <select
        //             name="kecamatan_domisili"
        //             value={formData?.kecamatan_domisili}
        //             onChange={handleSelectChange}
        //             className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
        //           >
        //             <option value="">Pilih Kecamatan Domisili</option>
        //             {domisiliDistricts.map(
        //               (district: District, index: number) => (
        //                 <option key={index} value={district.district_code}>
        //                   {district.district}
        //                 </option>
        //               )
        //             )}
        //           </select>
        //         </div>
        //       </div>
        //       <div className="flex justify-between items-center py-3">
        //         <div className="w-full">
        //           <label className="font-bold">Kelurahan Domisili</label> <br />
        //           <select
        //             name="kelurahan_domisili"
        //             value={formData?.kelurahan_domisili}
        //             onChange={handleSelectChange}
        //             className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
        //           >
        //             <option value="">Pilih Kelurahan Domisili</option>
        //             {domisiliSubdistricts.map(
        //               (subdistrict: Subdistrict, index: number) => (
        //                 <option
        //                   key={index}
        //                   value={subdistrict.sub_district_code}
        //                 >
        //                   {subdistrict.sub_district}
        //                 </option>
        //               )
        //             )}
        //           </select>
        //         </div>
        //       </div>
        //       <div className="flex justify-between items-center py-3">
        //         <div className="w-full">
        //           <label className="font-bold">Kode Pos Domisili</label> <br />
        //           <select
        //             name="kodepos_domisili"
        //             value={formData?.kodepos_domisili}
        //             onChange={handleSelectChange}
        //             className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
        //           >
        //             <option value="">Pilih Kode Pos Domisili</option>
        //             {domisiliPostalCodes.map(
        //               (postalCode: PostalCode, index: number) => (
        //                 <option key={index} value={postalCode.postal_code}>
        //                   {postalCode.postal_code}
        //                 </option>
        //               )
        //             )}
        //           </select>
        //         </div>
        //       </div>
        //       <div className="flex justify-between items-center py-3">
        //         <div className="w-full">
        //           <label className="font-bold">
        //             RT/RW Sesuai Domisili (contoh: 001/001)
        //           </label>{" "}
        //           <br />
        //           <input
        //             type="text"
        //             name="rt_rw_domisili"
        //             value={formData?.rt_rw_domisili}
        //             onChange={handleInputChange}
        //             className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
        //           />
        //         </div>
        //       </div>
        //     </>
        //   )}
        //   <div className="flex justify-end gap-2">
        //     <button
        //       type="button"
        //       onClick={() => setIsEditing(false)}
        //       className="px-6 py-3 flex items-center gap-2 rounded-xl bg-red-600 text-white"
        //     >
        //       <CircleX />
        //       Batalkan
        //     </button>
        //     <button
        //       type="submit"
        //       className="px-6 py-3 flex items-center gap-2 rounded-xl bg-emerald-light text-white"
        //     >
        //       <img src="/icons/save.svg" alt="Save Icon" />
        //       Simpan
        //     </button>
        //   </div>
        // </form>
        <>
          <InfoItem
            label="Alamat KTP"
            value={user?.profile?.alamat_ktp}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Provinsi KTP"
            value={user?.profile?.provinsi_ktp}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Kota/Kabupaten KTP"
            value={user?.profile?.kabupaten_ktp}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Kecamatan KTP"
            value={user?.profile?.kecamatan_ktp}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Kelurahan KTP"
            value={user?.profile?.kelurahan_ktp}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Kode Pos KTP"
            value={user?.profile?.kodepos_ktp}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="RT/RW Sesuai KTP (contoh: 001/001)"
            value={user?.profile?.rt_rw_ktp}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Alamat Domisili"
            value={user?.profile?.alamat_domisili}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Provinsi Domisili"
            value={user?.profile?.provinsi_domisili}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Kota/Kabupaten Domisili"
            value={user?.profile?.kabupaten_domisili}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Kecamatan Domisili"
            value={user?.profile?.kecamatan_domisili}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Kelurahan Domisili"
            value={user?.profile?.kelurahan_domisili}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Kode Pos Domisili"
            value={user?.profile?.kodepos_domisili}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="RT/RW Sesuai Domisili (contoh: 001/001)"
            value={user?.profile?.rt_rw_domisili}
            // onEditClick={handleEditClick}
          />
        </>
      ) : (
        <>
          <InfoItem
            label="Alamat KTP"
            value={user?.profile?.alamat_ktp}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Provinsi KTP"
            value={user?.profile?.provinsi_ktp}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Kota/Kabupaten KTP"
            value={user?.profile?.kabupaten_ktp}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Kecamatan KTP"
            value={user?.profile?.kecamatan_ktp}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Kelurahan KTP"
            value={user?.profile?.kelurahan_ktp}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Kode Pos KTP"
            value={user?.profile?.kodepos_ktp}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="RT/RW Sesuai KTP (contoh: 001/001)"
            value={user?.profile?.rt_rw_ktp}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Alamat Domisili"
            value={user?.profile?.alamat_domisili}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Provinsi Domisili"
            value={user?.profile?.provinsi_domisili}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Kota/Kabupaten Domisili"
            value={user?.profile?.kabupaten_domisili}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Kecamatan Domisili"
            value={user?.profile?.kecamatan_domisili}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Kelurahan Domisili"
            value={user?.profile?.kelurahan_domisili}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="Kode Pos Domisili"
            value={user?.profile?.kodepos_domisili}
            // onEditClick={handleEditClick}
          />
          <InfoItem
            label="RT/RW Sesuai Domisili (contoh: 001/001)"
            value={user?.profile?.rt_rw_domisili}
            // onEditClick={handleEditClick}
          />
        </>
      )}
    </div>
  );
};

interface InfoItemProps {
  label: string;
  value?: string;
  // onEditClick: () => void;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
  <div className="flex justify-between items-center py-3">
    <div>
      <label className="font-bold">{label}</label> <br />
      <span className="text-sm">{value}</span>
    </div>
    {/* <SquarePen
      strokeWidth={1.5}
      onClick={onEditClick}
      className="cursor-pointer"
    /> */}
  </div>
);

export default AddressTab;

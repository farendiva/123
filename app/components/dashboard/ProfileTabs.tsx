"use client";

import { useUser } from "@/context/UserContext";
import { CircleCheckBig, CircleX, Download, SquarePen } from "lucide-react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import usePreferences from "@/hooks/usePreferences";
import { getUserData } from "@/lib/auth";

interface Province {
  province: string;
  province_code: string;
}

interface City {
  city: string;
  city_code: string;
}

interface District {
  district: string;
  district_code: string;
}

interface Subdistrict {
  sub_district: string;
  sub_district_code: string;
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
  kelurahan_ktp: string | null;
  kecamatan_ktp: string | null;
  kabupaten_ktp: string | null;
  provinsi_ktp: string | null;
  alamat_domisili: string | null;
  kelurahan_domisili: string | null;
  kecamatan_domisili: string | null;
  kabupaten_domisili: string | null;
  provinsi_domisili: string | null;
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
  nama_bank: string | null;
  nama_ibu_kandung: string;
  kabupaten_cabang_bank: string | null;
  ktp: string | File;
  npwp: string | File;
  swa_photo: string | File;
  slip_gaji: string | File;
  kartu_keluarga: string | File;
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
  profile: Profile[];
}

interface ProfileTabsProps {
  data: User;
}

const ProfileTabs: React.FC = () => {
  const { user, updateUser } = useUser();
  const [activeTab, setActiveTab] = useState(0);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState<Partial<Profile> | undefined>(
    user?.profile
  );
  console.log(user?.profile);
  const [originalData, setOriginalData] = useState<
    Partial<Profile> | undefined
  >(user?.profile);
  const token = Cookies.get("authToken");
  const {
    provinces,
    profession,
    industries,
    salaries,
    cities,
    districts,
    subdistricts,
    fetchCities,
    fetchDistricts,
    fetchSubDistricts,
    fetchPostalCodes,
  } = usePreferences();

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData(user?.profile || {}); // Reset formData to user profile when entering edit mode
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Profile
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...(prev ?? {}),
        [field]: file,
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...(prev ?? {}),
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...(prev ?? {}),
      [name]: value,
    }));
  };

  useEffect(() => {
    if (formData?.provinsi_ktp) {
      fetchCities(formData.provinsi_ktp);
    }
  }, [formData?.provinsi_ktp]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (formData?.kabupaten_ktp) {
      fetchDistricts(formData.kabupaten_ktp);
    }
  }, [formData?.kabupaten_ktp]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (formData?.kecamatan_ktp) {
      fetchSubDistricts(formData.kecamatan_ktp);
      fetchPostalCodes(formData.kecamatan_ktp);
    }
  }, [formData?.kecamatan_ktp]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData) {
      console.error("Form data is undefined");
      return;
    }

    const changedData = new FormData();

    // Always include these fields
    const alwaysIncludeFields: (keyof Profile)[] = [
      "nomor_rekening",
      "nama_pemilik_rekening",
      "nama_bank",
      "kabupaten_cabang_bank",
    ];

    // Add always include fields to changedData
    alwaysIncludeFields.forEach((key) => {
      if (formData[key]) {
        changedData.append(key, formData[key] as string);
      }
    });

    // Compare original data with formData and add only changed values to FormData
    (Object.keys(formData) as (keyof Profile)[]).forEach((key) => {
      if (
        formData[key] !== originalData?.[key] &&
        !alwaysIncludeFields.includes(key)
      ) {
        if (formData[key] instanceof File) {
          changedData.append(key, formData[key] as File);
        } else {
          changedData.append(key, formData[key] as string);
        }
      }
    });

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/pemodal/${user?.pemodal_id}?_method=PUT`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: changedData,
      }
    );
    if (response.ok) {
      const updateData = await getUserData();
      setOriginalData(updateData); // Update originalData with the latest changes
      setIsEditing(false);
    } else {
      const errorData = await response.json();
      console.error("Error:", errorData);
    }
  };

  const getProfileImage = (user: any): string => {
    if (user?.profile?.swa_photo) {
      return `${process.env.NEXT_PUBLIC_FILE_PATH}/images/${user.profile.swa_photo}`;
    }
    return "/images/profile-placeholder.jpg";
  };

  return (
    <div className="w-full bg-white mx-auto p-8 border rounded-xl">
      <div className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-8 my-4">
        <img
          className="w-16 h-16 rounded-full"
          src={getProfileImage(user)}
          alt="Profile"
        />
        <div className="text-center md:text-left text-xl">
          <h2 className="font-bold">
            {user?.profile.nama_depan + " " + user?.profile.nama_belakang}
          </h2>
          <span
            className={`${
              user?.pemodal_status === 3
                ? "text-emerald-light"
                : user?.pemodal_status === 4
                ? "text-red-500"
                : "text-[#E09400]"
            } flex font-semibold items-center justify-center md:justify-start gap-2`}
          >
            {user?.pemodal_status === 3 && <CircleCheckBig />}
            {user?.pemodal_status === 3
              ? "Terverifikasi"
              : user?.pemodal_status === 1
              ? "Menunggu Review"
              : user?.pemodal_status === 4
              ? "Tidak Terverifikasi"
              : "Belum Terverifikasi"}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        {["Akun", "Alamat", "Pekerjaan", "Dokumen", "Akun Bank"].map(
          (tab, index) => (
            <button
              key={index}
              className={`py-2 px-4 md:px-10 ${
                activeTab === index
                  ? "bg-emerald-light text-white rounded-3xl"
                  : "text-black bg-[#ECF0FF] rounded-3xl"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </button>
          )
        )}
      </div>
      <div className="space-y-4 mt-4">
        {activeTab === 0 && (
          <>
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
                      <label className="font-bold">Nomor Handphone</label>{" "}
                      <br />
                      <span className="text-sm">
                        {user?.profile.no_handphone}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <label className="font-bold">Tanggal Lahir</label> <br />
                      <span className="text-sm">
                        {user?.profile.tanggal_lahir}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <label className="font-bold">Nik KTP</label> <br />
                      <span className="text-sm">{user?.profile.no_ktp}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-3">
                    <div className="w-full">
                      <label className="font-bold">Kewarganegaraan</label>{" "}
                      <br />
                      <select
                        name="kewarganegaraan"
                        value={formData?.kewarganegaraan || ""}
                        onChange={handleSelectChange}
                        className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
                      >
                        <option value="" disabled>
                          Pilih Kewarganegaraan
                        </option>
                        <option key="1" value="1">
                          WNI TINGGAL DI INDONESIA
                        </option>
                        <option key="2" value="2">
                          WNI TINGGAL DI LUAR NEGERI
                        </option>
                        <option key="3" value="3">
                          WNA TINGGAL DI INDONESIA
                        </option>
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
                        <option key="1" value="1">
                          Islam
                        </option>
                        <option key="2" value="2">
                          Kristen
                        </option>
                        <option key="3" value="3">
                          Katolik
                        </option>
                        <option key="4" value="4">
                          Hindu
                        </option>
                        <option key="5" value="5">
                          Budha
                        </option>
                        <option key="6" value="6">
                          Konghucu
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="py-4">
                    <button className="w-full text-start font-bold block border p-2 rounded-lg bg-gray-200 cursor-not-allowed">
                      <Download className="inline mx-2" strokeWidth={2} />
                      Unduh Dokumen Perjanjian Pemodal
                    </button>
                  </div>
                  <div className="flex py-2 justify-end gap-2">
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
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <label className="font-bold">Email</label> <br />
                      <span className="text-sm">{user?.email}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <label className="font-bold">Nomor Handphone</label>{" "}
                      <br />
                      <span className="text-sm">
                        {user?.profile.no_handphone}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <label className="font-bold">Tanggal Lahir</label> <br />
                      <span className="text-sm">
                        {user?.profile.tanggal_lahir}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <label className="font-bold">Nik KTP</label> <br />
                      <span className="text-sm">{user?.profile.no_ktp}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <label className="font-bold">Kewarganegaraan</label>{" "}
                      <br />
                      <span className="text-sm uppercase">
                        {user?.profile.kewarganegaraan}
                      </span>
                    </div>
                    <SquarePen
                      strokeWidth={1.5}
                      onClick={handleEditClick}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <label className="font-bold">Agama</label> <br />
                      <span className="text-sm">{user?.profile.agama}</span>
                    </div>
                    <SquarePen
                      strokeWidth={1.5}
                      onClick={handleEditClick}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="py-4">
                    <button className="w-full text-start font-bold block border p-2 rounded-lg bg-gray-200 cursor-not-allowed">
                      <Download className="inline mx-2" strokeWidth={2} />
                      Unduh Dokumen Perjanjian Pemodal
                    </button>
                  </div>
                </>
              )}
            </div>
          </>
        )}
        {activeTab === 1 && (
          <div>
            <div className="my-8 divide-y-2">
              {isEditing ? (
                <form onSubmit={handleFormSubmit}>
                  <div className="flex justify-between items-center py-3">
                    <div className="w-full">
                      <label className="font-bold">Alamat KTP</label> <br />
                      <input
                        type="text"
                        name="alamat_ktp"
                        value={formData?.alamat_ktp || ""}
                        onChange={handleInputChange}
                        className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div className="w-full">
                      <label className="font-bold">Provinsi KTP</label> <br />
                      <select
                        name="provinsi_ktp"
                        value={formData?.provinsi_ktp || ""}
                        onChange={handleSelectChange}
                        className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
                      >
                        <option value="" disabled>
                          Pilih Provinsi KTP
                        </option>
                        {provinces.map((province: Province, index: number) => (
                          <option key={index} value={province.province_code}>
                            {province.province}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-3">
                    <div className="w-full">
                      <label className="font-bold">Kota/Kabupaten KTP</label>{" "}
                      <br />
                      <select
                        name="kabupaten_ktp"
                        value={formData?.kabupaten_ktp || ""}
                        onChange={handleSelectChange}
                        className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
                      >
                        <option value="" disabled>
                          Pilih Kota/Kabupaten KTP
                        </option>
                        {cities.map((city: City, index: number) => (
                          <option key={index} value={city.city_code}>
                            {city.city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div className="w-full">
                      <label className="font-bold">Kecamatan KTP</label> <br />
                      <select
                        name="kecamatan_ktp"
                        value={formData?.kecamatan_ktp || ""}
                        onChange={handleSelectChange}
                        className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
                      >
                        <option value="" disabled>
                          Pilih Kecamatan KTP
                        </option>
                        {districts.map((district: District, index: number) => (
                          <option key={index} value={district.district_code}>
                            {district.district}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div className="w-full">
                      <label className="font-bold">Kelurahan KTP</label> <br />
                      <select
                        name="kelurahan_ktp"
                        value={formData?.kelurahan_ktp || ""}
                        onChange={handleSelectChange}
                        className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
                      >
                        <option value="" disabled>
                          Pilih Kelurahan KTP
                        </option>
                        {subdistricts.map(
                          (subdistrict: Subdistrict, index: number) => (
                            <option
                              key={index}
                              value={subdistrict.sub_district_code}
                            >
                              {subdistrict.sub_district}
                            </option>
                          )
                        )}
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
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <label className="font-bold">Alamat KTP</label> <br />
                      <span className="text-sm">
                        {user?.profile.alamat_ktp}
                      </span>
                    </div>
                    <SquarePen
                      strokeWidth={1.5}
                      onClick={handleEditClick}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <label className="font-bold">Provinsi KTP</label> <br />
                      <span className="text-sm">
                        {user?.profile.provinsi_ktp}
                      </span>
                    </div>
                    <SquarePen
                      strokeWidth={1.5}
                      onClick={handleEditClick}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <label className="font-bold">Kota/Kabupaten KTP</label>{" "}
                      <br />
                      <span className="text-sm">
                        {user?.profile.kabupaten_ktp}
                      </span>
                    </div>
                    <SquarePen
                      strokeWidth={1.5}
                      onClick={handleEditClick}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <label className="font-bold">Kecamatan KTP</label> <br />
                      <span className="text-sm">
                        {user?.profile.kecamatan_ktp}
                      </span>
                    </div>
                    <SquarePen
                      strokeWidth={1.5}
                      onClick={handleEditClick}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <label className="font-bold">Kelurahan KTP</label> <br />
                      <span className="text-sm">
                        {user?.profile.kelurahan_ktp}
                      </span>
                    </div>
                    <SquarePen
                      strokeWidth={1.5}
                      onClick={handleEditClick}
                      className="cursor-pointer"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div>
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
                      <label className="font-bold">Industri Pekerjaan</label>{" "}
                      <br />
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
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <label className="font-bold">Pekerjaan</label> <br />
                      <span className="text-sm">{user?.profile.pekerjaan}</span>
                    </div>
                    <SquarePen
                      strokeWidth={1.5}
                      onClick={handleEditClick}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <label className="font-bold">Industri Pekerjaan</label>{" "}
                      <br />
                      <span className="text-sm">
                        {user?.profile.industri_pekerjaan}
                      </span>
                    </div>
                    <SquarePen
                      strokeWidth={1.5}
                      onClick={handleEditClick}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <label className="font-bold">Pendapatan</label> <br />
                      <span className="text-sm">
                        {user?.profile.pendapatan}
                      </span>
                    </div>
                    <SquarePen
                      strokeWidth={1.5}
                      onClick={handleEditClick}
                      className="cursor-pointer"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div className="">
            {isEditing ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="flex items-center py-3">
                  <div className="w-full">
                    <label className="block font-bold">KTP</label>
                    <input
                      type="file"
                      accept="image/*"
                      name="ktp"
                      onChange={(e) => handleFileUpload(e, "ktp")}
                      className="w-full text-sm border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                </div>
                <div className="flex items-center py-3">
                  <div className="w-full">
                    <label className="block font-bold">Slip Gaji</label>
                    <input
                      type="file"
                      accept="image/*"
                      name="slip_gaji"
                      onChange={(e) => handleFileUpload(e, "slip_gaji")}
                      className="w-full text-sm border border-gray-300 rounded-lg p-2"
                    />
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
                {/* <div className="flex justify-between items-center py-3">
                  <div className="w-full">
                    <label className="font-bold">
                      Nomor Rekening Kustodian
                    </label>{" "}
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
                </div> */}
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-3 bg-red-600 text-white rounded-lg flex items-center gap-2 hover:bg-red-700"
                  >
                    <CircleX className="h-5 w-5" />
                    <span>Batalkan</span>
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-green-600 text-white rounded-lg flex items-center gap-2 hover:bg-green-700"
                  >
                    <img
                      src="/icons/save.svg"
                      alt="Save Icon"
                      className="h-5 w-5"
                    />
                    <span>Simpan</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="my-8 divide-y divide-gray-300">
                <div className="flex justify-between items-center py-3">
                  <div>
                    <label className="block font-bold">KTP</label>
                    <a
                      className="text-sm text-blue-600"
                      href={`${process.env.NEXT_PUBLIC_FILE_PATH}/images/${
                        user?.profile.ktp || ""
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {user?.profile.ktp ? "Lihat Dokumen" : "Belum Upload"}
                    </a>
                  </div>
                  <SquarePen
                    strokeWidth={1.5}
                    onClick={handleEditClick}
                    className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer"
                  />
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <label className="block font-bold">Slip Gaji</label>
                    <a
                      className="text-sm text-blue-600"
                      href={`${process.env.NEXT_PUBLIC_FILE_PATH}/images/${
                        user?.profile.slip_gaji || ""
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {user?.profile.slip_gaji
                        ? "Lihat Dokumen"
                        : "Belum Upload"}
                    </a>
                  </div>
                  <SquarePen
                    strokeWidth={1.5}
                    onClick={handleEditClick}
                    className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer"
                  />
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <label className="font-bold">Nomor SID</label> <br />
                    <span className="text-sm">{user?.profile.no_sid}</span>
                  </div>
                  <SquarePen
                    strokeWidth={1.5}
                    onClick={handleEditClick}
                    className="cursor-pointer"
                  />
                </div>
                {/* <div className="flex justify-between items-center py-3">
                  <div>
                    <label className="font-bold">
                      Nomor Rekening Kustodian
                    </label>{" "}
                    <br />
                    <span className="text-sm">
                      {user?.profile.nomor_rekening_custodian}
                    </span>
                  </div>
                  <SquarePen
                    strokeWidth={1.5}
                    onClick={handleEditClick}
                    className="cursor-pointer"
                  />
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <label className="font-bold">
                      Nama Pemilik Rekening Kustodian
                    </label>{" "}
                    <br />
                    <span className="text-sm">
                      {user?.profile.nama_rekening_custodian}
                    </span>
                  </div>
                  <SquarePen
                    strokeWidth={1.5}
                    onClick={handleEditClick}
                    className="cursor-pointer"
                  />
                </div> */}
              </div>
            )}
          </div>
        )}

        {activeTab === 4 && (
          <div>
            {isEditing ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
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
                    <label className="font-bold">Nama Bank</label> <br />
                    <input
                      type="text"
                      name="nama_bank"
                      value={formData?.nama_bank || ""}
                      onChange={handleInputChange}
                      className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div className="w-full">
                    <label className="font-bold">Nama Pemilik Rekening</label>{" "}
                    <br />
                    <input
                      type="text"
                      name="nama_pemilik_rekening"
                      value={formData?.nama_pemilik_rekening || ""}
                      onChange={handleInputChange}
                      className="w-full text-sm border border-slate-400 focus:outline-none rounded p-2"
                    />
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
              <div className="my-8 divide-y-2">
                <div className="flex justify-between items-center py-3">
                  <div>
                    <label className="font-bold">Nomor Rekening</label> <br />
                    <span className="text-sm">
                      {user?.profile.nomor_rekening}
                    </span>
                  </div>
                  <SquarePen
                    strokeWidth={1.5}
                    onClick={handleEditClick}
                    className="cursor-pointer"
                  />
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <label className="font-bold">Nama Bank</label> <br />
                    <span className="text-sm">{user?.profile.nama_bank}</span>
                  </div>
                  <SquarePen
                    strokeWidth={1.5}
                    onClick={handleEditClick}
                    className="cursor-pointer"
                  />
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <label className="font-bold">Nama Pemilik Rekening</label>{" "}
                    <br />
                    <span className="text-sm">
                      {user?.profile.nama_pemilik_rekening}
                    </span>
                  </div>
                  <SquarePen
                    strokeWidth={1.5}
                    onClick={handleEditClick}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileTabs;

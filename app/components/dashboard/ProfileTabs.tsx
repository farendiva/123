"use client";

import { useUser } from "@/context/UserContext";
import { CircleCheckBig, CircleX, Download, SquarePen } from "lucide-react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import usePreferences from "@/hooks/usePreferences";

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

interface PostalCode {
  postal_code: string;
}

interface Nationality {
  id: number;
  kewarganegaraan: string;
}

interface Education {
  id: number;
  pendidikan: string;
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
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState(0);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Profile> | undefined>(
    user?.profile
  );
  const [originalData, setOriginalData] = useState<
    Partial<Profile> | undefined
  >(user?.profile);
  const token = Cookies.get("authToken");
  const {
    provinces,
    nationalities,
    religions,
    educations,
    profession,
    industries,
    salaries,
    cities,
    districts,
    subdistricts,
    postalCodes,
    fetchCities,
    fetchDistricts,
    fetchSubDistricts,
    fetchPostalCodes,
  } = usePreferences();
  console.log(formData);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDocumentClick = (docUrl: string) => {
    setSelectedDocument(docUrl);
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
  }, [formData?.provinsi_ktp]);

  useEffect(() => {
    if (formData?.kabupaten_ktp) {
      fetchDistricts(formData.kabupaten_ktp);
    }
  }, [formData?.kabupaten_ktp]);

  useEffect(() => {
    if (formData?.kecamatan_ktp) {
      fetchSubDistricts(formData.kecamatan_ktp);
      fetchPostalCodes(formData.kecamatan_ktp);
    }
  }, [formData?.kecamatan_ktp]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData) {
      console.error("Form data is undefined");
      return;
    }

    const changedData = new FormData();

    // Bandingkan data original dengan formData
    (Object.keys(formData) as (keyof Profile)[]).forEach((key) => {
      if (formData[key] !== originalData?.[key]) {
        if (formData[key] instanceof File) {
          changedData.append(key, formData[key] as File);
        } else {
          changedData.append(key, formData[key] as string);
        }
      }
    });

    // Only send the changed data if there are any changes
    if (Array.from(changedData.keys()).length > 0) {
      const response = await fetch(
        `https://oms-api-dev.khalifahdev.biz.id/api/v1/pemodal/${user?.pemodal_id}?_method=PUT`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log(changedData.values);
        setIsEditing(false);
        setOriginalData(formData);
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
      }
    } else {
      console.log("No changes detected");
    }
  };

  return (
    <div className="w-full bg-white mx-auto p-8 border rounded-xl">
      <div className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-8 my-4">
        <img
          className="w-16 h-16 rounded-full"
          src={`https://static.fulusme.id/image/${user?.profile.swa_photo}`}
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
                : "text-[#E09400]"
            } flex items-center justify-center md:justify-start gap-2`}
          >
            {user?.pemodal_status === 3 && <CircleCheckBig />}
            {user?.pemodal_status === 3
              ? "Terverifikasi"
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
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Email</label> <br />
                  <span className="text-sm">{user?.email}</span>
                </div>
                {/* <SquarePen
                  strokeWidth={1.5}
                  onClick={handleEditClick}
                  className="cursor-pointer"
                /> */}
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Nomor Handphone</label> <br />
                  <span className="text-sm">{user?.profile.no_handphone}</span>
                </div>
                {/* <SquarePen
                  strokeWidth={1.5}
                  onClick={handleEditClick}
                  className="cursor-pointer"
                /> */}
              </div>
              {/* <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">Password</label> <br />
                  <span className="text-sm">**********</span>
                </div>
                <SquarePen
                  strokeWidth={1.5}
                  onClick={handleEditClick}
                  className="cursor-pointer"
                />
              </div> */}
              <div className="py-4">
                <button className="w-full text-start font-bold block border p-2 rounded-lg bg-[#ECF0FF]">
                  <Download className="inline mx-2" strokeWidth={2} /> Dokumen
                  Perjanjian
                </button>
              </div>
            </div>
            {/* <div className="py-12 flex justify-end">
              <button className="px-6 py-3 flex items-center gap-2 rounded-xl bg-emerald-light text-white">
                <img src="/icons/save.svg" alt="Save Icon" />
                Simpan
              </button>
            </div> */}
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
                        name="pendapatan"
                        value={formData?.pendapatan || ""}
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
          <div>
            <div className="my-8 divide-y-2">
              <div className="flex justify-between items-center py-3">
                <div>
                  <label className="font-bold">KTP</label> <br />
                  <span
                    className="text-sm cursor-pointer text-blue-600"
                    onClick={() => handleDocumentClick(user?.profile.ktp || "")}
                  >
                    {user?.profile.ktp ? "Lihat Dokumen" : "Belum Upload"}
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
                  <label className="font-bold">NPWP</label> <br />
                  <span
                    className="text-sm cursor-pointer text-blue-600"
                    onClick={() =>
                      handleDocumentClick(user?.profile.npwp || "")
                    }
                  >
                    {user?.profile.npwp ? "Lihat Dokumen" : "Belum Upload"}
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
                  <label className="font-bold">Slip Gaji</label> <br />
                  <span
                    className="text-sm cursor-pointer text-blue-600"
                    onClick={() =>
                      handleDocumentClick(user?.profile.slip_gaji || "")
                    }
                  >
                    {user?.profile.slip_gaji ? "Lihat Dokumen" : "Belum Upload"}
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
                  <label className="font-bold">Kartu Keluarga</label> <br />
                  <span
                    className="text-sm cursor-pointer text-blue-600"
                    onClick={() =>
                      handleDocumentClick(user?.profile.kartu_keluarga || "")
                    }
                  >
                    {user?.profile.kartu_keluarga
                      ? "Lihat Dokumen"
                      : "Belum Upload"}
                  </span>
                </div>
                <SquarePen
                  strokeWidth={1.5}
                  onClick={handleEditClick}
                  className="cursor-pointer"
                />
              </div>
            </div>

            {selectedDocument && (
              <div className="modal">
                <div className="modal-content">
                  <span
                    className="close"
                    onClick={() => setSelectedDocument(null)}
                  >
                    &times;
                  </span>
                  <img
                    src={`https://static.fulusme.id/dokumen/${selectedDocument}`}
                    alt="Document Preview"
                  />
                </div>
              </div>
            )}

            {isEditing && (
              <form onSubmit={handleFormSubmit} className="edit-form">
                <label htmlFor="ktp">KTP:</label>
                <input
                  type="file"
                  accept="image/*"
                  name="ktp"
                  onChange={(e) => handleFileUpload(e, "ktp")}
                />
                <label htmlFor="npwp">NPWP:</label>
                <input
                  type="file"
                  accept="image/*"
                  name="npwp"
                  onChange={(e) => handleFileUpload(e, "npwp")}
                />
                <label htmlFor="slip_gaji">Slip Gaji:</label>
                <input
                  type="file"
                  accept="image/*"
                  name="slip_gaji"
                  onChange={(e) => handleFileUpload(e, "slip_gaji")}
                />
                <label htmlFor="kartu_keluarga">Kartu Keluarga:</label>
                <input
                  type="file"
                  accept="image/*"
                  name="kartu_keluarga"
                  onChange={(e) => handleFileUpload(e, "kartu_keluarga")}
                />
                <button type="submit">Simpan</button>
                <button type="button" onClick={() => setIsEditing(false)}>
                  Batal
                </button>
              </form>
            )}
          </div>
        )}
        {activeTab === 4 && (
          <div>
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

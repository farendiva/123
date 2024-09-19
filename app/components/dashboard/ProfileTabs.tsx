"use client";

import { useUser } from "@/context/UserContext";
import { CircleCheckBig } from "lucide-react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import usePreferences from "@/hooks/usePreferences";
import { getUserData } from "@/lib/auth";
import ProfileInfoTab from "./ProfileInfo";
import AddressTab from "./AddressTab";
import AccountTab from "./AccountTab";
import ProfessionTab from "./ProfessionTab";
import DocumentTab from "./DocumentTab";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

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

const ProfileTabs: React.FC = () => {
  const { user, updateUser } = useUser();
  const [activeTab, setActiveTab] = useState(0);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState<Partial<Profile> | undefined>(
    user?.profile
  );
  const [originalData, setOriginalData] = useState<
    Partial<Profile> | undefined
  >(user?.profile);
  const [isSameAsKTP, setIsSameAsKTP] = useState(false);

  const token = Cookies.get("authToken");
  const {
    provinces,
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

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData(user?.profile || {}); // Reset formData to user profile when entering edit mode
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement> | File,
    field: keyof Profile
  ) => {
    let file: File | undefined;
    if (e instanceof File) {
      file = e;
    } else {
      file = e.target.files?.[0];
    }
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsSameAsKTP(checked);

    if (checked) {
      // Salin data dari KTP ke domisili
      setFormData((prev) => ({
        ...(prev ?? {}),
        alamat_domisili: prev?.alamat_ktp || "",
        provinsi_domisili: prev?.provinsi_ktp || "",
        kabupaten_domisili: prev?.kabupaten_ktp || "",
        kecamatan_domisili: prev?.kecamatan_ktp || "",
        kelurahan_domisili: prev?.kelurahan_ktp || "",
        kodepos_domisili: prev?.kodepos_ktp || "",
        rt_rw_domisili: prev?.rt_rw_ktp || "",
      }));
    } else {
      // Kosongkan data domisili jika checkbox di-uncheck
      setFormData((prev) => ({
        ...(prev ?? {}),
        alamat_domisili: prev?.alamat_domisili || prev?.alamat_ktp || "",
        provinsi_domisili: prev?.provinsi_domisili || prev?.provinsi_ktp || "",
        kabupaten_domisili:
          prev?.kabupaten_domisili || prev?.kabupaten_ktp || "",
        kecamatan_domisili:
          prev?.kecamatan_domisili || prev?.kecamatan_ktp || "",
        kelurahan_domisili:
          prev?.kelurahan_domisili || prev?.kelurahan_ktp || "",
        kodepos_domisili: prev?.kodepos_domisili || prev?.kodepos_ktp || "",
        rt_rw_domisili: prev?.rt_rw_domisili || prev?.rt_rw_ktp || "",
      }));
    }
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

  useEffect(() => {
    if (formData?.provinsi_domisili) {
      fetchCities(formData.provinsi_domisili);
    }
  }, [formData?.provinsi_domisili]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (formData?.kabupaten_domisili) {
      fetchDistricts(formData.kabupaten_domisili);
    }
  }, [formData?.kabupaten_domisili]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (formData?.kecamatan_domisili) {
      fetchSubDistricts(formData.kecamatan_domisili);
      fetchPostalCodes(formData.kecamatan_domisili);
    }
  }, [formData?.kecamatan_domisili]); // eslint-disable-line react-hooks/exhaustive-deps

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
      "telp_kontak_darurat",
      "nama_kontak_darurat",
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
      // Re-fetch the updated user data
      const updatedUserData = await getUserData();
      updateUser(updatedUserData.data);
      toast({
        className: cn(
          "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
        ),
        variant: "success",
        title: "Berhasil Edit Profile",
        description: "Anda Berhasil Edit Profile.",
      });
      setIsEditing(false);
    } else {
      const errorData = await response.json();
      console.error("Error:", errorData);
      toast({
        className: cn(
          "lg:top-0 lg:right-0 lg:flex lg:fixed lg:max-w-[420px] lg:top-4 lg:right-4"
        ),
        variant: "destructive",
        title: "Terjadi Kesalahan dalam Edit Profile",
        description: "Silakan coba lagi.",
      });
    }
  };

  const getProfileImage = (user: any): string => {
    if (user?.profile?.swa_photo) {
      return `${process.env.NEXT_PUBLIC_FILE_PATH}/images/${user?.profile?.swa_photo}`;
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
            {user?.profile?.nama_depan + " " + user?.profile?.nama_belakang}
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
              : "Lengkapi Identitas"}
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
          <ProfileInfoTab
            user={user}
            isEditing={isEditing}
            formData={formData}
            handleEditClick={handleEditClick}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
            handleFormSubmit={handleFormSubmit}
            setIsEditing={setIsEditing}
          />
        )}
        {activeTab === 1 && (
          <AddressTab
            user={user}
            isEditing={isEditing}
            formData={formData}
            handleEditClick={handleEditClick}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
            handleFormSubmit={handleFormSubmit}
            setIsEditing={setIsEditing}
            provinces={provinces}
            cities={cities}
            districts={districts}
            subdistricts={subdistricts}
            postalCodes={postalCodes}
            isSameAsKTP={isSameAsKTP}
            handleCheckboxChange={handleCheckboxChange}
          />
        )}
        {activeTab === 2 && (
          <ProfessionTab
            user={user}
            isEditing={isEditing}
            formData={formData}
            handleEditClick={handleEditClick}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
            handleFormSubmit={handleFormSubmit}
            setIsEditing={setIsEditing}
            industries={industries}
            profession={profession}
            salaries={salaries}
          />
        )}
        {activeTab === 3 && (
          <DocumentTab
            user={user}
            isEditing={isEditing}
            handleEditClick={handleEditClick}
            handleFileUpload={handleFileUpload}
            handleFormSubmit={handleFormSubmit}
            setIsEditing={setIsEditing}
          />
        )}

        {activeTab === 4 && (
          <AccountTab
            user={user}
            isEditing={isEditing}
            formData={formData}
            handleEditClick={handleEditClick}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
            handleFormSubmit={handleFormSubmit}
            setIsEditing={setIsEditing}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileTabs;

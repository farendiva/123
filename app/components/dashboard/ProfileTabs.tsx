"use client";

import { useUser } from "@/context/UserContext";
import { CircleCheckBig } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
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
import { Profile } from "@/lib/types";

const citizenshipOptions = [
  { code: "1", name: "WNI TINGGAL DI INDONESIA" },
  { code: "2", name: "WNI TINGGAL DI LUAR NEGERI" },
  { code: "3", name: "WNA TINGGAL DI INDONESIA" },
];

const religionOptions = [
  { code: "1", name: "Islam" },
  { code: "2", name: "Kristen" },
  { code: "3", name: "Katolik" },
  { code: "4", name: "Hindu" },
  { code: "5", name: "Budha" },
  { code: "6", name: "Konghucu" },
];

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
  const [originalDomisiliValues, setOriginalDomisiliValues] = useState({});
  const token = Cookies.get("authToken");
  const {
    provinces,
    profession,
    educations,
    industries,
    salaries,
    cities,
    districts,
    subdistricts,
    postalCodes,
    domisiliCities,
    domisiliDistricts,
    domisiliSubdistricts,
    domisiliPostalCodes,
    fetchCities,
    fetchDistricts,
    fetchSubDistricts,
    fetchPostalCodes,
    fetchDomisiliCities,
    fetchDomisiliDistricts,
    fetchDomisiliSubDistricts,
    fetchDomisiliPostalCodes,
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
      // Store current domisili values before overwriting
      setOriginalDomisiliValues({
        alamat_domisili: formData?.alamat_domisili || "",
        provinsi_domisili: formData?.provinsi_domisili || "",
        kabupaten_domisili: formData?.kabupaten_domisili || "",
        kecamatan_domisili: formData?.kecamatan_domisili || "",
        kelurahan_domisili: formData?.kelurahan_domisili || "",
        kodepos_domisili: formData?.kodepos_domisili || "",
        rt_rw_domisili: formData?.rt_rw_domisili || "",
      });

      // Copy data from KTP to domisili
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
      // Restore original domisili values
      setFormData((prev) => ({
        ...(prev ?? {}),
        ...originalDomisiliValues,
      }));
    }
  };

  // Use this effect to update originalDomisiliValues when formData changes
  useEffect(() => {
    if (!isSameAsKTP) {
      setOriginalDomisiliValues({
        alamat_domisili: formData?.alamat_domisili || "",
        provinsi_domisili: formData?.provinsi_domisili || "",
        kabupaten_domisili: formData?.kabupaten_domisili || "",
        kecamatan_domisili: formData?.kecamatan_domisili || "",
        kelurahan_domisili: formData?.kelurahan_domisili || "",
        kodepos_domisili: formData?.kodepos_domisili || "",
        rt_rw_domisili: formData?.rt_rw_domisili || "",
      });
    }
  }, [formData, isSameAsKTP]);

  useEffect(() => {
    if (formData?.kewarganegaraan) {
      const selectedCitizenship = citizenshipOptions.find(
        (option) => option.name.toLowerCase() === formData.kewarganegaraan
      );
      if (selectedCitizenship) {
        setFormData((prev) => ({
          ...prev,
          kewarganegaraan: selectedCitizenship.code,
        }));
      }
    }
  }, [formData?.kewarganegaraan, citizenshipOptions]);

  useEffect(() => {
    if (formData?.agama) {
      const selectedReligion = religionOptions.find(
        (religion) => religion.name === formData.agama
      );
      if (selectedReligion) {
        setFormData((prev) => ({
          ...prev,
          agama: selectedReligion.code,
        }));
      }
    }
  }, [formData?.agama, religionOptions]);

  useEffect(() => {
    if (formData?.pendidikan) {
      const selectedEducation = educations.find(
        (education) => education.pendidikan === formData.pendidikan
      );
      if (selectedEducation) {
        setFormData((prev) => ({
          ...prev,
          pendidikan: String(selectedEducation.id),
        }));
      }
    }
  }, [formData?.pendidikan, educations]);

  useEffect(() => {
    if (formData?.pekerjaan) {
      const selectedJob = profession.find(
        (job) => job.pekerjaan === formData.pekerjaan
      );
      if (selectedJob) {
        setFormData((prev) => ({
          ...prev,
          pekerjaan: String(selectedJob.id),
        }));
      }
    }
  }, [formData?.pekerjaan, profession]);

  useEffect(() => {
    if (formData?.pendapatan) {
      const selectedIncome = salaries.find(
        (income) => income.pendapatan === formData.pendapatan
      );
      if (selectedIncome) {
        setFormData((prev) => ({
          ...prev,
          pendapatan: String(selectedIncome.id),
        }));
      }
    }
  }, [formData?.pendapatan, salaries]);

  useEffect(() => {
    if (formData?.industri_pekerjaan) {
      const selectedIndustry = industries.find(
        (industry) =>
          industry.industri_pekerjaan === formData.industri_pekerjaan
      );
      if (selectedIndustry) {
        setFormData((prev) => ({
          ...prev,
          industri_pekerjaan: String(selectedIndustry.id),
        }));
      }
    }
  }, [formData?.industri_pekerjaan, industries]);

  // Convert province name to province_code
  useEffect(() => {
    if (formData?.provinsi_ktp) {
      const selectedProvince = provinces.find(
        (prov) => prov.province === formData.provinsi_ktp
      );
      if (selectedProvince) {
        setFormData((prev) => ({
          ...prev,
          provinsi_ktp: selectedProvince.province_code,
        }));
      }
    }
  }, [formData?.provinsi_ktp, provinces]);

  // Fetch cities when province code is selected
  useEffect(() => {
    if (formData?.provinsi_ktp) {
      fetchCities(formData.provinsi_ktp);
    }
  }, [formData?.provinsi_ktp]); // eslint-disable-line react-hooks/exhaustive-deps

  // Convert city name to city_code
  useEffect(() => {
    if (formData?.kabupaten_ktp) {
      const selectedCity = cities.find(
        (city) => city.city === formData.kabupaten_ktp
      );
      if (selectedCity) {
        setFormData((prev) => ({
          ...prev,
          kabupaten_ktp: selectedCity.city_code,
        }));
      }
    }
  }, [formData?.kabupaten_ktp, cities]);

  // Fetch districts when city code is selected
  useEffect(() => {
    if (formData?.kabupaten_ktp) {
      fetchDistricts(formData.kabupaten_ktp);
    }
  }, [formData?.kabupaten_ktp]); // eslint-disable-line react-hooks/exhaustive-deps

  // Convert district name to district_code
  useEffect(() => {
    if (formData?.kecamatan_ktp) {
      const selectedDistrict = districts.find(
        (district) => district.district === formData.kecamatan_ktp
      );
      if (selectedDistrict) {
        setFormData((prev) => ({
          ...prev,
          kecamatan_ktp: selectedDistrict.district_code,
        }));
      }
    }
  }, [formData?.kecamatan_ktp, districts]);

  useEffect(() => {
    if (formData?.kelurahan_ktp) {
      const selectedSubDistrict = subdistricts.find(
        (subdistrict) => subdistrict.sub_district === formData.kelurahan_ktp
      );
      if (selectedSubDistrict) {
        setFormData((prev) => ({
          ...prev,
          kelurahan_ktp: selectedSubDistrict.sub_district_code,
        }));
      }
    }
  }, [formData?.kelurahan_ktp, subdistricts]);

  useEffect(() => {
    if (formData?.kecamatan_ktp) {
      fetchSubDistricts(formData.kecamatan_ktp);
      fetchPostalCodes(formData.kecamatan_ktp);
    }
  }, [formData?.kecamatan_ktp]); // eslint-disable-line react-hooks/exhaustive-deps

  // Convert province name to province_code for domisili
  useEffect(() => {
    if (formData?.provinsi_domisili) {
      const selectedProvince = provinces.find(
        (prov) => prov.province === formData.provinsi_domisili
      );
      if (selectedProvince) {
        setFormData((prev) => ({
          ...prev,
          provinsi_domisili: selectedProvince.province_code,
        }));
      }
    }
  }, [formData?.provinsi_domisili, provinces]);

  useEffect(() => {
    if (formData?.provinsi_domisili) {
      fetchDomisiliCities(formData?.provinsi_domisili);
    }
  }, [formData?.provinsi_domisili]); // eslint-disable-line react-hooks/exhaustive-deps

  // Convert city name to city_code for domisili
  useEffect(() => {
    if (formData?.kabupaten_domisili) {
      const selectedCity = domisiliCities.find(
        (city) => city.city === formData.kabupaten_domisili
      );
      if (selectedCity) {
        setFormData((prev) => ({
          ...prev,
          kabupaten_domisili: selectedCity.city_code,
        }));
      }
    }
  }, [formData?.kabupaten_domisili, cities]);

  useEffect(() => {
    if (formData?.kabupaten_domisili) {
      fetchDomisiliDistricts(formData?.kabupaten_domisili);
    }
  }, [formData?.kabupaten_domisili]); // eslint-disable-line react-hooks/exhaustive-deps

  // Convert district name to district_code for domisili
  useEffect(() => {
    if (formData?.kecamatan_domisili) {
      const selectedDistrict = domisiliDistricts.find(
        (district) => district.district === formData.kecamatan_domisili
      );
      if (selectedDistrict) {
        setFormData((prev) => ({
          ...prev,
          kecamatan_domisili: selectedDistrict.district_code,
        }));
      }
    }
  }, [formData?.kecamatan_domisili, districts]);

  // Convert sub-district name to sub_district_code for domisili
  useEffect(() => {
    if (formData?.kelurahan_domisili) {
      const selectedSubDistrict = domisiliSubdistricts.find(
        (subdistrict) =>
          subdistrict.sub_district === formData.kelurahan_domisili
      );
      if (selectedSubDistrict) {
        setFormData((prev) => ({
          ...prev,
          kelurahan_domisili: selectedSubDistrict.sub_district_code,
        }));
      }
    }
  }, [formData?.kelurahan_domisili, subdistricts]);

  useEffect(() => {
    if (formData?.kecamatan_domisili) {
      fetchDomisiliSubDistricts(formData?.kecamatan_domisili);
      fetchDomisiliPostalCodes(formData?.kecamatan_domisili);
    }
  }, [formData?.kecamatan_domisili]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData) {
      console.error("Form data is undefined");
      return;
    }

    const changedData = new FormData();

    // Compare original data with formData and add only changed values to FormData
    (Object.keys(formData) as (keyof Profile)[]).forEach((key) => {
      if (formData[key] !== originalData?.[key]) {
        if (formData[key] instanceof File) {
          changedData.append(key, formData[key] as File);
        } else {
          changedData.append(key, formData[key] as string);
        }
      }
    });

    console.log("Changed Data:");
    changedData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
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

  const renderActiveTab = useCallback(() => {
    const commonProps = {
      user,
      isEditing,
      formData,
      handleEditClick,
      handleInputChange,
      handleSelectChange,
      handleFormSubmit,
      setIsEditing,
    };

    switch (activeTab) {
      case 0:
        return <ProfileInfoTab {...commonProps} />;
      case 1:
        return (
          <AddressTab
            {...commonProps}
            provinces={provinces}
            cities={cities}
            districts={districts}
            subdistricts={subdistricts}
            postalCodes={postalCodes}
            domisiliCities={domisiliCities}
            domisiliDistricts={domisiliDistricts}
            domisiliSubdistricts={domisiliSubdistricts}
            domisiliPostalCodes={domisiliPostalCodes}
            isSameAsKTP={isSameAsKTP}
            handleCheckboxChange={handleCheckboxChange}
          />
        );
      case 2:
        return (
          <ProfessionTab
            {...commonProps}
            industries={industries}
            profession={profession}
            salaries={salaries}
          />
        );
      case 3:
        return (
          <DocumentTab {...commonProps} handleFileUpload={handleFileUpload} />
        );
      case 4:
        return <AccountTab {...commonProps} />;
      default:
        return null;
    }
  }, [
    activeTab,
    user,
    isEditing,
    formData,
    handleEditClick,
    handleInputChange,
    handleSelectChange,
    handleFormSubmit,
    provinces,
    isSameAsKTP,
    handleCheckboxChange,
    industries,
    profession,
    salaries,
    handleFileUpload,
  ]);

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
        {renderActiveTab()}

        {/* {activeTab === 0 && (
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
            domisiliCities={domisiliCities}
            domisiliDistricts={domisiliDistricts}
            domisiliSubdistricts={domisiliSubdistricts}
            domisiliPostalCodes={domisiliPostalCodes}
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
        )} */}
      </div>
    </div>
  );
};

export default ProfileTabs;

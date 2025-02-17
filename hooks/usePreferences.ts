import { useApi } from "@/lib/preferences";

import { useState, useEffect } from "react";

const usePreferences = () => {
  const {
    getCities,
    getDistricts,
    getEducations,
    getIndustries,
    getNationalities,
    getPostalCodes,
    getProfession,
    getProvinces,
    getReligions,
    getSalaries,
    getSubDistricts,
  } = useApi();

  const [provinces, setProvinces] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const [religions, setReligions] = useState([]);
  const [educations, setEducations] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [subdistricts, setSubdistricts] = useState([]);
  const [postalCodes, setPostalCodes] = useState([]);
  const [profession, setProfession] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      const data = await getProvinces();
      setProvinces(data);
    };
    const fetchNationalities = async () => {
      const data = await getNationalities();
      setNationalities(data);
    };

    const fetchReligions = async () => {
      const data = await getReligions();
      setReligions(data);
    };

    const fetchEducations = async () => {
      const data = await getEducations();
      setEducations(data);
    };

    const fetchProfession = async () => {
      const data = await getProfession();
      setProfession(data);
    };
    const fetchIndustries = async () => {
      const data = await getIndustries();
      setIndustries(data);
    };
    const fetchSalaries = async () => {
      const data = await getSalaries();
      setSalaries(data);
    };
    fetchProvinces();
    fetchNationalities();
    fetchReligions();
    fetchEducations();
    fetchProfession();
    fetchIndustries();
    fetchSalaries();
  }, []);

  const fetchCities = async (provinceId: string) => {
    const data = await getCities(provinceId);
    setCities(data);
  };

  const fetchDistricts = async (cityId: string) => {
    const data = await getDistricts(cityId);
    setDistricts(data);
  };

  const fetchSubDistricts = async (districtId: string) => {
    const data = await getSubDistricts(districtId);
    setSubdistricts(data);
  };

  const fetchPostalCodes = async (districtId: string) => {
    const data = await getPostalCodes(districtId);
    setPostalCodes(data);
  };

  return {
    provinces,
    nationalities,
    religions,
    educations,
    cities,
    districts,
    subdistricts,
    postalCodes,
    profession,
    industries,
    salaries,
    fetchCities,
    fetchDistricts,
    fetchSubDistricts,
    fetchPostalCodes,
  };
};

export default usePreferences;

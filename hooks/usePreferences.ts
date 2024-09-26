import { useApi } from "@/lib/preferences";

import { useState, useEffect } from "react";
import {
  Province,
  City,
  District,
  Subdistrict,
  PostalCode,
  Profession,
  Industry,
  Salary,
  Nationality,
  Education,
} from "@/lib/types";

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

  const [provinces, setProvinces] = useState<Province[]>([]);
  const [nationalities, setNationalities] = useState<Nationality[]>([]);
  const [religions, setReligions] = useState([]);
  const [educations, setEducations] = useState<Education[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [subdistricts, setSubdistricts] = useState<Subdistrict[]>([]);
  const [postalCodes, setPostalCodes] = useState<PostalCode[]>([]);
  const [domisiliCities, setDomisiliCities] = useState<City[]>([]);
  const [domisiliDistricts, setDomisiliDistricts] = useState<District[]>([]);
  const [domisiliSubdistricts, setDomisiliSubdistricts] = useState<
    Subdistrict[]
  >([]);
  const [domisiliPostalCodes, setDomisiliPostalCodes] = useState<PostalCode[]>(
    []
  );
  const [profession, setProfession] = useState<Profession[]>([]);
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [salaries, setSalaries] = useState<Salary[]>([]);

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

  const fetchDomisiliCities = async (provinceId: string) => {
    const data = await getCities(provinceId);
    setDomisiliCities(data);
  };

  const fetchDistricts = async (cityId: string) => {
    const data = await getDistricts(cityId);
    setDistricts(data);
  };

  const fetchDomisiliDistricts = async (cityId: string) => {
    const data = await getDistricts(cityId);
    setDomisiliDistricts(data);
  };

  const fetchSubDistricts = async (districtId: string) => {
    const data = await getSubDistricts(districtId);
    setSubdistricts(data);
  };

  const fetchDomisiliSubDistricts = async (districtId: string) => {
    const data = await getSubDistricts(districtId);
    setDomisiliSubdistricts(data);
  };

  const fetchPostalCodes = async (districtId: string) => {
    const data = await getPostalCodes(districtId);
    setPostalCodes(data);
  };

  const fetchDomisiliPostalCodes = async (districtId: string) => {
    const data = await getPostalCodes(districtId);
    setDomisiliPostalCodes(data);
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
    domisiliCities,
    domisiliDistricts,
    domisiliSubdistricts,
    domisiliPostalCodes,
    profession,
    industries,
    salaries,
    fetchCities,
    fetchDistricts,
    fetchSubDistricts,
    fetchPostalCodes,
    fetchDomisiliCities,
    fetchDomisiliDistricts,
    fetchDomisiliSubDistricts,
    fetchDomisiliPostalCodes,
  };
};

export default usePreferences;

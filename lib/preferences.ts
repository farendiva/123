import { useAuthToken } from "@/hooks/useAuthToken";

export function useApi() {
  const { token } = useAuthToken();

  const getProvinces = async () => {
    const response = await fetch(
      "https://oms-api-dev.khalifahdev.biz.id/api/v1/provinces",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  };

  const getCities = async (provinceId: string) => {
    const response = await fetch(
      `https://oms-api-dev.khalifahdev.biz.id/api/v1/cities/${provinceId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  };

  const getDistricts = async (cityId: string) => {
    const response = await fetch(
      `https://oms-api-dev.khalifahdev.biz.id/api/v1/districts/${cityId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  };

  const getSubDistricts = async (districtId: string) => {
    const response = await fetch(
      `https://oms-api-dev.khalifahdev.biz.id/api/v1/sub-districts/${districtId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  };

  const getPostalCodes = async (districtId: string) => {
    const response = await fetch(
      `https://oms-api-dev.khalifahdev.biz.id/api/v1/postal-codes/${districtId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  };

  const getNationalities = async () => {
    const response = await fetch(
      "https://oms-api-dev.khalifahdev.biz.id/api/v1/kewarganegaraan",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  };

  const getReligions = async () => {
    const response = await fetch(
      "https://oms-api-dev.khalifahdev.biz.id/api/v1/agama",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  };

  const getEducations = async () => {
    const response = await fetch(
      "https://oms-api-dev.khalifahdev.biz.id/api/v1/pendidikan-terakhir",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  };

  const getProfession = async () => {
    const response = await fetch(
      "https://oms-api-dev.khalifahdev.biz.id/api/v1/pekerjaan",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  };

  const getIndustries = async () => {
    const response = await fetch(
      "https://oms-api-dev.khalifahdev.biz.id/api/v1/industri-pekerjaan",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  };

  const getSalaries = async () => {
    const response = await fetch(
      "https://oms-api-dev.khalifahdev.biz.id/api/v1/pendapatan-per-bulan",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.json();
  };

  return {
    getProvinces,
    getCities,
    getDistricts,
    getSubDistricts,
    getPostalCodes,
    getNationalities,
    getReligions,
    getEducations,
    getProfession,
    getIndustries,
    getSalaries,
  };
}

export async function getBanks(token: string) {
  const response = await fetch(
    "https://oms-api-dev.khalifahdev.biz.id/api/v1/banks",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.json();
}

// import { cookies } from "next/headers";

// const cookieStore = cookies();
// const token = cookieStore.get("authToken")?.value;

export async function getListing() {
  const response = await fetch(
    "https://oms-api-dev.khalifahdev.biz.id/api/proyek?limit=100",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.json();
}

export async function getDetailSaham(id: number) {
  const response = await fetch(
    `https://oms-api-dev.khalifahdev.biz.id/api/proyek/saham/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.json();
}

export async function getDetailSukuk(id: number) {
  const response = await fetch(
    `https://oms-api-dev.khalifahdev.biz.id/api/proyek/sukuk/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.json();
}

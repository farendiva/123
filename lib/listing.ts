export async function getListing() {
  const response = await fetch(
    "https://oms-api-dev.khalifahdev.biz.id/api/proyek?limit=50",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
}

export async function getDetailSaham(id: string) {
  const response = await fetch(
    `https://oms-api-dev.khalifahdev.biz.id/api/proyek/saham/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
}

export async function getDetailSukuk(id: string) {
  const response = await fetch(
    `https://oms-api-dev.khalifahdev.biz.id/api/proyek/sukuk/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
}

export async function getPortfolios(token: string) {
  const response = await fetch(
    `https://oms-api-dev.khalifahdev.biz.id/api/v1/portfolios`,
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

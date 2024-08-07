export async function getListing() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/proyek?limit=50`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  return response.json();
}

export async function getDetailSaham(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/proyek/saham/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  return response.json();
}

export async function getDetailSukuk(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/proyek/sukuk/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  return response.json();
}

export async function getPortfolios(token: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/portfolios`,
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

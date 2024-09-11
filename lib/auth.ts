"use server";

import { cookies } from "next/headers";

export async function signOut() {
  cookies().delete("authToken");
  cookies().delete("user_id");
  cookies().delete("penerbit_id");
  cookies().delete("pemodal_id");
}

export async function getUserData() {
  const cookieStore = cookies();
  const token = cookieStore.get("authToken")?.value;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/me`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.json();
}

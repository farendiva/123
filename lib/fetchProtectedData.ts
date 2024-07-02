import { useAuthToken } from "@/hooks/useAuthToken";

const fetchProtectedData = async (url: string) => {
  const token = useAuthToken();

  if (!token) {
    console.error("No token found");
    return;
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      console.error("Error:", errorData);
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export default fetchProtectedData;

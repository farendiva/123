import { useAuthToken } from "@/hooks/useAuthToken";

const useFetchProtectedData = () => {
  const { token, user_id, penerbit_id } = useAuthToken();

  const fetchProtectedData = async (url: string) => {
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

  const postProtectedData = async (
    url: string,
    body: Record<string, any> | FormData
  ) => {
    if (!token || !user_id || !penerbit_id) {
      console.error("No token or userId found");
      return;
    }

    try {
      let options: RequestInit;

      if (body instanceof FormData) {
        body.append("user_id", user_id);
        body.append("penerbit_id", penerbit_id);
        options = {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: body,
        };
      } else {
        options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...body,
            user_id: user_id,
            penerbit_id: penerbit_id,
          }),
        };
      }

      const response = await fetch(url, options);

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

  return { fetchProtectedData, postProtectedData };
};

export default useFetchProtectedData;

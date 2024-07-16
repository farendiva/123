import Cookies from "js-cookie";

export function useAuthToken() {
  const token = Cookies.get("authToken");
  const user_id = Cookies.get("user_id");
  const penerbit_id = Cookies.get("penerbit_id");

  return { token, user_id, penerbit_id };
}

import Cookies from "js-cookie";

export function useAuthToken() {
  const token = Cookies.get("authToken");
  return token;
}

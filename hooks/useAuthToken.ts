import Cookies from "js-cookie";

export function useAuthToken() {
  const token = Cookies.get("authToken");
  const user_id = Cookies.get("user_id");
  const pemodal_id = Cookies.get("pemodal_id");

  return { token, user_id, pemodal_id };
}

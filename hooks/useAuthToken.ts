import Cookies from "js-cookie";

const useAuthToken = () => {
  const token = Cookies.get("authToken");
  return token;
};

export default useAuthToken;

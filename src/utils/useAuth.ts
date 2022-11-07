import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("chat-app-user");
    if (user) {
      navigate("/");
    }
  }, []);
};
export default useAuth;

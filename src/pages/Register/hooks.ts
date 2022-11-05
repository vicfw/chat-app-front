import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastOptions";

export const useRegister = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("clicked");

    handleValidation();
  };

  const handleValidation = () => {
    const { confirmPassword, email, password, username } = values;
    if (password !== confirmPassword) {
      toast.error("Passwords dosent match!", toastOptions);
    }
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((perv) => ({ ...perv, [e.target.name]: e.target.value }));
    },
    [values]
  );

  return {
    getter: {},
    setter: {},
    method: { handleSubmit, handleChange },
  };
};

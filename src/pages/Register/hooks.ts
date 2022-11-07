import { FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { RegisterService } from "../../utils/services/UserService";
import { toastOptions } from "../../utils/toastOptions";
import useAuth from "../../utils/useAuth";
import { FormikRegisterValues } from "./types";

export const useRegister = () => {
  const navigate = useNavigate();
  const formikInitialValues = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  };

  const SignUpSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "Should be 5 character long")
      .max(50, "should not exceed 50 characters")
      .required("Username is required"),

    email: Yup.string()
      .email("invalid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(5, "Should be 5 character long")
      .max(15, "should not exceed 15 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .min(5, "Should be 5 character long")
      .max(15, "should not exceed 15 characters")
      .required("Password is required"),
  });

  // handle redirect authenticated user
  useAuth();

  const handleSubmit = async (
    values: FormikRegisterValues,
    actions: FormikHelpers<FormikRegisterValues>
  ) => {
    console.log("clicked");

    const service = RegisterService;
    //request to create user
    const result = await service.register({
      username: values.username,
      password: values.password,
      email: values.email,
    });
    //error handling
    if (!result.success) {
      if (result.error.message.includes("email")) {
        actions.setErrors({ email: "email already exist" });
      } else if (result.error.message.includes("username")) {
        actions.setErrors({ email: "username already exist" });
      } else {
        toast.error("Something went wrong", toastOptions);
      }
      return;
    }

    //delete password and save user in localStorage
    delete result.user.password;
    localStorage.setItem("chat-app-user", JSON.stringify(result.user));
    navigate("/");
  };

  return {
    getter: { SignUpSchema, formikInitialValues },
    setter: {},
    method: { handleSubmit },
  };
};

import { FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { UserService } from '../../utils/services/UserService';
import useAuth from '../../utils/useAuth';
import { FormikLoginValues } from './types';

export const useLogin = () => {
  const navigate = useNavigate();
  const formikInitialValues = {
    username: '',
    password: '',
  };

  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, 'Should be 5 character long')
      .max(50, 'should not exceed 50 characters')
      .required('Username is required'),

    password: Yup.string()
      .min(5, 'Should be 5 character long')
      .max(15, 'should not exceed 15 characters')
      .required('Password is required'),
  });

  // handle redirect authenticated user
  useAuth();

  const handleSubmit = async (
    values: FormikLoginValues,
    actions: FormikHelpers<FormikLoginValues>
  ) => {
    const service = UserService;
    //request to login user

    const result = await service.login({
      username: values.username,
      password: values.password,
    });

    //error handling
    if (!result.success) {
      actions.setErrors({ username: result.error.message });
      actions.setErrors({ password: result.error.message });

      return;
    }

    //delete password and save user in localStorage
    delete result.user.password;
    localStorage.setItem(
      import.meta.env.VITE_USER_LOCALSTORAGE_KEY,
      JSON.stringify(result.user)
    );
    navigate('/');
  };

  return {
    getter: { loginSchema, formikInitialValues },
    setter: {},
    method: { handleSubmit },
  };
};

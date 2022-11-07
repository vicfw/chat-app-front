import { FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { RegisterService } from '../../utils/services/UserService';
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

  const handleSubmit = async (
    values: FormikLoginValues,
    actions: FormikHelpers<FormikLoginValues>
  ) => {
    console.log('clicked');

    const service = RegisterService;
    //request to login user

    const result = await service.login({
      username: values.username,
      password: values.password,
    });
    console.log(result, 'result');

    //error handling
    if (!result.success) {
      actions.setErrors({ username: result.error.message });
      actions.setErrors({ password: result.error.message });

      return;
    }

    //delete password and save user in localStorage
    delete result.user.password;
    localStorage.setItem('chat-app-user', JSON.stringify(result.user));
    navigate('/');
  };

  return {
    getter: { loginSchema, formikInitialValues },
    setter: {},
    method: { handleSubmit },
  };
};

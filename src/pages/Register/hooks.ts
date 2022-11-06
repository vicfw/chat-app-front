import * as Yup from 'yup';
import { FormikValues } from './types';
import { FormikHelpers } from 'formik';
import axios from 'axios';
import { RegisterService } from '../../utils/services/UserService';

export const useRegister = () => {
  const formikInitialValues = {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  };

  const SignUpSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, 'Should be 5 character long')
      .max(50, 'should not exceed 50 characters')
      .required('Username is required'),

    email: Yup.string()
      .email('invalid email address')
      .required('Email is required'),

    password: Yup.string()
      .min(5, 'Should be 5 character long')
      .max(15, 'should not exceed 15 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .min(5, 'Should be 5 character long')
      .max(15, 'should not exceed 15 characters')
      .required('Password is required'),
  });

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    // await axios.post('http://localhost:3001/api/auth/register', values);

    const service = RegisterService;
    await service.register(values);
  };

  return {
    getter: { SignUpSchema, formikInitialValues },
    setter: {},
    method: { handleSubmit },
  };
};

import { FormikLoginValues } from '../../pages/Login/types';
import { FormikRegisterValues } from '../../pages/Register/types';

export type RegisterServiceBody = Omit<FormikRegisterValues, 'confirmPassword'>;
export type LoginServiceBody = Omit<
  FormikLoginValues,
  'confirmPassword' & 'email'
>;

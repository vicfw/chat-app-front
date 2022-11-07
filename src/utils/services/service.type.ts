import { FormikValues } from '../../pages/Register/types';

export type RegisterServiceBody = Omit<FormikValues, 'confirmPassword'>;

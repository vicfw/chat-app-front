import { axiosInstance } from '../axiosConfig';
import { LoginServiceBody, RegisterServiceBody } from './service.type';

export class RegisterService {
  static registerUrl = '/auth/register';
  static loginUrl = '/auth/login';

  static async register(body: RegisterServiceBody) {
    try {
      const { data } = await axiosInstance.post(this.registerUrl, body);
      return { success: true, user: data.user };
    } catch (e: any) {
      return { success: false, error: e.response.data };
    }
  }
  static async login(body: LoginServiceBody) {
    try {
      const { data } = await axiosInstance.post(this.loginUrl, body);
      return { success: true, user: data.user };
    } catch (e: any) {
      return { success: false, error: e.response.data };
    }
  }
}

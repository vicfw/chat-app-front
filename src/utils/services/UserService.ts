import { axiosInstance } from '../axiosConfig';
import { LoginServiceBody, RegisterServiceBody } from './service.type';

export class UserService {
  static registerUrl = '/auth/register';
  static loginUrl = '/auth/login';
  static userUrl = '/auth/allusers';

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

  static async getAllUsers(currentUserId: string) {
    try {
      const { data } = await axiosInstance.get(
        `${this.userUrl}/${currentUserId}`
      );

      return { success: true, data: data.data };
    } catch (e: any) {
      return { success: false, error: e.response.data };
    }
  }
}

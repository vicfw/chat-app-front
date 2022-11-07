import axios from 'axios';
import { instance } from '../axiosConfig';
import { RegisterServiceBody } from './service.type';

export class RegisterService {
  static url = '/auth/register';

  static async register(body: RegisterServiceBody) {
    try {
      const { data } = await instance.post(this.url, body);
      return { success: true, user: data.user };
    } catch (e: any) {
      return { success: false, error: e.response.data };
    }
  }
}

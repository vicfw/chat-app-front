import axios from 'axios';
import { instance } from '../axiosConfig';
import { RegisterServiceBody } from './service.type';

export class RegisterService {
  static url = '/auth/register';

  static async register(body: RegisterServiceBody) {
    const response = await instance.post(this.url, body);

    return response;
  }
}

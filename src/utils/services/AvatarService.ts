import axios from 'axios';
import { axiosInstance } from '../axiosConfig';

export class AvatarService {
  static avatarApi = 'https://api.multiavatar.com/';
  static setAvatarRoute = `/auth/setAvatar`;

  static async getMultiAvatar() {
    try {
      const { data: multiAvatarData } = await axios.get(
        `${this.avatarApi}${Math.round(Math.random() * 1000)}?apikey=${
          import.meta.env.VITE_MULTI_AVATAR_APIKEY
        }`
      );

      return { success: true, data: multiAvatarData };
    } catch (error) {
      return { success: false, data: null };
    }
  }

  static async setAvatar(userId: number, image: string) {
    try {
      const { data } = await axiosInstance.post(
        `${this.setAvatarRoute}/${userId}`,
        { image }
      );

      return { success: true, data };
    } catch (e: any) {
      return { success: false, data: e.response.data };
    }
  }
}

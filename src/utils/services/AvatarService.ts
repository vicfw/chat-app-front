import { axiosInstance } from '../axiosConfig';

export class AvatarService {
  static avatarApi = 'https://api.multiavatar.com/';

  static async getMultiAvatar() {
    try {
      const { status, data: multiAvatarData } = await axiosInstance.get(
        `${this.avatarApi}${Math.round(
          Math.random() * 1000
        )}?apikey=IpanDlsmBeJ8kr`
      );

      return { success: true, data: multiAvatarData };
    } catch (error) {
      return { success: false, data: null };
    }
  }
}

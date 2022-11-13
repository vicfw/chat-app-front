import { axiosInstance } from '../axiosConfig';

export class MessageService {
  static sendMessageUrl = '/messages/addmsg';
  static getMessageUrl = '/messages/getmsg';

  static async sendMessageHandler(
    sender: string,
    receiver: string,
    massage: string
  ) {
    try {
      const { data } = await axiosInstance.post(this.sendMessageUrl, {
        from: sender,
        to: receiver,
        message: massage,
      });
      return { success: true, data };
    } catch (e: any) {
      return { success: false, data: e.response.message };
    }
  }

  static async getAllMessagesHandler(from: string, to: string) {
    try {
      const { data } = await axiosInstance.post(this.getMessageUrl, {
        from,
        to,
      });

      return { success: true, data };
    } catch (e: any) {
      return { success: false, data: e.response.message };
    }
  }
}

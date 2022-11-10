import { PartialUser } from '../../utils/globalTypes';

export interface ContactsPropType {
  contacts: PartialUser[];
  changeChat: (chat: any) => void;
}

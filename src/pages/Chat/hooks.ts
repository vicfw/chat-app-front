import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PartialUser } from '../../utils/globalTypes';
import { UserService } from '../../utils/services/UserService';
import useAuth from '../../utils/useAuth';

export const useChat = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<PartialUser[]>([]);
  const [currentChat, setCurrentChat] = useState<string | undefined>('');

  const currentUser = useAuth();

  const getAllUserHandler = useCallback(async () => {
    const service = UserService;

    if (currentUser?._id) {
      const { data } = await service.getAllUsers(currentUser?._id);
      if (currentUser.isAvatarImageSet) {
        setContacts(data);
      } else {
        navigate('/avatar');
      }
    }
  }, [currentUser]);

  const handleChangeChat = (chat: any) => {
    setCurrentChat(chat);
  };

  useEffect(() => {
    getAllUserHandler();
  }, [currentUser]);

  return { getter: { contacts, currentChat }, method: { handleChangeChat } };
};

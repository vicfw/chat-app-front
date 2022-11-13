import { useCallback, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PartialUser } from '../../utils/globalTypes';
import { UserService } from '../../utils/services/UserService';
import useAuth from '../../utils/useAuth';
import { io } from 'socket.io-client';

export const useChat = () => {
  const socket = useRef<any>(null);
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<PartialUser[]>([]);
  const [currentChat, setCurrentChat] = useState<PartialUser>();

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
    if (currentUser) {
      socket.current = io(import.meta.env.BASE_URL);
      socket.current.emit('add-user', currentUser._id);
    }
  }, [currentUser]);

  useEffect(() => {
    getAllUserHandler();
  }, [currentUser]);

  return {
    getter: { contacts, currentChat, socket },
    method: { handleChangeChat },
  };
};

import { useEffect, useState } from 'react';
import { PartialUser } from '../../utils/globalTypes';
import useAuth from '../../utils/useAuth';

export const useContacts = (changeChat: any) => {
  const [currentUserName, setCurrentUserName] = useState<string | undefined>(
    ''
  );
  const [currentUserImage, setCurrentUserImage] = useState<string | undefined>(
    ''
  );
  const [currentSelected, setCurrentSelected] = useState<number | null>();

  const currentUser = useAuth();

  useEffect(() => {
    setCurrentUserName(currentUser?.username);
    setCurrentUserImage(currentUser?.avatarImage);
  }, [changeChat]);

  const changeCurrentChat = (index: number, contact: PartialUser) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return {
    getter: { currentUserImage, currentUserName, currentSelected },
    method: { changeCurrentChat },
  };
};

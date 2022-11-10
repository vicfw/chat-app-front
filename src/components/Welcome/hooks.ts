import { useEffect, useState } from 'react';
import useAuth from '../../utils/useAuth';

export const useWelcome = () => {
  const [userName, setUserName] = useState<string | undefined>('');

  const currentUser = useAuth();

  useEffect(() => {
    setUserName(currentUser?.username);
  }, [currentUser]);

  return { getter: { userName } };
};

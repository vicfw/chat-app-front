import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from './globalTypes';

const useAuth = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('chat-app-user') as string);
    if (user) {
      navigate('/');
      setCurrentUser(user);
    } else {
      navigate('/login');
    }
  }, []);

  return currentUser;
};
export default useAuth;

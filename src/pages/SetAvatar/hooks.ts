import { Buffer } from 'buffer';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AvatarService } from '../../utils/services/AvatarService';
import { toastOptions } from '../../utils/toastOptions';
import useAuth from '../../utils/useAuth';

export const useSetAvatar = () => {
  const navigate = useNavigate();

  const [avatars, setAvatars] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(0);

  useAuth();

  const fetchMultiAvatars = useCallback(async () => {
    const service = AvatarService;

    const data: string[] = [];

    for (let index = 0; index < 4; index++) {
      const { data: avatarImage, success } = await service.getMultiAvatar();

      if (!success) {
        toast.error('Something went wrong', toastOptions);
      }

      const buffer = new Buffer(avatarImage);

      data.push(buffer.toString('base64'));
    }

    setAvatars(data);
    setIsLoading(false);
  }, []);

  const handleSetProfilePicture = async () => {
    if (!selectedAvatar) {
      toast.error('Please pick an avatar!', toastOptions);
    }
    const service = AvatarService;

    const user = JSON.parse(
      localStorage.getItem(import.meta.env.VITE_USER_LOCALSTORAGE_KEY)!
    );

    const { data } = await service.setAvatar(
      user?._id,
      avatars[selectedAvatar]
    );

    if (data.isSet) {
      user.isAvatarImageSet = true;
      user.avatarImage = data.image;
      localStorage.setItem(
        import.meta.env.VITE_USER_LOCALSTORAGE_KEY,
        JSON.stringify(user)
      );
      navigate('/');
    } else {
      toast.error('Error setting avatar,Please try again', toastOptions);
    }
  };

  useEffect(() => {
    fetchMultiAvatars();
  }, []);

  return {
    getter: { avatars, selectedAvatar, isLoading },
    setter: { setSelectedAvatar },
    method: { handleSetProfilePicture },
  };
};

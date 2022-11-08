import { Buffer } from 'buffer';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AvatarService } from '../../utils/services/AvatarService';
import { toastOptions } from '../../utils/toastOptions';

export const useSetAvatar = () => {
  const [avatars, setAvatars] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState('');

  const fetchMultiAvatars = useCallback(async () => {
    const service = AvatarService;

    const data: string[] = [''];

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

  console.log(avatars);

  useEffect(() => {
    fetchMultiAvatars();
  }, []);

  return {
    getter: { avatars, selectedAvatar },
    setter: {},
    method: {},
  };
};

import { Buffer } from "buffer";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AvatarService } from "../../utils/services/AvatarService";
import { toastOptions } from "../../utils/toastOptions";

export const useSetAvatar = () => {
  const [avatars, setAvatars] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const [ProfilePicture, setProfilePicture] = useState("");

  const fetchMultiAvatars = useCallback(async () => {
    const service = AvatarService;

    const data: string[] = [];

    for (let index = 0; index < 4; index++) {
      const { data: avatarImage, success } = await service.getMultiAvatar();

      if (!success) {
        toast.error("Something went wrong", toastOptions);
      }

      const buffer = new Buffer(avatarImage);

      data.push(buffer.toString("base64"));
    }

    setAvatars(data);
    setIsLoading(false);
  }, []);

  const handleSetProfilePicture = () => {
    if (!selectedAvatar) {
      toast.error("Please pick an avatar!", toastOptions);
    }
  };

  useEffect(() => {
    fetchMultiAvatars();
  }, []);

  return {
    getter: { avatars, selectedAvatar, isLoading },
    setter: { setSelectedAvatar, setProfilePicture },
    method: { handleSetProfilePicture },
  };
};

import { EmojiClickData } from 'emoji-picker-react';
import { useState } from 'react';

export const useChatInput = (handleSendMsg: (chat: any) => void) => {
  const [msg, setMsg] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emojiObject: EmojiClickData, event: MouseEvent) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
    setShowEmojiPicker(false);
  };

  const sendChat = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg('');
    }
  };

  return {
    getter: { showEmojiPicker, msg },
    setter: { setMsg },
    method: { handleEmojiPickerHideShow, handleEmojiClick, sendChat },
  };
};

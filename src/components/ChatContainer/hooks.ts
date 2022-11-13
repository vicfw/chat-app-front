import { useCallback, useEffect, useRef, useState } from 'react';
import { Message, PartialUser } from '../../utils/globalTypes';
import { MessageService } from '../../utils/services/MessageService';
import useAuth from '../../utils/useAuth';

export const useChatContainer = (currentChat: PartialUser, socket: any) => {
  const currentUser = useAuth();
  const [messages, setMessages] = useState<Message[] | []>([]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [arrivalMessage, setArrivalMessage] = useState<{
    fromSelf: boolean;
    message: string;
  } | null>(null);

  const getAllMessagesHandler = useCallback(async () => {
    const service = MessageService;

    const { data } = await service.getAllMessagesHandler(
      currentUser?._id as string,
      currentChat._id
    );

    setMessages(data);
  }, [currentChat, currentUser]);

  useEffect(() => {
    if (currentChat._id && currentUser?._id) {
      getAllMessagesHandler();
    }
  }, [currentChat, currentUser]);

  const handleSendMsg = async (msg: any) => {
    const service = MessageService;

    await service.sendMessageHandler(currentUser?._id!, currentChat._id, msg);

    socket.current.emit('send-msg', {
      to: currentChat._id,
      from: currentUser?._id,
      msg,
    });

    setMessages((perv) => [...perv, { fromSelf: true, message: msg }]);
  };
  useEffect(() => {
    if (socket.current) {
      socket.current.on('msg-recieve', (msg: string) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return {
    getter: { messages, scrollRef },
    method: { handleSendMsg },
  };
};

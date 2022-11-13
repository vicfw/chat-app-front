import ChatInput from '../ChatInput/ChatInput';
import Logout from '../Logout/Logout';
import { useChatContainer } from './hooks';
import * as Style from './styles';
import * as Type from './types';
import { v4 as uuidv4 } from 'uuid';

const ChatContainer: React.FC<Type.ChatContainerPropTypes> = ({
  currentChat,
  socket,
}) => {
  const { getter, method } = useChatContainer(currentChat, socket);

  return (
    <Style.Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            <img
              src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
              alt=""
            />
          </div>
          <div className="username">
            <h3>{currentChat.username}</h3>
          </div>
        </div>
        <Logout />
      </div>
      <div className="chat-messages">
        {getter.messages?.map((message) => {
          return (
            <div ref={getter.scrollRef} key={uuidv4()}>
              <div
                className={`message ${
                  message.fromSelf ? 'sended' : 'recieved'
                }`}
              >
                <div className="content ">
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput handleSendMsg={method.handleSendMsg} />
    </Style.Container>
  );
};

export default ChatContainer;

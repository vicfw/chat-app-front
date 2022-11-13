import ChatContainer from '../../components/ChatContainer/ChatContainer';
import Contacts from '../../components/Contacts/Contacts';
import Welcome from '../../components/Welcome/Welcome';
import { useChat } from './hooks';
import * as Style from './styles';

const Chat = () => {
  const { getter, method } = useChat();

  return (
    <Style.Container>
      <div className="container">
        <Contacts
          contacts={getter.contacts}
          changeChat={method.handleChangeChat}
        />
        {!getter.currentChat ? (
          <Welcome />
        ) : (
          <ChatContainer
            currentChat={getter.currentChat}
            socket={getter.socket}
          />
        )}
      </div>
    </Style.Container>
  );
};

export default Chat;

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
          <div>sucka</div>
          // <ChatContainer currentChat={currentChat} socket={socket} />
        )}
      </div>
    </Style.Container>
  );
};

export default Chat;

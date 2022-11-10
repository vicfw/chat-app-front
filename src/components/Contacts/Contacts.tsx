import * as Style from './styles';
import * as Type from './types';
import Logo from '../../assets/logo.svg';
import { useContacts } from './hooks';

const Contacts: React.FC<Type.ContactsPropType> = ({
  contacts,
  changeChat,
}) => {
  const { getter, method } = useContacts(changeChat);

  console.log(contacts, 'contacts');

  return (
    <>
      {getter.currentUserImage && getter.currentUserImage && (
        <Style.Container>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h3>Chat App</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === getter.currentSelected ? 'selected' : ''
                  }`}
                  onClick={() => method.changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt=""
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${getter.currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{getter.currentUserName}</h2>
            </div>
          </div>
        </Style.Container>
      )}
    </>
  );
};

export default Contacts;

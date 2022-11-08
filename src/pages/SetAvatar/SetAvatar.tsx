import { ToastContainer } from 'react-toastify';
import loader from '../../assets/loader.gif';
import * as Style from './styles';
import * as Hook from './hooks';

const SetAvatar = () => {
  const { getter } = Hook.useSetAvatar();

  return (
    <>
      <Style.Container>
        <div className="title-container">
          <h1>Pick a avatar as your profile picture</h1>
        </div>
        <div className="avatars">
          {getter.avatars.map((avatar, index) => {
            return (
              <div
                className={`avatar ${
                  +getter.selectedAvatar === index ? 'selected' : ''
                }`}
              >
                <img
                  src={`data:image/svg+xml;base64,${avatar}`}
                  alt={'avatar' + index}
                />
              </div>
            );
          })}
        </div>
      </Style.Container>
      <ToastContainer />
    </>
  );
};

export default SetAvatar;

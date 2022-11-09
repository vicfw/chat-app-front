import { ToastContainer } from "react-toastify";
import loader from "../../assets/loader.gif";
import * as Style from "./styles";
import * as Hook from "./hooks";
import Button from "../../components/Button/Button";

const SetAvatar = () => {
  const { getter, setter, method } = Hook.useSetAvatar();

  if (getter.isLoading) {
    return (
      <Style.Container>
        <img src={loader} alt="loader" className="loader" />
      </Style.Container>
    );
  }

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
                  getter.selectedAvatar === index ? "selected" : ""
                }`}
                key={avatar}
              >
                <img
                  src={`data:image/svg+xml;base64,${avatar}`}
                  alt={"avatar" + index}
                  onClick={() => setter.setSelectedAvatar(index)}
                />
              </div>
            );
          })}
        </div>
        <Button onClick={method.handleSetProfilePicture}>
          Set as Profile Picture
        </Button>
      </Style.Container>
      <ToastContainer />
    </>
  );
};

export default SetAvatar;

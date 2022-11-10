import Robot from '../../assets/robot.gif';
import { useWelcome } from './hooks';
import * as Style from './styles';

export default function Welcome() {
  const { getter } = useWelcome();

  return (
    <Style.Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{getter.userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Style.Container>
  );
}

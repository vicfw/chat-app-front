import { BiPowerOff } from 'react-icons/bi';
import { useLogout } from './hooks';
import * as Style from './styles';

export default function Logout() {
  const { method } = useLogout();

  return (
    <Style.Button onClick={method.handleClick}>
      <BiPowerOff />
    </Style.Button>
  );
}

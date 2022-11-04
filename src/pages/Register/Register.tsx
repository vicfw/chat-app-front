import { useRegister } from './hooks';
import { FormContainer } from './styles';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';

const Register = () => {
  const { method } = useRegister();

  return (
    <FormContainer>
      <form onSubmit={(e) => method.handleSubmit(e)}>
        <div className="brand">
          <img src={Logo} alt="" />
          <h1>Chat app</h1>
        </div>
        <input
          type="text"
          name="username"
          onChange={method.handleChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          onChange={method.handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          onChange={method.handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmPassword"
          onChange={method.handleChange}
          placeholder="Confirm Password"
        />
        <button type="submit">Create User</button>
        <span>
          Already have an account ? <Link to={'/login'}>Login</Link>
        </span>
      </form>
    </FormContainer>
  );
};

export default Register;

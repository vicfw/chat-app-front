import { Link } from 'react-router-dom';
import { useLogin } from './hooks';
import { FormContainer } from './styles';
import { Formik } from 'formik';
import { ToastContainer } from 'react-toastify';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button/Button';

const Login = () => {
  const { getter, method } = useLogin();

  return (
    <>
      <FormContainer>
        <Formik
          initialValues={getter.formikInitialValues}
          onSubmit={method.handleSubmit}
          validationSchema={getter.loginSchema}
        >
          {({
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            handleChange,
            values,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="brand">
                  <img src={Logo} alt="logo" />
                  <h1>Chat app</h1>
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  value={values.username}
                />
                {errors.username && touched.username ? (
                  <em>{errors.username}</em>
                ) : null}

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password && touched.password ? (
                  <em>{errors.password}</em>
                ) : null}

                <Button type="submit" disabled={isSubmitting}>
                  Login
                </Button>
                <span>
                  Don't have an account? ?{' '}
                  <Link to={'/register'}>Register</Link>
                </span>
              </form>
            );
          }}
        </Formik>
      </FormContainer>
      <ToastContainer />
    </>
  );
};

export default Login;

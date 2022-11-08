import { Link } from 'react-router-dom';
import * as Hook from './hooks';
import * as Style from './styles';
import { Formik } from 'formik';
import { ToastContainer } from 'react-toastify';
import Logo from '../../assets/logo.svg';
import { FormikRegisterValues } from './types';

const Register = () => {
  const { getter, method } = Hook.useRegister();
  return (
    <>
      <Style.FormContainer>
        <Formik
          initialValues={getter.formikInitialValues}
          onSubmit={method.handleSubmit}
          validate={(values) => {
            let errors: FormikRegisterValues = {} as any;

            if (values.password !== values.confirmPassword) {
              errors.password = 'Passwords dosent match.';
              errors.confirmPassword = 'Passwords dosent match.';
            }
            return errors;
          }}
          validationSchema={getter.SignUpSchema}
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
                  <img src={Logo} alt="" />
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
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && touched.email ? <em>{errors.email}</em> : null}
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
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={values.confirmPassword}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <em>{errors.confirmPassword}</em>
                ) : null}
                <button type="submit" disabled={isSubmitting}>
                  Create User
                </button>
                <span>
                  Already have an account ? <Link to={'/login'}>Login</Link>
                </span>
              </form>
            );
          }}
        </Formik>
      </Style.FormContainer>
      <ToastContainer />
    </>
  );
};

export default Register;

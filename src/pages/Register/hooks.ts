import { useCallback, useState } from 'react';

export const useRegister = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleValidation = () => {
    const { confirmPassword, email, password, username } = values;
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((perv) => ({ ...perv, [e.target.name]: e.target.value }));
    },
    [values]
  );

  return {
    getter: {},
    setter: {},
    method: { handleSubmit, handleChange },
  };
};

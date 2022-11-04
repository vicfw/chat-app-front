export const useRegister = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('form');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return {
    getter: {},
    setter: {},
    method: { handleSubmit, handleChange },
  };
};

import { useState } from "react";

export const useForm = (initalState = {}) => {
  const [values, setValues] = useState(initalState);

  const reset = (newFormState = initalState) => {
    setValues(newFormState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};

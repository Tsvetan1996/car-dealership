import { useEffect, useState } from "react";

export default function useForm(submitHandler, initialValues) {
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    setValues(initialValues);
  }, []);

  const onChange = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    try {
      if (values.password !== values.confirmPassword) {
        throw new Error("Passwords missmatch");
      }

      submitHandler(values);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    values,
    onChange,
    onSubmit,
  };
}

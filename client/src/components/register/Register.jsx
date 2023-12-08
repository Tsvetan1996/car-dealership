import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";

import styles from "./Register.module.css";

const RegisterFormKeys = {
  email: "email",
  password: "password",
  confirmPassword: "confirmPassword",
};

export default function Register() {
  const { registerSubmitHandler, error, setError, clearError } =
    useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.email]: "",
    [RegisterFormKeys.password]: "",
    [RegisterFormKeys.confirmPassword]: "",
  });

  const passwordMatch =
    values[RegisterFormKeys.password] ===
    values[RegisterFormKeys.confirmPassword];

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    if (!passwordMatch) {
      clearError();
      setError("Passwords do not match");

      setTimeout(() => {
        clearError();
      }, 3000);

      return;
    }
    await onSubmit(e);
  };

  useEffect(() => {
    // Clear the error message when the component unmounts or when a new error is set
    return () => {
      setTimeout(() => {
        clearError();
      }, 3000);
    };
  }, [clearError]);

  return (
    <div className={styles.registerContainer}>
      <h2>Register</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name={RegisterFormKeys.email}
          value={values[RegisterFormKeys.email]}
          onChange={onChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name={RegisterFormKeys.password}
          value={values[RegisterFormKeys.password]}
          onChange={onChange}
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name={RegisterFormKeys.confirmPassword}
          value={values[RegisterFormKeys.confirmPassword]}
          onChange={onChange}
        />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

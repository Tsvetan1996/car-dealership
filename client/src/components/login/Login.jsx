import { useContext, useEffect } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";

const loginFormKeys = {
  email: "email",
  password: "password",
};

export default function Login() {
  const { loginSubmitHandler, error, clearError } = useContext(AuthContext);

  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [loginFormKeys.email]: "",
    [loginFormKeys.password]: "",
  });

  useEffect(() => {
    // Clear the error message when the component unmounts or when a new error is set
    return () => {
      setTimeout(() => {
        clearError();
      }, 3000);
    };
  }, [clearError]);

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name={loginFormKeys.email}
          value={values[loginFormKeys.email]}
          onChange={onChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name={loginFormKeys.password}
          value={values[loginFormKeys.password]}
          onChange={onChange}
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

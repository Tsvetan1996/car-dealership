import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";

const loginFormKeys = {
  email: "email",
  password: "password",
};

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [loginFormKeys.email]: "",
    [loginFormKeys.password]: "",
  });

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
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

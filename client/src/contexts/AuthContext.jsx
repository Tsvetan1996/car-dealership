import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});
  const [error, setError] = useState(null);

  const loginSubmitHandler = async (values) => {
    try {
      const result = await authService.login(values.email, values.password);

      setAuth(result);
      localStorage.setItem("accessToken", result.accessToken);

      navigate("/");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  const registerSubmitHandler = async (values) => {
    try {
      const result = await authService.register(values.email, values.password);

      setAuth(result);
      localStorage.setItem("accessToken", result.accessToken);

      navigate("/");
    } catch (error) {
      if (error.message) {
        setError(error.message);
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
  };

  const clearError = () => {
    setError(null);
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    clearError,
    setError,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.email,
    error,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;

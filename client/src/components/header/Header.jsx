import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { useContext } from "react";

import styles from "./Header.module.css";

export default function Header() {
  const { isAuthenticated, username } = useContext(AuthContext);

  return (
    <header className={styles.appHeader}>
      <h1>My React App</h1>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cars">All cars</Link>
          </li>
          {isAuthenticated && (
            <>
              <li>
                <Link to="/cars/sell">Sell car</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          )}

          {!isAuthenticated && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

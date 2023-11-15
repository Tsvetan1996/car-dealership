import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.appHeader}>
      <h1>My React App</h1>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="#login">Login</Link>
          </li>
          <li>
            <Link to="#register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

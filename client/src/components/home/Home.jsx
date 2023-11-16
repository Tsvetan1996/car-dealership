import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.overlay}>
        <h1>Welcome to My React App</h1>
      </div>
    </div>
  );
}

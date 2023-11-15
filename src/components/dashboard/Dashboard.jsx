import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.productCard}>
        <img
          className={styles.productImage}
          src="../../public/rs7.png"
          alt="Product"
        />
        <div className={styles.productInfo}>
          <h3>Audi</h3>
          <p>RS7</p>
          <button className={styles.detailsButton}>Details</button>
        </div>
      </div>

      <div className={styles.productCard}>
        <img
          className={styles.productImage}
          src="../../public/rs7.png"
          alt="Product"
        />
        <div className={styles.productInfo}>
          <h3>Audi</h3>
          <p>RS7</p>
          <button className={styles.detailsButton}>Details</button>
        </div>
      </div>
    </div>
  );
}

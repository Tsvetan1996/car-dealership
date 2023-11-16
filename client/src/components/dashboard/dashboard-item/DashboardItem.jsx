import styles from "./DashboardItem.module.css";

export default function DashboardItem({ imageUrl, brand, model, year, price }) {
  return (
    <div className={styles.productCard}>
      <img className={styles.productImage} src={imageUrl} alt="Car" />
      <div className={styles.productInfo}>
        <h3>{brand}</h3>
        <p>{model}</p>
        <p>Year: {year}</p>
        <p>Year: {price}$</p>
        <button className={styles.detailsButton}>Details</button>
      </div>
    </div>
  );
}

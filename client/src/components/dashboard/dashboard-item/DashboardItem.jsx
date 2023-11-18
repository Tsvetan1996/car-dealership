import { Link } from "react-router-dom";
import styles from "./DashboardItem.module.css";

export default function DashboardItem({
  _id,
  imageUrl,
  brand,
  model,
  year,
  price,
}) {
  return (
    <div className={styles.productCard}>
      <img className={styles.productImage} src={imageUrl} alt="Car" />
      <div className={styles.productInfo}>
        <h3>{brand}</h3>
        <p>{model}</p>
        <p>Year: {year}</p>
        <p>Price: {price}$</p>
        <Link to={`/details/${_id}`} className={styles.detailsButton}>
          Details
        </Link>
      </div>
    </div>
  );
}

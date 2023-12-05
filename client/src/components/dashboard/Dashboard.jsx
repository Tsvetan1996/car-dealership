import { useEffect, useState } from "react";
import * as carService from "../../services/carService";
import DashboardItem from "./dashboard-item/DashboardItem";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    carService
      .getAll()
      .then((result) => setCars(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <h1>All cars</h1>
      {cars.map((car) => (
        <DashboardItem key={car._id} {...car} />
      ))}

      {cars.length === 0 && <h2>No cars to show!</h2>}
    </div>
  );
}

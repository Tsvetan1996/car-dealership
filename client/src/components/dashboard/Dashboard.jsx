import styles from "./Dashboard.module.css";
import { useEffect, useState } from "react";
import * as carService from "../../services/carService";
import DashboardItem from "./dashboard-item/DashboardItem";

export default function Dashboard() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    carService.getAll().then((result) => setCars(result));
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      {cars.map((car) => (
        <DashboardItem key={car._id} {...car} />
      ))}
    </div>
  );
}

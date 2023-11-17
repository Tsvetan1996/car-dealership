import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as carService from "../../services/carService";
import styles from "./CarDetails.module.css";

export default function CarDetails() {
  const [car, setCar] = useState({});
  const { carId } = useParams();

  useEffect(() => {
    carService.getSingleCar(carId).then(setCar);
  }, [carId]);

  return (
    <div className={styles.carDetailsContainer}>
      <h2>Car Details</h2>
      <div className={styles.detailsContent}>
        <img src={car.imageUrl} alt="Car" />
        <p>
          <strong>Brand:</strong> {car.brand}
        </p>
        <p>
          <strong>Model:</strong> {car.model}
        </p>
        <p>
          <strong>Year:</strong> {car.year}
        </p>
        <p>
          <strong>Price:</strong> {car.price}
        </p>
      </div>
    </div>
  );
}

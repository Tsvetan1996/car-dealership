import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as carService from "../../services/carService";
import AuthContext from "../../contexts/AuthContext";
import { pathToUrl } from "../../utils/pathUtil";

import styles from "./CarDetails.module.css";

export default function CarDetails() {
  const [car, setCar] = useState({});
  const { carId } = useParams();

  const { userId } = useContext(AuthContext);

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
        <p>
          <strong>Description:</strong> {car.description}
        </p>
        <Link to={"/cars"} className={styles.actionButton}>
          Back
        </Link>
        {userId === car._ownerId && (
          <>
            <Link
              to={pathToUrl("/cars/:carId/edit", { carId })}
              className={styles.actionButton}
            >
              Edit
            </Link>
            <Link to="/cars/:carId/delete" className={styles.actionButton}>
              Delete
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

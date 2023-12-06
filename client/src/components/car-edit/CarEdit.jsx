import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as carService from "../../services/carService";

import styles from "./CarEdit.module.css";

export default function CarEdit() {
  const navigate = useNavigate();
  const { carId } = useParams();

  const [car, setCar] = useState({
    imageUrl: "",
    brand: "",
    model: "",
    year: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    carService
      .getSingleCar(carId)
      .then((carData) => {
        setCar(carData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [carId]);

  const editCarSubmitHandler = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await carService.edit(carId, values);

      navigate("/cars");
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setCar((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={styles.carDetailsContainer}>
      <h2>Car Details</h2>
      <form onSubmit={editCarSubmitHandler}>
        <div className={styles.detailsContent}>
          <label>
            <strong>Image URL:</strong>
            <input
              type="text"
              name="imageUrl"
              value={car.imageUrl}
              onChange={onChange}
            />
          </label>

          <label>
            <strong>Brand:</strong>
            <input
              type="text"
              name="brand"
              value={car.brand}
              onChange={onChange}
            />
          </label>

          <label>
            <strong>Model:</strong>
            <input
              type="text"
              name="model"
              value={car.model}
              onChange={onChange}
            />
          </label>

          <label>
            <strong>Year:</strong>
            <input
              type="text"
              name="year"
              value={car.year}
              onChange={onChange}
            />
          </label>

          <label>
            <strong>Price:</strong>
            <input
              type="text"
              name="price"
              value={car.price}
              onChange={onChange}
            />
          </label>

          <label>
            <strong>Description:</strong>
            <textarea
              name="description"
              value={car.description}
              onChange={onChange}
            />
          </label>

          <Link to={"/cars"} className={styles.actionButton}>
            Back
          </Link>

          <button type="submit" className={styles.actionButton}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

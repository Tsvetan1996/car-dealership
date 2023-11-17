import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as carService from "../../services/carService";
import styles from "./SellCar.module.css";

const SellCar = () => {
  const navigate = useNavigate();

  const initialFormData = {
    imageUrl: "",
    brand: "",
    model: "",
    year: "",
    price: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const carData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await carService.sell(carData);
      setFormData(initialFormData); // not sure if i need to reset when i redirect
      navigate("/cars");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.sellCarContainer}>
      <h2>Sell Your Car</h2>
      <form className={styles.sellCarForm} onSubmit={handleSubmit}>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />

        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />

        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={formData.model}
          onChange={handleChange}
        />

        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SellCar;

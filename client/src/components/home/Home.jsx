import React, { useState, useEffect } from "react";
import Search from "../search/Search";
import * as carService from "../../services/carService";
import DashboardItem from "../dashboard/dashboard-item/DashboardItem";

import styles from "./Home.module.css";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    // Fetch all cars from the server when the component mounts
    fetchAllCars();
  }, []);

  const fetchAllCars = async () => {
    try {
      const allCars = await carService.getAll();
      setCars(allCars);
    } catch (error) {
      console.error("Error fetching cars:", error.message);
    }
  };

  const handleSearch = async ({ brand, model }) => {
    try {
      let result = cars;

      if (brand) {
        result = result.filter((car) =>
          car.brand.toLowerCase().includes(brand.toLowerCase())
        );
      }

      if (model) {
        result = result.filter((car) =>
          car.model.toLowerCase().includes(model.toLowerCase())
        );
      }

      setFilteredCars(result);

      setSearchPerformed(true);
    } catch (error) {
      console.error("Error fetching cars:", error.message);
    }
  };

  // Function to get the last three added cars
  const lastAddedCars = () => {
    const sortedCars = [...cars].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    return sortedCars.slice(0, 3);
  };

  return (
    <div className={styles.homeContainer}>
      {/* Search Section */}
      <div className={styles.searchSection}>
        <div className={styles.overlay}>
          <h1>Search a car by brand or model</h1>
          <Search onSearch={handleSearch} />

          {searchPerformed && filteredCars.length > 0 ? (
            <div className={styles.carList}>
              {filteredCars.map((car) => (
                <DashboardItem key={car._id} {...car} />
              ))}
            </div>
          ) : (
            searchPerformed && (
              <p>No cars found. Try a different search term.</p>
            )
          )}
        </div>
      </div>

      {/* Last Three Added Cars Section */}
      <div className={styles.lastThreeAddedCars}>
        <div className={styles.overlay}>
          <h2>Last Three Added Cars</h2>
          <div className={styles.carList}>
            {lastAddedCars().map((car) => (
              <DashboardItem key={car._id} {...car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

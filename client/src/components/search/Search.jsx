import React, { useState } from "react";
import styles from "./Search.module.css";

export default function Search({ onSearch }) {
  const [brandQuery, setBrandQuery] = useState("");
  const [modelQuery, setModelQuery] = useState("");

  const handleSearch = () => {
    // Pass both search queries to the parent component
    onSearch({ brand: brandQuery, model: modelQuery });
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchField}>
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          placeholder="Search for car brand..."
          value={brandQuery}
          onChange={(e) => setBrandQuery(e.target.value)}
        />

        <button onClick={handleSearch} className={styles.button}>
          Search
        </button>
      </div>

      <div className={styles.searchField}>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          placeholder="Search for car model..."
          value={modelQuery}
          onChange={(e) => setModelQuery(e.target.value)}
        />

        <button onClick={handleSearch} className={styles.button}>
          Search
        </button>
      </div>
    </div>
  );
}

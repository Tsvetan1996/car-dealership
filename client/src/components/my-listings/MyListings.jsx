import React, { useState, useEffect, useContext } from "react";
import * as carService from "../../services/carService";
import DashboardItem from "../dashboard/dashboard-item/DashboardItem";
import AuthContext from "../../contexts/AuthContext";

import styles from "./MyListings.module.css";

export default function MyListings() {
  const [userListings, setUserListings] = useState([]);
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    fetchUserListings();
  }, []);

  const fetchUserListings = async () => {
    try {
      const listings = await carService.getUserListings(userId);

      setUserListings(listings);
    } catch (error) {
      console.error("Error fetching user listings:", error.message);
    }
  };

  return (
    <div className={styles.myListingsContainer}>
      <h1>My listings</h1>
      <div>
        {userListings.map((car) => (
          <DashboardItem key={car._id} {...car} />
        ))}
        {userListings.length === 0 && <h3>No cars yet!</h3>}
      </div>
    </div>
  );
}

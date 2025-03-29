import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"; // Assume you have CSS for styling

const PriceEstimator = () => {
  const [area, setArea] = useState("");
  const [bhk, setBhk] = useState(1);
  const [bath, setBath] = useState(1);
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(null);
  const [locations, setLocations] = useState([]); // Fetch from backend

  useEffect(() => {
    // Fetch locations from Flask backend when the component loads
    fetch("http://127.0.0.1:5000/get_location_names")
      .then(response => response.json())
      .then(data => setLocations(data.locations))
      .catch(error => console.error("Error fetching locations:", error));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleEstimate = async () => {
    if (!area || !location) {
      alert("Please enter all fields.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/predict_home_price", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          total_sqft: parseFloat(area),
          location,
          bhk,
          bath,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setPrice(data.estimated_price + " Lakh");
      } else {
        console.error("Error predicting price:", data.error);
        alert("Error fetching price. Try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div className={styles.main_container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <h1>Real Estate Price Prediction System</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>

      {/* Price Estimator Form */}
      <div className={styles.container}>
        <h2>Area (Square Feet)</h2>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="Enter area"
        />

        <h2>BHK</h2>
        <div className={styles.buttonGroup}>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={bhk === num ? styles.selected : ""}
              onClick={() => setBhk(num)}
            >
              {num}
            </button>
          ))}
        </div>

        <h2>Bath</h2>
        <div className={styles.buttonGroup}>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={bath === num ? styles.selected : ""}
              onClick={() => setBath(num)}
            >
              {num}
            </button>
          ))}
        </div>

        <h2>Location</h2>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Select Location</option>
          {locations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <button className={styles.estimateBtn} onClick={handleEstimate}>
          Estimate Price
        </button>

        {price && <div className={styles.result}>Estimated Price: {price}</div>}
      </div>
    </div>
  );
};

export default PriceEstimator;

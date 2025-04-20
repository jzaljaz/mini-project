import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const PriceEstimator = () => {
  const [area, setArea] = useState("");
  const [bhk, setBhk] = useState(1);
  const [bath, setBath] = useState(1);
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(null);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get_location_names")
      .then((response) => response.json())
      .then((data) => setLocations(data.locations))
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  const handleEstimate = async () => {
    if (!area || !location) {
      alert("Please enter all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/predict_home_price", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ total_sqft: parseFloat(area), location, bhk, bath }),
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
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing session storage, authentication state)
    navigate("/login");
  };

  return (
    <div>
      {/* Video Background */}
      <video autoPlay muted loop className="position-fixed w-100 h-100 object-fit-cover z-n1">
        <source src="https://cdn.pixabay.com/video/2022/09/30/133077-755975090_large.mp4" type="video/mp4" />
      </video>

      {/* Navbar */}
      <header className="bg-dark bg-opacity-50 text-white">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="navbar-brand d-flex align-items-center">
              <img src="https://www.creativefabrica.com/wp-content/uploads/2021/12/28/Real-estate-logo-House-logo-Home-logo-Graphics-22469979-1.jpg"
                alt="Logo" className="rounded-circle" style={{ height: "80px", width: "80px" }} />
              <h1 className="fw-bold text-warning ms-3">900 acres</h1>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-warning ms-2" onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Estimator Form */}
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="p-5 bg-dark bg-opacity-50 text-white rounded-3" style={{ maxWidth: "400px" }}>
          <h2 className="text-center">Estimate Price</h2>
          <input type="number" placeholder="Area (sq ft)" value={area} onChange={(e) => setArea(e.target.value)} required className="form-control my-2" />
          <h5>BHK</h5>
          <div className="d-flex justify-content-between">
            {[1, 2, 3, 4, 5].map((num) => (
              <button key={num} className={`btn ${bhk === num ? "btn-warning" : "btn-outline-light"}`} onClick={() => setBhk(num)}>{num}</button>
            ))}
          </div>
          <h5>Bathrooms</h5>
          <div className="d-flex justify-content-between">
            {[1, 2, 3, 4, 5].map((num) => (
              <button key={num} className={`btn ${bath === num ? "btn-warning" : "btn-outline-light"}`} onClick={() => setBath(num)}>{num}</button>
            ))}
          </div>
          <h5>Location</h5>
          <select value={location} onChange={(e) => setLocation(e.target.value)} required className="form-select my-2">
            <option value="">Select Location</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>
          <button className="btn btn-warning w-100 mt-3" onClick={handleEstimate} disabled={loading}>{loading ? "Estimating..." : "Estimate Price"}</button>
          {price && <div className="alert alert-success mt-3">Estimated Price: {price}</div>}
        </div>
      </div>
    </div>
  );
};

export default PriceEstimator;

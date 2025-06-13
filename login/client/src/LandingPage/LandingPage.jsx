import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Important for navbar toggle on mobile

const LandingPage = () => {
  return (
    <div>
      {/* Video Background */}
      <video autoPlay muted loop className="position-fixed w-100 h-100 object-fit-cover z-n1">
        <source src="https://cdn.pixabay.com/video/2022/09/30/133077-755975090_large.mp4" type="video/mp4" />
      </video>

      {/* Header */}
      <header className="bg-dark bg-opacity-50 text-white">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid px-3 px-md-5">
            {/* Logo and Title */}
            <div className="navbar-brand d-flex align-items-center">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2021/12/28/Real-estate-logo-House-logo-Home-logo-Graphics-22469979-1.jpg"
                alt="Logo"
                className="rounded-circle img-fluid"
                style={{ height: "60px", width: "60px" }}
              />
              <h1 className="fw-bold text-warning ms-2 fs-4">900 acres</h1>
            </div>

            {/* Toggler Button for Mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation Links */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav text-end">
                <li className="nav-item">
                  <a className="nav-link text-white" href="/login">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Quote Section */}
      <div className="position-absolute top-50 start-50 translate-middle text-white text-center px-3 w-100" style={{ maxWidth: "90%" }}>
        <h2 className="fw-light fs-6">Know the price before you buy.</h2>
        <h1 className="fw-bold display-6 text-warning">Predict. Invest. Succeed.</h1>
      </div>
    </div>
  );
};

export default LandingPage;

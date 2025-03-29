import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <div className="container">
            {/* Logo and Title */}
            <div className="navbar-brand d-flex align-items-center">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2021/12/28/Real-estate-logo-House-logo-Home-logo-Graphics-22469979-1.jpg"
                alt="Logo"
                className="rounded-circle"
                style={{ height: "80px", width: "80px" }}
              />
              <h1 className="fw-bold text-warning ms-3">900 acres</h1>
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
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Quote Section */}
      <div className="position-absolute top-50 start-0 translate-middle-y text-white ps-5" style={{ maxWidth: "500px" }}>
        <h2 className="fw-light">Know the price before you buy.</h2>
        <h1 className="fw-bold display-4 text-warning">Predict. Invest. Succeed.</h1>
      </div>
    </div>
  );
};

export default LandingPage;

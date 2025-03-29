import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactPage = () => {
  return (
    <div>
      {/* Video Background */}
      <video autoPlay muted loop className="position-fixed w-100 h-100 object-fit-cover z-n1">
        <source src="https://cdn.pixabay.com/video/2022/09/30/133077-755975090_large.mp4" type="video/mp4" />
      </video>

      {/* Header and Navbar */}
      <header className="bg-dark bg-opacity-50 text-white">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="navbar-brand d-flex align-items-center">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2021/12/28/Real-estate-logo-House-logo-Home-logo-Graphics-22469979-1.jpg"
                alt="Logo"
                className="rounded-circle"
                style={{ height: "80px", width: "80px" }}
              />
              <h1 className="ms-3">900 acres</h1>
            </div>

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

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/login">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/signup">Signup</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Contact Section */}
      <section className="container py-5 text-white bg-dark bg-opacity-75 rounded mt-5">
        <div className="row">
          <div className="col-md-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.3724180597765!2d76.40626477484899!3d10.231517589886044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08068aa17bd247%3A0xf048b9ebcbd2af28!2sFederal%20Institute%20of%20Science%20And%20Technology%20(FISAT)%C2%AE!5e0!3m2!1sen!2sin!4v1734452590464!5m2!1sen!2sin"
              className="w-100 h-100 border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-md-6">
            <h2 className="display-5 fw-bold mb-4">Get in Touch</h2>
            <p className="fs-5 mb-4">We're always ready to work with you. Reach us in any of the following ways:</p>

            <div className="d-flex mb-3">
              <div className="text-primary me-3 fs-3">
                <i className="bi bi-geo"></i>
              </div>
              <div>
                <h5>Address</h5>
                <p>FISAT, Hormis Nagar, Mookannor, Angamaly</p>
              </div>
            </div>

            <div className="d-flex mb-3">
              <div className="text-primary me-3 fs-3">
                <i className="bi bi-telephone"></i>
              </div>
              <div>
                <h5>Phone</h5>
                <p><a href="tel:805020406295" className="text-white text-decoration-none">805020406295</a></p>
              </div>
            </div>

            <div className="d-flex mb-3">
              <div className="text-primary me-3 fs-3">
                <i className="bi bi-envelope"></i>
              </div>
              <div>
                <h5>Email</h5>
                <p><a href="mailto:9000acres@gmail.com" className="text-white text-decoration-none">9000acres@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
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
                  <Link className="nav-link text-white" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Signup Form */}
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="p-5 bg-dark bg-opacity-50 text-white rounded-3" style={{ maxWidth: "400px" }}>
          <h2 className="text-center">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} value={data.firstName} required className="form-control my-2" />
            <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={data.lastName} required className="form-control my-2" />
            <input type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} required className="form-control my-2" />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required className="form-control my-2" />
            {error && <div className="alert alert-danger mt-2">{error}</div>}
            <button type="submit" className="btn btn-warning w-100 mt-3">Sign Up</button>
          </form>
          <p className="text-center mt-3">Already have an account? <Link to="/login" className="text-warning">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

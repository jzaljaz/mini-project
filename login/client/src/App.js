import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "../src/LandingPage/LandingPage"; // Import LandingPage
import Main from "../src/components/Main/index";
import Signup from "../src/components/Singup/index";
import Login from "../src/components/Login";
import ContactPage from "../src/components/ContactPage/Contactpage";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
<Route path="/" exact element={<LandingPage />} /> 
 
			
			{user && <Route path="/main" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" exact element={<LandingPage />} /> 
			<Route path="/contact" exact element={<ContactPage />} />
			<Route path="/main" element={user ? <Main /> : <Navigate replace to="/login" />} /> 
		</Routes>
	);
}

export default App;

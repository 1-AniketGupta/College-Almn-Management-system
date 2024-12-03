import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import AluminiLogin from "./pages/AluminiLogin";
import AdminRegister from "./pages/AdminRegister";
import AluminiRegister from "./pages/AluminiRegister";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/adminlogin" element={<AdminLogin />} />
					<Route path="/aluminilogin" element={<AluminiLogin />} />
					<Route path="/adminregister" element={<AdminRegister />} />
					<Route
						path="/aluminiregister"
						element={<AluminiRegister />}
					/>
					<Route path="/about" element={<About />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/events" element={<Events />} />
					<Route path="/alumni" element={<Alumni />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/register" element={<Register />} />
				</Routes>
				<Footer />
				<ToastContainer
					position="bottom-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
			</div>
		</Router>
	);
};

export default App;

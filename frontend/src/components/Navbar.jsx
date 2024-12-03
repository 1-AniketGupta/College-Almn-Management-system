import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	const { user, logout } = useContext(AuthContext);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Render navigation links based on the user's role
	const renderNavLinks = () => {
		if (!user) {
			return (
				<>
					<li>
						<Link
							to="/"
							className="block lg:inline hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/aluminilogin"
							className="block lg:inline hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Alumni Login
						</Link>
					</li>
					<li>
						<Link
							to="/adminlogin"
							className="block lg:inline hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Admin Login
						</Link>
					</li>
				</>
			);
		} else if (user.role === "alumini") {
			// Alumni logged in
			return (
				<>
					<li>
						<Link
							to="/"
							className="block lg:inline hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className="block lg:inline hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							About Us
						</Link>
					</li>
					<li>
						<Link
							to="/gallery"
							className="block lg:inline hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Gallery
						</Link>
					</li>
					<li>
						<Link
							to="/events"
							className="block lg:inline hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Events
						</Link>
					</li>
					<li>
						<Link
							to="/alumni-assist"
							className="block lg:inline hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Alumni Assist
						</Link>
					</li>
					<li>
						<Link
							to="/profile"
							className="block lg:inline hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Profile
						</Link>
					</li>
				</>
			);
		} else if (user.role === "admin") {
			// Admin logged in
			return (
				<>
					<li>
						<Link
							to="/"
							className="block lg:inline hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/queries"
							className="block lg:inline hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Queries
						</Link>
					</li>
					<li>
						<Link
							to="/achievements"
							className="block lg:inline hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Achievements
						</Link>
					</li>
					<li>
						<Link
							to="/posted-jobs"
							className="block lg:inline hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Posted Jobs
						</Link>
					</li>
					<li>
						<Link
							to="/mentor-requests"
							className="block lg:inline hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Mentor Requests
						</Link>
					</li>
					<li>
						<Link
							to="/update-events"
							className="block lg:inline hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Update Events
						</Link>
					</li>
					<li>
						<Link
							to="/profile"
							className="block lg:inline hover:bg-gray-700 hover:text-blue-400 py-2 px-3 rounded-lg"
						>
							Profile
						</Link>
					</li>
				</>
			);
		}
	};

	return (
		<nav className="bg-gray-800 bg-opacity-80 backdrop-blur-md text-white fixed w-full top-0 z-10 px-4 py-3">
			<div className="container mx-auto flex justify-between items-center">
				{/* Logo Section */}
				<Link to="/">
					<div className="flex items-center space-x-2">
						<img src="img/ti.png" alt="Logo" className="h-12" />
						<img
							src="img/tmslogo.png"
							alt="Logo"
							className="h-12 hidden md:block"
						/>
					</div>
				</Link>
				<Link to="/">
					<h1 className="text-2xl font-bold">AlumniConnect</h1>
				</Link>
				{/* Hamburger Icon */}
				<button
					className="block lg:hidden text-white focus:outline-none"
					onClick={toggleMenu}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d={
								isOpen
									? "M6 18L18 6M6 6l12 12"
									: "M4 6h16M4 12h16M4 18h16"
							}
						></path>
					</svg>
				</button>

				{/* Navigation Links */}
				<ul
					ref={menuRef}
					className={`lg:flex lg:space-x-4 lg:items-center lg:justify-end lg:static lg:bg-transparent ${
						isOpen
							? "block absolute bg-gray-800 w-fit rounded-lg top-16 right-4 px-2 py-2"
							: "hidden"
					}`}
				>
					{renderNavLinks()}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

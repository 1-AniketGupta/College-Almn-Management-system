import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const { register } = useContext(AuthContext);

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			await register(name, email, password);
			console.log("Registration successful");
			navigate("/login");
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div
			className="h-screen flex items-center justify-center bg-gray-100"
			style={{
				backgroundImage: "url('/img/tmsl.jpg')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="bg-white bg-opacity-90 shadow-md rounded-lg p-8 w-full max-w-md">
				<h1 className="text-2xl font-bold mb-4 text-center">
					Register
				</h1>
				<form onSubmit={handleRegister}>
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block text-gray-700 font-semibold mb-2"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Enter your name"
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-gray-700 font-semibold mb-2"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email"
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
							required
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="password"
							className="block text-gray-700 font-semibold mb-2"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Create a password"
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
					>
						Register
					</button>
				</form>
				<p className="text-gray-600 text-sm mt-4 text-center">
					Already have an account?{" "}
					<a href="/login" className="text-blue-600 hover:underline">
						Login
					</a>
				</p>
			</div>
		</div>
	);
};

export default Register;

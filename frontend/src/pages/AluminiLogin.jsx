import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AluminiLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const { login } = useContext(AuthContext);

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await login(email, password, "alumini");
			toast.success("Login successful");
			navigate("/profile");
		} catch (err) {
			toast.error(err.message);
		}
	};

	return (
		<div
			className="h-screen flex items-center justify-center"
			style={{
				backgroundImage: "url('/img/tmsl.jpg')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="bg-white bg-opacity-90 shadow-md rounded-xl p-4 md:p-8 w-2/3 md:w-full max-w-md">
				<h1 className="text-2xl font-bold mb-4 text-center">
					Alumini Login
				</h1>
				<form onSubmit={handleLogin}>
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
							placeholder="Enter your password"
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
					>
						Login
					</button>
				</form>
				<p className="text-gray-600 text-sm mt-4 text-center">
					Don't have an account?{" "}
					<a
						href="/aluminiregister"
						className="text-blue-600 hover:underline"
					>
						Sign Up
					</a>
				</p>
			</div>
		</div>
	);
};

export default AluminiLogin;

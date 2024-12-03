import React, { createContext, useState, useEffect } from "react";
import api from "../utils/api";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const login = async (email, password, role) => {
		try {
			const { data } = await api.post("/auth/login", {
				email,
				password,
				role,
			});
			localStorage.setItem("authToken", data.token);
			const decodedToken = JSON.parse(atob(data.token.split(".")[1]));
			await fetchUser(decodedToken.id);
		} catch (error) {
			throw new Error(error.response?.data?.message || "Login failed");
		}
	};

	const register = async (name, email, password, role) => {
		console.log("Registering user...");
		console.log(name, email, password, role);
		try {
			const { data } = await api.post("/auth/register", {
				name,
				email,
				password,
				role,
			});
			localStorage.setItem("authToken", data.token);
			const decodedToken = JSON.parse(atob(data.token.split(".")[1]));
			await fetchUser(decodedToken.id);
		} catch (error) {
			throw new Error(
				error.response?.data?.message || "Registration failed"
			);
		}
	};

	const fetchUser = async (userId) => {
		try {
			const token = localStorage.getItem("authToken");
			if (token) {
				api.defaults.headers.common[
					"Authorization"
				] = `Bearer ${token}`;
				const { data } = await api.get(`/users/${userId}`);
				setUser(data);
			}
		} catch (error) {
			console.error("Error fetching user:", error);
			localStorage.removeItem("authToken");
		}
		setLoading(false);
	};

	const logout = () => {
		localStorage.removeItem("authToken");
		toast.success("Logout successful");
		setUser(null);
	};

	useEffect(() => {
		const token = localStorage.getItem("authToken");
		if (token) {
			const decodedToken = JSON.parse(atob(token.split(".")[1]));
			fetchUser(decodedToken.id);
		} else {
			setLoading(false);
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{ user, login, register, logout, loading }}
		>
			{!loading && children}
		</AuthContext.Provider>
	);
};

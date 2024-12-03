import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
	const { user, logout } = useContext(AuthContext);

	const navigate = useNavigate();

	if (!user) {
		navigate("/");
	}

	return (
		<div className="h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white shadow-md rounded-lg p-4 text-center">
				<div className="flex items-center gap-2">
					<img
						src={user.picture || "img/profile.png"}
						alt="Profile"
						className="rounded-full w-24 h-24 mx-auto"
					/>
					<div className="flex flex-col items-center">
						<h1 className="text-xl font-bold">{user.name}</h1>
						<p className="text-gray-700">{user.email}</p>
					</div>
				</div>

				<button
					onClick={logout}
					className="mt-2 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Profile;

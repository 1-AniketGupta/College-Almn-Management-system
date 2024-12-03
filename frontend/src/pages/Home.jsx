import React from "react";

const Home = () => {
  return (
    <section
      className="bg-gray-100 bg-cover bg-center py-16 text-center h-screen mt-16"
      style={{
        backgroundImage: "url('/img/tmsl.jpg')",
      }}
      
    >
      <div className="container mx-auto bg-white bg-opacity-80 rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to AlumniConnect
        </h2>
        <p className="text-gray-700 text-lg">
          Connect, network, and grow with your alumni community.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Home;

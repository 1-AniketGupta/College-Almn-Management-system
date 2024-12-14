import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-9xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Alumni Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Achievements Card */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-4">Achievements</h2>
          <p className="text-gray-600 mb-6">Update your latest feats.</p>
          <button
            onClick={() => navigate('/achievements-form')}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Go to Achievements
          </button>
        </div>

        {/* Job Updates Card */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-4">Job Updates</h2>
          <p className="text-gray-600 mb-6">Flex your newest job offers.</p>
          <button
            onClick={() => navigate('/job-updates')}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
          >
            Go to Job Updates
          </button>
        </div>

        {/* Queries Card */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-4">Queries</h2>
          <p className="text-gray-600 mb-6">
            Have some Queries? Ask us.
          </p>
          <button
            onClick={() => navigate('/queries')}
            className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition"
          >
            Go to Queries
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState } from 'react';

const Query = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });
  const [queries, setQueries] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.query) {
      setQueries([...queries, formData]);
      setFormData({ name: '', email: '', query: '' });
    } else {
      alert('Please fill out all fields before submitting.');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Alumni Query Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="query" className="block text-sm font-medium text-gray-700">Your Query</label>
          <textarea
            id="query"
            name="query"
            value={formData.query}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Submit Query
        </button>
      </form>

      <h2 className="text-2xl font-semibold mt-8">Submitted Queries</h2>
      {queries.length > 0 ? (
        <ul className="mt-4 space-y-4">
          {queries.map((query, index) => (
            <li
              key={index}
              className="p-4 border border-gray-200 rounded-lg shadow-sm"
            >
              <strong className="text-blue-600">{query.name}</strong> 
              <span className="text-gray-500"> ({query.email})</span> wrote:
              <p className="mt-2 text-gray-700">{query.query}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-gray-500">No queries submitted yet.</p>
      )}
    </div>
  );
};

export default Query;

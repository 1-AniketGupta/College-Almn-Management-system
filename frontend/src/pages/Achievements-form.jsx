import React, { useState } from 'react';

const RecentAchievement = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    passoutYear: '',
    achievement: '',
  });

  const [submissions, setSubmissions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, passoutYear, achievement } = formData;
    if (name && email && passoutYear && achievement) {
      setSubmissions([...submissions, formData]);
      setFormData({ name: '', email: '', passoutYear: '', achievement: '' }); // Clear form fields
    } else {
      alert('Please fill out all fields before submitting.');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Share Your Recent Achievement</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div>
          <label htmlFor="passoutYear" className="block text-sm font-medium text-gray-700">
            Passout Year
          </label>
          <input
            type="number"
            id="passoutYear"
            name="passoutYear"
            value={formData.passoutYear}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your passout year"
            required
          />
        </div>
        <div>
          <label htmlFor="achievement" className="block text-sm font-medium text-gray-700">
            Most Recent Achievement
          </label>
          <textarea
            id="achievement"
            name="achievement"
            value={formData.achievement}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows="4"
            placeholder="Describe your recent achievement"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Submit Achievement
        </button>
      </form>

      <h2 className="text-2xl font-semibold mt-8">Submitted Achievements</h2>
      {submissions.length > 0 ? (
        <ul className="mt-4 space-y-4">
          {submissions.map((submission, index) => (
            <li
              key={index}
              className="p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50"
            >
              <strong className="text-blue-600">{submission.name}</strong> 
              (<span className="text-gray-500">{submission.email}</span>) 
              - Class of {submission.passoutYear}
              <p className="mt-2 text-gray-700">{submission.achievement}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-gray-500">No achievements shared yet.</p>
      )}
    </div>
  );
};

export default RecentAchievement;

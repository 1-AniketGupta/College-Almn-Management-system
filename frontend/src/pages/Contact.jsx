import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16 mt-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-gray-300 rounded-md p-2"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded-md p-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border-gray-300 rounded-md p-2"
              placeholder="Enter your message"
              rows="4"
            ></textarea>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-400"
          >
            Send Message
          </button>
        </form>
        {/* Adding link here outside the form */}
        <Link to="/" className="text-blue-500 mt-4 block text-center">Go to Homepage</Link>
      </div>
    </div>
  );
};

export default ContactPage;

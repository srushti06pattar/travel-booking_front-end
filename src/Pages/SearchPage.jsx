import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const navigate = useNavigate();
  const [results] = useState([
    { id: 1, from: 'New York', to: 'Los Angeles', date: '2024-12-15', price: '$200' },
    { id: 2, from: 'Chicago', to: 'Miami', date: '2024-12-20', price: '$150' },
    { id: 3, from: 'San Francisco', to: 'Seattle', date: '2024-12-18', price: '$100' },
    { id: 4, from: 'Dallas', to: 'Atlanta', date: '2024-12-25', price: '$120' },
    { id: 5, from: 'Denver', to: 'Phoenix', date: '2024-12-30', price: '$180' },
    { id: 6, from: 'Boston', to: 'Orlando', date: '2025-01-05', price: '$250' },
  ]);

  const handleBook = (trip) => {
    navigate("/booking-confirmation", { state: { booking: trip } });
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-purple-800 mb-6 animate-bounce">
        Explore Your Next Adventure!
      </h2>
      <ul className="space-y-6">
        {results.map((result) => (
          <li
            key={result.id}
            className="p-6 border rounded-lg shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <p className="text-lg font-semibold text-blue-600">
              <strong>From:</strong> {result.from}
            </p>
            <p className="text-lg font-semibold text-blue-600">
              <strong>To:</strong> {result.to}
            </p>
            <p className="text-md text-gray-700">
              <strong>Date:</strong> {result.date}
            </p>
            <p className="text-md text-gray-700">
              <strong>Price:</strong> {result.price}
            </p>
            <button
              onClick={() => handleBook(result)}
              className="mt-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg hover:brightness-110 focus:ring-2 focus:ring-blue-300"
            >
              Book Now
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;

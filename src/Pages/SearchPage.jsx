import React, { useState } from 'react';

const SearchPage = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show an alert with the form values
    alert(`Searching for a trip to ${destination} on ${date} for ${travelers} travelers.`);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Search Your Trip</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Destination"
            className="w-full p-3 border rounded"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <input
            type="date"
            className="w-full p-3 border rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="number"
            placeholder="Number of Travelers"
            className="w-full p-3 border rounded"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-400"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchPage;

import React, { useState } from 'react';
import backgroundImage from '../Assets/nature.jpg' // Adjust the path as needed

const SearchPage = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [results, setResults] = useState([]);

  // Dummy travel data
  const dummyData = [
    { id: 1, from: 'New York', to: 'Los Angeles', date: '2024-12-15', price: '$200' },
    { id: 2, from: 'Chicago', to: 'Miami', date: '2024-12-20', price: '$150' },
    { id: 3, from: 'San Francisco', to: 'Seattle', date: '2024-12-18', price: '$120' },
    { id: 4, from: 'New York', to: 'Miami', date: '2024-12-25', price: '$180' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredResults = dummyData.filter(
      (trip) =>
        trip.from.toLowerCase().includes(from.toLowerCase()) &&
        trip.to.toLowerCase().includes(to.toLowerCase()) &&
        trip.date === date
    );
    setResults(filteredResults);
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Search Your Trip</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="From (Departure City)"
            className="w-full p-3 border rounded"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <input
            type="text"
            placeholder="To (Destination City)"
            className="w-full p-3 border rounded"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <input
            type="date"
            className="w-full p-3 border rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-400"
          >
            Search
          </button>
        </form>

        {/* Results Section */}
        <div className="mt-6">
          {results.length > 0 ? (
            <ul className="space-y-4">
              {results.map((result) => (
                <li key={result.id} className="p-4 border rounded shadow-sm bg-gray-50">
                  <p><strong>From:</strong> {result.from}</p>
                  <p><strong>To:</strong> {result.to}</p>
                  <p><strong>Date:</strong> {result.date}</p>
                  <p><strong>Price:</strong> {result.price}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 mt-4 text-center">No trips found. Please try different criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

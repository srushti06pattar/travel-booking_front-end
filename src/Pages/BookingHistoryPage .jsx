import React from 'react';

const HistoryPage = () => {
  const bookingHistory = JSON.parse(localStorage.getItem("bookingHistory")) || [];

  const handleCancel = (index) => {
    const updatedHistory = [...bookingHistory];
    updatedHistory.splice(index, 1);
    localStorage.setItem("bookingHistory", JSON.stringify(updatedHistory));
    window.location.reload(); // Refresh the page to show updated history
  };

  return (
    <div className="p-8 bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">Booking History</h2>
      {bookingHistory.length > 0 ? (
        <ul className="space-y-6">
          {bookingHistory.map((booking, index) => (
            <li
              key={index}
              className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <p className="text-lg font-semibold text-blue-600">
                <strong>From:</strong> {booking.from}
              </p>
              <p className="text-lg font-semibold text-blue-600">
                <strong>To:</strong> {booking.to}
              </p>
              <p className="text-md text-gray-700">
                <strong>Date:</strong> {booking.date}
              </p>
              <p className="text-md text-gray-700">
                <strong>Price:</strong> {booking.price}
              </p>
              <button
                onClick={() => handleCancel(index)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400 focus:ring-2 focus:ring-red-300"
              >
                Cancel Booking
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600 text-lg">No booking history available.</p>
      )}
    </div>
  );
};

export default HistoryPage;

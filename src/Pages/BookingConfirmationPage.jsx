import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;

  const [paymentStatus, setPaymentStatus] = useState(null); // Track payment status

  // Simulate fake wallet payment
  const handlePayment = () => {
    setPaymentStatus("Processing...");
    setTimeout(() => {
      setPaymentStatus("Payment Successful!");

      // Save booking to localStorage
      const bookingHistory = JSON.parse(localStorage.getItem("bookingHistory")) || [];
      bookingHistory.push(booking);
      localStorage.setItem("bookingHistory", JSON.stringify(bookingHistory));

      // Redirect to history page after 2 seconds
      setTimeout(() => {
        navigate("/booking-history");
      }, 2000);
    }, 2000); // Simulate a 2-second delay for payment processing
  };

  return (
    <div className="p-8 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Booking Confirmation</h2>
      {booking ? (
        <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105">
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

          {paymentStatus ? (
            <div className="mt-4 p-4 border rounded bg-green-100 text-green-800">
              {paymentStatus}
            </div>
          ) : (
            <button
              onClick={handlePayment}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 focus:ring-2 focus:ring-blue-300"
            >
              Pay with Fake Wallet
            </button>
          )}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">No booking details available.</p>
      )}
    </div>
  );
};

export default ConfirmationPage;

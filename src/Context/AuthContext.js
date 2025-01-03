// src/context/AuthContext.js

import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create a context for authentication
const AuthContext = createContext();

// Custom hook to use authentication context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user profile
  const [bookingHistory, setBookingHistory] = useState([]); // Store booking history
  const navigate = useNavigate();

  // Login function
  const login = (email, password) => {
    const mockUser = { email, name: 'John Doe' }; // Simulating a successful login
    setUser(mockUser);
    navigate('/profilePage');
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setBookingHistory([]);
    navigate('/');
  };

  // Add booking to history
  const addBookingToHistory = (trip) => {
    setBookingHistory((prevHistory) => [...prevHistory, trip]);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, bookingHistory, addBookingToHistory }}>
      {children}
    </AuthContext.Provider>
  );
};

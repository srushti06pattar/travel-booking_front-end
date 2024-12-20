import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-300 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Travel Booking</h1>
        <div className="flex space-x-4">
          <Link to="/homePage" className="hover:text-gray-300">Home</Link>
          <Link to="/search" className="hover:text-gray-300">Search</Link>
          <Link to="/contactpage" className="hover:text-gray-300">Contact</Link>
          <Link to="/profilePage" className="hover:text-gray-300">Profile</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

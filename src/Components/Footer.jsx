
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4 ">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Travel Booking. All rights reserved.</p>
          <p className="mt-2">
            Follow us on{" "}
            <a href="hi" className="text-blue-400 hover:underline">
              Instagram
            </a>
            <Link to={'/'}>Homepage</Link>
          </p>
        </div>
      </footer>
    );
  };

  export default Footer;
  
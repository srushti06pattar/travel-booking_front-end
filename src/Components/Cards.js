// src/components/Card.js

import React from 'react';

const Card = ({ title, image, description, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-xl">{price}</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Book Now</button>
      </div>
    </div>
  );
};

export default Card;

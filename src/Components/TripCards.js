// src/components/TripCards.js

import React from 'react';
import Card from './Card';

const TripCards = () => {
  const trips = [
    {
      title: 'Paris Adventure',
      image: 'https://example.com/paris.jpg',
      description: 'Explore the beauty of Paris with our special package.',
      price: '$999',
    },
    {
      title: 'Beach Escape',
      image: 'https://example.com/beach.jpg',
      description: 'Relax and unwind on a serene beach getaway.',
      price: '$799',
    },
    {
      title: 'Mountain Trek',
      image: 'https://example.com/mountain.jpg',
      description: 'Conquer the mountains with this adventurous trip.',
      price: '$1299',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {trips.map((trip, index) => (
        <Card
          key={index}
          title={trip.title}
          image={trip.image}
          description={trip.description}
          price={trip.price}
        />
      ))}
    </div>
  );
};

export default TripCards;

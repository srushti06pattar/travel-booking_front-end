import React, { useState } from "react";
import { Link } from "react-scroll";
import parisImage from "../Assets/paris.jpg";
import switzerlandImage from "../Assets/switzerland.jpg";
import newYorkImage from "../Assets/Newyork.jpg";
import adventureImage from "../Assets/adventure.jpg";
import beachImage from "../Assets/beach.jpg";
import cityImage from "../Assets/city.jpg";
import { motion } from "framer-motion";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const destinations = [
    {
      img: parisImage,
      title: "Paris",
      description:
        "The City of Lights is known for its romantic ambiance, iconic landmarks, and world-class museums.",
    },
    {
      img: switzerlandImage,
      title: "Switzerland",
      description:
        "Enjoy breathtaking landscapes, snowy peaks, and vibrant cities.",
    },
    {
      img: newYorkImage,
      title: "New York",
      description:
        "The city that never sleeps, offering everything from Broadway shows to iconic landmarks like the Statue of Liberty.",
    },
  ];

  const categories = [
    {
      img: adventureImage,
      title: "Adventure",
      description:
        "Explore the wild with thrilling adventures, mountain hikes, and safaris.",
      color: "text-red-600",
    },
    {
      img: beachImage,
      title: "Beach",
      description:
        "Relax on the world's most beautiful beaches with luxury resorts and beach activities.",
      color: "text-blue-600",
    },
    {
      img: cityImage,
      title: "City Tour",
      description:
        "Explore cultural and historical landmarks of iconic cities around the world.",
      color: "text-green-600",
    },
  ];

  const filteredDestinations = destinations.filter((destination) =>
    destination.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section with Search Bar */}
      <div className="relative h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source
            src="https://www.w3schools.com/howto/rain.mp4" // Replace with your desired traveling video link
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
        <div className="relative flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-yellow-400 drop-shadow-lg">
            Explore the World
          </h1>
          <p className="text-lg md:text-xl mb-6 text-yellow-200 drop-shadow-md">
            Plan your perfect vacation today!
          </p>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search destinations or categories..."
              className="px-4 py-2 rounded-full w-64 sm:w-96 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <Link to="destination" smooth={true} duration={500} offset={-50}>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition transform hover:scale-105">
              Start Exploring
            </button>
          </Link>
        </div>
      </div>

      {/* Top Travel Destinations Section */}
      <motion.div
        className="py-16 bg-gradient-to-r from-blue-500 to-green-400 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Top Travel Destinations
        </h2>
        <p className="text-lg md:text-xl text-white mb-6">
          Discover beautiful places around the world!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img
                src={destination.img}
                alt={destination.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {destination.title}
                </h3>
                <p className="text-gray-600 mt-2">{destination.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Browse by Categories Section */}
      <motion.div
        className="py-16 bg-gray-200 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Browse by Categories
        </h2>
        <div className="flex justify-center space-x-12">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <img
                src={category.img}
                alt={category.title}
                className="w-48 h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className={`text-2xl font-bold ${category.color} mb-2`}>
                {category.title}
              </h3>
              <p className="text-gray-600">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Booking Section */}
      <div className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Ready to Book Your Trip?
        </h2>
        <button className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-500 transition transform hover:scale-105">
          Book Your Vacation Now
        </button>
      </div>

      {/* Embedding YouTube Travel Videos */}
      <div className="py-16 bg-gray-800 text-center text-white">
        <h2 className="text-4xl font-bold mb-8">Watch the World Come to Life</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {["E6fefQGxg7g", "Qk30DJJO0AM"].map((videoId, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 aspect-w-16 aspect-h-9"
            >
              <iframe
                width="100%"
                height="300"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Travel Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;

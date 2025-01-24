import React from 'react';
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa'; // Import icons from react-icons

const Hero = ({data}) => {
  const { greeting, bio, profilepicture , city,country,note,socialmedia= [] } = data;
  const iconComponents = {
    github: FaGithub,
    twitter: FaLinkedin,
    facebook: FaFacebook,
    email: FaEnvelope,
  };

  return (
    <section id="hero" className="py-28 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="text-left md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {greeting} <span className="text-blue-500">Helmi</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">{bio}</p>
          {/* Location */}
          <div className="mt-6 flex items-center text-gray-600 dark:text-gray-300">
            <FaMapMarkerAlt className="mr-2" />
            <span>{city}, {country}</span>
          </div>
          {/* Availability */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            {/* I am currently <span className="text-green-500">available</span> for projects. */}
            {note}
          </p>
          {/* Social Media Links */}
          <div className="mt-6 flex space-x-4">
            {socialmedia.map((social, index) => {
              const IconComponent = iconComponents[social.icon]; 
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Side: Image with Gray Square */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
          {/* Gray Square */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-gray-300 dark:bg-gray-600 shadow-lg translate-x-5 translate-y-5"></div>
          {/* Image */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-white dark:border-gray-800 overflow-hidden">
            <img
              src={profilepicture}
              alt="Helmi Rmili"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
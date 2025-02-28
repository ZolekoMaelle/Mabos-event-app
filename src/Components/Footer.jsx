/*  import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-10 h-auto space-y-0">
      <div className="container mx-auto flex justify-between items-start">
       
        <div className="flex flex-col items-start space-y-4">
      
          <img src="/path/to/logo.png" alt="Logo" className="h-12" />

          
          <div className="space-y-2 ">
            <a href="/services/" className="hover:underline mr-4">Services</a>
            <a href="/contact/" className="hover:underline mr-4">Contact Us</a>
            <a href="/about/" className="hover:underline mr-4">About Us</a>
          </div>
        </div>

        
        <div className="flex space-x-6 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="h-7 w-7 hover:text-blue-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-7 w-7 hover:text-blue-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-7 w-7 hover:text-blue-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="h-7 w-7 hover:text-blue-300" />
          </a>
        </div>
      </div>

      <div className="text-center mt-6">
        <p>@copyright2024</p>
      </div>
    </footer>
  );
};

export default Footer;
 */


/* import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
     
      <h1 className="text-3xl font-bold text-black mb-8">Taches</h1>

      
      <div className="w-full max-w-md space-y-6">
        
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-sm">!</div>
            <span>Creer un budget de marriage</span>
          </div>
          <span className="text-gray-500">12/10/23</span>
        </div>

        
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-sm">!</div>
            <span>Negocier une ceremonie</span>
          </div>
          <span className="text-gray-500">15/10/23</span>
        </div>

        
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-sm">!</div>
            <span>Faire une liste des invites</span>
          </div>
          <span className="text-gray-500">18/10/23</span>
        </div>
      </div>

      
      <div className="w-full max-w-md mt-8">
       
        <div className="relative h-2 bg-gray-300 rounded-full">
          <div className="absolute left-0 top-0 h-full w-0 bg-blue-500 rounded-full"></div>
        </div>

        
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>0% Terminé</span>
          <span>0 sur 16</span>
        </div>
      </div>
    </div>
  );
};

export default Footer; */

import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Set the target date for the countdown (replace with your desired date)
  const targetDate = new Date('2024-10-12T00:00:00').getTime();

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 p-4">
      {/* White Rounded Shape (Heart-like) */}
      <div className="bg-white rounded-full w-64 h-64 flex flex-col items-center justify-center shadow-lg">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-blue-500 mb-4">Marie & Claire</h1>

        {/* Countdown Timer */}
        <div className="flex space-x-4 text-center">
          <div>
            <span className="text-2xl font-bold">{timeRemaining.days}</span>
            <span className="block text-sm text-gray-600">days</span>
          </div>
          <div>
            <span className="text-2xl font-bold">{timeRemaining.hours}</span>
            <span className="block text-sm text-gray-600">hours</span>
          </div>
          <div>
            <span className="text-2xl font-bold">{timeRemaining.minutes}</span>
            <span className="block text-sm text-gray-600">mins</span>
          </div>
          <div>
            <span className="text-2xl font-bold">{timeRemaining.seconds}</span>
            <span className="block text-sm text-gray-600">sec</span>
          </div>
        </div>

        {/* Additional Text */}
        <p className="mt-6 text-lg text-blue-500">Avant notre marriage</p>
        <p className="text-sm text-gray-600">12 Octobre 2024</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
import React from 'react';
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

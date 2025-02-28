import React from 'react';
import {  FaTasks, FaWallet,  FaUsers,FaTruck, FaCog,  FaFacebook, FaWhatsapp,FaInstagram,} from 'react-icons/fa';
  
const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6">
      <div className="container mx-auto px-4">
  
        <div className="flex justify-between items-center">
         
          <div className="flex space-x-6">
            <FaTasks className="text-2xl cursor-pointer hover:text-blue-200 transition duration-300" />
            <FaWallet className="text-2xl cursor-pointer hover:text-blue-200 transition duration-300" />
            <FaUsers className="text-2xl cursor-pointer hover:text-blue-200 transition duration-300" />
            <FaTruck className="text-2xl cursor-pointer hover:text-blue-200 transition duration-300" />
            <FaCog className="text-2xl cursor-pointer hover:text-blue-200 transition duration-300" />
          </div>

          
          <div className="flex space-x-6">
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-200 transition duration-300" />
            <FaWhatsapp className="text-2xl cursor-pointer hover:text-blue-200 transition duration-300" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-blue-200 transition duration-300" />
          </div>
        </div>

      
        <div className="text-center mt-6">
          <p className="text-sm">
            &copy; 2023 MyApp. Tous droits réservés. | Licence: Creative Commons
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
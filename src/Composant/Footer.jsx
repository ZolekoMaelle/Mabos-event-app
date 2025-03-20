import React from 'react';
import {  FaTasks, FaWallet,  FaUsers,FaTruck, FaCog,  FaFacebook, FaWhatsapp,FaInstagram,} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

  
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="py-6 text-white bg-blue-500">
      <div className="container px-4 mx-auto">
  
        <div className="flex items-center justify-between">
         
          <div className="flex space-x-6">
            <FaTasks className="text-2xl transition duration-300 cursor-pointer hover:text-blue-200" onclick={() => navigate ("/Ip")}  />
            <FaWallet className="text-2xl transition duration-300 cursor-pointer hover:text-blue-200"  onclick={() => navigate ("/Bp")}/>
            <FaUsers className="text-2xl transition duration-300 cursor-pointer hover:text-blue-200"  onclick={() => navigate ("/Ip")} />
            <FaTruck className="text-2xl transition duration-300 cursor-pointer hover:text-blue-200" onclick={() => navigate ("/Ip")} />
            <FaCog className="text-2xl transition duration-300 cursor-pointer hover:text-blue-200" onclick={() => navigate ("/Ip")}/>
          </div>

          
          <div className="flex space-x-6">
            <FaFacebook className="text-2xl transition duration-300 cursor-pointer hover:text-blue-200" />
            <FaWhatsapp className="text-2xl transition duration-300 cursor-pointer hover:text-blue-200" />
            <FaInstagram className="text-2xl transition duration-300 cursor-pointer hover:text-blue-200" />
          </div>
        </div>

      
        <div className="mt-6 text-center">
          <p className="text-sm">
            &copy; 2023 MyApp. Tous droits réservés. | Licence: Creative Commons
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
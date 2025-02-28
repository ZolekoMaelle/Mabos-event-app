import React from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa'; 
const ItemsWithIcons = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      
      <div className="flex items-center space-x-4 border-b border-gray-300 pb-6">
        <FaStar className="text-blue-600 text-6xl" /> 
        <div className="flex flex-col flex-grow">
          <h2 className="text-2xl font-semibold text-gray-800">Evaluer l'App</h2>
          <p className="text-gray-600 mt-2">Veuillez évaluer cette application</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Evaluer
          </button>
        </div>
      </div>

     
      <div className="flex items-center space-x-4">
        <FaUserCircle className="text-blue-600 text-6xl" /> 
        <div className="flex flex-col flex-grow">
          <h2 className="text-2xl font-semibold text-gray-800">Assistants</h2>
          <p className="text-gray-600 mt-2">Partagez les préparatifs avec vos proches</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Inviter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsWithIcons;

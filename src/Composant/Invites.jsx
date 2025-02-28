import React from 'react';
import { FaRegAddressCard } from 'react-icons/fa';  
import { FaRegCalendarAlt } from 'react-icons/fa';  

const Invites = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 min-h-50">
    
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">INVITES</h1>

      
      <div className="flex items-center justify-between">
      
        <div className="flex flex-col items-center">
          <FaRegAddressCard className="text-blue-600 text-4xl mb-2" />
          <span className="text-sm text-gray-700">Tous les invites</span>
        </div>

        <div className="h-16 border-l-2 border-gray-300 mx-6"></div>

        <div className="flex flex-col items-center">
          <FaRegCalendarAlt className="text-blue-600 text-4xl mb-2" />
          <span className="text-sm text-gray-700">Tous les evenements</span>
        </div>
      </div>
    </div>
  );
};

export default Invites;

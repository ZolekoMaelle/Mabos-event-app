import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 

const Fp = () => {
  const [selectedOption, setSelectedOption] = useState('Tous les fournisseurs');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = ['Tous les fournisseurs', 'Reserve', 'En attente', 'Rejete'];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white-100">
      
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Fournisseurs</h1>

 
      <div className="flex w-full max-w-4xl space-x-8">
        
        <div className="flex-1 space-y-4">
          <div className="text-left">
            <h2 className="text-lg font-semibold text-gray-700">Montant: 0$</h2>
          </div>
          <div className="text-left">
            <h2 className="text-lg font-semibold text-gray-700">Payé: 0$</h2>
          </div>
          <div className="text-left">
            <h2 className="text-lg font-semibold text-gray-700">En attente: 0$</h2>
          </div>
        </div>

        <div className="flex items-center justify-center flex-1">
          <div className="relative w-24 h-24">
           
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full border-4 border-gray-300 rounded-full"></div>
            </div>
          
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-700">0</span>
            </div>
          </div>
        </div>

        
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">0 réservé</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
            <span className="text-gray-700">0 en attente</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span className="text-gray-700">0 rejeté</span>
          </div>
        </div>
      </div>

      
      <div className="flex w-full max-w-4xl mt-8 space-x-4">
        
        <div className="relative flex-1">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full p-2 bg-white border border-gray-300 rounded-lg"
          >
            <span>{selectedOption}</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedOption(option);
                    setIsDropdownOpen(false);
                  }}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Rechercher la liste de fournisseurs"
            className="w-full p-2 pl-10 bg-white border border-gray-300 rounded-lg"
          />
          <FaSearch className="absolute text-gray-500 left-3 top-3" />
        </div>
      </div>
    </div>
  );
};

export default Fp;
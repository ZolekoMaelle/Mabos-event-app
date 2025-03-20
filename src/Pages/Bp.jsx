import React from 'react';

const Bp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white-100">
      
      <h1 className="mb-8 text-4xl font-bold text-gray-800">BUDGET</h1>

      <div className="flex justify-between w-full max-w-md mb-8">
    
        <div className="flex flex-col space-y-4">
          <span className="text-sm text-gray-700">Solde</span>
          <span className="text-sm text-gray-700">Paye</span>
          <span className="text-sm text-gray-700">En attente</span>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <div className="w-3 h-3 mr-2 bg-gray-400 rounded-full"></div>
            <span className="text-sm text-gray-700">Non defini</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 mr-2 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-700">0 $</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 mr-2 bg-pink-500 rounded-full"></div>
            <span className="text-sm text-gray-700">0 $</span>
          </div>
        </div>

        <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
          <span className="text-xs text-gray-700">0%</span>
        </div>
      </div>


      <div className="w-full max-w-md mb-8 overflow-x-auto whitespace-nowrap">
        <div className="flex space-x-4">
          {[
            'Vetements & Accessoires',
            'Sante & Beaute',
            'Musique et Spectace',
            'Fleurs & Decor',
            'Accessoires & Bijoux',
            'Photo & Video',
            'Ceremonie & Banquet',
            'Transport & Logement',
          ].map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      
      <button className="fixed px-6 py-2 text-white transition duration-300 bg-blue-600 rounded-full shadow-lg bottom-8 hover:bg-blue-700">
        + Ajouter Depense
      </button>
    </div>
  );
};

export default Bp;
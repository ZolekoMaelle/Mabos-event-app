
import React from 'react';

const Fournisseurs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-50 bg-white-100 p-6">
 
      <h1 className="text-3xl font-bold text-blue-600 mb-8">FOURNISSEURS</h1>

    
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

       
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-24 h-24">
          
            <div className="absolute inset-0 flex items-center justify-center ">
              <div className="w-full h-full rounded-full border-4 border-blue-600"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-blue-600">0%</span>
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
    </div>
  );
};

export default Fournisseurs;
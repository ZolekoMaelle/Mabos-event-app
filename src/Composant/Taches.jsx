import React from 'react';

const Taches = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto">
      
      <h1 className="mb-6 text-3xl font-bold text-center text-blue-600">TACHES</h1>
      
   
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          
          <div className="flex items-center justify-center w-4 h-4 mr-2 text-white bg-blue-600 rounded-full">
            <span className="text-xs">!</span>
          </div>
          <span className="text-lg">Creer un budget</span>
        </div>
        <span className="text-sm text-gray-500">25/02/25</span>
      </div>

     
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
       
          <div className="flex items-center justify-center w-4 h-4 mr-2 text-white bg-blue-600 rounded-full">
            <span className="text-xs">!</span>
          </div>
          <span className="text-lg">Negocier une ceremonie</span>
        </div>
        <span className="text-sm text-gray-500">26/02/25</span>
      </div>

      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
       
          <div className="flex items-center justify-center w-4 h-4 mr-2 text-white bg-blue-600 rounded-full">
            <span className="text-xs">!</span>
          </div>
          <span className="text-lg">Faire une liste des invites</span>
        </div>
        <span className="text-sm text-gray-500">27/02/25</span>
      </div>

      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">0% termine</span>
        
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
        </div>

        <span className="text-sm text-gray-500">0 sur 16</span>
      </div>
    </div>
  );
};

export default Taches;

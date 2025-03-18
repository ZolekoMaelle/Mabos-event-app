import React from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

const Note= () => {
  
  const navigate = useNavigate();
  
 
 
  return (
    <div className="max-w-4xl p-6 mx-auto space-y-6">
      
      <div className="flex items-center pb-6 space-x-4 border-b border-gray-300">
        <FaStar className="text-6xl text-blue-600" /> 
        <div className="flex flex-col flex-grow">
          <h2 className="text-2xl font-semibold text-gray-800">Evaluer l'App</h2>
          <p className="mt-2 text-gray-600">Veuillez évaluer cette application</p>
          <button  onClick={() => navigate('/Ep')}
          className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Evaluer
          </button>
        </div>
      </div>

     
      <div className="flex items-center space-x-4">
        <FaUserCircle className="text-6xl text-blue-600" /> 
        <div className="flex flex-col flex-grow">
          <h2 className="text-2xl font-semibold text-gray-800">Assistants</h2>
          <p className="mt-2 text-gray-600">Partagez les préparatifs avec vos proches</p>
          <button  onClick={() => navigate ('/Sp')}
             className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Inviter
          </button>
        </div>
      </div>
    </div>
  );
};


export default Note;

import React from "react";
import decoration from '../resources/decoration.jpeg'

function Details() {
  return (
    <div className="flex flex-col items-center min-h-screen ">

      <header className="w-full bg-blue-500 py-4">
        <h1 className="text-center text-white text-4xl font-bold">Decoration</h1>
      </header>


      <main className="flex flex-col items-center mt-10">

        <div className="w-64 h-64 mb-6 ">
          <img
            src={decoration} 
            alt="Animated Decoration"
            className="w-full h-full object-cover "
          />
        </div>


        <div className="w-4/5 md:w-2/3 lg:w-1/2 p-4 bg-white shadow-md rounded-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
          <p className="text-gray-700">
            Avec notre service de decoration , vous ave access a une decoraton the standing different . qui est de 100,000frs-300,000 pour une decoration classic , 300,000-600,000 pour une decoration standart et 600,000-1000,000 pour une decoration VIP.
          </p>
        </div>


        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Reserve Service
        </button>
      </main>
    </div>
  );
}

export default Details;



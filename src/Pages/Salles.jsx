import React from "react";
import decoration from '../resources/decoration.jpeg'
import mainimage from '../resources/mainimage.jpg'
import music from '../resources/music.png'
import planner from '../resources/planner.jpeg'
import wedding from '../resources/wedding.jpg'


function HallReservationPage() {
  const halls = [
    {
      img: decoration,
      price: "1,000,000FCFA",
      name: "Juventus",
      location: "Yaounde",
      dimension: "200m²",
      seats: 100,
    },
    {
      img: mainimage,
      price: "1,500,000FCFA",
      name: "Neptune",
      location: "Damas",
      dimension: "150m²",
      seats: 80,
    },
    {
      img:music,
      price: "2,000,000FCFA",
      name: "Columbia",
      location: "Douala",
      dimension: "300m²",
      seats: 150,
    },
    {
      img: planner,
      price: "2,500,000FCFA",
      name: " Nice",
      location: "Kribi",
      dimension: "250m²",
      seats: 120,
    },
    {
      img: decoration,
      price: "3,000,000FCFA",
      name: "Bordeaux",
      location: "Buea",
      dimension: "220m²",
      seats: 110,
    },
    {
      img: wedding,
      price: '4,000,000FCFA',
      name: " LALLI",
      location: "Dschang",
      dimension: "180m²",
      seats: 90,
    },
    {
      img: wedding,
      price: "4,000,000FCFA",
      name: "Tall",
      location: "Toulouse",
      dimension: "350m²",
      seats: 170,
    },
    {
      img: music,
      price: "5,000,000FCFA",
      name: "Syntich",
      location: "Mbouda",
      dimension: "270m²",
      seats: 130,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
    
      <div className="w-full h-64 bg-blue-500 flex items-center justify-center">
        <div className="flex flex-wrap items-center space-x-2 max-w-4xl w-full px-4">
         
          <input
            type="text"
            placeholder="Type de salle"
            className="flex-grow p-2 rounded-l bg-white text-gray-700 border border-r-0 border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Nombre de places"
            className="flex-grow p-2 bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Localisation"
            className="flex-grow p-2 bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          />
         
          <button className="bg-white text-blue-500 font-semibold p-2 rounded hover:bg-blue-100">
            Recherche
          </button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
       
        {halls.map((hall, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
           
            <img
              src={hall.img}
              alt={hall.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <div className="text-blue-500 text-lg font-bold mb-1">{hall.price}</div>

            
            <h3 className="text-gray-800 text-lg font-semibold mb-1">{hall.name}</h3>

           
            <div className="text-gray-600 text-sm mb-1">{hall.location}</div>

            <div className="flex items-center text-gray-600 text-sm mb-2">
              <span className="mr-2 flex items-center">
                <i className="fas fa-expand-alt mr-1"></i> {hall.dimension}
              </span>
              <span className="flex items-center">
                <i className="fas fa-chair mr-1"></i> {hall.seats} places
              </span>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded">
              Reserver
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HallReservationPage;



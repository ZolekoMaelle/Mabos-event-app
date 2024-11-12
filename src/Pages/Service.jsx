import React from "react";
import chaise from '../resources/chaise.jpeg'
import decoration from '../resources/decoration.jpeg'
import impressario from '../resources/impressario.jpeg'
import traiteur from '../resources/traiteur.jpeg'
import couvert from '../resources/couvert 2.jpeg'
import music from '../resources/music.png'
import { Link } from "react-router-dom";



const services = [
    {
        image: chaise,
        title: "Locaton de chaises",
    },
    {
        image:impressario ,
        title: "Maitre de ceremonie",
    },
    {
        image: couvert,
        title: "Location de couvert",
    },
    {
        image:decoration ,
        title: "Decoration",
    },
    {
        image: music,
        title: "Dj Animation ",
    },
    {
        image: traiteur,
        title: "Service Traiteur",
    },
];

const ServicesPage = () => {
    return (
        <div>

            <div className="bg-blue-500 py-10">
                <h1 className="text-center text-4xl font-bold text-white">Our Services</h1>
            </div>


            <div className="text-center my-8">
                <p className="text-xl text-gray-700">
                    Get Access to all the top and most demanded services we offer.
                </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg flex items-center"
                    >

                        <div className="w-1/3 mr-4">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover rounded"
                            />
                        </div>


                        <div className="w-2/3">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {service.title}
                            </h3>
                            
                            <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
                            <Link to='/details/' label='details' rel="noopener noreferer">Details </Link>
                            </button>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;

// import React from "react";
// import traiteur from '../resources/traiteur.jpeg'
// import impressario from '../resources/impressario.jpeg'
// import music from '../resources/music.png'
// import chaise from '../resources/chaise.jpeg'
// //import planner from '../resources/planner.jpeg'
// import couvert from '../resources/couvert 2.jpeg'
// import decoration from '../resources/decoration.jpeg'

// const Card = () => {

//     return (
//         <div  >
//             <div className="bg-blue-500 py-10">
//                 <h1 className="text-center text-4xl font-bold text-white">Our Services</h1>
//             </div>
//             <div className="text-center my-8">
//                 <p className="text-xl text-gray-700">
//                     Get Access to all the top and most demanded services we offer.
//                 </p>
//             </div>
//             <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 bg-white p-6 rounded-lg shadow-lg flex items-center">
//                 <div >
//                     {<img src={traiteur} alt='' className="w-1/3 mr-4  h-full object-cover rounded " />}
//                     <p className="text-lg text-gray-800 font-semibold">Services Traiteur</p>
//                 </div>
//                 <div>
//                     {<img src={impressario} alt='' className="h-40 transition duration-300 rounded-lg shadow-sm size-96" />}
//                     <p className="text-lg text-gray-800 font-semibold">Maitre de ceremonie</p>
//                 </div>
//                 <div>
//                     {<img src={decoration} alt='' className="h-40 transition duration-300 rounded-lg shadow-sm size-96" />}
//                     <p className="text-lg text-gray-800 font-semibold">Services de decoration</p>
//                 </div>
//                 <div>
//                     {<img src={chaise} alt='' className="h-40 transition duration-300 rounded-lg shadow-sm size-96" />}
//                     <p className="text-lg text-gray-800 font-semibold">Location de Chaises</p>
//                 </div>
//                 <div>
//                     {<img src={music} alt='' className="h-40 transition duration-300 rounded-lg shadow-sm size-96" />}
//                     <p className="text-lg text-gray-800 font-semibold">Animation</p>
//                 </div>
//                 <div>
//                     {<img src={couvert} alt='' className='h-40 transition duration-300 rounded-lg shadow-sm size-96' />}
//                     <p className="text-lg text-gray-800 font-semibold">Location des couverts</p>
//                 </div>

//             </div>

//         </div>
//     )
// }
// export default Card;



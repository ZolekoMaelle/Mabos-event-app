import React from "react";
import traiteur from '../resources/traiteur.jpeg'
 import impressario from '../resources/impressario.jpeg'
import music from '../resources/music.png'
import chaise from '../resources/chaise.jpeg'
//import planner from '../resources/planner.jpeg'
import couvert from '../resources/couvert 2.jpeg'
import decoration from '../resources/decoration.jpeg'

const Card = () => {

    return (
        <div className="flex flex-col items-center justify-center" >
            <div className="py-8 text-xl font-bold text-center text-blue-600">
                Our Services
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div >
                    {<img src={traiteur} alt=''  className="h-40 transition duration-300 rounded-lg shadow-2xl size-96 hover:"/>}
                    <p className="text-lg text-gray-800 font-semibold">Services Traiteur</p>
                </div>
                <div>
                    {<img src={impressario} alt='' className="h-40 transition duration-300 rounded-lg shadow-sm size-96"/>}
                    <p className="text-lg text-gray-800 font-semibold">Maitre de ceremonie</p>
                </div>
                <div>
                    {<img src={decoration} alt='' className="h-40 transition duration-300 rounded-lg shadow-sm size-96" />}
                    <p className="text-lg text-gray-800 font-semibold">Services de decoration</p>
                </div>
                <div>
                    {<img src={chaise} alt=''  className="h-40 transition duration-300 rounded-lg shadow-sm size-96"/>}
                    <p className="text-lg text-gray-800 font-semibold">Location de Chaises</p>
                </div>
                <div>
                    {<img src={music} alt='' className="h-40 transition duration-300 rounded-lg shadow-sm size-96" />}
                    <p className="text-lg text-gray-800 font-semibold">Animation</p>
                </div>
                <div>
                    {<img src={couvert} alt='' className='h-40 transition duration-300 rounded-lg shadow-sm size-96'/>}
                    <p className="text-lg text-gray-800 font-semibold">Location des couverts</p>
                </div>

            </div>

        </div>
    )
}
export default Card;



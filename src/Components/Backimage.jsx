import React from "react";
import mainimage from '../resources/mainimage.jpg'
import { Link } from "react-router-dom";

const Backimage = () => {

    return (
        <div className="relative ">

            <img src={mainimage} alt='' className="w-full h-screen bg-center bg-cover   brightness-50 " />
            <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-4xl font-bold drop-shadow-lg mt-0">
                    Get Your Dream Event 
                </h2>

            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <button className="px-5 my-20 text-white bg-blue-600 rounded tex2 py-font-bold  hover:bg-blue-600 size-20 w-60 h-10 mt-52">
                    <Link to='/salles/' label='salles' rel="noopener noreferer">RESERVER UNE SALLE </Link>
                </button>
            </div>

        </div>
    );
};

export default Backimage;


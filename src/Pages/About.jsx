import React from 'react';

const AboutPage = () => {
    return (
        <div className="bg-white min-h-screen">

            <div className="bg-blue-600 text-white text-center py-24">
                <h1 className="text-4xl font-bold">About</h1>
            </div>


            <div className="text-center py-12">
                <h2 className="text-3xl text-blue-600 font-semibold">Join Evena</h2>
                <p className="text-lg text-gray-600 mt-4 px-4 sm:px-6 md:px-12 lg:px-24">
                    Nous sommes une agence événementielle au Cameroun et faisons dans la location des salles événementielles et offrons des services liés dans l'événementiel.
                </p>
            </div>


            <div className="text-center mt-6">
                <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Explore our Spaces
                </button>
            </div>
        </div>
    );
};

export default AboutPage;

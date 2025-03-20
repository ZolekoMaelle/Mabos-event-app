import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-white-100">
    
      <h1 className="mb-8 text-3xl font-bold text-center">Invites</h1>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
      
        <div className="flex flex-col items-center p-6 transition-shadow bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg">
          <div className="mb-2 text-4xl">🎉</div>
          <p className="text-lg font-semibold">Invite</p>
        </div>

        <div className="flex flex-col items-center p-6 transition-shadow bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg">
          <div className="flex items-center justify-center w-20 h-20 mb-2 border-4 border-blue-500 rounded-full">
            <span className="text-xl font-bold">75%</span>
          </div>
          <p className="text-lg font-semibold">Marriage</p>
        </div>

        
        <div className="flex flex-col items-center p-6 transition-shadow bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg">
          <div className="flex items-center justify-center w-20 h-20 mb-2 border-4 border-pink-500 rounded-full">
            <span className="text-xl font-bold">50%</span>
          </div>
          <p className="text-lg font-semibold">Bachelorette Party</p>
        </div>

      
        <div className="flex flex-col items-center p-6 transition-shadow bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg">
          <div className="flex items-center justify-center w-20 h-20 mb-2 border-4 border-purple-500 rounded-full">
            <span className="text-xl font-bold">25%</span>
          </div>
          <p className="text-lg font-semibold">Fete de celibataires</p>
        </div>
      </div>


      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Rechercher dans la liste des invites"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default App;
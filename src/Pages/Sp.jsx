import React from 'react';

const MessagesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white-100">
  
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Messages</h1>

      
      <div className="mb-8 text-center">
        <p className="text-lg text-gray-700">
          Inviter des assistants et discuter de la planification du mariage
        </p>
      </div>

      
      <button className="px-6 py-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600">
        Inviter
      </button>
    </div>
  );
};

export default MessagesPage;
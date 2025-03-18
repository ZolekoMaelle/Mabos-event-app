import React from 'react';
import { FaTasks, FaWallet, FaUsers, FaTruck } from 'react-icons/fa'; 

const List = () => {

  
  return (
    <div className="flex items-center mt-10 justify-evenly">
      
      <a
        href="/task"
        className="flex flex-col items-center text-center hover:text-blue-500"
      >
        <FaTasks className="mb-2 text-6xl text-blue-600" />
        <span className="text-sm font-medium">Task</span>
      </a>

      
      <a
        href="/budget"
        className="flex flex-col items-center text-center hover:text-blue-500"
      >
        <FaWallet className="mb-2 text-6xl text-blue-600" />
        <span className="text-sm font-medium">Budget</span>
      </a>

      <a
        href="/invites"
        className="flex flex-col items-center text-center hover:text-blue-500"
      >
        <FaUsers className="mb-2 text-6xl text-blue-600" />
        <span className="text-sm font-medium">Invite</span>
      </a>

     
      <a
        href="/vendors"
        className="flex flex-col items-center text-center hover:text-blue-500"
      >
        <FaTruck className="mb-2 text-6xl text-blue-600" />
        <span className="text-sm font-medium">Fournisseurs</span>
      </a>
    </div>
  );
};

export default List;

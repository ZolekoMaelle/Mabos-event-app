import React from 'react';
import { FaTasks, FaWallet, FaUsers, FaTruck } from 'react-icons/fa'; 

const List = () => {
  return (
    <div className="flex justify-evenly items-center mt-10">
      
      <a
        href="/task"
        className="flex flex-col items-center text-center hover:text-blue-500"
      >
        <FaTasks className="text-blue-600 text-6xl mb-2" />
        <span className="text-sm font-medium">Task</span>
      </a>

      
      <a
        href="/budget"
        className="flex flex-col items-center text-center hover:text-blue-500"
      >
        <FaWallet className="text-blue-600 text-6xl mb-2" />
        <span className="text-sm font-medium">Budget</span>
      </a>

      <a
        href="/invites"
        className="flex flex-col items-center text-center hover:text-blue-500"
      >
        <FaUsers className="text-blue-600 text-6xl mb-2" />
        <span className="text-sm font-medium">Invite</span>
      </a>

     
      <a
        href="/vendors"
        className="flex flex-col items-center text-center hover:text-blue-500"
      >
        <FaTruck className="text-blue-600 text-6xl mb-2" />
        <span className="text-sm font-medium">Fournisseurs</span>
      </a>
    </div>
  );
};

export default List;

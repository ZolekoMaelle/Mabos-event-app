import React from 'react';
import { FaTasks, FaWallet, FaUsers, FaTruck } from 'react-icons/fa'; 
import { useNavigate } from "react-router-dom";

const List = () => {
       
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center mt-10 justify-evenly">
      
      <a
        phref="/Task"
        className="flex flex-col items-center text-center hover:text-blue-500"
      >
        <FaTasks className="mb-2 text-6xl text-blue-600"  onclick={() => navigate ("/Tp")}/>
        <span className="text-sm font-medium">Task</span>
      </a>

      
      <a
        href="/Bp"
        className="flex flex-col items-center text-center hover:text-blue-500"
      >
        <FaWallet className="mb-2 text-6xl text-blue-600"  onClick={() => navigate("/Bp")}  />
        <span className="text-sm font-medium">Budget</span>
      </a>

      <a
        href="/Ip"
        className="flex flex-col items-center text-center hover:text-blue-500"
      >
        <FaUsers className="mb-2 text-6xl text-blue-600" onclick={() => navigate ("/Ip")} />
        <span className="text-sm font-medium">Invite</span>
      </a>

     
      <a
        href="/Fp"
        className="flex flex-col items-center text-center hover:text-blue-500"
      >
        <FaTruck className="mb-2 text-6xl text-blue-600" onClick={() => navigate("/Fp")} />
        <span className="text-sm font-medium">Fournisseurs</span>
      </a>
    </div>
  );
};

export default List;

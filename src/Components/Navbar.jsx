//import { link } from "fs";
import React from "react";
//import Button from "./Button";


const Navbar = () => {

    let Links =[
      {name:'Home', link:'/'},
      {name:'Services', link:'/services/'},
      {name:'About us ', link:'/about/'},
      {name:'Contact us', link:'/contact/'},
    ];

    return(

      <div className="w-full text-blue-600 shadow-md">
        <div className="items-center justify-between py-4 md:px-10 px-7 md:flex">
          <div className="text-2xl italic font-bold">
            Evena
          </div>

          <ul className="flex pl-9 md:pl-0">
            {
              Links.map(link => 
              <li className="font-semibold my-7 md:my-0 md:ml-8">
                <a href={link.link}>{link.name}</a>
                </li>)
            }
            <a href="/login"> <button className="px-3 py-1 text-white bg-blue-600 btn md:ml-8" >Login </button></a>
            <a href="/signup"><button className="px-3 py-1 text-white bg-blue-600 btn md:ml-8">Signup </button></a>
           
            
          </ul>

        </div>
      </div>

    
    );
};

export default Navbar;
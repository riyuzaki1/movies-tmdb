import React from "react";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div className="border bg-grey flex  space-x-8  pl-5 items-center py-2 Class
        
        shadow-lg bg-[#000] justify-between border-black relative ">
            
            <div className="flex items-center ">
            <img alt="logo" className="logo sm:h-[4rem] sm:w-[4rem] h-[3rem] w-[3rem] " src={logo}></img>
            <Link to="/"  className="  font-bold  sm:text-3xl text-lg   text-white  ">Moviefy</Link>
            </div>
           
            
            
            <div className="flex absolute right-2 "> 
            
            
            <Link to="/favourites" className="  font-bold text-[.75rem] sm:text-lg text-white  bg-red-600 rounded-md p-1 hover:bg-red-400 ">Favourites</Link>
            </div>
        </div>
    )
};

export default Navbar;
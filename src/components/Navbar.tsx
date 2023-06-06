
import React from "react";
import { HiBars3CenterLeft } from "./Icons";


export default function Navbar() {


  return (
    <>
      <div className=" lg:block min-[320px]:hidden  fixed top-0 left-0 w-[100%] z-50 pt-3 pb-3  bg-[#3098f3] ">
        <ul className="lg:flex  text-white min-[320px]:hidden  font-font justify-center md:gap-10  md:text-xl cursor-pointer">
          <li className="underline-none hover:underline hover:decoration-[#FFCC00] decoration-2 underline-offset-4 transition delay-75 duration-100">Work</li>
          <li className="underline-none hover:underline hover:decoration-[#FFCC00] decoration-2 underline-offset-4 transition delay-75 duration-100">Services</li>
          <li className="underline-none hover:underline hover:decoration-[#FFCC00] decoration-2 underline-offset-4 transition delay-75 duration-100">Pricing</li> 
          <li className="underline-none hover:underline hover:decoration-[#FFCC00] decoration-2 underline-offset-4 transition delay-75 duration-100">Contact</li>
          <li className="underline-none hover:underline hover:decoration-[#FFCC00] decoration-2 underline-offset-4 transition delay-75 duration-100">About</li>
        </ul>

        

      </div>
      <div className="lg:hidden drawer drawer-end z-50 fixed top-0 left-0">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className=" backdrop-filter backdrop-blur-sm drawer-button"><HiBars3CenterLeft fill="#FD6470" size={40} /> </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-[#082C4E] text-white ">
      {/* Sidebar content here */}
      <li><a>Services</a></li>
      <li><a>About</a></li>
      <li><a>Pricing</a></li>
      <li><a>Contact</a></li>


      
    </ul>
  </div>
</div>
      
      

 
    </>
  );
}

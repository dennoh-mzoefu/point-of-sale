import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import logo from "../assets/resturant-logo.svg";

function Navbar() {
  return (
    <div className="sticky top-0 z-10 flex justify-between w-full p-4 items-center bg-green-500">
      <div className="flex items-center">
        <img src={logo} className="h-10" />
        <h1 className="ml-4 text 2xl">Green Pastures Hotel</h1>
      </div>
      <div className="flex">
        <BiUserCircle className="text-3xl  mx-5" />
        <p className="text-xl">Logout</p>
        <GrNotification className="text-3xl mx-5" />
      </div>
    </div>
  );
}

export default Navbar;

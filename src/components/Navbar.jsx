import React from "react";
import { BiUserCircle } from "react-icons/bi";
import logo from "../assets/resturant-logo.svg";

function Navbar() {
  return (
    <div className="flex justify-between p-4 items-center bg-blue-500">
      <div className="flex items-center">
        <img src={logo} className="h-10" />
        <h1 className="ml-4 text 2xl">Green Pastures Hotel</h1>
      </div>
      <BiUserCircle className="text-3xl" />
    </div>
  );
}

export default Navbar;

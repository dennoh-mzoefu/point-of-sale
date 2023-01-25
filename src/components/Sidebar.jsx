import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";

function Sidebar() {
  return (
    <div>
      <div className="bg-white shadow-xl h-screen border-r border-slate-300/90 flex flex-col w-fit">
        <AiOutlineCloseCircle className="my-5 justify-end " />
        <div className="flex flex-col">
          {/* each link */}
          <div className="w-52 flex  items-center justify-center  py-3 hover:text-white  hover:bg-blue-400">
            {/* icon  */}
            <AiOutlineHome className="text-xl " />
            <h3 className="ml-4 font-semibold">Home</h3>
          </div>
          <div className="w-52 flex  items-center justify-center  py-3 hover:text-white  hover:bg-blue-400">
            {/* icon  */}
            <AiOutlineHome className="text-xl " />
            <h3 className="ml-4 font-semibold">Stock</h3>
          </div>
          <div className="w-52 flex  items-center justify-center  py-3 hover:text-white  hover:bg-blue-400">
            {/* icon  */}
            <AiOutlineHome className="text-xl " />
            <h3 className="ml-4 font-semibold ">Orders</h3>
          </div>
          <div className="w-52 flex  items-center justify-center  py-3 hover:text-white hover:bg-blue-400">
            {/* icon  */}
            <AiOutlineHome className="text-xl " />
            <h3 className="ml-4 font-semibold">Sales</h3>
          </div>
          <div className="w-52 flex  items-center justify-center  py-3 hover:text-white  hover:bg-blue-400">
            {/* icon  */}
            <AiOutlineHome className="text-xl " />
            <h3 className="ml-4 font-semibold">Expenses</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

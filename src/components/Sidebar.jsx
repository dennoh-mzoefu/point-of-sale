import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { MdPeople, MdMenuBook } from "react-icons/md";
import { GrDocumentStore } from "react-icons/gr";
import { FcSalesPerformance, FcMoneyTransfer } from "react-icons/fc";
import { Link } from "react-router-dom";
// import { FcSalesPerformance } from "react-icons/fc";

function Sidebar() {
  const style =
    "w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-green-400";
  return (
    <div>
      <div className="bg-white shadow-xl h-screen border-r border-slate-300/90 flex flex-col w-fit ">
        <AiOutlineCloseCircle className="my-5 justify-end " />
        <div className="flex flex-col">
          {/* each link */}
          <Link to="/home">
            <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-green-400">
              <div className="w-3/4 flex  items-center justify-items-start   ">
                {/* icon  */}
                <AiOutlineHome className="text-xl " />
                <h3 className="ml-4 font-semibold">Home</h3>
              </div>
            </div>
          </Link>
          <Link to="/menu">
            <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-green-400">
              <div className="w-3/4 flex  items-center justify-items-start   ">
                {/* icon  */}
                <MdMenuBook className="text-xl " />
                <h3 className="ml-4 font-semibold">Menu</h3>
              </div>
            </div>
          </Link>
          <Link to="/employees">
            <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-green-400">
              <div className="w-3/4 flex  items-center justify-items-start   ">
                {/* icon  */}
                <MdPeople className="text-xl " />
                <h3 className="ml-4 font-semibold">Employees</h3>
              </div>
            </div>
          </Link>
          <Link to="/ordermanager">
            <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-green-400">
              <div className="w-3/4 flex  items-center justify-items-start   ">
                {/* icon  */}
                <AiOutlineHome className="text-xl " />
                <h3 className="ml-4 font-semibold ">Order Manager</h3>
              </div>
            </div>
          </Link>
          <Link to="/sales">
            <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-green-400">
              <div className="w-3/4 flex  items-center justify-items-start   ">
                {/* icon  */}
                <FcSalesPerformance className="text-xl " />
                <h3 className="ml-4 font-semibold">Sales</h3>
              </div>
            </div>
          </Link>
          <Link to="/expense">
            <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-green-400">
              <div className="w-3/4 flex  items-center justify-items-start   ">
                {/* icon  */}
                <FcMoneyTransfer className="text-xl " />
                <h3 className="ml-4 font-semibold">Expenses</h3>
              </div>
            </div>
          </Link>
          <Link to="/store">
            <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-green-400">
              <div className="w-3/4 flex  items-center justify-items-start   ">
                {/* icon  */}
                <GrDocumentStore className="text-xl " />
                <h3 className="ml-4 font-semibold">Stock</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

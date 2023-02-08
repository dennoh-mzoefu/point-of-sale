import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { MdPeople, MdMenuBook } from "react-icons/md";
import { GrDocumentStore } from "react-icons/gr";
import { TbZoomMoney } from "react-icons/tb";
import { FcSalesPerformance, FcMoneyTransfer } from "react-icons/fc";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import logo from "../assets/resturant-logo.svg";
import { GrNotification } from "react-icons/gr";
// import { FcSalesPerformance } from "react-icons/fc";

function Sidebar() {
  const style =
    "w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-green-400";
  return (
    <div className="sticky top-0 bottom-0 lg:left-0 ">
      <div className="bg-green-900 shadow-xl h-screen border-r border-slate-300/90 flex flex-col w-fit ">
        <div className="flex mt-8">
          <img
            src={logo}
            className="h-10 bg-slate-800 rounded-full w-fit mt-5  "
          />
          <h1 className="ml-4 text-2xl text-white">Great Pastures</h1>
        </div>
        <AiOutlineCloseCircle className="my-5 justify-end " />
        <div className="flex flex-col">
          {/* each link */}
          <Link to="/home">
            <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-green-400">
              <div className="w-3/4 flex  items-center justify-items-start   ">
                {/* icon  */}
                <RiAdminLine className="text-xl " />
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
          <div className="mt-8">
            <p className="text-lg font-bold text-center text-slate-600 border-b border-black mx-2">
              Reports
            </p>
            <Link to="/sales">
              <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-green-400">
                <div className="w-3/4 flex  items-center justify-items-start   ">
                  {/* icon  */}
                  <FcSalesPerformance className="text-xl " />
                  <h3 className="ml-4 font-semibold">Sales</h3>
                </div>
              </div>
            </Link>
            <Link to="/expenseReport">
              <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-green-400">
                <div className="w-3/4 flex  items-center justify-items-start   ">
                  {/* icon  */}
                  <TbZoomMoney className="text-xl " />
                  <h3 className="ml-4 font-semibold">Expense Report</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

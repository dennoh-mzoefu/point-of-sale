import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
// import { FcSalesPerformance } from "react-icons/fc";

function Sidebar({ activeMenu, setActiveMenu, screenSize, setScreenSize }) {
  const style =
    "w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-stone-400";
  const { currentUser, users } = useSelector((state) => state.user);
  const [user, loading] = useAuthState(auth);

  const [role, setRole] = useState(currentUser?.roles);
  useEffect(() => {
    users &&
      user &&
      setRole(users.filter((item) => item.uid == user.uid)[0]?.roles);
  }, [user, users]);
  return (
    <div className=" ">
      {console.log({ role })}
      {activeMenu && (
        <div className="bg-stone-900  shadow-xl h-screen border-r border-slate-300/90 flex flex-col w-fit ">
          <div className="flex w-fit ml-4 mt-8">
            <img
              src={logo}
              className="h-10 shadow-md drop-shadow-lg shadow-slate-200 rounded-full w-fit mt-5  "
            />
            <h1 className="ml-4 text-2xl text-white drop-shadow-lg">
              Great Pastures
            </h1>
          </div>
          <div className="my-5 justify-end " />
          <div className="flex flex-col">
            {/* each link */}
            {role == "admin" && (
              <Link
                onClick={() => setActiveMenu((prevState) => !prevState)}
                to="/home"
              >
                <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-stone-400">
                  <div className="w-3/4 flex  items-center justify-items-start   ">
                    {/* icon  */}
                    <RiAdminLine
                      className="text-xl text-white "
                      onClick={() =>
                        setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                      }
                    />
                    <h3 className="ml-4 font-semibold text-white">Home</h3>
                  </div>
                </div>
              </Link>
            )}
            <Link
              onClick={() => setActiveMenu((prevState) => !prevState)}
              to="/menu"
            >
              <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-stone-400">
                <div className="w-3/4 flex  items-center justify-items-start   ">
                  {/* icon  */}
                  <MdMenuBook
                    className="text-xl text-white "
                    onClick={() =>
                      setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                    }
                  />
                  <h3 className="ml-4 font-semibold text-white">Menu</h3>
                </div>
              </div>
            </Link>

            <Link
              onClick={() => setActiveMenu((prevState) => !prevState)}
              to="/ordermanager"
            >
              <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-stone-400">
                <div className="w-3/4 flex  items-center justify-items-start   ">
                  {/* icon  */}
                  <AiOutlineHome
                    className="text-xl text-white "
                    onClick={() =>
                      setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                    }
                  />
                  <h3 className="ml-4 font-semibold text-white ">
                    Order Manager
                  </h3>
                </div>
              </div>
            </Link>

            <Link
              onClick={() => setActiveMenu((prevState) => !prevState)}
              to="/expense"
            >
              <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-stone-400">
                <div className="w-3/4 flex  items-center justify-items-start   ">
                  {/* icon  */}
                  <FcMoneyTransfer
                    className="text-xl text-white "
                    onClick={() =>
                      setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                    }
                  />
                  <h3 className="ml-4 font-semibold text-white">Expenses</h3>
                </div>
              </div>
            </Link>
            <Link
              onClick={() => setActiveMenu((prevState) => !prevState)}
              to="/store"
            >
              <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-stone-400">
                <div className="w-3/4 flex  items-center justify-items-start   ">
                  {/* icon  */}
                  <GrDocumentStore
                    className="text-xl text-white "
                    onClick={() =>
                      setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                    }
                  />
                  <h3 className="ml-4 font-semibold text-white">Stock</h3>
                </div>
              </div>
            </Link>
            <div className="mt-8">
              <p className="text-lg font-bold text-center text-green-600 border-b border-white mx-2">
                Reports
              </p>
              <Link
                onClick={() => setActiveMenu((prevState) => !prevState)}
                to="/sales"
              >
                <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-stone-400">
                  <div className="w-3/4 flex  items-center justify-items-start   ">
                    {/* icon  */}
                    <FcSalesPerformance
                      className="text-xl text-white "
                      onClick={() =>
                        setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                      }
                    />
                    <h3 className="ml-4 font-semibold text-white">Sales</h3>
                  </div>
                </div>
              </Link>
              <Link
                onClick={() => setActiveMenu((prevState) => !prevState)}
                to="/expenseReport"
              >
                <div className="w-52 flex  items-center justify-center py-3 hover:text-white  hover:bg-stone-400">
                  <div className="w-3/4 flex  items-center justify-items-start   ">
                    {/* icon  */}
                    <TbZoomMoney
                      className="text-xl text-white "
                      onClick={() =>
                        setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                      }
                    />
                    <h3 className="ml-4 font-semibold text-white">
                      Expense Report
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;

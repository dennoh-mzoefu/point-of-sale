import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PreOrderItem from "./PreOrderItem";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

function PreOrders() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(0);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  const { currentOrders } = useSelector((state) => state.order);
  return (
    <div
      className={
        activeMenu
          ? "rounded-md ml-4 w-fit bg-white p-2"
          : "bg-white p-1 mx-1 w-fit"
      }
    >
      {activeMenu ? (
        <div className="flex items-center flex-col">
          <div className="flex items-center">
            <p className="text-center text-xl -black h-2xl mr-3 mb-2">
              Orders{" "}
            </p>
            <GiCancel
              onClick={() => setActiveMenu((prevState) => !prevState)}
            />
          </div>
          <hr className="mb-3"></hr>
          {currentOrders?.map((item, index) => {
            return (
              <div key={index}>
                <PreOrderItem item={item} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <AiOutlineShoppingCart onClick={() => setActiveMenu(!activeMenu)} />
        </div>
      )}
    </div>
  );
}

export default PreOrders;

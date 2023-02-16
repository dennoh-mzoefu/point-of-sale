import React, { useEffect, useState } from "react";
import AddStock from "../components/AddStock";
import Orders from "../components/Orders/Orders";
import Receipt from "../components/Receipt/Receipt";
import { MdReceiptLong } from "react-icons/md";
import { useSelector } from "react-redux";

function OrderManager() {
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
  return (
    <div className="w-full scroll-auto flex  items-center flex-wrap justify-center">
      <Orders />

      {activeMenu ? (
        <Receipt />
      ) : (
        <MdReceiptLong
          className="p-1 text-3xl mt-3 bg-white"
          onClick={() => setActiveMenu(!activeMenu)}
        />
      )}
    </div>
  );
}

export default OrderManager;

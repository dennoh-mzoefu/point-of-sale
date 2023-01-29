import React from "react";
import AddStock from "../components/AddStock";
import Menu from "../components/Menu/Menu";
import PreOrders from "../components/Orders/PreOrders";

function MenuPage() {
  return (
    <div className=" w-full mt-2 ml-2 ">
      <div className="flex w-full">
        <Menu className="" />
        <div className="w-full flex flex-col">
          <PreOrders />
          <AddStock />
        </div>
      </div>
    </div>
  );
}

export default MenuPage;

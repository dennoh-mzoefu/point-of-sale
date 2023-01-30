import React from "react";
import AddStock from "../components/AddStock";
import Menu from "../components/Menu/Menu";
import PreOrders from "../components/Orders/PreOrders";

function MenuPage() {
  return (
    <div className=" w-full mt-2 ml-2 ">
      <div className="flex w-full justify-between">
        <Menu className="" />
        <div className=" flex flex-col min-w-4/12">
          <PreOrders />
          <AddStock />
        </div>
      </div>
    </div>
  );
}

export default MenuPage;

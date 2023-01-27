import React from "react";
import AddStock from "../components/AddStock";
import Menu from "../components/Menu/Menu";

function MenuPage() {
  return (
    <div className=" w-full mt-2 ml-2 ">
      <div className="flex w-full">
        <Menu className="" />
        <AddStock className="w-full" />
      </div>
    </div>
  );
}

export default MenuPage;

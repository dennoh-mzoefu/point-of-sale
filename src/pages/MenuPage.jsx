import React from "react";
import AddStock from "../components/AddStock";
import Menu from "../components/Menu/Menu";

function MenuPage() {
  return (
    <div className="bg-white shadow-inner rounded-tl-md w-full mt-2 ml-2 border-l border-t border-slate-300/95">
      <div className="flex w-full">
        <Menu className="" />
        <AddStock className="w-full" />
      </div>
    </div>
  );
}

export default MenuPage;

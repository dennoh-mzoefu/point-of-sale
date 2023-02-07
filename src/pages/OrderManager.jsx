import React from "react";
import AddStock from "../components/AddStock";
import Orders from "../components/Orders/Orders";
import Receipt from "../components/Receipt/Receipt";

function OrderManager() {
  return (
    <div className="w-full flex ml-10 items-start justify-center">
      <Orders />
      <Receipt />
    </div>
  );
}

export default OrderManager;

import React from "react";
import { useSelector } from "react-redux";
import PreOrderItem from "./PreOrderItem";

function PreOrders() {
  const { currentOrders } = useSelector((state) => state.order);
  return (
    <div className="rounded-md ml-4 w-fit bg-white p-2">
      <p className="text-center text-xl -black h-2xl mb-2">Order List</p>
      <hr className="mb-3"></hr>
      {currentOrders?.map((item, index) => {
        return (
          <div key={index}>
            <PreOrderItem item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default PreOrders;

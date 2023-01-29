import React from "react";
import { useSelector } from "react-redux";
import PreOrderItem from "./PreOrderItem";

function PreOrders() {
  const { currentOrders } = useSelector((state) => state.order);
  return (
    <div className="">
      Order List
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

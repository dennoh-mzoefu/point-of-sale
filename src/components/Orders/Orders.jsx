import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

function Orders() {
  const { orders } = useSelector((state) => state.order);

  return (
    <div>
      {orders?.map((item) => {
        return (
          <div>
            {console.log(item, "orders")}
            <table>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Done</th>
                <th>Cancelled</th>
                <th>Delete</th>
              </tr>
              <OrderItem order={item} />
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default Orders;

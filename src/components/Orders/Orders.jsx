import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

function Orders() {
  const { orders } = useSelector((state) => state.order);
  console.log({ orders });
  return (
    <div className="flex flex-col justify-center items-center   mt-5">
      <p className="text-xl bg-white p-3 w-3/4 text-center">Orders Manager</p>
      <hr className="my-2"></hr>
      <table className=" w-3/4 mx-auto  text-left text-gray-500">
        <thead className="text-md text-gray-700 uppercase bg-green-200">
          <tr>
            <th className="px-6 py-3 border border-white">Meal</th>
            <th className="px-6 py-3 border border-white">Quantity</th>
            <th className="px-6 py-3 border border-white">Price</th>
            <th className="px-6 py-3 border border-white">Done</th>
            <th className="px-6 py-3 border border-white">Cancelled</th>
            <th className="px-6 py-3 border border-white">Delete</th>
          </tr>
        </thead>
        {orders?.map((item, index) => {
          return (
            <Fragment key={index}>
              <OrderItem order={item} index={index} />
            </Fragment>
          );
        })}
      </table>
    </div>
  );
}

export default Orders;

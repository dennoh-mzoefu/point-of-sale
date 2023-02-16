import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

function Orders() {
  const { orders } = useSelector((state) => state.order);
  console.log({ orders });
  return (
    <div className=" scroll-auto flex flex-col justify-center items-center     mt-5">
      <p className="text-xl bg-white p-3 w-3/4 max-w-fit text-center">
        Orders Manager
      </p>
      <hr className="my-2"></hr>
      <table className=" w-3/4 max-w-fit mx-auto  text-left text-stone-500">
        <thead className="w-fit text-md text-stone-700 uppercase bg-stone-200">
          <tr>
            <th className="px-2 py-3 border border-white">Meal</th>
            <th className="px-2 py-3 border border-white">Quantity</th>
            <th className="px-2 py-3 border border-white">Price</th>
            <th className="px-2 py-3 border border-white">Done</th>
            <th className="px-2 py-3 border border-white">Cancelled</th>
            <th className="px-2 py-3 border border-white">Delete</th>
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

import React, { useState } from "react";
// import React from "react";
import { AiOutlineUndo } from "react-icons/ai";
import logo from "../../assets/resturant-logo.svg";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { doneOrder, paidOrder, unDoneOrder } from "../../redux/orderSlice";
import { addSale } from "../../redux/salesSlice";

function ReceiptGenerated({ receiptId, newOrders, total, amount, balance }) {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "stock",
    onAfterPrint: () => alert("Print Success"),
  });
  const dispatch = useDispatch();
  const generateReceipt = () => {
    newOrders.forEach((item, index) => {
      dispatch(
        addSale({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          time: item.time,
          receiptId,
        })
      );
      dispatch(doneOrder(item.id));
      dispatch(paidOrder(item.id));
    });
    handlePrint();
    // dispatch(addReceipt({id,amount,balance}))
  };
  return (
    <div>
      <div ref={componentRef} className="mt-5 p-3 bg-white">
        <div className="flex flex-col w-full">
          <div className="flex justify-around mb-3">
            <div className="mr-9">
              <h2 className="text-2xl mr-10 font-bold">Green Pastures</h2>
              <p className="text-sm">
                Date: {new Date().toLocaleDateString("en-US", options)}
              </p>
            </div>
            <div className="bg-stone-400 p-4 rounded-full">
              <img
                src={logo}
                className="h-9 shadow-md drop-shadow-lg shadow-slate-200 rounded-full w-fit  "
              />
            </div>
            {/* body  */}
          </div>
          <div>
            {newOrders?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex bg-green-300 shadow-md mt-3 justify-between p-3"
                >
                  <div className="flex justify-self-start mx-5">
                    {item.name}
                  </div>
                  <div className="flex justify-self-start mx-5">
                    {item.quantity}
                  </div>
                  <div className="flex justify-self-start mx-5">
                    {item.price}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-16 flex justify-between">
            <div></div>
            <div className="flex flex-col mt-6">
              <p className="mt-1 pb-1 border-b-2 text-base font-semibold text-stone-800">
                Total Cost: {total}
              </p>
              <p className="mt-1 pb-1 border-b-2 text-base font-semibold text-stone-800">
                Amount: {amount}
              </p>
              <p className="mt-1 pb-1 border-b-2 text-base font-semibold text-stone-800">
                Balance: {balance}
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm text-stone-400 mt-4">
          <span className="font-bold">ID: </span>
          {receiptId}
        </p>
      </div>
      <button
        className="bg-blue-300 mt-2 mx-2 p-2"
        onClick={() => generateReceipt()}
      >
        Print
      </button>
    </div>
  );
}

export default ReceiptGenerated;

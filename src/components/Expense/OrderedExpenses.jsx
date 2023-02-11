import React from "react";

function OrderedExpenses({ data, title, innerTitle }) {
  return (
    <div className="flex flex-col shadow-xl py-4 bg-slate-200 text-stone-800 px-4">
      <h2 className="text-3xl">{title}</h2>
      {console.log({ title })}
      <div className="flex mx-4">
        <p className="text-lg font-bold flex justify-self-start mx-4">
          {innerTitle}
        </p>
        <p className="text-lg font-bold flex justify-self-start mx-4">
          Quantity
        </p>
        <p className="text-lg font-bold flex justify-self-start mx-4">Price</p>
      </div>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className="flex justify-between bg-stone-200/70  text-white font-semibold text-lg mt-1"
          >
            <p className="text-stone-800 flex justify-self-start mx-4">
              {item.name}
            </p>
            <p className="text-stone-800 flex justify-self-start mx-4">
              {item.quantity}
            </p>
            <p className="text-stone-800 flex justify-self-start mx-4">
              {item.price}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default OrderedExpenses;

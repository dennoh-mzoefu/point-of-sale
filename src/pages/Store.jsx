import React from "react";
import { useSelector } from "react-redux";

function Store() {
  const { stock } = useSelector((state) => state.stock);
  const names = stock?.map((item) => item.name);
  let dataItem = [...new Set(names)];
  const addFunction = (nameArg) => {
    let arr = stock?.filter((item) => item.name == nameArg);
    let arrNum = arr?.map((a) => {
      return parseInt(a.quantity);
    });
    const sum = arrNum.reduce((a, b) => a + b, 0);
    return sum;
  };
  dataItem = dataItem?.map((item) => ({
    name: item,
    quantity: addFunction(item),
  }));
  console.log({ dataItem });
  return (
    <div className="flex flex-col  my-4 items-center justify-center">
      <h2 className="text-2xl px-6 bg-white py-3 my-3">Stock quantity</h2>
      {dataItem?.map((item, index) => {
        return (
          <div key={index} className="flex w-60 justify-around mb-1">
            <p className=" p-2 bg-stone-200 w-full">{item.name}</p>
            <p className=" p-2 bg-stone-500 w-full">{item.quantity}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Store;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GrAddCircle } from "react-icons/gr";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { addQuantity } from "../redux/stockSlice";

function Store() {
  const dispatch = useDispatch();
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
  const handleAdd = (item) => {
    console.log({ item });

    // dispatch(addQuantity({ ...item, quantity: quantity + 1 }));
  };
  const handleDelete = (item) => {
    console.log({ item });
    // dispatch(addQuantity({ ...item, quantity: quantity - 1 }));
  };

  return (
    <div className="flex flex-col  my-4 items-center justify-center">
      <h2 className="text-2xl px-6 bg-white py-3 my-3">Stock quantity</h2>
      <div className="flex min-w-fit w-3/5 justify-around">
        <div className="p-2 bg-green-400 w-full mr-1 mb-1">Name</div>
        <div className="p-2 bg-green-400 w-full mr-1 mb-1">Quantity</div>
        <div className="p-2 bg-green-400 w-full mr-1 mb-1"></div>
        <div className="p-2 bg-green-400 w-full mr-1 mb-1">Remove</div>
      </div>
      {dataItem?.map((item, index) => {
        return (
          <div key={index} className="flex  justify-around mb-1 w-3/5">
            <p className=" p-2 bg-stone-200 w-full">{item.name}</p>
            <p className=" p-2 bg-stone-500 w-full">{item.quantity}</p>
            <p className=" p-2 bg-stone-200 w-full flex items-center ">
              <GrAddCircle
                className="cursor-pointer"
                onClick={(e) => {
                  handleAdd(item);
                }}
              />
            </p>
            <p className=" p-2 bg-stone-500 w-full flex items-center ">
              <IoMdRemoveCircleOutline
                className="cursor-pointer"
                onClick={() => {
                  handleDelete(item);
                }}
              />
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Store;

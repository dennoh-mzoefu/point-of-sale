import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addOrder, deleteCurrentOrder } from "../../redux/orderSlice";

function PreOrderItem({ item }) {
  const [orderItem, setOrderItem] = useState(item);
  const [quantity, setQuantity] = useState(parseInt(item.quantity));
  let a = item.price;
  const [price, setPrice] = useState(item.price);
  console.log(quantity);
  const dispatch = useDispatch();

  const AddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    console.log({ quantity });
  };
  const LowerQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
    console.log({ quantity });
  };
  const confirmOrder = (item) => {
    dispatch(
      addOrder({
        quantity,
        name: orderItem.name,
        price,
        isPrepared: false,
        isCancelled: false,
      })
    );
  };
  const DeleteOrder = () => {
    dispatch(deleteCurrentOrder(orderItem.orderId));
  };
  useEffect(() => {
    setPrice(quantity * a);
  }, [quantity]);
  return (
    <div className="flex shadow-xl mb-2 ">
      <div className="flex flex-col  mr-3 ">
        <div className="bg-blue-200 text-white-500 pl-2 w-fit w-36 rounded-md shadow-xl">
          <h3>{item.name}</h3>
          <h3>Ksh {price}</h3>
        </div>
      </div>
      <div>
        <div className="flex items-center mb-2">
          <button
            className="px-1 mx-1 shadow-md bg-indigo-400 text-slate-900"
            onClick={() => AddQuantity()}
          >
            +
          </button>
          <p>{quantity}</p>
          <button
            className="px-1 mx-1 shadow-md bg-purple-400 text-slate-900"
            onClick={() => LowerQuantity()}
          >
            -
          </button>
        </div>
        <div className="flex">
          <button
            className="border bg-slate-600 px-1 text-sm text-white hover:bg-green-300"
            onClick={() => confirmOrder()}
          >
            Confirm{" "}
          </button>
          <button
            className="border bg-slate-600 p-2 text-sm text-white hover:bg-red-300"
            onClick={() => DeleteOrder()}
          >
            Delete{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreOrderItem;
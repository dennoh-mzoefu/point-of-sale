import React, { useEffect, useState } from "react";

function PreOrderItem({ item }) {
  const [orderItem, setOrderItem] = useState(item);
  const [quantity, setQuantity] = useState(parseInt(item.quantity));
  let a = item.price;
  const [price, setPrice] = useState(item.price);
  console.log(quantity);
  const AddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    console.log({ quantity });
  };
  const LowerQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
    console.log({ quantity });
  };
  const confirmOrder = () => {};
  const DeleteOrder = () => {};
  useEffect(() => {
    setPrice(quantity * a);
  }, [quantity]);
  return (
    <div className="flex bg-slate-400">
      <div className="flex flex-col">
        <h3>{item.name}</h3>
        <h3>{price}</h3>
      </div>
      <div>
        <div className="flex items-center">
          <button
            className="p-1 shadow-md bg-white text-slate-900"
            onClick={() => AddQuantity()}
          >
            +
          </button>
          <p>{quantity}</p>
          <button onClick={() => LowerQuantity()}>-</button>
        </div>
        <div className="flex">
          <button className="border" onClick={() => confirmOrder()}>
            Confirm{" "}
          </button>
          <button className="border" onClick={() => DeleteOrder()}>
            Delete{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreOrderItem;

import React, { useEffect, useState } from "react";
import { AiOutlineUndo } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { doneOrder, paidOrder, unDoneOrder } from "../../redux/orderSlice";
import { addSale } from "../../redux/salesSlice";

function Receipt() {
  const { orders } = useSelector((state) => state.order);
  const [newOrders, setnewOrders] = useState([]);
  const dispatch = useDispatch();
  let arr = newOrders?.filter((item) => item.isPrepared == true);
  let arrNum = arr?.map((item, index) => item.price);
  let arrPrice = arrNum.reduce((a, b) => a + b, 0);
  const [total, setTotal] = useState(arrPrice);

  console.log({ newOrders });
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  console.log({ amount });
  useEffect(() => {
    setnewOrders(
      orders?.filter((item) => item.isPrepared == true && item.isPaid == false)
    );
  }, [orders]);
  useEffect(() => {
    setBalance(amount - total);
  }, [amount, total]);

  const undoOrder = (id) => {
    dispatch(unDoneOrder(id));
  };

  const generateReceipt = (e) => {
    const receiptId = v4();
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

    // dispatch(addReceipt({id,amount,balance}))
  };
  return (
    <div className="mt-8 p-5 min-h-40 ml-10 bg-white">
      {newOrders?.map((item, index) => {
        return (
          <div
            key={index}
            className="flex bg-slate-200 shadow-md mt-3 justify-between p-3"
          >
            <div className="flex justify-self-start mx-5">{item.name}</div>
            <div className="flex justify-self-start mx-5">{item.quantity}</div>
            <div className="flex justify-self-start mx-5">{item.price}</div>
            <div className="flex justify-self-start mx-5">
              <AiOutlineUndo onClick={() => undoOrder(item.id)} />
            </div>
          </div>
        );
      })}
      <div className="bg-amber-100 py-1 px-2 mt-5 shadow-sm">
        <div className="flex mt-4 border-b border-black pb-1">
          <p className="mr-10">Total</p>
          <p>{total}</p>
        </div>
        <div className="flex mt-4 border-b border-black pb-1">
          <p className="mr-6">Amount</p>
          <input
            type="number"
            value={amount}
            className="border border-black"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="flex mt-4 border-b border-black pb-1">
          <p className="mr-10">Balance</p>
          <p>{balance}</p>
          {console.log({ balance })}
        </div>
      </div>
      <div>
        <button
          onClick={(e) => generateReceipt(e)}
          className="bg-purple-300 mt-2 p-2"
        >
          Generate Receipt
        </button>
      </div>
    </div>
  );
}

export default Receipt;

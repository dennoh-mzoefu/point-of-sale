import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/expenseSlice";
import { addStockItem } from "../redux/stockSlice";

function Expense() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState("");
  // const [name, setName] = useState('');
  const handleOtherExpenses = () => {
    const category = "other";
    if (quantity && name && price && category) {
      console.log(quantity, name, price, category);
    } else {
      alert("Missing Field");
    }
  };
  const reset = () => {
    setName("");
    setQuantity("");
    setPrice("");
  };
  const handleConfirm = () => {
    const category = "stock";
    if (quantity && name && price && category) {
      console.log(quantity, name, price, category);

      dispatch(addExpense({ quantity, name, price, category }));
      if (category == "stock") {
        dispatch(addStockItem({ name, price, quantity }));
      }
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-3 px-3">
      <h2 className="text-2xl py-2 w-full bg-white text-center ">Expense</h2>
      <div className="flex flex-wrap mt-5 w-full justify-around">
        <div className=" flex flex-col  p-3 bg-white">
          <h3>Stock Expenses</h3>
          <div className="flex w-80 bg-slate-100 p-2 my-2">
            <p>Enter Item:</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full  border-b border-black "
              placeholder="Eg: tomato"
            />
          </div>
          <div className="flex text-sm bg-slate-100 p-2 my-2">
            <p>Enter Total Price:</p>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              className="w-full  border-b border-black "
              placeholder="Amount Spent"
            />
          </div>
          <div className="flex bg-slate-100 p-2 my-2">
            <p className="text-sm">Enter Total Quantity:</p>
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              className="w-full  border-b border-black "
              placeholder="Eg: tomato"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => handleConfirm()}
              className="px-2 py-1 bg-green-400 font-bold text-slate-50"
            >
              Confirm
            </button>
            <button
              onClick={() => reset()}
              className="px-3 py-1 bg-slate-400 font-bold text-white"
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex flex-col  p-3 bg-white">
          <h3>Other Expenses</h3>
          <div className="w-80">
            <div className="flex bg-green-100 p-2 my-2 min-w-96">
              <p>Enter Item:</p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full border-b-2 border-b-green-700 "
                placeholder="Eg: transport"
              />
            </div>
            <div className="flex text-sm bg-green-100 p-2 my-2">
              <p>Enter Total Price:</p>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                className="w-full border-b-2 border-b-green-700 "
                placeholder="Amount spent"
              />
            </div>
            <div className="flex bg-green-100 p-2 my-2">
              <p className="text-sm">Enter Total Quantity:</p>
              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="text"
                className="w-full border-b-2 border-b-green-700"
                placeholder="Quantity bought"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => handleOtherExpenses()}
                className="px-2 py-1 bg-green-400 font-bold text-slate-50"
              >
                Confirm
              </button>
              <button
                onClick={() => reset()}
                className="px-3 py-1 bg-slate-400 font-bold text-white"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expense;

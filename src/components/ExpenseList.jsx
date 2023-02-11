import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AiFillDelete } from "react-icons/ai";
import { deleteExpense } from "../redux/expenseSlice";

function ExpenseList() {
  const [dates, setDates] = useState(false);
  const { expense } = useSelector((state) => state.expense);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };
  const handleLoad = (item) => {
    const today = new Date();
    console.log(today.getDate());
    let milli = parseInt(item.time.seconds) * 1000;
    let nano = parseInt(parseInt(item.time.nanoseconds) / 1000000);
    // let t = d.getDate();
    const d = new Date(milli + nano);
    console.log(d);
    // if (today.getDate() == d.getDate()) {
    //   setDates(true);
    // }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center mt-4 shadow-lg">
      <h3 className="bg-stone-200 w-3/5 text-center text-xl shadow-lg p-3">
        Expenses Record
      </h3>
      {expense && (
        <div className="flex w-3/5 justify-between bg-white p-3 my-1">
          <div>Expense</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>Delete</div>
        </div>
      )}
      {expense &&
        expense.map((item, index) => {
          return (
            <div
              key={index}
              onLoad={handleLoad(item)}
              className="flex w-3/5 justify-between bg-slate-500 text-white font-semibold text-lg mt-1"
            >
              <div className="flex justify-self-start mx-2">{item.name}</div>
              <div className="flex justify-self-start mx-2">
                {item.quantity}
              </div>
              <div className="flex justify-self-start mx-2">{item.price}</div>
              <div className="flex justify-self-start py-2">
                <AiFillDelete onClick={() => handleDelete(item.id)} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ExpenseList;

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AiFillDelete } from "react-icons/ai";
import { deleteExpense } from "../redux/expenseSlice";

function ExpenseList() {
  const { expense } = useSelector((state) => state.expense);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };
  return (
    <div className="w-full flex flex-col justify-center items-center mt-4 shadow-lg">
      <h3 className="bg-green-200 w-3/5 text-center text-xl shadow-lg p-3">
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

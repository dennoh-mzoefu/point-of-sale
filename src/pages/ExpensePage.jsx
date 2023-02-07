import React from "react";
import Expense from "../components/Expense";
import ExpenseList from "../components/ExpenseList";

function ExpensePage() {
  return (
    <div className="flex flex-col w-full flex-wrap w-full">
      <Expense />
      <ExpenseList />
    </div>
  );
}

export default ExpensePage;

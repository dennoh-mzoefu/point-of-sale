import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExpenseChart from "../components/charts/ExpenseChart";
import OrderedExpenses from "../components/Expense/OrderedExpenses";

function ExpenseReport() {
  const { expense } = useSelector((state) => state.expense);
  const [today, setToday] = useState([]);
  const [yesterday, setYesterday] = useState([]);
  const [preYesterday, setPreYesterday] = useState([]);
  let t = new Date();
  let y = new Date();
  let prevY = new Date();
  y.setDate(y.getDate() - 1);
  prevY.setDate(prevY.getDate() - 2);
  let newYesterday = new Date(y.toString().slice(0, 16));
  let newPrevYesterday = new Date(prevY.toString().slice(0, 16));
  let newToday = new Date(t.toString().slice(0, 16));
  useEffect(() => {
    // today expenses
    setToday(
      expense.filter((item) => {
        let newDate = new Date(item.time.seconds * 1000);
        return (
          newDate.getTime() >= newToday.getTime() &&
          newDate.getTime() < t.getTime()
        );
      })
    );
  }, [expense]);
  useEffect(() => {
    // today expenses
    setYesterday(
      expense.filter((item) => {
        let newDate = new Date(item.time.seconds * 1000);
        return (
          newDate.getTime() >= newYesterday.getTime() &&
          newDate.getTime() < newToday.getTime()
        );
      })
    );
  }, [expense]);
  useEffect(() => {
    // today expenses
    setPreYesterday(
      expense.filter((item) => {
        let newDate = new Date(item.time.seconds * 1000);
        return (
          newDate.getTime() >= newPrevYesterday.getTime() &&
          newDate.getTime() < newYesterday.getTime()
        );
      })
    );
  }, [expense]);
  return (
    <div className="w-full">
      {today && (
        <div className="my-8 px-4 mt-4 w-fit flex flex-wrap m-auto items-center bg-slate-100 shadow-lg">
          <OrderedExpenses innerTitle="expense" title="Today" data={today} />
          <ExpenseChart oldChartData={today} />
        </div>
      )}

      {yesterday && (
        <div className="my-8 px-4 mt-4 w-fit flex flex-wrap m-auto items-center bg-slate-100 shadow-lg">
          <OrderedExpenses
            innerTitle="expense"
            title="Yesterday"
            data={yesterday}
          />
          <ExpenseChart oldChartData={yesterday} />
        </div>
      )}

      {preYesterday && (
        <div className=" my-8 px-4 mt-4 w-fit flex flex-wrap m-auto items-center bg-slate-100 shadow-lg">
          <OrderedExpenses
            innerTitle="expense"
            title="Two days Ago"
            data={preYesterday}
          />
          <ExpenseChart oldChartData={preYesterday} />
        </div>
      )}
    </div>
  );
}

export default ExpenseReport;

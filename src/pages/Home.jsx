import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlinePayment } from "react-icons/md";

function Home() {
  const { expense } = useSelector((state) => state.expense);
  const { sales } = useSelector((state) => state.sales);
  const [todayExpense, setTodayExpense] = useState([]);
  const [todaySales, setTodaySales] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  let t = new Date();

  let newTodayExpense = new Date(t.toString().slice(0, 16));
  useEffect(() => {
    // todayExpense expenses
    setTodayExpense(
      expense.filter((item) => {
        let newDate = new Date(item.time.seconds * 1000);
        return (
          newDate.getTime() >= newTodayExpense.getTime() &&
          newDate.getTime() < t.getTime()
        );
      })
    );
  }, [expense]);
  useEffect(() => {
    // todayExpense expenses
    setTodaySales(
      expense.filter((item) => {
        let newDate = new Date(item.time.seconds * 1000);
        return (
          newDate.getTime() >= newTodayExpense.getTime() &&
          newDate.getTime() < t.getTime()
        );
      })
    );
  }, [expense]);
  useEffect(() => {
    setTotalExpense(
      todayExpense
        ?.map((item) => parseInt(item.price))
        .reduce((a, b) => a + b, 0)
    );
  }, [todayExpense]);
  useEffect(() => {
    setTotalSales(
      todaySales?.map((item) => parseInt(item.price)).reduce((a, b) => a + b, 0)
    );
  }, [todaySales]);

  return (
    <div className="flex justify-center p-6">
      {console.log({ todayExpense })}
      {console.log({ totalExpense })}
      <div className="flex mx-4 py-8 px-4 w-64 bg-white justify-around">
        <div className="flex flex-col">
          <p>Total Expense</p>
          <p className="text-3xl">{totalExpense}</p>
        </div>
        <MdOutlinePayment className="text-2xl w-10 h-10 p-1 shadow-sm rounded-full bg-red-600" />
      </div>
      <div className="flex mx-4 py-8 px-4 w-64 bg-white justify-around">
        <div className="flex flex-col">
          <p>Total Sales</p>
          <p className="text-3xl">{totalSales}</p>
        </div>
        <MdOutlinePayment className="text-2xl w-10 h-10 p-1 shadow-sm rounded-full bg-red-600" />
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlinePayment } from "react-icons/md";

function Home() {
  const { expense } = useSelector((state) => state.expense);
  const [today, setToday] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  let t = new Date();

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
    setTotalExpense(
      today?.map((item) => parseInt(item.price)).reduce((a, b) => a + b, 0)
    );
  }, [today]);

  return (
    <div className="flex justify-center p-6">
      {console.log({ today })}
      {console.log({ totalExpense })}
      <div className="flex mx-4 py-8 px-4 w-56 bg-white justify-around">
        <div className="flex flex-col">
          <p>Total Expense</p>
          <p className="text-3xl">{totalExpense}</p>
        </div>
        <MdOutlinePayment className="text-2xl w-10 h-10 p-1 shadow-sm rounded-full bg-red-600" />
      </div>
    </div>
  );
}

export default Home;

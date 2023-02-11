import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlinePayment } from "react-icons/md";
import PieChart from "../components/charts/PieChart";
import OrderedExpenses from "../components/Expense/OrderedExpenses";
import ExpenseChart from "../components/charts/ExpenseChart";
import Employees from "../components/Employees";

function Home() {
  const { expense } = useSelector((state) => state.expense);
  const { sales } = useSelector((state) => state.sales);
  const [todayExpense, setTodayExpense] = useState([]);
  const [todaySales, setTodaySales] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [mostQuantity, setMostQuantity] = useState(0);
  const [mostAmount, set] = useState(0);
  let t = new Date();

  let newTodayExpense = new Date(t.toString().slice(0, 16));
  useEffect(() => {
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
    setTodaySales(
      sales.filter((item) => {
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
    <div className="flex justify-center flex-wrap p-6">
      <div className="flex mx-4 mb-2 py-8 h-fit px-4 w-64 bg-white justify-around">
        <div className="flex flex-col">
          <p>Total Sales</p>
          <p className="text-3xl">{totalSales}</p>
        </div>
        <MdOutlinePayment className="text-2xl w-10 h-10 p-1 shadow-sm rounded-full bg-amber-400" />
      </div>
      <div className="flex mx-4 mb-2 py-8 h-fit px-4 w-64 bg-white justify-around">
        <div className="flex flex-col">
          <p>Total Expense</p>
          <p className="text-3xl">{totalExpense}</p>
        </div>
        <MdOutlinePayment className="text-2xl w-10 h-10 p-1 shadow-sm rounded-full bg-red-600" />
      </div>
      <div className="flex mx-4 mb-2 py-8 h-fit px-4 w-64 bg-white justify-around">
        <div className="flex flex-col">
          <p>Most Sold</p>
          <p className="text-3xl">{totalExpense}</p>
        </div>
        <MdOutlinePayment className="text-2xl w-10 h-10 p-1 shadow-sm rounded-full bg-red-600" />
      </div>
      <div className="flex mx-4 mb-2 py-8 h-fit px-4 w-64 bg-white justify-around">
        <PieChart
          oldChartData={[
            { name: "sales", price: totalSales },
            { name: "expense", price: totalExpense },
          ]}
        />
      </div>
      {todaySales && (
        <div className="my-8 px-4 mt-4 w-fit flex flex-wrap m-auto items-center bg-slate-100 shadow-lg">
          <OrderedExpenses innerTitle="Sales" title="Today" data={todaySales} />
          <ExpenseChart oldChartData={todaySales} />
        </div>
      )}
      {todayExpense && (
        <div className="my-8 px-4 mt-4 w-fit flex flex-wrap m-auto items-center bg-slate-100 shadow-lg">
          <OrderedExpenses
            innerTitle="Expense"
            title="Today"
            data={todayExpense}
          />
          <ExpenseChart oldChartData={todayExpense} />
        </div>
      )}
      <Employees />
    </div>
  );
}

export default Home;

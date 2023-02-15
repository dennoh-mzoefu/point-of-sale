import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { auth } from "../../utils/firebase";
import ExpenseChart from "../components/charts/ExpenseChart";
import OrderedExpenses from "../components/Expense/OrderedExpenses";

function Sales() {
  const { sales } = useSelector((state) => state.sales);
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
    setToday(
      sales.filter((item) => {
        let newDate = new Date(item.time.seconds * 1000);
        return (
          newDate.getTime() >= newToday.getTime() &&
          newDate.getTime() < t.getTime()
        );
      })
    );
  }, [sales]);
  useEffect(() => {
    setYesterday(
      sales.filter((item) => {
        let newDate = new Date(item.time.seconds * 1000);
        return (
          newDate.getTime() >= newYesterday.getTime() &&
          newDate.getTime() < newToday.getTime()
        );
      })
    );
  }, [sales]);
  useEffect(() => {
    setPreYesterday(
      sales.filter((item) => {
        let newDate = new Date(item.time.seconds * 1000);
        return (
          newDate.getTime() >= newPrevYesterday.getTime() &&
          newDate.getTime() < newYesterday.getTime()
        );
      })
    );
  }, [sales]);
  const { currentUser, users } = useSelector((state) => state.user);
  const [user, loading] = useAuthState(auth);

  const [role, setRole] = useState(currentUser?.roles);
  useEffect(() => {
    users &&
      user &&
      setRole(users.filter((item) => item.uid == user.uid)[0]?.roles);
  }, [user, users]);
  return (
    <div className="flex flex-col justify-center">
      {today && (
        <div className="my-8 px-4 mt-4 w-fit flex flex-wrap m-auto items-center bg-slate-100 shadow-lg">
          <OrderedExpenses innerTitle="Sales" title="Today" data={today} />
          <ExpenseChart oldChartData={today} />
        </div>
      )}

      {role == "admin" && yesterday && (
        <div className="my-8 px-4 mt-4 w-fit flex flex-wrap m-auto items-center bg-slate-100 shadow-lg">
          <OrderedExpenses
            innerTitle="Sales"
            title="Yesterday"
            data={yesterday}
          />
          <ExpenseChart oldChartData={yesterday} />
        </div>
      )}

      {role == "admin" && preYesterday && (
        <div className=" my-8 px-4 mt-4 w-fit flex flex-wrap m-auto items-center bg-slate-100 shadow-lg">
          <OrderedExpenses
            innerTitle="Sales"
            title="Two days Ago"
            data={preYesterday}
          />
          <ExpenseChart oldChartData={preYesterday} />
        </div>
      )}
    </div>
  );
}

export default Sales;

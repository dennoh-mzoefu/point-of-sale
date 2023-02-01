import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { colRef, expenseColRef, ordersColRef } from "../utils/firebase";
import { fetchExpenses } from "./redux/expenseSlice";
import { fetchMenu } from "./redux/menuSlice";
import { fetchOrders } from "./redux/orderSlice";

function PreApp() {
  const [menuItems, setMenuItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [expense, setExpense] = useState([]);
  const dispatch = useDispatch();
  let b = [];
  useEffect(() => {
    const unSubscribe = onSnapshot(expenseColRef, (snapshot) => {
      setExpense(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unSubscribe();
  }, []);
  useEffect(() => {
    const unSubscribe = onSnapshot(ordersColRef, (snapshot) => {
      setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unSubscribe();
  }, []);
  useEffect(() => {
    const unSubscribe = onSnapshot(colRef, (snapshot) => {
      setMenuItems(snapshot.docs.map((doc) => doc.data()));
    });
    return () => unSubscribe();
  }, []);
  useEffect(() => {
    menuItems.length !== 0 && dispatch(fetchMenu(menuItems));
  }, [menuItems]);
  useEffect(() => {
    dispatch(fetchOrders(orders));
  }, [orders]);
  useEffect(() => {
    dispatch(fetchExpenses(expense));
  }, [expense]);
  console.log({ menuItems });
  console.log({ orders });

  return <div></div>;
}

export default PreApp;

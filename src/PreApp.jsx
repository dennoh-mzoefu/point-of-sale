import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import {
  auth,
  colRef,
  expenseColRef,
  ordersColRef,
  salesColRef,
  stockColRef,
  userColRef,
} from "../utils/firebase";
import { fetchExpenses } from "./redux/expenseSlice";
import { fetchMenu } from "./redux/menuSlice";
import { fetchOrders } from "./redux/orderSlice";
import { fetchSales } from "./redux/salesSlice";
import { fetchStock } from "./redux/stockSlice";
import { fetchCurrentUser, fetchUser } from "./redux/userSlice";

function PreApp() {
  const [menuItems, setMenuItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [expense, setExpense] = useState([]);
  const [stock, setStock] = useState([]);
  const [sales, setSales] = useState([]);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  let b = [];
  useEffect(() => {
    const unSubscribe = onSnapshot(userColRef, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unSubscribe();
  }, []);
  useEffect(() => {
    const unSubscribe = onSnapshot(salesColRef, (snapshot) => {
      setSales(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unSubscribe();
  }, []);
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
    const unSubscribe = onSnapshot(stockColRef, (snapshot) => {
      setStock(snapshot.docs.map((doc) => doc.data()));
    });
    return () => unSubscribe();
  }, []);
  useEffect(() => {
    dispatch(fetchSales(sales));
  }, [sales]);
  useEffect(() => {
    menuItems.length !== 0 && dispatch(fetchMenu(menuItems));
  }, [menuItems]);
  useEffect(() => {
    dispatch(fetchOrders(orders));
  }, [orders]);
  useEffect(() => {
    console.log({ expense });
    dispatch(fetchExpenses(expense));
  }, [expense]);
  useEffect(() => {
    console.log({ stock });
    dispatch(fetchStock(stock));
  }, [stock]);
  useEffect(() => {
    console.log({ stock });
    dispatch(fetchUser(users));
  }, [users]);

  // authentication
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    user &&
      dispatch(
        fetchCurrentUser(users.filter((item) => item.uid == user.uid)[0])
      );
  }, [user]);

  // console.log(user?.uid);
  // console.log({ users });
  // console.log({ menuItems });
  // console.log({ sales });
  // console.log({ orders });

  return (
    <div>
      {user && console.log(users.filter((item) => item.uid == user.uid)[0])}
    </div>
  );
}

export default PreApp;

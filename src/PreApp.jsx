import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { colRef, ordersColRef } from "../utils/firebase";
import { fetchMenu } from "./redux/menuSlice";
import { fetchOrders } from "./redux/orderSlice";

function PreApp() {
  const [menuItems, setMenuItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  let b = [];
  useEffect(() => {
    onSnapshot(ordersColRef, (snapshot) => {
      setOrders(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      setMenuItems(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  useEffect(() => {
    menuItems.length !== 0 && dispatch(fetchMenu(menuItems));
  }, [menuItems]);
  useEffect(() => {
    orders.length !== 0 && dispatch(fetchOrders(orders));
  }, [menuItems]);
  console.log({ menuItems });
  console.log({ orders });

  return <div></div>;
}

export default PreApp;

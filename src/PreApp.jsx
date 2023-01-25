import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { colRef } from "../utils/firebase";
import { fetchMenu } from "./redux/menuSlice";

function PreApp() {
  const [menuItems, setMenuItems] = useState([]);
  const dispatch = useDispatch();
  let b = [];
  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      setMenuItems(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  useEffect(() => {
    menuItems.length !== 0 && dispatch(fetchMenu(menuItems));
  }, [menuItems]);
  console.log(menuItems);

  return <div></div>;
}

export default PreApp;

import { createSlice, current } from "@reduxjs/toolkit";
import { addDoc, deleteDoc } from "firebase/firestore";
import { db, ordersColRef } from "../../utils/firebase";
const initialState = {
  currentOrders: [],
  orders: [],
  order: {},
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    fetchOrders: (state, action) => {
      state.orders = action.payload;
      console.log(current(state));
    },
    addCurrentOrder: (state, action) => {
      let a = state.currentOrders;
      state.currentOrders.push(action.payload);
      // console.log(current(state));
    },
    addOrder: (state, action) => {
      var index = state.currentOrders.indexOf(action.payload);
      state.currentOrders.splice(index, 1);
      console.log(action.payload);
      addDoc(ordersColRef, {
        quantity: action.payload.quantity,
        name: action.payload.name,
        price: action.payload.price,
        isPrepared: action.payload.isPrepared,
        isCancelled: action.payload.isCancelled,
        time: Date.now(),
      }).then((res) => {
        console.log(res);
      });
    },
    deleteOrder: (state, action) => {
      const docRef = doc(db, "orders", action.payload);

      deleteDoc(docRef).then(() => {
        console.log(action.payload);
      });
    },
    deleteCurrentOrder: (state, action) => {
      console.log(current(state));
      console.log(action.payload);
      var index = state.currentOrders.indexOf(action.payload);
      state.currentOrders.splice(index, 1);
    },
  },
});

export const {
  fetchOrders,
  addCurrentOrder,
  addOrder,
  deleteOrder,
  deleteCurrentOrder,
} = orderSlice.actions;
export default orderSlice.reducer;

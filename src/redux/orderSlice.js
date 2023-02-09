import { createSlice, current } from "@reduxjs/toolkit";
import { addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, ordersColRef } from "../../utils/firebase";
const initialState = {
  currentOrders: [],
  orders: [],
  order: {},
  change: false,
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    changeListener: (state, action) => {
      // state.change =
    },
    fetchOrders: (state, action) => {
      console.log(current(state));
      return {
        ...state,
        orders: action.payload,
      };
    },
    addCurrentOrder: (state, action) => {
      let a = state.currentOrders;
      console.log(action.payload);
      state.currentOrders.push(action.payload);
    },
    addOrder: (state, action) => {
      console.log(action.payload);
      addDoc(ordersColRef, {
        quantity: action.payload.quantity,
        name: action.payload.name,
        price: action.payload.price,
        isPrepared: action.payload.isPrepared,
        isPaid: false,
        isCancelled: action.payload.isCancelled,
        time: new Date(),
      }).then((res) => {
        console.log(res);
      });
      return {
        ...state,
        currentOrders: state.currentOrders.filter(
          (item) => item.orderId !== action.payload.orderId
        ),
      };
    },
    doneOrder: (state, action) => {
      const doneDocRef = doc(db, "orders", action.payload);
      updateDoc(doneDocRef, {
        isPrepared: true,
      }).then(() => {});
    },
    unDoneOrder: (state, action) => {
      const doneDocRef = doc(db, "orders", action.payload);
      updateDoc(doneDocRef, {
        isPrepared: false,
      }).then(() => {});
    },
    paidOrder: (state, action) => {
      const doneDocRef = doc(db, "orders", action.payload);
      updateDoc(doneDocRef, {
        isPaid: true,
      }).then(() => {});
    },
    deleteOrder: (state, action) => {
      const docRef = doc(db, "orders", action.payload);
      console.log("delete");
      deleteDoc(docRef).then(() => {
        console.log(action.payload);
      });
    },
    deleteCurrentOrder: (state, action) => {
      return {
        ...state,
        currentOrders: state.currentOrders.filter(
          (item) => item.orderId !== action.payload
        ),
      };
    },
  },
});

export const {
  fetchOrders,
  addCurrentOrder,
  addOrder,
  deleteOrder,
  deleteCurrentOrder,
  doneOrder,
  paidOrder,
  unDoneOrder,
} = orderSlice.actions;
export default orderSlice.reducer;

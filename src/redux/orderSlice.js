import { createSlice, current } from "@reduxjs/toolkit";
import { addDoc } from "firebase/firestore";
import { ordersColRef } from "../../utils/firebase";
const initialState = {
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
    addOrder: (state, action) => {
      console.log(action.payload);
      addDoc(ordersColRef, {
        quantity: action.payload.quantity,
        name: action.payload.name,
        price: action.payload.price,
        time: Date.now(),
      }).then((res) => {
        console.log(res);
      });
    },
  },
});

export const { fetchOrder } = orderSlice.actions;
export default orderSlice.reducer;

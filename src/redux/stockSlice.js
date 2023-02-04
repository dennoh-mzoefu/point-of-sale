import { createSlice, current } from "@reduxjs/toolkit";
import { addDoc } from "firebase/firestore";
import { stockColRef } from "../../utils/firebase";

const initialState = {
  stock: [],
};

export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStock: (state, action) => {
      return {
        ...state,
        stock: action.payload,
      };
    },
    addStockItem: (state, action) => {
      console.log(action.payload);
      addDoc(stockColRef, {
        quantity: action.payload.quantity,
        name: action.payload.name,
        price: action.payload.price,
        time: new Date(),
      }).then((res) => {
        console.log(res);
      });
    },
  },
});

export const { fetchStock, addStockItem } = stockSlice.actions;
export default stockSlice.reducer;

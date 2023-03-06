import { createSlice, current } from "@reduxjs/toolkit";
import { addDoc, deleteDoc, doc } from "firebase/firestore";
import { db, expenseColRef } from "../../utils/firebase";

const initialState = {
  expense: [],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    fetchExpenses: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        expense: action.payload,
      };
    },
    addExpense: (state, action) => {
      // console.log(action.payload);
      addDoc(expenseColRef, {
        quantity: action.payload.quantity,
        name: action.payload.name,
        price: action.payload.price,
        category: action.payload.category,
        time: new Date(),
      }).then((res) => {
        console.log(res);
      });
    },
    deleteExpense: (state, action) => {
      const docRef = doc(db, "expense", action.payload);
      console.log("delete");
      deleteDoc(docRef).then(() => {
        console.log(action.payload);
      });
    },
  },
});

export const { fetchExpenses, addExpense, deleteExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;

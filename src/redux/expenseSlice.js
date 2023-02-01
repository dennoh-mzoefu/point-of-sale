import { createSlice, current } from "@reduxjs/toolkit";
import { addDoc } from "firebase/firestore";
import { expenseColRef } from "../../utils/firebase";

const initialState = {
  expenses: [],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    fetchExpenses: (state, action) => {
      return {
        ...state,
        expenses: action.payload,
      };
    },
    addExpense: (state, action) => {
      addDoc(expenseColRef, {
        quantity: action.payload.quantity,
        name: action.payload.name,
        price: action.payload.price,
        category: action.payload.isPrepared,
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
        // const docRef = doc(db, 'orders',action.payload)
      });
    },
  },
});

export const { fetchExpenses, addExpense, deleteExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;

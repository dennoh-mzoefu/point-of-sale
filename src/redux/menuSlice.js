import { createSlice, current } from "@reduxjs/toolkit";
import { onSnapshot, addDoc } from "firebase/firestore";
import { q, colRef } from "../../utils/firebase";
// import { UsersData } from "../FakeData";
const initialState = {
  menu: [],
};
// console.log(liveMenu());
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    fetchMenu: (state, action) => {
      // console.log(action.payload);
      state.menu = action.payload;
      console.log(current(state));
    },

    addMenu: (state, action) => {
      console.log(action.payload);
      addDoc(colRef, {
        category: action.payload.category,
        name: action.payload.name,
        price: action.payload.price,
      }).then((res) => {
        console.log(res);
      });
      //   state.menu = state.menu.filter((user) => user.id !== action.payload.id);
    },
    deleteUser: (state, action) => {
      state.menu = state.menu.filter((user) => user.id !== action.payload.id);
    },

    updateUsername: (state, action) => {
      state.menu.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },
  },
});

export const { fetchMenu, deleteUser, updateUsername, addMenu } =
  menuSlice.actions;
export default menuSlice.reducer;
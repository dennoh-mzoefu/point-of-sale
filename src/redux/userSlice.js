import { createSlice, current } from "@reduxjs/toolkit";
import {
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db, ordersColRef, userColRef } from "../../utils/firebase";
const initialState = {
  users: [],
  user: {},
  userWithId: {},
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUser: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        users: action.payload,
      };
    },
    addUser: (state, action) => {
      console.log(action.payload);
      let a = state.users?.filter(
        (item) => item.uid == action.payload?.user?.uid
      );
      console.log({ a });
      if (a.length == 0) {
        addDoc(userColRef, {
          displayName: action.payload?.user?.displayName,
          email: action.payload?.user?.email,
          uid: action.payload?.user?.uid,
          roles: "waiter",
        }).then((res) => {
          console.log(res);
        });
      }
      console.log(current(state));
    },
    deleteUser: (state, action) => {},
    updateRoles: (state, action) => {
      const doneDocRef = doc(db, "user", action.payload.id);
      updateDoc(doneDocRef, {
        roles: action.payload.roles,
      }).then(() => {});
    },
  },
});

export const { addUser, deleteUser, updateRoles, fetchUser } =
  userSlice.actions;
export default userSlice.reducer;

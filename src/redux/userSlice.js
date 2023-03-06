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
  currentUser: {},
  userWithId: {},
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchCurrentUser: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    fetchUser: (state, action) => {
      // console.log(action.payload);
      return {
        ...state,
        users: action.payload,
      };
    },
    addUser: (state, action) => {
      console.log(action.payload);
      let a = state.users;
      // state.users?.filter(
      //   (item) => item.uid == action.payload?.user?.uid
      // );
      console.log({ a });
      {
        action.payload.current
          ? console.log(action.payload.current)
          : addDoc(userColRef, {
              displayName: action.payload?.user?.displayName,
              email: action.payload?.user?.email,
              uid: action.payload?.user?.uid,
              roles: "admin",
            }).then((res) => {
              console.log(res);
            });
      }
      // console.log(current(state));
    },
    deleteUser: (state, action) => {},
    updateRoles: (state, action) => {
      const doneDocRef = doc(db, "user", action.payload.id);
      updateDoc(doneDocRef, {
        roles: action.payload.role,
      }).then(() => {});
    },
  },
});

export const { addUser, deleteUser, updateRoles, fetchUser, fetchCurrentUser } =
  userSlice.actions;
export default userSlice.reducer;

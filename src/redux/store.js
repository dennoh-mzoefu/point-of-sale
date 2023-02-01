import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./menuSlice";
import orderReducer from "./orderSlice";
import expenseReducer from "./expenseSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    order: orderReducer,
    expense: expenseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

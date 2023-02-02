import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./menuSlice";
import orderReducer from "./orderSlice";
import expenseReducer from "./expenseSlice";
import stockReducer from "./stockSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    order: orderReducer,
    expense: expenseReducer,
    stock: stockReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

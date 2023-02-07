import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./menuSlice";
import orderReducer from "./orderSlice";
import expenseReducer from "./expenseSlice";
import stockReducer from "./stockSlice";
import salesReducer from "./salesSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    order: orderReducer,
    expense: expenseReducer,
    stock: stockReducer,
    sales: salesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

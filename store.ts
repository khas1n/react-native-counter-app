import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { counterActions } from "./services/counter/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: true,
});

export const ActionCreators = { counter: counterActions };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

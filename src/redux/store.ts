import { configureStore } from "@reduxjs/toolkit";
import selectPortfolioReducer from "./selectPortfolioSlice";

export const store = configureStore({
  reducer: {
    selectPortfolio: selectPortfolioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

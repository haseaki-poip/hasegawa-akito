import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const selectPortfolioSlice = createSlice({
  name: "selectPortfolio",
  initialState: {
    id: -1,
  },
  reducers: {
    selectPortfolio: (state, action: PayloadAction<number>) => {
      state.id = isNaN(action.payload) ? -1 : action.payload;
    },
  },
});

export const { selectPortfolio } = selectPortfolioSlice.actions;
export default selectPortfolioSlice.reducer;

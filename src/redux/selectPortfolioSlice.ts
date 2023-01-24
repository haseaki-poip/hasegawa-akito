import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const selectPortfolioSlice = createSlice({
  name: "selectPortfolio",
  initialState: {
    id: 0,
  },
  reducers: {
    selectPortfolio: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { selectPortfolio } = selectPortfolioSlice.actions;
export default selectPortfolioSlice.reducer;

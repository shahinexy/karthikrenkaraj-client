import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

type TCategoryState = {
  type: string | null;
};
const initialState: TCategoryState = {
  type: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      const { type } = action.payload;
      state.type = type;
    },
    getCategory: (state) => {
      state.type = null;
    },
  },
});

export const { setCategory, getCategory } = categorySlice.actions;

export default categorySlice.reducer;

export const selectCurrentCategory = (state: RootState) => state.category.type;


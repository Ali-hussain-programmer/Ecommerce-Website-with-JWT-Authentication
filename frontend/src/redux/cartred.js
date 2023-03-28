import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

export const cartred = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment(state, actions) {
      state.value = state.value + actions.payload;
    },
   
  },
});

export const { increment } = cartred.actions;
export default cartred.reducer;

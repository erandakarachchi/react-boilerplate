import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const homeScreenSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.value = state.value += 1;
    },
  },
  extraReducers: {},
});

export const { incrementCount } = homeScreenSlice.actions;

export default homeScreenSlice.reducer;

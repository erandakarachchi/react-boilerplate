import { configureStore } from "@reduxjs/toolkit";

import { homeScreenReducer } from "./../slice";

export const store = configureStore({
  reducer: {
    home: homeScreenReducer,
  },
});

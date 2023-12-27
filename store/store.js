import { configureStore } from "@reduxjs/toolkit";
import { pathNameSlice } from "./slices";
const store = configureStore({
  reducer: {
      pathName: pathNameSlice.reducer
  },
});

export default store;

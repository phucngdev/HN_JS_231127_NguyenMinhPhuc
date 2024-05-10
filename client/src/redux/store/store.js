import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../useSlice/bookSlice";
import authorSlice from "../useSlice/authorSlice";

const store = configureStore({
  reducer: {
    books: bookSlice,
    authors: authorSlice,
  },
});
export default store;

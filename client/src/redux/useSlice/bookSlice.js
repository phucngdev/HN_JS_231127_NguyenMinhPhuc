import { createSlice } from "@reduxjs/toolkit";
import {
  createBook,
  deleteBook,
  findAllBook,
  updateBook,
} from "../../services/book.service";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBook.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.data = action.payload;
      })
      .addCase(createBook.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      })
      .addCase(deleteBook.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.data = action.payload;
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      })
      .addCase(findAllBook.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(findAllBook.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.data = action.payload;
      })
      .addCase(findAllBook.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      })
      .addCase(updateBook.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.data = action.payload;
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;

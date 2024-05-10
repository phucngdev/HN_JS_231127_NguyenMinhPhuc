import { createSlice } from "@reduxjs/toolkit";
import {
  ascPrice,
  createBook,
  deleteBook,
  descPrice,
  findAllBook,
  findOneBook,
  searchBook,
  updateBook,
} from "../../services/book.service";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    dataEdit: null,
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
      .addCase(findOneBook.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(findOneBook.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.dataEdit = action.payload;
      })
      .addCase(findOneBook.rejected, (state, action) => {
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
      })
      .addCase(searchBook.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(searchBook.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.data = action.payload;
      })
      .addCase(searchBook.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      })
      .addCase(descPrice.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(descPrice.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.data = action.payload;
      })
      .addCase(descPrice.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      })
      .addCase(ascPrice.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(ascPrice.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.data = action.payload;
      })
      .addCase(ascPrice.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
  createAuthor,
  findAllAuthor,
  findAllBookAnAuthor,
} from "../../services/author.service";

const authorSlice = createSlice({
  name: "authors",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAuthor.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(createAuthor.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.data = action.payload;
      })
      .addCase(createAuthor.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      })
      .addCase(findAllAuthor.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(findAllAuthor.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.data = action.payload;
      })
      .addCase(findAllAuthor.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      })
      .addCase(findAllBookAnAuthor.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(findAllBookAnAuthor.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.data = action.payload;
      })
      .addCase(findAllBookAnAuthor.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      });
  },
});

export default authorSlice.reducer;

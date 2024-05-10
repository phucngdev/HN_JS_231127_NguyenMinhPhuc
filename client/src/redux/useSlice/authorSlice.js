import { createSlice } from "@reduxjs/toolkit";
import { findAllAuthor } from "../../services/author.service";

const authorSlice = createSlice({
  name: "authors",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default authorSlice.reducer;

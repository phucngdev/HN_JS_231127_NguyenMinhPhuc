import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from "../api/axios";

export const findAllAuthor = createAsyncThunk("findAll/author", async () => {
  try {
    const response = await BaseUrl.get("author/");
    return response.data;
  } catch (error) {
    return null;
  }
});

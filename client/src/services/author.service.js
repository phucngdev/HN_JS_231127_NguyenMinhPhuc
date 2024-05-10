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

export const findAllBookAnAuthor = createAsyncThunk(
  "findAllBook/author",
  async (id) => {
    try {
      const response = await BaseUrl.get(`author/${id}/books`);
      return response.data;
    } catch (error) {
      return null;
    }
  }
);

export const createAuthor = createAsyncThunk("create/author", async (data) => {
  try {
    const response = await BaseUrl.post("author/", data);
    return response.data;
  } catch (error) {
    return null;
  }
});

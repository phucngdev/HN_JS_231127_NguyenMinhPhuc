import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from "../api/axios";

export const findAllBook = createAsyncThunk("findAll/book", async () => {
  try {
    const response = await BaseUrl.get("book/");
    return response.data;
  } catch (error) {
    return null;
  }
});

export const createBook = createAsyncThunk(
  "create/book",
  async ({ id, data }) => {
    try {
      const response = await BaseUrl.post(`book/${id}`, data);
      return response.data;
    } catch (error) {
      return null;
    }
  }
);

export const updateBook = createAsyncThunk(
  "update/book",
  async ({ id, data }) => {
    try {
      const response = await BaseUrl.put(`book/${id}`, data);
      return response.data;
    } catch (error) {
      return null;
    }
  }
);

export const deleteBook = createAsyncThunk("delete/book", async (id) => {
  try {
    const response = await BaseUrl.delete(`book/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
});

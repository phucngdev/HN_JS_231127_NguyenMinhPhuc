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

export const findOneBook = createAsyncThunk("findOne/book", async (id) => {
  try {
    const response = await BaseUrl.get(`book/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
});

export const createBook = createAsyncThunk("create/book", async (data) => {
  try {
    const response = await BaseUrl.post(`book/`, data);
    return response.data;
  } catch (error) {
    return null;
  }
});

export const updateBook = createAsyncThunk(
  "update/book",
  async ({ id, data }) => {
    try {
      const response = await BaseUrl.put(`book/${id}`, data);
      console.log(response);
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

export const searchBook = createAsyncThunk("search/book", async (q) => {
  try {
    const response = await BaseUrl.get(`book/search/search?q=${q}`);
    return response.data;
  } catch (error) {
    return null;
  }
});

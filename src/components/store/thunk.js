import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPage = createAsyncThunk('getDataHomePage', async (params) => {
  try {
    const data = axios.get(
      `https://dummyjson.com/products?limit=${params.pageSize}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
});

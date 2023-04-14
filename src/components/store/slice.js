import { createSlice } from '@reduxjs/toolkit';
import { getPage } from './thunk';

const initialState = {
  data: [],
  loading: true,
};

export const slice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    resetStore: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getPage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPage.fulfilled, (state, { payload = {} }) => {
      state.data = payload.data;
      state.loading = false;
    });
    builder.addCase(getPage.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const selectData = (state) => state[slice.name].data;
export const selectLoading = (state) => state[slice.name].loading;

export const { resetStore } = slice.actions;

export default slice.reducer;

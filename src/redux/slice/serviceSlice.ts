// serviceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  searchTerm: '',
  sortBy: 'name',
  sortOrder: 'asc',
};

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const {
  setData,
  setSearchTerm,
  setSortBy,
  setSortOrder,
} = serviceSlice.actions;

export default serviceSlice.reducer;

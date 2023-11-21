import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ServiceState {
  data: any;
  searchTerm: string;
  sortBy: string;
  sortOrder: string;
}

const initialState: ServiceState = {
  data: null,
  searchTerm: '',
  sortBy: 'name',
  sortOrder: 'asc',
};

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<string>) => {
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

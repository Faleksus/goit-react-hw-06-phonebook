import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    initialState: { query: "" },
    reducers: {
      changeFilter(state, action) {
        state.query = action.payload;
      },
    },
  });

  export const { changeFilter } = filterSlice.actions;
import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: { values: [] },
  reducers: {
    updatePosts: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const { updatePosts } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;

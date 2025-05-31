import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showgptSearch: false,
    searchedMovies: [],
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showgptSearch = !state.showgptSearch;
    },
    setSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
  },
});

export const { toggleGptSearch , setSearchedMovies} = gptSlice.actions;
export default gptSlice.reducer;

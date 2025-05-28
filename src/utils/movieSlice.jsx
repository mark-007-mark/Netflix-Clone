import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: null,
    popularMovies: null,
  },
  reducers: {
    setNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },

    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});

export const { setNowPlaying, setPopularMovies } = movieSlice.actions;
export default movieSlice.reducer;

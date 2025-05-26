import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movie",
    initialState: {
        nowPlaying: null
    },
    reducers: {
        setNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        }
    }
})

export const {setNowPlaying} = movieSlice.actions;
export default movieSlice.reducer;
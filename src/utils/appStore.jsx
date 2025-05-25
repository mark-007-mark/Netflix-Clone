import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
const userstore = configureStore({
    reducer: {
        user: userReducer
    }
})

export default userstore;
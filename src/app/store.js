import { configureStore } from "@reduxjs/toolkit";
import { UsersSlice } from "../containers/usersSlice";
import { registerSlice } from "../containers/registerSlice";


export const store=configureStore({
    reducer:{
        users:UsersSlice.reducer,
        register:registerSlice.reducer
    }
})


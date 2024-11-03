import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customerSlice";

export const store = configureStore({
    devTools: false, // Change this to true to enable Redux DevTools on Browser Extension
    reducer:{
        customerState: customerReducer
    }
})
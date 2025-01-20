import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from './reducer'
export const Store = configureStore({
    reducer:{
        toggles:toggleSlice
    }
})
import { configureStore } from "@reduxjs/toolkit";
import countSlice from './reducer'

export const appstore = configureStore({
    reducer:{
        counter:countSlice

    }
    
})
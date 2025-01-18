import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:'counter',
    initialState: {value : 0},
    reducers:{     
        increment : (state, action)=>{
            state.value += action.payload
        },
    },
})

export const {increment} = countSlice.actions
export default countSlice.reducer



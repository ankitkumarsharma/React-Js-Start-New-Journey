import {createSlice} from '@reduxjs/toolkit';

const counterSlice =  createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1, 
        // multiply: (state, action) => state * action.payload,
        // divide: (state, action) => state / action.payload
    },
})

export default counterSlice.reducer;
export const {increment, decrement } = counterSlice.actions;
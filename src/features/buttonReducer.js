import { createSlice } from "@reduxjs/toolkit";



const buttonSlice = createSlice({
    name: "buttonCounter",
    initialState: 0,
    reducers: {
      increment: (state, action) => {
        return state + 1;
      },
      decrement: (state, action) => {
        return state === 0 ? 0 : state - 1;
      },
    },
})

export const {increment,decrement}=buttonSlice.actions
export default buttonSlice.reducer

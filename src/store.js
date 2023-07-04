import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./features/buttonReducer";


const store=configureStore({
    reducer:{
        buttonCounter:buttonReducer,
    }
})

export default store
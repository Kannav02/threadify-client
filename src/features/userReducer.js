import { createSlice } from "@reduxjs/toolkit";



const personSlice=createSlice({
    name:"person",
    initialState:{
        email:"",
        username:"",
        passwordHash:""
    }
})
import {createAsyncThunk, createSlice} from "@reduxjs/tolkit";
import axios from "axios";
export const ordersThunk = createAsyncThunk('api/orders', async() => {
 axios.get('https://northwind.vercel.app/api/orders') })

 const orderSlice = createSlice({
    name: 'order',
    initialState: {},
    redusers: {},

    extraReducers: (builder) => {
        builder
        .addCase(ordersThunk.fulfilled, (state, action) => {
           state.loading =  false 
           state.orders = action.payload
        })

        .addCase(ordersThunk.pending, (state, action) => {
           state.loading = true
        })

        .addCase (ordersThunk.rejected, (state, action) =>{
            state.loading = false
            state.error = action.error.message
        })


    }
 }

 )

 export default orderSlice.reducer


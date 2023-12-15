import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const racerAdapter=createEntityAdapter({});
const initialState= racerAdapter.getInitialState();
export const fetchRacer=createAsyncThunk("racers/fetchRacer",async()=>{
    try{
    const racerData=await axios.get("http://localhost:3500/racer");
    console.log(racerData.data);
    return racerData.data;
    }
    catch (error){
        console.log(error);
    }

})
const racerSlice=createSlice({
    name: "racers",
    initialState: initialState,
    currentRacer:{},
    reducers:{},
    extraReducers (builder){
        builder.addCase(fetchRacer.fulfilled, (state, action)=>{
            state.entities=action.payload;
        })
    }
});

export default racerSlice.reducer;
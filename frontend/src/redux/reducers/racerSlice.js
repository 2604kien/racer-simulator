import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const racerAdapter=createEntityAdapter({
    pickedRacer:{}
});
const initialState= racerAdapter.getInitialState();
export const fetchRacer=createAsyncThunk("racers/fetchRacer",async()=>{
    try{
    const racerData=await axios.get("http://localhost:3500/racer");
    return racerData.data;
    }
    catch (error){
        console.log(error);
    }

})
export const fetchracerById=createAsyncThunk("racers/fetchRacerById", async(id)=>{
    try{
        const response=await axios.post(`http://localhost:3500/racer/${id}`);
        return response.data;
    }   
    catch(err){
        console.log(err)
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
        .addCase(fetchracerById.fulfilled, (state, action)=>{
            state.pickedRacer=action.payload;
        })
    }
});

export default racerSlice.reducer;
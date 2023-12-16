import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const trackAdapter=createEntityAdapter({});
const initialState=trackAdapter.getInitialState({
    pickedTrack:{}
});
export const fetchAllTrack=createAsyncThunk("track/fetchAllTrack", async()=>{
    const response=await axios.get("http://localhost:3500/track");
    return response.data;
})
export const fetchTrackById=createAsyncThunk("track/fetchTrackById", async(id)=>{
    const response=await axios.get(`http://localhost:3500/track/${id}`);
    return response.data;
})
const trackSlice=createSlice({
    name: "tracks",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchAllTrack.fulfilled, (state, action)=>{
            state.entities=action.payload;
        })
        .addCase(fetchTrackById.fulfilled,(state, action)=>{
            state.pickedTrack=action.payload.data;
        })
    }
})
export default trackSlice.reducer;
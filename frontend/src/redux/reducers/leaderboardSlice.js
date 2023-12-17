import {createEntityAdapter, createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const leaderboardAdapter=createEntityAdapter({});
const initialState=leaderboardAdapter.getInitialState();

export const addRaceToLeaderboard=createAsyncThunk("leaderboard/addRaceToLeaderboard", async(raceData)=>{
    const response= await axios.post("http://localhost:3500/leaderboard", raceData);
    return raceData;
})
export const getAllLeaderboard=createAsyncThunk("leaderboard/getAllLeaderboard", async()=>{
    const response=await axios.get("http://localhost:3500/leaderboard")
    return response.data;
})
const leaderboardSlice=createSlice({
    name: "leaderboard",
    initialState: initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(addRaceToLeaderboard.fulfilled, (state, action)=>{
            state.status="succeeded";
        })
        .addCase(getAllLeaderboard.fulfilled, (state, action)=>{
            state.status="succeeded";
            state.entities=action.payload
        })
    }
})
export default leaderboardSlice.reducer;
import {createEntityAdapter, createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const leaderboardAdapter=createEntityAdapter({});
const initialState=leaderboardAdapter.getInitialState();

export const addRaceToLeaderboard=createAsyncThunk("leaderboard/addRaceToLeaderboard", async(raceData)=>{
    const response= await axios.post("http://localhost:3500/racer", raceData);
    return raceData;
})

const leaderboardSlice=createSlice({
    name: "leaderboard",
    initialState: initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(addRaceToLeaderboard.fulfilled, (state, action)=>{
            state.status="succeeded";
            leaderboardAdapter.addOne(action.payload);
        })
    }
})
export default leaderboardSlice.reducer;
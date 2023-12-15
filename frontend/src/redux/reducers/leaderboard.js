import {createEntityAdapter, createAsyncThunk, createSlice} from "@reduxjs/toolkit"

const leaderboardAdapter=createEntityAdapter({});
const initialState=leaderboardAdapter.getInitialState();

export const addRaceToLeaderboard=createAsyncThunk("leaderboard/addRaceToLeaderboard", async(req,res)=>{

})

const leaderboardSlice=createSlice({
    name: "leaderboard",
    initialState: initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(addRaceToLeaderboard.fulfilled, (state, action)=>{
            
        })
    }
})
export default leaderboardSlice.reducer;
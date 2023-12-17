import { combineReducers } from "@reduxjs/toolkit";
import racerReducer from "./racerSlice";
import trackReducer from "./trackSlice";
import leaderboardReducer from "./leaderboardSlice"

const rootReducer=combineReducers({
    racers: racerReducer,
    tracks: trackReducer,
    leaderboard: leaderboardReducer
})
export default rootReducer;
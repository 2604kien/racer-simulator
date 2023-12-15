import { combineReducers } from "@reduxjs/toolkit";
import racerReducer from "./racerSlice";
import trackReducer from "./trackSlice";

const rootReducer=combineReducers({
    racers: racerReducer,
    tracks: trackReducer
})
export default rootReducer;
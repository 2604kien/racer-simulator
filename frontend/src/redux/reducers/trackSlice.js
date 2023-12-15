import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const trackAdapter=createEntityAdapter({});
const initialState=trackAdapter.getInitialState();

const trackSlice=createSlice({
    name: "tracks",
    initialState: initialState,
    reducers: {}
})
export default trackSlice.reducer;
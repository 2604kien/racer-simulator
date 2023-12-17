import React from "react";
import "../styles/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllLeaderboard } from "../redux/reducers/leaderboardSlice";
export default function Leaderboard(){
    const dispatch=useDispatch();
    const data=useSelector(state=>state.leaderboard.entities.data);
    React.useEffect(()=>{
        dispatch(getAllLeaderboard())
            .then(()=>{
                console.log(data);
            });
    },[])
    return(
        <div>
            <h1>Leaderboard</h1>
            <h3>{typeof data==="string"? data: "element"}</h3>
        </div>
    )
}
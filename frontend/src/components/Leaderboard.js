import React from "react";

import { getAllLeaderboard } from "../redux/reducers/leaderboardSlice";
import "../styles/styles.css";
import { useSelector, useDispatch } from "react-redux";
import LeaderboardCard from "./LeaderboardCard";
export default function Leaderboard(){
    const dispatch=useDispatch();
    const data=useSelector(state=>state.leaderboard.entities.data);
        React.useEffect(()=>{
        dispatch(getAllLeaderboard())
    },[])
    const tableElement= data===undefined || data.length===0? "There is no race history, please race to be saved to the leaderboard." : (
        <table className="leaderboard--table">
        <thead>
            <tr>
                <th>Racer Name:</th>
                <th>Track Name:</th>
                <th>Rank:</th>
                <th>Date And Time:</th>
            </tr>
        </thead>
        <tbody>
                {data? data.map(d=><LeaderboardCard key={d.date} data={d}/>):<></>}
        </tbody>
    </table>
    )
    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <h1>Leaderboard</h1>
            {tableElement}
        </div>
    )
}
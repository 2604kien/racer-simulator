import React from "react";
import { useSelector } from "react-redux";
export default function Race(props){
    const [currentKm, setCurrentKm]=React.useState(0);
    const curRacer=useSelector(state=> state.racers.pickedRacer);
    const curTrack=useSelector(state=>state.tracks.pickedTrack);
    React.useEffect(()=>{
            const interval=setInterval(()=>{
                if(currentKm<curTrack.distance)setCurrentKm(prev=>prev+Math.floor(curRacer.top_speed/Math.ceil(curRacer.acceleration*Math.random()+(curRacer.handling*1.5)*Math.random())))
            }, 500)
        if(currentKm>curTrack.distance) setCurrentKm(curTrack.distance);
        return ()=>{clearInterval(interval)};
    },[currentKm, props.isStart])
    return(
        <tr style={{textAlign:"center"}}>
            <td style={{
                backgroundColor: curRacer.driver_name===props.data.driver_name?"green":"white"
            }}>{props.data.driver_name}</td>
            <td style={{
                backgroundColor: curRacer.driver_name===props.data.driver_name?"green":"white"
            }}>{currentKm}m</td>
            <td style={{
                backgroundColor: curRacer.driver_name===props.data.driver_name?"green":"white"
            }}>{props.rank}</td>
        </tr>
    )
}
import React from "react";
import { useSelector } from "react-redux";
export default function Race(props){
    const [currentKm, setCurrentKm]=React.useState(0);
    const curRacer=useSelector(state=> state.racers.pickedRacer);
    const curTrack=useSelector(state=>state.tracks.pickedTrack);
    React.useEffect(()=>{
        let interval;
        if(currentKm<curTrack.distance){
            interval=setInterval(()=>{
                    setCurrentKm(prev=>{
                        let result=prev+Math.floor(props.data.top_speed/Math.ceil(props.data.acceleration*Math.random()+(props.data.handling*1.5)*Math.random()));
                        if(curRacer.id===props.data.id){
                            result=prev+Math.floor(Math.random()*props.accelerate+Math.ceil(curRacer.acceleration*Math.random()+(curRacer.handling)*Math.random()));
                        }
                        return result;
                    })
            }, 500)
        }
        else if(currentKm>curTrack.distance) setCurrentKm(curTrack.distance*2);
        return ()=>{clearInterval(interval)};
    },[currentKm, props.isStart])
    React.useEffect(()=>{
        props.handleCurrentKmChange(props.data.id, currentKm, curTrack.distance);
    }, [currentKm]);
    return(
        <tr style={{textAlign:"center"}}>
            <td style={{
                backgroundColor: curRacer.driver_name===props.data.driver_name?"green":"white"
            }}>{props.data.driver_name}</td>
            <td style={{
                backgroundColor: curRacer.driver_name===props.data.driver_name?"green":"white"
            }}>{currentKm>=curTrack.distance? "Finish!!!": currentKm+"m"}</td>
            <td style={{
                backgroundColor: curRacer.driver_name===props.data.driver_name?"green":"white"
            }}>{props.rank}</td>

        </tr>
    )
}
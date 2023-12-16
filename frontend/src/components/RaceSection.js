import React from "react";
import { useSelector } from "react-redux";
import Race from "./Race";
export default function RaceSection(){
    const [count, setCount]=React.useState(3);
    const [isStart, setStart]=React.useState(count===-1?true:false);
    const racers=useSelector(state=>state.racers.entities.data);
    const [curRank, setCurRank]=React.useState(racers.length);
    const trackData=useSelector(state=>state.tracks.pickedTrack);
    React.useEffect(()=>{
        const interval=setInterval(()=>{
            if(count>=0) setCount(prev=>prev-1)
            if(count===-1) setStart(true);
        }, 1000)
    return ()=>{clearInterval(interval)}
    },[count]);
    const rowElement=racers.map(racer=> <Race key={racer.id} data={racer} isStart={isStart} rank={curRank}/>)
    return(
        <div style={{
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}> 
            <h2>Let's Race</h2>
            <h1>{count>-1?count:"Start!!!"}</h1>
            <div 
            style={{
                margin:"auto",
                placeItems:"center",
                width:"70%",
                display:"grid",
                lineHeight: "10%",
                rowGap: "4%",
                gridTemplateColumns:"25% 25% 25% 25%",
                gridTemplateRows:"48% 48%",
            }}>
            </div>
            <div style={{
                    width:"inherit",
                    display: "flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems: "center",
                    height:"10px"
                }}>
                    <div style={{
                        backgroundColor:"green",
                        width: "20px",
                        height:"20px"
                    }}></div>
                    <h3>You are <span style={{color:"green"}}>Green!</span> We will race at <span style={{color:"red"}}>{trackData.name}</span> with the total of {trackData.distance}m</h3>
                </div>
            <table style={{border: "3px solid black",marginTop: "20px", width:"60%"}}>
                
                <thead>
                    <tr>
                        <th>Racer</th>
                        <th>Current</th>
                        <th>Rank:</th>
                    </tr>
                </thead>
                <tbody>
                    {rowElement}
                </tbody>
            </table>
        </div>
    )
}
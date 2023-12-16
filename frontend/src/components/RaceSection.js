import React from "react";
import { useSelector } from "react-redux";
import Race from "./Race";
export default function RaceSection(){
    const [count, setCount]=React.useState(3);
    const racers=useSelector(state=>state.racers.entities.data);
    const [curRank, setCurRank]=React.useState(racers.length);
    React.useEffect(()=>{
        const interval=setInterval(()=>{
            if(count>0) setCount(prev=>prev-1)
        }, 1000)
    return ()=>{clearInterval(interval)}
    },[count]);
    const rowElement=racers.map(racer=> <Race name={racer.driver_name} rank={curRank}/>)
    return(
        <div style={{
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}> 
            <h2>Let's Race</h2>
            <h1>{count}</h1>
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
            <table style={{border: "3px solid black",}}>
                <thead>
                    <th>Racer</th>
                    <th>Current</th>
                    <th>Rank:</th>
                </thead>
                <tbody>
                    {rowElement}
                </tbody>
            </table>
        </div>
    )
}
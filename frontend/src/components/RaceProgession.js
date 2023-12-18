import React from "react";
import car from "../images/car.png"
export default function RaceProgression(props){
    return(
        <div style={{
            color: props.curRacer.id===props.data.id? "green": "black",
            display: "flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            gap: "10px"
        }}>
            <p>{props.data.name}:</p>
            <div style={{
                border:"1px solid black",
                height: "30px",
                width: "800px",
                overflow:"hidden",
                borderRadius:"15px"
            }}>
                <div style={{
                height: "30px",
                borderRadius:"15px",
                width: `${(props.data.currentKm/props.distance)*100}%`,
                maxWidth:"800px",
                backgroundColor:props.curRacer.id===props.data.id? "green": "grey",
                display: "flex",
                flexDirection:"row",
                justifyContent:"right",
                alignItems:"center",
                }}>
                    <img style={{
                        position: "relative",
                        height:"30px"
                    }} src={car} alt="Car that represent the racer" />
                </div>
            </div>        
        </div>
    )
}
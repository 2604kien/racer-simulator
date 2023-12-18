import React from "react";
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
                overflow:"hidden"
            }}>
                <div style={{
                border:"1px solid black",
                height: "30px",
                width: `${(props.data.currentKm/props.distance)*100}%`,
                backgroundColor:props.curRacer.id===props.data.id? "green": "grey"
            }}>
            </div>
            </div>        
        </div>
    )
}
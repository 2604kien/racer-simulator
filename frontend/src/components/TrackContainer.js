import React from "react";
import track from "../images/track.png"
export default function TrackContainer(props){
    const handleClick=()=>{
        props.handleIsSelect(props.data.id);
    }
        return(
        <div className="racer--person" style={{
            border: (props.data.id===props.currChild )?"5px solid green":"1px solid black",
            borderRadius: "5px",
            width: "80%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            cursor: "pointer"
        }} onClick={handleClick}>
            <img style={{width:"150px"}} src={track} alt="Track outline that is the same for every track"/>
            <h3>Track Name: {props.data.name} </h3>
            <h3>Distance: {props.data.distance} m</h3>
            
        </div>
    )
}
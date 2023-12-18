import React from "react";
import driver from "../images/driver.webp"
export default function RacerContainer(props){
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
            <img style={{width:"150px"}} src={driver} alt="Racer description that is the same for every track"/>
            <h3>Name: {props.data.driver_name} </h3>
            <h3>Top Speed: {props.data.top_speed} km/h </h3>
            <h3>Acceleration {props.data.acceleration} km/s </h3>
            <h3>Handling {props.data.handling} </h3>
        </div>
    )
}
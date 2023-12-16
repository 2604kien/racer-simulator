import React from "react";
import {useSelector} from "react-redux";
import RacerContainer from "./RacerContainer";
export default function(){
    const [currChild,setCurrChild]=React.useState(-1);
    const racers=useSelector(state=>state.racers.entities.data);
    const handleIsSelect=(id)=>{
        setCurrChild(id);
    }
    const element=racers?racers.map(el=><RacerContainer key={el.id} data={el} handleIsSelect={handleIsSelect} currChild={currChild}/>):racers

    console.log(racers);
    return(
        <div style={{
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}> 
            <h2>Choose Your Racer:</h2>
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
            }}
            className="racer--option">
                {element}
            </div>
            <button className="submit--button">Next</button>
        </div>
    )
}   
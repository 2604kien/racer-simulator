import React from "react";
import {useSelector, useDispatch} from "react-redux";
import RacerContainer from "./RacerContainer";
import { fetchRacerById } from "../redux/reducers/racerSlice";
export default function RacerOption(props){
    const dispatch=useDispatch()
    const [currChild,setCurrChild]=React.useState(-1);
    const racers=useSelector(state=>state.racers.entities.data);

    const handleIsSelect=(id)=>{
        setCurrChild(id);
    }
    const element=racers?racers.map(el=><RacerContainer key={el.id} data={el} handleIsSelect={handleIsSelect} currChild={currChild}/>):racers
    const submitRacer=()=>{
        if(currChild>-1) {
            props.handleRacerSelect();
            dispatch(fetchRacerById(currChild));
        };
    }
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
            <button onClick={submitRacer} style={{userSelect:"none"}}className="submit--button">Next</button>
            <br/>
        </div>
    )
}   
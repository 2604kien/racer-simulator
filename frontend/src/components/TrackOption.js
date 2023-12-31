import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrackById } from "../redux/reducers/trackSlice";
import TrackContainer from "./TrackContainer";
export default function TrackOption(props){
    const dispatch=useDispatch();
    const [currChild,setCurrChild]=React.useState(-1);
    const tracksData=useSelector(state=>state.tracks.entities.data);
    const handleIsSelect=(id)=>{
        setCurrChild(id);
    }
    const element=tracksData?tracksData.map(el=><TrackContainer key={el.id} data={el} handleIsSelect={handleIsSelect} currChild={currChild}/>): tracksData;
    const submitTrack=()=>{
        if(currChild>-1) {
            dispatch(fetchTrackById(currChild));
            props.handleTrackSelect();
        }
    }
    return(
        <div style={{
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}> 
        
            <h2>Choose Your Track</h2>
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
            <button onClick={submitTrack} style={{userSelect:"none"}} className="submit--button">Start The Game</button>
            <br/>
        </div>
    )
}
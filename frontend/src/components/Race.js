import React from "react";
export default function Race(props){
    
    const [currentKm, setCurrentKm]=React.useState(0);
    return(
        <tr style={{textAlign:"center"}}>
            <td>{props.name}</td>
            <td>{currentKm}</td>
            <td>{props.rank}</td>
        </tr>
    )
}
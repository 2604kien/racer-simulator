import React from "react";
import moment from "moment";

export default function LeaderboardCard(props){
    const rankLetter=props.data.rank===1? "st":props.data.rank===2?"nd": props.data.rank===3?"rd":"th";
    return(
        <tr>
            <td>{props.data.racerName}</td>
            <td>{props.data.trackName}</td>
            <td>{props.data.rank}{rankLetter}</td>
            <td>{moment(props.data.date).format('h:mm A | DD/MM/YYY')}</td>
        </tr>
    )
}
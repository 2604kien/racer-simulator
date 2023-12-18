import React from "react";
import moment from "moment";

export default function LeaderboardCard(props){
    return(
        <tr>
            <td>{props.data.racerName}</td>
            <td>{props.data.trackName}</td>
            <td>{props.data.rank}</td>
            <td>{moment(props.data.date).format('h:mm A | DD/MM/YYY')}</td>
        </tr>
    )
}
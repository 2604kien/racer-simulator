import React from "react";
import {Link, Outlet} from 'react-router-dom'
export default function Navbar(){
    return(
        <div className="nav--bar">
             <ul className="nav--item">
                    <li>Home</li>
                    <li>Leaderboard</li>
                </ul>
        </div>
    )
}
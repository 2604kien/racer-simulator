import React from "react";
import {Outlet} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "../styles/styles.css"
export default function Navbar(props){
    const navigate=useNavigate()
    return(
        <>
            <div className="nav--bar"
                style={{
                    marginTop:"0px",
                    padding:0,
                }}>
                <ul className="nav--item">
                        <li onClick={()=>{
                            navigate("/");
                            props.handleReset();
                        }}>Home</li>
                        <li onClick={()=>{navigate("/leaderboard")}}>Leaderboard</li>
                    </ul>
            </div>
            <Outlet/>
        </>
    )
}
import "../styles/styles.css"
import banner from "../images/F1banner.jpg";
import {gsap} from "gsap";
import React from "react";

import { getAllLeaderboard } from "../redux/reducers/leaderboardSlice";
import RacerOption from "./RacerOption";
import TrackOption from "./TrackOption";
import RaceSection from "./RaceSection";
import { useSelector, useDispatch } from "react-redux";
import { fetchRacer } from "../redux/reducers/racerSlice";
import {fetchAllTrack} from "../redux/reducers/trackSlice";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";
function App() {
  const [isRacerSelect,setIsRacerSelect]=React.useState(true);
  const [isTrackSelect,setIsTrackSelect]=React.useState(false);
  let imageRef=React.useRef(null);
  const dispatch=useDispatch();
  React.useEffect(()=>{
  let ctx=gsap.context(()=>{
    gsap.from(imageRef,{
      opacity:0.5,
      scale: 0.8,
      duration: 1,
      ease: "easeInOut"
    })
  });
  dispatch(fetchAllTrack())
  dispatch(fetchRacer());
  dispatch(getAllLeaderboard());

  return ()=>{ctx.revert()}
  },[])
  const handleRacerSelect=()=>{
    setIsRacerSelect(prev=>!prev);
    setIsTrackSelect(prev=>!prev);
  }
  const handleTrackSelect=()=>{
    setIsTrackSelect(prev=>!prev);
  }
  const handleReset=()=>{
    setIsRacerSelect(true);
    setIsTrackSelect(false);
  }
  const display=(
      <>
      <img src={banner} style={{width: "100%"}} ref={(el)=>{imageRef=el}}/>
      <div>
        {isRacerSelect &&<RacerOption handleRacerSelect={handleRacerSelect}/>}
        {isTrackSelect &&<TrackOption handleTrackSelect={handleTrackSelect}/>}
        {!isRacerSelect && !isTrackSelect&&<RaceSection handleReset={handleReset}/>}
      </div>
    </>
  )
  return (
    <div className="App" >
      <Routes>
        <Route path="/*" element={<Navbar handleReset={handleReset}/>}>
          <Route path="" element={display} />
          <Route path="leaderboard" element={<Leaderboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

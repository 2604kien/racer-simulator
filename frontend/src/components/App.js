import "../styles/styles.css"
import banner from "../images/F1banner.jpg";
import {gsap} from "gsap";
import React from "react";
import RacerOption from "./RacerOption";
import TrackOption from "./TrackOption";
import RaceSection from "./RaceSection";
import { useSelector, useDispatch } from "react-redux";
import { fetchRacer } from "../redux/reducers/racerSlice";
function App() {
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
  dispatch(fetchRacer());
  return ()=>{ctx.revert()}
  },[])
  return (
    <div className="App">
      <img src={banner} style={{width: "100%"}} ref={(el)=>{imageRef=el}}/>
  
      <RacerOption/>
      <TrackOption/>
      <RaceSection/>
    </div>
  );
}

export default App;

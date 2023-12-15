import "./styles/styles.css"
import banner from "./images/F1banner.jpg";
import {gsap} from "gsap";
import React from "react";
function App() {
  let imageRef=React.useRef(null)
  React.useEffect(()=>{
  let ctx=gsap.context(()=>{
    gsap.from(imageRef,{
      opacity:0.5,
      scale: 0.8,
      duration: 1,
      ease: "easeInOut"
    })
  })
  return ()=>{ctx.revert()}
  },[])
  return (
    <div className="App">
      <img src={banner} style={{width: "100%"}} ref={(el)=>{imageRef=el}}/>
    </div>
  );
}

export default App;

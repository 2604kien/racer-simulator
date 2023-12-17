import React from "react";
import { useSelector } from "react-redux";
import Race from "./Race";
export default function RaceSection(props){
    const [count, setCount]=React.useState(3);
    const [isStart, setStart]=React.useState(count===-1?true:false);
    const racers=useSelector(state=>state.racers.entities.data);
    const [accelerate, setAcceleration]=React.useState(0);
    const [isFinished, setIsFinished]=React.useState(false);
    const curRacer=useSelector(state=> state.racers.pickedRacer);
    const [currentKmArray, setCurrentKmArray]=React.useState([]);
    const trackData=useSelector(state=>state.tracks.pickedTrack);
    React.useEffect(()=>{
        racers.map(el=>{
            setCurrentKmArray(prev=> {
                return [
                    ...prev,
                    {
                        id: el.id,
                        currentKm: 0
                    }
                ]
            })
            return el;
        })
    },[])
    const handleCurrentKmChange = (id, currentKm, distance) => {
        setCurrentKmArray((prev) => {
            const updatedArray = prev.map((p) =>
                p.id === id ? { ...p, currentKm } : p
            );
            if (currentKm < distance) {
                return [...updatedArray].sort((a, b) => b.currentKm - a.currentKm);
            }
            return updatedArray;
        });
        console.log(currentKmArray);
        let check=false;
        for (let i=0; i< currentKmArray.length; i++){
            if(currentKmArray[i].currentKm<trackData.distance){
                check=false;
                break;
            }
            else check=true;
        }
        if(check) setIsFinished(true);
    };
    React.useEffect(()=>{
        const interval=setInterval(()=>{
            if(count>=0) setCount(prev=>prev-1)
            if(count===-1) setStart(true);
        }, 1000)
    return ()=>{clearInterval(interval)}
    },[count]);
    const rowElement=racers.map(racer=> <Race key={racer.id} accelerate={accelerate} data={racer} isStart={isStart} handleCurrentKmChange={handleCurrentKmChange} rank={currentKmArray.findIndex(a=>Number(a.id)===Number(racer.id))+1}/>);
    const handleButtonClick=()=>{
        if(isStart){
            setAcceleration(prev=>{
                if(prev<curRacer.top_speed) return prev+curRacer.acceleration;
                else return curRacer.top_speed;
            });
        }
    }
    const handleFinish=()=>{
        props.handleReset();
    }
    return(
        <div style={{
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}> 
            <h2>Let's Race</h2>
            <h1>{count>-1?count:"Start!!!"}</h1>
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
            }}>
            </div>
            <div style={{
                   
                   borderRadius:"20%",
                   cursor:"pointer",
                   width: "100px",
                   height:"100px",
                   display:"flex",
                   justifyContent:"center",
                   alignItems:"center",
                   borderRadius:"50%",
                   userSelect:"none"
                   
               }} className="accelerate" onClick={handleButtonClick}><h3>Accelerate</h3></div>
               <div><h3>{curRacer.driver_name}: {accelerate}/{curRacer.top_speed} km/h</h3></div>
            <div style={{
                    width:"inherit",
                    display: "flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems: "center",
                    height:"10px",
                    marginTop:"30px"
                }}>
               
                    <div style={{
                        backgroundColor:"green",
                        width: "20px",
                        height:"20px"
                    }}></div>
                    
                    <h3>You are <span style={{color:"green"}}>Green!</span> We will race at <span style={{color:"red"}}>{trackData.name}</span> with the total of {trackData.distance}m</h3>
                </div>
                
            <table style={{marginTop: "20px", width:"60%", borderRadius:"15px", overflow:"hidden"}}>
                
                <thead>
                    <tr>
                        <th>Racer</th>
                        <th>Current</th>
                        <th>Rank:</th>
                    </tr>
                </thead>
                <tbody>
                    {rowElement}
                </tbody>
            </table>
            {isFinished&&<button style={{userSelect:"none"}} onClick={handleFinish} className="submit--button">Save To Leaderboard</button>}
            <br/>
        </div>
    )
}
import React,{useState} from "react";
import MainCard from "./MainCard";


const MainList=(props)=>{
    console.log("workoutImages",props.workoutImages)
    const WImages=props.workoutImages.map((workout)=>{
        console.log("workout",workout)
        return <MainCard  keys={workout.id} workout={workout}  />
    })

    return(
        <>
        {WImages}
        </>

    )

}

export default MainList
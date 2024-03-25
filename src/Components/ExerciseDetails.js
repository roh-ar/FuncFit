import React from "react";
import { Sidebar, Navbar } from '../Components'
import "../StyleSheet/homeScreen.css"

const ExerciseDetails=()=>{
    return(
        <div className='flex flex-row'>
        <Sidebar/>
        <div className="flex flex-col">
        <Navbar/>
        <div style={{backgroundColor:"grey"}}>In Exercise Details</div>
        </div>
      </div>
        
    )
}

export default ExerciseDetails;
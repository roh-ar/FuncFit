import React,{useState} from "react";
import { Sidebar, Navbar } from '../Components'
import TailwindDropdown from "./TailwindDropdown";
import "../StyleSheet/recommendationsInput.css"
import { useNavigate } from "react-router-dom";


const intensityOptions=[{
    label:"High Intensity",
    value:"high"

},
{
    label:"Medium Intensity",
    value:"medium"

},
{
    label:"Low Intensity",
    value:"low"

}]

const calorieIntakeOptions=[{
    label:"High Calorie Intake",
    value:"highCal"
},
{
    label:"Medium Calorie Intake",
    value:"medCal"
},
{
    label:"Low Calorie Intake",
    value:"lowCal"
}]

const workoutDurationOptions=[{
    label:"15 Mins",
    value:"15"
},
{
    label:"30 Mins",
    value:"30"
},
{
    label:"45 Mins",
    value:"45"
}]



const RecommendationsInput=()=>{

    const [intensitySelect,setIntensitySelect]=useState(intensityOptions[0])
    const [calorieSelect,setCalorieSelect]=useState(calorieIntakeOptions[0])
    const [durationSelect,setDurationSelect]=useState(workoutDurationOptions[0])
    const navigate=useNavigate()

    return(
        <div className='flex flex-row'>
        <Sidebar/>
        <div className="flex flex-col">
        <Navbar/>
        <div className="recommendationsContainer">
            
            <div className="recommendationsCard">
                <div className="recommendationsFields">
                <h1 className="recommendationsTitle">Enter Inputs For Custom Recommendations</h1>
                {/* <Dropdown label="workout Intensity" options={intensityOptions} selected={intensitySelect} onSelectHandler={setIntensitySelect} />
                <Dropdown label="Daily Calorie Intake" options={calorieIntakeOptions} selected={calorieSelect} onSelectHandler={setCalorieSelect} />
                <Dropdown label="Workout Duration" options={workoutDurationOptions} selected={durationSelect} onSelectHandler={setDurationSelect} /> */}
                <div className="recommdropdowns">
                <h1 className="recomlabels">Enter Intensity Level</h1>
                <TailwindDropdown options={intensityOptions} selected={intensitySelect} onSelectHandler={setIntensitySelect}/>
                </div>
                <div className="recommdropdowns">
                <h1 className="recomlabels">Enter Calorie Intake</h1>
                <TailwindDropdown options={calorieIntakeOptions} selected={calorieSelect} onSelectHandler={setCalorieSelect}/>
                </div>
                <div className="recommdropdowns">
                <h1 className="recomlabels">Enter Workout Duration</h1>
                <TailwindDropdown options={workoutDurationOptions} selected={durationSelect} onSelectHandler={setDurationSelect}/>
                </div>
                
                </div>
                <div onClick={()=>{navigate("/recommendationcardgrid",{state:{intensity:{intensitySelect},calorie:{calorieSelect},duration:{durationSelect}}})}}  className="flex justify-center align-center bg-blue-400 pt-4 pb-4 pl-8 pr-8 rounded-md">Submit</div>
            </div>
        </div>
        </div>
      </div>
        
    )

}

export default RecommendationsInput
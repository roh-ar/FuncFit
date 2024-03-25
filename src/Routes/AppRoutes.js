import React from 'react'
import { LandingScreen, LoginScreen, RegisterScreen, HomeScreen, ExerciseScreen, RecommendationsInput, RecommendationCardGrid} from "../Components";
import ExerciseDetails from '../Components/ExerciseDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingScreen />}/>
            <Route path="/welcome" element={<LandingScreen />}/>
            <Route path="/login" element={<LoginScreen />}/>
            <Route path="/register" element={<RegisterScreen />}/>
            <Route path="/home" element={<HomeScreen />}/>
            <Route path="/exercise" element={<ExerciseScreen />}/>
            <Route path="/exercisedetails" element={<ExerciseDetails />}/>
            <Route path="/Recommendations" element={<RecommendationsInput />}/>
            <Route path="/RecommendationCardGrid" element={<RecommendationCardGrid />}/>
                        

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
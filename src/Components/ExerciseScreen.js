import React, { useState } from "react";
import "../StyleSheet/homeScreen.css";

import { Sidebar, Navbar } from "../Components";
import SearchBar from "../Components/SearchBar";
import MainList from "../Components/MainList";
import unsplash from "../api/unsplash";
import axios from "axios";

const ExerciseScreen = () => {
  const [workoutImages, setWorkoutImages] = useState([
    
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3220.gif",
            "id": "3220",
            "name": "astride jumps (male)",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3672.gif",
            "id": "3672",
            "name": "back and forth step",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3360.gif",
            "id": "3360",
            "name": "bear crawl",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1160.gif",
            "id": "1160",
            "name": "burpee",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "leverage machine",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2331.gif",
            "id": "2331",
            "name": "cycle cross trainer",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "dumbbell",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1201.gif",
            "id": "1201",
            "name": "dumbbell burpee",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3221.gif",
            "id": "3221",
            "name": "half knee bends (male)",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3636.gif",
            "id": "3636",
            "name": "high knee against wall",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0501.gif",
            "id": "0501",
            "name": "jack burpee",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3224.gif",
            "id": "3224",
            "name": "jack jump (male)",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "rope",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2612.gif",
            "id": "2612",
            "name": "jump rope",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0630.gif",
            "id": "0630",
            "name": "mountain climber",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3638.gif",
            "id": "3638",
            "name": "push to run",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0685.gif",
            "id": "0685",
            "name": "run",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0684.gif",
            "id": "0684",
            "name": "run (equipment)",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3219.gif",
            "id": "3219",
            "name": "scissor jumps (male)",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3222.gif",
            "id": "3222",
            "name": "semi squat jump (male)",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3656.gif",
            "id": "3656",
            "name": "short stride run",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3361.gif",
            "id": "3361",
            "name": "skater hops",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3671.gif",
            "id": "3671",
            "name": "ski step",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3223.gif",
            "id": "3223",
            "name": "star jump (male)",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "stationary bike",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2138.gif",
            "id": "2138",
            "name": "stationary bike run v. 3",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "leverage machine",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0798.gif",
            "id": "0798",
            "name": "stationary bike walk",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3318.gif",
            "id": "3318",
            "name": "swing 360",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "elliptical machine",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2141.gif",
            "id": "2141",
            "name": "walk elliptical cross trainer",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3655.gif",
            "id": "3655",
            "name": "walking high knees lunge",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "leverage machine",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3666.gif",
            "id": "3666",
            "name": "walking on incline treadmill",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "stepmill machine",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2311.gif",
            "id": "2311",
            "name": "walking on stepmill",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3637.gif",
            "id": "3637",
            "name": "wheel run",
            "target": "cardiovascular system"
        }
    
  ]);

  const onSearchSubmit = async (searchTerm) => {
    //   const response=await unsplash.get('/search/photos',{
    //     params:{query: searchTerm}})
    // setWorkoutImages(response.data.results)
    // console.log("resp",response.data.results)

    const options = {
      headers: {
        "X-RapidAPI-Key": "b8f4aa0c1amsha7663697e19f4bap146fb2jsn9c74c83bff97",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    axios
      .get("https://exercisedb.p.rapidapi.com/exercises", options)
      .then(function (response) {
        //   console.log("response.data",response.data);
        //   const resp=response.data
        const resp = response.data.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(searchTerm) ||
            exercise.target.toLowerCase().includes(searchTerm) ||
            exercise.equipment.toLowerCase().includes(searchTerm) ||
            exercise.bodyPart.toLowerCase().includes(searchTerm)
        );
        console.log("resp", resp);
        setWorkoutImages(resp)
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div className="flex flex-row">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <Navbar />
        <div className="h-screen bg-gray-100 ">
          <section className="flex-row justify-center align-middle ml-20 mr-20  ">
            <SearchBar onSubmit={onSearchSubmit} />
          </section>
          <section className="p-20 grid sm:grid-cols-3  md:grid-cols-6 gap-6">
            <MainList workoutImages={workoutImages} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExerciseScreen;

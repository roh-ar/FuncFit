import React from "react";
import { useNavigate } from "react-router-dom";

const MainCard = (props) => {
  const navigate=useNavigate()
    console.log("pp",props.workout)
  return (
    <>
      <figure className="bg-white ht-80 rounded-lg shadow-md pt-2 pb-2 ">
        <img
          className="h-32 mx-auto"
          alt="workout"
          src={props.workout.gifUrl}
          onClick={()=>{navigate("/exercisedetails")}}
        />
        <figcaption className="text-center mt-2">
          <p>{props.workout.name}</p>
        </figcaption>
      </figure>
      
    </>
  );
};

export default MainCard;

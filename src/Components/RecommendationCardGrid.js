import React from "react";
import { Sidebar, Navbar } from "../Components";
import "../StyleSheet/homeScreen.css";
import "../StyleSheet/recommendationCardGrid.css"


const recomList=[{
    title:"Cardio",
    duration:"Thrice a week",
    completed:"1",
    imgSrc:"http://d205bpvrqc9yn1.cloudfront.net/2138.gif"
  },

{
    title:"Arm",
    duration:"Twice a week",
    completed:"1",
    imgSrc:"http://d205bpvrqc9yn1.cloudfront.net/0986.gif"
},

{
    title:"Legs",
    duration:"Once a week",
    completed:"1",
    imgSrc:"http://d205bpvrqc9yn1.cloudfront.net/0987.gif"
},
{
    title:"Chest",
    duration:"Once a week",
    completed:"1",
    imgSrc:"http://d205bpvrqc9yn1.cloudfront.net/3294.gif"
},
{
    title:"Lattice",
    duration:"Twice a week",
    completed:"0",
    imgSrc:"http://d205bpvrqc9yn1.cloudfront.net/3297.gif"

}
]

const cards=recomList.map((l)=>{
    return(
        <div className="RecommendationCardGridCardOuterContainer">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              alt="Sunset in the mountains"
              src={l.imgSrc}
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{l.title}</div>
              <p class="text-gray-700 text-xs">
                {`${"Duration"}:${l.duration}`}
              </p>
              <p class="text-gray-700 text-xs">
                {`${"Completed"}:${l.completed}`}
              </p>
            </div>
            {/* <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div> */}
          </div>
          </div>

    )
})

const RecommendationCardGrid = (props) => {
  // const {intensity,calorie,duration}=props.route.params
  // console.log("i,c,d",intensity,calorie,duration)
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />
        <div className="RecommendationCardGridLayout">
        <div className="recomtitle"> Personalised Recommendation</div>
        
        <div class="grid grid-cols-4 gap-3">
      
        
          {cards}
         
          
          {/* <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div> */}
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default RecommendationCardGrid;

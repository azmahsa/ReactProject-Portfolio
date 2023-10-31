import React, { useState } from "react";
import WorkItem from "./WorkItem";


const Work = () => {
  const [data,setData]= useState([
    {
        year:2020,
        title : 'Content Creator',
        duration : '3 Years',
        details : 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur dolorem, numquam repellat tempora maxime deserunt quidem eligendi atque quasi unde quaerat voluptatum, esse doloribus distinctio et debitis delectus eum."
    },
    {
        year:2017,
        title : 'Google',
        duration : '3 Years',
        details : 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur dolorem, numquam repellat tempora maxime deserunt quidem eligendi atque quasi unde quaerat voluptatum, esse doloribus distinctio et debitis delectus eum."
    },
    {
        year:2015,
        title : 'Amazon',
        duration : '3 Years',
        details : 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur dolorem, numquam repellat tempora maxime deserunt quidem eligendi atque quasi unde quaerat voluptatum, esse doloribus distinctio et debitis delectus eum."
    },
    {
        year:2012,
        title : 'Facebook',
        duration : '3 Years',
        details : 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur dolorem, numquam repellat tempora maxime deserunt quidem eligendi atque quasi unde quaerat voluptatum, esse doloribus distinctio et debitis delectus eum."
    }
  ])
    return ( 
     <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
     
        <>
        {data.map((item,index)=>(
              <WorkItem key={index} title={item.title} year={item.year} duration={item.duration} details={item.details} />
          
        ))}
        </>
     </div>
     
     );
}
 
export default Work;
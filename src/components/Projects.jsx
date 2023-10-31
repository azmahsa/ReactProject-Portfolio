import React from "react";
import ProjectItem from "./ProjectItem";
import coinbase from "../assets/coinbase.jpg"
import netflix from "../assets/Netflix.jpg"
import zillow from "../assets/Zillow.jpg"
import twitch from "../assets/twitch.jpg"
const Projects = () => {
    return ( 
        <div id="projects" className="max-w-[1024] m-auto md:pl-20 p-4 py-16">
          <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
        <p className="text-center py-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Saepe aspernatur delectus deserunt similique ipsam ullam
              necessitatibus consequatur recusandae in, ab explicabo ad
               cum odit eius eaque, aliquid neque architecto. Porro.
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={coinbase} title='Coinbase App'/>
            <ProjectItem img={netflix} title='Netflix App'/>
            <ProjectItem img={zillow} title='Zillow App'/>
            <ProjectItem img={twitch} title='Twitch App'/>
        </div>
        </div>

     );
}
 
export default Projects;
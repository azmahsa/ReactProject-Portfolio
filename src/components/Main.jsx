import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
const Main = () => {
    return ( 
    <div id="main">
        <img className=" w-full h-screen object-cover object-left scale-x-[-1] " src="https://images.unsplash.com/photo-1686771630333-7ddfd9030bd2?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col items-center justify-center lg:items-start lg:ml-[180px]">
            <h1 className="sm:text-5xl text-4xl text-gray-800 font-bold">I'm Katy Adams</h1>
            <h2 className="sm:text-3xl text-2xl flex pt-4 text-gray-800">I'm a
            <TypeAnimation
      sequence={[
        'Developer',
        1000,
        'Coder',
        2000,
        'Teach Enthusiast',
        2000
      ]}
      wrapper="div"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block', paddingLeft:'5px' }}
      repeat={Infinity}
    />
     </h2>
     <div className="flex justify-between max-w-[200px] w-full pt-6">
        <FaTwitter className=" cursor-pointer" size={20}/>
        <FaFacebookF className=" cursor-pointer" size={20}/>
        <FaInstagram className=" cursor-pointer" size={20}/>
        <FaLinkedinIn className=" cursor-pointer" size={20}/>
     </div>
        </div>
        </div>
    </div> 
    );
}
 
export default Main;
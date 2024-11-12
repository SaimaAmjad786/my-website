"use client";
import Hero from "./components/hero"
import Contact from "./components/contact"
import Project from "./components/project"
import About from "./components/about"
import Skills from "./components/skills"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Services from "./components/services";

export default function Home(){
  useEffect(()=>{
    AOS.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    AOS.refresh()
  },[])
  return(
   <div className="bg-gradient-to-r from bg-black">
    <Hero/>
    <About/> 
    <Skills/>
    <Project/> 
    <Services/>
    <Contact/>

   </div>
  )
}
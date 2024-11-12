import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {IoLogoVercel} from 'react-icons/io5'
import {FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const About = () => {
    return (
        <div id='About'>
            <section className="text-gray-900 body-font mt-[50px] ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
                        <img src='./girl.jpg'
                            className="object-cover object-center rounded-lg mx-auto  boxes border-2  border-cyan-400 border-y-purple-600"
                            alt="hero"                            
                            width={500}
                            height={200}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16  flex flex-col md:items-start md:text-left items-center text-center">
                        <h1  className="title-font sm:text-4xl text-3xl mb-4 font-bold  text-cyan-400">
                            About Me
                            <br className="hidden lg:inline-block" />
                        </h1>
                        
                        <p  className=" mr-5 leading-relaxed text-medium  font-bold text-justify text-white">
                            My name is saima Amjad. I have completed my Intermediate.I am a student of Governor Sindh IT Initiative. I am Dedicated to advancing myskills
                            in Webdevelopment my Technical Expertise spans Html ,Css ,Typescript with a focus on Nextjs and TaiwlvandCss . Currently I am Working
                            on Personal Project including nextjs or taiwlvandcss. I am explore my journey and see how I am contributing to the digital landscape through a blend of technical expertise and creative vision
                        </p>
                        <div className="flex justify-center">
                            
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link 
      target='blank' href={"https://github.com/SaimaAmjad786"} className="text-white">
      <FaGithub className='text-3xl mt-5' />
      </Link>

      <Link
      target='blank' href={"https://vercel.com/new/saima-amjads-projects"} className="ml-3 text-white">
      <IoLogoVercel className='text-3xl mt-5' />
      </Link>
      
      <Link
      target='blank' href={"https://www.linkedin.com/in/saima-amjad-2263012b6/"} className="ml-3 text-blue-800">
        <FaLinkedin className='text-3xl mt-5' />
      </Link>
      </span>         
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About

                            
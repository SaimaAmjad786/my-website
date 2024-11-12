"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';
import Link from "next/link"

const Hero = () => {
    return (
        <div>
            <section className="text-gray-900 body-font font-serif  rounded-xl mt-[50px] ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 text-cyan-400 hover:text-black font-serif font-extrabold">
                            I&apos;m Saima Amjad
                            <br className="hidden lg:inline-block" />
                        <Typewriter 
                        options={{ 
                        strings: [
                            'I am a WebDeveloper', 
                            'UX/UI Designer'
                        ],
                        autoStart: true,
                        loop: true,
                        }}
                        />
                        </h1>
                        <div className='w-[100px] h-[2px] bg-cyan-400'></div>
                        <p className="mb-8 mt-4 leading-relaxed text-white text-lg">
                            Expert in Next.js, TypeScript, React.js, Tailwind CSS | Participant in Governor Sindh Initiative AI, Metaverse, and Web 3.0
                        </p>
                        <div className="flex justify-center">
                            <Link href={"#Contact"}>
                                <button className="inline-flex text-black font-semibold bg-cyan-400 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500 rounded text-lg">
                                    Contact
                                </button>
                            </Link>
                        </div> 
                    </div>
                    
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto">
                        <img src='./girl.jpg'
                            className="object-cover object-center rounded-2xl  border-2 boxes border-cyan-400 border-y-purple-700"
                            alt="hero"
                            width={450}
                            height={200}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;





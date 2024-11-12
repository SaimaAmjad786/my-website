import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function Project() {
  return (
    <div id='Project'>
        <section className="text-gray-600 body-font -mt-[70px]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-5">
      <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-cyan-400">
        My Projects
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-5 ">
        {/* Project 1*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer ">

          <Image data-aos="zoom-in-up" src={"/image3.png"}
          width={300}
          height={100}
           alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-cyan-400  bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
              Hackathon projects
            </h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
              Static Resume Buidler
            </h1>
            <p className="leading-relaxed">
              This is the project which I have created for those who owns a Hackathon projects
            </p>
            
            <Link target='blank' href={"https://hackathon-milestones1-2-sigma.vercel.app/"}>
            <p className="leading-relaxed text-blue-600 hover:underline font-bold">View my all Projects</p>
            </Link>
          </div>
        </div>
      </div>

       {/* Project2 */}
       <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer ">

          <Image data-aos="zoom-in-up" src={"/hh.jpg"}
          width={100}
           height={50}
           alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg "
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-cyan-400 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
              NextJs an Taiwlvand CSS Assignmemt
            </h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
              Home Website
            </h1>
            <p className="leading-relaxed">
              This is the project which I have created for those who owns a Hackathon projects
            </p>
            
            <Link target='blank' href={"https://website-home-lac.vercel.app/"}>
            <p className="leading-relaxed text-blue-600 font-bold hover:underline">View my all Projects</p>
            </Link>
          </div>
        </div>
      </div>

       {/* Project 3*/}
       <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer ">
          <Image data-aos="zoom-in-up" src={"/shareableimg.jpg"}
          width={200}
           height={50}
           alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg "
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-cyan-400 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
              Hackathon projects
            </h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
              Shareable Resume Builder
            </h1>
            <p className="leading-relaxed">
              This is the project which I have created for those who owns a Hackathon projects
            </p>
            <Link target='blank' href={"https://hackathon-milestone-5-five-dusky.vercel.app/"}>
            <p className="leading-relaxed text-blue-600 font-bold hover:underline">View my all Projects</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Image4 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer ">
          <Image data-aos="zoom-in-up" src={"/todolist.png"}
          width={200}
           height={50}
           alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg "
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-cyan-400 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
              Typescript project
            </h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
              TodoList Project
            </h1>
            <p className="leading-relaxed">
              This is the project which I have created for those who owns a typescript projects
            </p>
            <Link target='blank' href={"https://github.com/SaimaAmjad786/Colourful-Todo-Application.git"}>
            <p className="leading-relaxed text-blue-600 font-bold hover:underline">View my all Projects</p>
            </Link>
          </div>
        </div>
      </div>
      {/* Image5 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer ">
          <Image data-aos="zoom-in-up" src={"/organic.jpg"}
          width={200}
           height={50}
           alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg "
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-cyan-400 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
              Nextjs and TaiwlvandCSS project
            </h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
              Organic Vegetables
            </h1>
            <p className="leading-relaxed">
              This is the project which I have created for those who owns a nextjs and Tailwand CSS projects
            </p>
            <Link target='blank' href={"https://organic-website-gilt.vercel.app/"}>
            <p className="leading-relaxed text-blue-600 font-bold hover:underline">View my all Projects</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Image6 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer ">
          <Image data-aos="zoom-in-up" src={"/atm.jpg"}
          width={200}
           height={50}
           alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg "
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-cyan-400 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
              Typescript projects
            </h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
              ATM Machine
            </h1>
            <p className="leading-relaxed">
              This is the project which I have created for those who owns a typescript projects
            </p>
            <Link target='blank' href={"https://github.com/SaimaAmjad786/cli-number-guessing.git"}>
            <p className="leading-relaxed text-blue-600 font-bold hover:underline">View my all Projects</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Image7 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer ">
          <Image data-aos="zoom-in-up" src={"/download.jpg"}
          width={200}
           height={50}
           alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg "
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-cyan-400 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
              Typescript project
            </h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
              Calcualtor Project
            </h1>
            <p className="leading-relaxed">
              This is the project which I have created for those who owns a typescript projects
            </p>
            <Link target='blank' href={"https://github.com/SaimaAmjad786/SIMPLE-CALCULATOR"}>
            <p className="leading-relaxed text-blue-600 font-bold hover:underline">View my all Projects</p>
            </Link>
          </div>
        </div>
      </div>
      {/* Image5 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer ">
          <Image data-aos="zoom-in-up" src={"/image3.webp"}
          width={200}
           height={50}
           alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg "
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-cyan-400 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
              Nextjs and Taiwlvand CSS project
            </h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
             Flower Website
            </h1>
            <p className="leading-relaxed">
              This is the project which I have created for those who owns a typescript projects
            </p>
            <Link target='blank' href={"https://website-html-css-orpin.vercel.app/"}>
            <p className="leading-relaxed text-blue-600 font-bold hover:underline">View my all Projects</p>
            </Link>
          </div>
        </div>
      </div>
      {/* Image9 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer ">
          <Image data-aos="zoom-in-up" src={"/guess.png"}
          width={200}
           height={50}
           alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg "
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-cyan-400 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
              Typescript Project
            </h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
            Number Guessing Game projects
            </h1>
            <p className="leading-relaxed">
              This is the project which I have created for those who owns a typescript projects
            </p>
            <Link target='blank' href={"https://github.com/SaimaAmjad786/cli-number-guessing.git"}>
            <p className="leading-relaxed text-blue-600 font-bold hover:underline">View my all Projects</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project;







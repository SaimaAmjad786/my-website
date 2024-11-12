import React from 'react'
import { SiArtixlinux } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { FaWebAwesome } from "react-icons/fa6";
import { SiDgraph } from "react-icons/si";
function Services() {
  return (
    <div id='service'>
        <section className='mt-[70px]'>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-3xl font-bold title-font mb-2 text-cyan-500 hover:text-white">
       Services
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
       <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-3 border-cyan-500 hover:bg-gray-300 boxes border-x-fuchsia-600 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center  justify-center rounded-full bg-cyan-50  text-blue-700  font-bold mb-4">
            <SiArtixlinux />
          </div>
          <h2 className="text-lg text-cyan-500 font-bold  title-font mb-2">
            UX/UI Designer
          </h2>
          <p className="leading-relaxed text-base text-white hover:text-cyan-800 hover:font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, distinctio perspiciatis accusamus eius sed reiciendis beatae dolores alias ipsum tempore iusto deserunt, rem vel. Modi ex quibusdam voluptates cumque nisi?
          </p>
        </div>
      </div>
{/* ----------------------Figma----------------------------- */}
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-cyan-500 hover:bg-gray-300 border-x-fuchsia-600 boxes p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center  justify-center rounded-full bg-cyan-50 text-blue-700 font-bold mb-4">
          <FaFigma />
          </div>
          <h2 className="text-lg text-cyan-500 font-bold   title-font mb-2">
            Figma Designer
          </h2>
          <p className="leading-relaxed text-base text-white hover:text-cyan-800 hover:font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, distinctio perspiciatis accusamus eius sed reiciendis beatae dolores alias ipsum tempore iusto deserunt, rem vel. Modi ex quibusdam voluptates cumque nisi?
          </p>
        </div>
      </div>

      {/* ----------------------------web development------------------------------- */}
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-cyan-500 p-6 hover:bg-gray-300 boxes border-x-fuchsia-600 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center  justify-center rounded-full bg-cyan-50 text-blue-700 font-bold mb-4">
          <FaWebAwesome />
          </div>
          <h2 className="text-lg text-cyan-500 font-bold title-font mb-2">
            Web Development
          </h2>
          <p className="leading-relaxed text-base text-white hover:text-cyan-800 hover:font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, distinctio perspiciatis accusamus eius sed reiciendis beatae dolores alias ipsum tempore iusto deserunt, rem vel. Modi ex quibusdam voluptates cumque nisi?
          </p>
        </div>
      </div>

      {/* ------------------------------Graphic Design-------------------------------- */}
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-cyan-500 hover:bg-gray-300 boxes border-x-fuchsia-600 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center  justify-center rounded-full bg-cyan-50 text-blue-700 font-bold mb-4">
          <SiDgraph />
          </div>
          <h2 className="text-lg text-cyan-500 font-bold   title-font mb-2">
            Graphic Design
          </h2>
          <p className="leading-relaxed text-base text-white hover:text-cyan-800 hover:font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, distinctio perspiciatis accusamus eius sed reiciendis beatae dolores alias ipsum tempore iusto deserunt, rem vel. Modi ex quibusdam voluptates cumque nisi?
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Services
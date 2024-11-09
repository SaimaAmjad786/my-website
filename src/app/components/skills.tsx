import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
function skills() {
  return (
    <div id='Skills'>
      <section className="text-gray-600 body-font -mt-[90px]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xl text-cyan-400 tracking-widest font-bold title-font mb-3">
        Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-semibold  title-font text-cyan-400">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
      {/*skills 1 */}
      <div className="p-3 md:w-1/3 w-[100%] ">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3 ">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-cyan-400 text-white flex-shrink-0">
            <FaRegCheckCircle className='text-xl font-bold' />
            </div>
            <h2 className="text-white text-lg title-font font-bold">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full'>
              <div className='absolute bg-cyan-400 h-1 rounded-xl w-[100%]'></div>
            <p className='font-bold text-cyan-400 text-right'>100%</p>
          </div>
        </div>
      </div>
      </div>

      {/*skills 2 */}
      <div className="p-3 md:w-1/3 w-[100%] ">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-cyan-400 text-white flex-shrink-0">
            <FaRegCheckCircle className='text-xl font-bold' />
            </div>
            <h2 className="text-black text-lg title-font font-bold">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-50 rounded-xl'>
              <div className='absolute bg-cyan-400 h-1 rounded-xl w-[80%]'></div>
            <p className='font-bold text-cyan-400 text-right'>90%</p>
          </div>
        </div>
      </div>
      </div>

      {/*skills 2 */}
      <div className="p-4 md:w-1/3 w-[100%]">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-cyan-400 text-white flex-shrink-0">
            <FaRegCheckCircle className='text-xl font-bold' />
            </div>
            <h2 className="text-white text-lg title-font font-bold">
              Javascript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-50 rounded-xl'>
              <div className='absolute bg-cyan-400 h-1 rounded-xl w-[80%]'></div>
            <p className='font-bold text-cyan-400 text-right'>85%</p>
          </div>
        </div>
      </div>
      </div>

      {/*skills 4 */}
      <div className="p-4 md:w-1/3 w-[100%]">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-cyan-400 text-white flex-shrink-0">
            <FaRegCheckCircle className='text-xl font-bold' />
            </div>
            <h2 className="text-white text-lg title-font font-bold">
              Nextjs
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-50 rounded-xl'>
              <div className='absolute bg-cyan-400 h-1 rounded-xl w-[70%]'></div>
            <p className='font-bold text-cyan-400 text-right'>80%</p>
          </div>
        </div>
      </div>
      </div>
      {/*skills 5 */}
      <div className="p-4 md:w-1/3 w-[100%]">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-cyan-400 text-white flex-shrink-0">
            <FaRegCheckCircle className='text-xl font-bold' />
            </div>
            <h2 className="text-white text-lg title-font font-bold">
              Ms Office
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-50 rounded-xl'>
              <div className='absolute bg-cyan-400 h-1 rounded-xl w-[80%]'></div>
            <p className='font-bold text-cyan-400 text-right'>80%</p>
          </div>
        </div>
      </div>
      </div>

      {/*skills 6 */}
      <div className="p-4 md:w-1/3 w-[100%]">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-cyan-400 text-white flex-shrink-0">
            <FaRegCheckCircle className='text-xl font-bold' />
            </div>
            <h2 className="text-white text-lg title-font font-bold">
              TaiwlvandCss
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-50 rounded-xl'>
              <div className='absolute bg-cyan-400 h-1 rounded-xl w-[70%]'></div>
            <p className='font-bold text-cyan-400 text-right'>80%</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default skills
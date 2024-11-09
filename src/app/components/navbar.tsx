import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='bg-gray-100 rounded-lg  z-50 sticky top-0'>
    <header className="text-blue-600 body-font font-bold">
    <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center lg">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
    <Image src={"/logo.png"} width={100} height={70} alt='logo'className='rounded-lg'/>
      <span className="my-1 mr-7 hover:text-blue-600 text-2xl font-bold font-serif ml-4">Saima Portfolio </span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"#Home"} className="mr-7 text-lg hover:text-gray-900 font-bold ">Home</Link>
      <Link href={"#About"} className="mr-7 text-lg hover:text-gray-900 font-bold">About</Link>
      <Link href={"#Skills"} className="mr-7 text-lg hover:text-gray-900 font-bold">Skills</Link>
      <Link href={"#Project"} className="mr-7 text-lg hover:text-gray-900 font-bold">Projects</Link>
      <Link href={"#Contact"} className="mr-7 text-lg hover:text-gray-900 font-bold">Contact</Link>
    </nav>

  </div>
</header>
    </div>
  )
}

export default Navbar


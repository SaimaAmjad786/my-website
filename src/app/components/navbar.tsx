"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-black font-body rounded-lg z-50 sticky w-full left-0  top-0">
      <header className="text-cyan-500 body-font font-bold">
        <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src="/logo.png" width={90} height={70} alt="Saima Portfolio Logo" className="rounded-lg" />
            <span className="my-1 mr-7 hover:text-white text-cyan-500 text-2xl font-bold font-serif ml-4">Saima Portfolio</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex p-3 ml-auto text-cyan-500 rounded-md mr-4 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 md:hidden"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Nav Links */}
          <nav
            className={`${isMobileMenuOpen ? 'block' : 'hidden'
              } md:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center`}
          >
            <Link href="#Home" className="mr-3 text-lg hover:text-white font-bold">Home</Link>
            <Link href="#About" className="mr-3 text-lg hover:text-white font-bold">About</Link>
            <Link href="#Skills" className="mr-3 text-lg hover:text-white  font-bold">Skills</Link>
            <Link href="#service" className="mr-3 text-lg hover:text-white font-bold">Service</Link>
            <Link href="#Project" className="mr-3 text-lg hover:text-white font-bold">Projects</Link>
            <Link href="#Contact" className="mr-3 text-lg hover:text-white font-bold">Contact</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;









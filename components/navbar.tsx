import Link from 'next/link'
import React from 'react'
import logo from '../public/logo.png'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <header className="bg-[#F2F2F2] mx-8 py-2 my-4 rounded-2xl px-4 md:px-8">
              <div className="container mx-auto flex justify-between items-center">                <div className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <img
                      src={logo.src}
                      alt="Logo"
                      className="h-10 w-10 hover:scale-110 transition-transform duration-200"  
                    />
                  </Link>
                </div>

                <div className='searchbar flex bg-white rounded-full'>
                  <div className='mx-1 my-1 flex justify-center items-center py-1 px-2 bg-[#F04A8F] rounded-full'>
                    <CiSearch />
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 rounded-full w-64 focus:outline-none "
                  />
                </div>
                <div className="hidden text-sm  md:flex space-x-6 mx-14">
                  <Link href="/" className="text-pink-500 hover:text-pink-700">
                    home
                  </Link>
                  <Link href="/products" className="text-pink-500 hover:text-pink-700">
                    products
                  </Link>
                  <Link href="/about" className="text-pink-500 hover:text-pink-700">
                    about us
                  </Link>
                  <Link href="/contact" className="text-pink-500 hover:text-pink-700">
                    contact us
                  </Link>
                </div>
                <div className="md:hidden">
                  <button className="text-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </header>
    </div>
  )
}

export default Navbar;

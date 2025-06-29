"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../public/logo.png'
import { CiSearch } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"
import { FaHome, FaBoxOpen, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <header className="bg-[#F2F2F2] mx-8 py-2 my-4 rounded-2xl px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src={logo.src}
                alt="Logo"
                className="h-10 w-10 hover:scale-110 transition-transform duration-200"  
              />
            </Link>
          </div>

          {/* Search bar - Only visible on desktop */}
          <div className='searchbar hidden md:flex bg-white rounded-full'>
            <div className='mx-1 my-1 flex justify-center items-center py-1 px-2 bg-[#F04A8F] rounded-full'>
              <CiSearch />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-full w-64 focus:outline-none"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden text-sm md:flex space-x-6 mx-14">
            <Link href="/" className="text-pink-500 hover:text-pink-700">
              Home
            </Link>
            <Link href="/products" className="text-pink-500 hover:text-pink-700">
              Products
            </Link>
            <Link href="/about" className="text-pink-500 hover:text-pink-700">
              About us
            </Link>
            <Link href="/contact" className="text-pink-500 hover:text-pink-700">
              Contact us
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              
              <SheetTrigger asChild>
                <button className="text-pink-500 p-2 hover:bg-pink-50 rounded-lg transition-colors">
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
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-b from-white to-pink-50 border-l border-pink-100">
                <div className="flex flex-col h-full">
                  {/* Logo and Brand */}
                   <Link href="/">
                  <div className="flex items-center gap-2 mb-8">
                    <img
                      src={logo.src}
                      alt="Logo"
                      className="h-10 w-10"
                    />
                    
                  </div>
                  </Link>

                  {/* Navigation Links */}
                  <nav className="flex flex-col gap-2">
                    <SheetClose asChild>
                      <Link 
                        href="/" 
                        className="flex items-center gap-3 text-gray-600 hover:text-[#D12391] p-4 rounded-xl hover:bg-white/80 transition-all duration-200"
                      >
                        <FaHome className="text-xl" />
                        <span className="font-medium">Home</span>
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link 
                        href="/products" 
                        className="flex items-center gap-3 text-gray-600 hover:text-[#D12391] p-4 rounded-xl hover:bg-white/80 transition-all duration-200"
                      >
                        <FaBoxOpen className="text-xl" />
                        <span className="font-medium">Products</span>
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link 
                        href="/about" 
                        className="flex items-center gap-3 text-gray-600 hover:text-[#D12391] p-4 rounded-xl hover:bg-white/80 transition-all duration-200"
                      >
                        <FaInfoCircle className="text-xl" />
                        <span className="font-medium">About Us</span>
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link 
                        href="/contact" 
                        className="flex items-center gap-3 text-gray-600 hover:text-[#D12391] p-4 rounded-xl hover:bg-white/80 transition-all duration-200"
                      >
                        <FaPhoneAlt className="text-xl" />
                        <span className="font-medium">Contact Us</span>
                      </Link>
                    </SheetClose>
                  </nav>

                  {/* Search bar */}
                  {/* <div className='mt-8 px-4'>
                    <div className='searchbar flex bg-white rounded-full border border-pink-200 shadow-sm'>
                      <div className='mx-1 my-1 flex justify-center items-center py-1 px-2 bg-[#F04A8F] rounded-full'>
                        <CiSearch className="text-white" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search products..."
                        className="px-4 py-2 rounded-full w-full focus:outline-none"
                      />
                    </div>
                  </div> */}

                  {/* Contact Info */}
                  <div className="mt-auto p-4 bg-white rounded-xl shadow-sm">
                    <h3 className="font-medium text-gray-800 mb-2">Need Help?</h3>
                    <p className="text-sm text-gray-600">Contact our support team</p>
                    <a 
                      href="tel:+917224093826" 
                      className="mt-2 inline-block text-[#D12391] font-medium"
                    >
                      
                      +917224093826
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar

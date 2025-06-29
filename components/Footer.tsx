
import Link from 'next/link'
import React from 'react'
import logo from "@/public/logo.png"

const Footer = () => {
  return (
    <div className="bg-[#61B5E1] px-10 py-10 rounded-t-3xl">
     <div className="bg-gray-100 rounded-3xl py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <img
                  src={logo.src} 
                  height={20}
                  width={50}  />
              </div>
              <p className="text-gray-600 max-w-xs">
                Your trusted pharmaceutical company for quality healthcare products and services.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-pink-500">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="text-gray-600 hover:text-pink-500">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-pink-500">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-pink-500">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-pink-500">
                      General Health
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-pink-500">
                      Oncology
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-pink-500">
                     Neurology
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-pink-500">
                     Diabetology
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-pink-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-gray-600">+917224093826</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-pink-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-600">info@laisalife.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Copyright@Laisalife Sciences Pvt Ltd</p>
            <p className="text-sm text-gray-500 mt-4">
              Designed and Developed by Ecoavenstra Hr Infotech Pvt. Ltd. <a href="" ></a>
              </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer

import Link from 'next/link'
import React from 'react'
import Product from "@/public/product.png"
import { FaPlus } from "react-icons/fa6";


const Products = () => {
  return (
    <div>
      <section className="py-12 px-4 md:px-8">
              <div className="container mx-auto">
                <div className="flex justify-between md:flex-row flex-col items-center mb-8">
                  <h2 className="text-4xl  md:text-5xl font-bold text-[#D12391]">Our Products</h2>
                  <div className="relative w-full max-w-xs ml-8 mt-4">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full rounded-full border border-[#D12391] py-2 px-5 pl-10 focus:outline-none focus:ring-2 focus:ring-[#D12391] bg-[#F2EFF1] text-gray-700 placeholder-[#D12391]"
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D12391]" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-[#F2EFF1] rounded-3xl m-2 p-[2px] group hover:shadow-lg transition-all duration-300">
                      <Link href={`/products/${item}`}>
                        <div className="mb-4">
                          <img
                            src={Product.src}
                            alt="Vitamin Supplement"
                            width={200}
                            height={200}
                            className="mx-auto transform transition-transform group-hover:scale-105 duration-300"
                          />
                        </div>
                        <div className='bottom-div bg-white px-4 py-4 rounded-3xl'>
                        <div className="text-xs text-gray-500 mb-1">Health supplement</div>
                        <div className="font-medium mb-2">Vitamin {item}00</div>
                        <div className="flex justify-between items-center">
                          <button className="border border-black rounded-full px-3 py-1 text-sm flex justify-center items-center gap-1">
                            <FaPlus /> <p> Add to cart </p>
                          </button>
                          <span className="font-bold">${item}00.00</span>
                        </div>
                      </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    </div>
  )
}

export default Products

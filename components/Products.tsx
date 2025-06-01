import Link from 'next/link'
import React from 'react'
import Product from "@/public/product.png"
import { FaPlus } from "react-icons/fa6";


const Products = () => {
  return (
    <div>
      <section className="py-12 px-4 md:px-8">
              <div className="container mx-auto">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#D12391]">Our Best Products</h2>
                  <Link href="/products" className="text-gray-600 hover:text-[#D12391]">
                    see all products →
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-[#F2EFF1] rounded-3xl m-2 p-[2px]">
                      <div className="mb-4">
                        <img
                          src={Product.src}
                          alt="Vitamin Supplement"
                          width={200}
                          height={200}
                          className="mx-auto"
                        />
                      </div>
                      <div className='bottom-div bg-white px-4 py-4 rounded-3xl'>
                      <div className="text-xs text-gray-500 mb-1">Health supplement</div>
                      <div className="font-medium mb-2">Vitamin {item}00</div>
                      <div className="flex justify-between items-center">
                        <button className="border border-black rounded-full px-3 py-1 text-sm flex justify-center items-center gap-1"><FaPlus /> <p> Add to cart </p></button>
                        <span className="font-bold">${item}00.00</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    </div>
  )
}

export default Products

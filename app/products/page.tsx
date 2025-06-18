"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import pacliaisa from "@/public/pacliaisa.png"
import docelaisa from "@/public/docelaisa.png"

// Product data
const products = [
  {
    id: 1,
    name: "PACLILAISA Injection",
    category: "Oncology",
    description: "Paclitaxel injection for cancer treatment",
    image: pacliaisa, // Replace with actual product image
    details: {
      composition: "Paclitaxel",
      packaging: "Single-dose vial",
      strength: "260mg/43.4ml",
      storageConditions: "Store between 20°C to 25°C"
    }
  },
  {
    id: 2,
    name: "DOCELAISA Injection",
    category: "Oncology",
    description: "Docetaxel injection for cancer treatment",
    image: docelaisa, // Replace with actual product image
    details: {
      composition: "Docetaxel",
      packaging: "Single-dose vial",
      strength: "120mg/3ml",
      storageConditions: "Store between 2°C to 8°C"
    }
  }
]

const Products = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex justify-between md:flex-row flex-col items-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#D12391]">Our Products</h2>
            <div className="relative w-full max-w-xs ml-8 mt-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border border-[#D12391] py-2 px-5 pl-10 focus:outline-none focus:ring-2 focus:ring-[#D12391] bg-[#F2EFF1] text-gray-700 placeholder-[#D12391]"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D12391]" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-[#F2EFF1] rounded-3xl m-2 p-[2px] group hover:shadow-lg transition-all duration-300">
                <Link href={`/products/${product.id}`}>
                  <div className="mb-4 p-6">
                    <img
                      src={product.image.src}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="mx-auto transform transition-transform group-hover:scale-105 duration-300"
                    />
                  </div>
                  <div className='bottom-div bg-white px-6 py-6 rounded-3xl'>
                    <div className="text-sm text-[#D12391] font-medium mb-2">{product.category}</div>
                    <div className="font-bold text-xl mb-3">{product.name}</div>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <button className="bg-[#D12391] text-white rounded-full px-4 py-2 text-sm flex justify-center items-center gap-2 hover:bg-[#D12391]/90 transition-colors">
                        <FaPlus /> <span>Request Quote</span>
                      </button>
                      <div className="text-sm text-[#D12391] font-medium">
                        {product.details.strength}
                      </div>
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

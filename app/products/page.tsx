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
    image: pacliaisa,
    strength: "260mg/43.4ml",
    fullDescription: "For I.V. Infusion After Dilution Single Use Vial",
    composition: {
      title: "Each ml contains:",
      components: [
        { name: "Paclitaxel I.P.", value: "6mg" },
        { name: "Polyoxyl 35 Castor Oil I.P.", value: "527mg" },
        { name: "Dehydrated Alcohol I.P.", value: "49.7%v/v" }
      ]
    }
  },
  {
    id: 2,
    name: "DOCELAISA Injection",
    category: "Oncology",
    description: "Docetaxel injection for cancer treatment",
    image: docelaisa,
    strength: "120mg/3ml",
    fullDescription: "For I.V. infusion after dilution Sterile single dose vial with solvent",
    composition: {
      title: "Each ml contains:",
      components: [
        { name: "Docetaxel Trihydrate I.P. eq. to Docetaxel", value: "40mg" },
        { name: "Polysorbate 80 I.P.", value: "527mg" },
        { name: "Ethanol I.P.", value: "qs" }
      ]
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
          </div>          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href={`/products/${product.id}`}>
                  <div className="bg-gray-50 p-8 rounded-t-3xl flex items-center justify-center">
                    <img
                      src={product.image.src}
                      alt={product.name}
                      className="w-[300px] h-[300px] object-contain transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#D12391] font-medium mb-2">{product.category}</div>
                    <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                    <p className="text-gray-500 text-sm mb-4">{product.fullDescription}</p>
                    <div className="flex justify-between items-center">
                      <button className="bg-[#D12391] text-white rounded-full px-6 py-2 text-sm flex items-center gap-2 hover:bg-[#D12391]/90 transition-colors">
                        <FaPlus size={12} /> Request Quote
                      </button>
                      <div className="text-[#D12391] font-medium">
                        {product.strength}
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

import Link from 'next/link'
import React from 'react'
import pacliaisa from "@/public/pacliaisa.png"
import docelaisa from "@/public/docelaisa.png"
import { FaPlus } from "react-icons/fa6"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const products = [
  {
    id: 1,
    name: "PACLILAISA Injection",
    category: "Oncology",
    description: "Paclitaxel injection for cancer treatment",
    image: pacliaisa,
    strength: "260mg/43.4ml"
  },
  {
    id: 2,
    name: "DOCELAISA Injection",
    category: "Oncology",
    description: "Docetaxel injection for cancer treatment",
    image: docelaisa,
    strength: "120mg/3ml"
  }
]

const Products = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#D12391]">Our Products</h1>
          <div className="relative w-full max-w-md">
            <Input 
              type="text"
              placeholder="Search products..."
              className="pl-10 bg-white border-[#D12391] focus:ring-[#D12391]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D12391] w-4 h-4" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="bg-white rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative p-8 bg-[#F8F5F7] rounded-t-3xl">
                  <img
                    src={product.image.src}
                    alt={product.name}
                    className="w-[260px] h-[260px] mx-auto object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#D12391] mb-2">{product.category}</div>
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <Button 
                      className="bg-[#D12391] hover:bg-[#D12391]/90 text-white px-6"
                    >
                      <FaPlus className="mr-2" /> Request Quote
                    </Button>
                    <span className="text-[#D12391] font-medium">{product.strength}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

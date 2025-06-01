"use client"

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Product from "@/public/product.png"
import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa6"

// This would come from your database in a real app
const products = [
  {
    id: 1,
    name: "Vitamin 100",
    description: "A comprehensive vitamin supplement designed to support overall health and wellness. Our specially formulated blend contains essential vitamins and minerals that help maintain immune function, boost energy levels, and promote optimal health.",
    price: 100.00,
    benefits: [
      "Supports immune system function",
      "Increases energy and vitality",
      "Promotes healthy skin and hair",
      "Helps maintain bone health"
    ],
    usage: "Take one capsule daily with meals or as directed by your healthcare professional.",
    category: "Health supplement",
    composition: "Vitamin A, B-Complex, C, D, E, Minerals, Zinc"
  },
  // Add more products as needed
]

export default function ProductDetail() {
  const params = useParams()
  const productId = Number(params.id)
  
  // Find the product (in a real app, this would be an API call)
  const product = products.find(p => p.id === productId) || products[0]

  return (
    <div className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-[#F2EFF1] rounded-3xl p-8" data-aos="fade-right">
            <Image
              src={Product}
              alt={product.name}
              width={400}
              height={400}
              className="mx-auto object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6" data-aos="fade-left">
            <div>
              <p className="text-sm text-[#D12391] mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-2xl font-bold text-[#D12391]">${product.price.toFixed(2)}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Benefits</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Usage</h2>
              <p className="text-gray-600">{product.usage}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Composition</h2>
              <p className="text-gray-600">{product.composition}</p>
            </div>

            <Button 
              className="w-full md:w-auto bg-[#D12391] hover:bg-[#D12391]/90 text-white flex items-center gap-2"
            >
              <FaPlus size={16} />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

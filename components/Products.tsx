import Link from 'next/link'
import React from 'react'
import pacliaisa from "@/public/pacliaisa.png"
import { FaPlus } from "react-icons/fa6";
import docelaisa from "@/public/docelaisa.png"

const products = [
  {
    id: 1,
    name: "PACLILAISA Injection",
    category: "Oncology",
    description: "PACLILAISA (Paclitaxel) Injection is a mitotic inhibitor used in cancer chemotherapy.",
    image: pacliaisa,
    details: {
      composition: {
        title: "Each ml contains:",
        components: [
          { name: "Paclitaxel I.P.", value: "6mg" },
          { name: "Polyoxyl 35 Castor Oil I.P.", value: "527mg" },
          { name: "Dehydrated Alcohol I.P.", value: "49.7%v/v" }
        ]
      },
      packaging: "Single-dose vial with tamper-evident seal",
      strength: "260mg/43.4ml",
      storageConditions: "Store between 20°C to 25°C, protect from light"
    }
  },
  {
    id: 2,
    name: "DOCELAISA Injection",
    category: "Oncology",
    description: "DOCELAISA (Docetaxel) Injection is a chemotherapy medication used in cancer treatment.",
    image: docelaisa,
    details: {
      composition: {
        title: "Each ml contains:",
        components: [
          { name: "Docetaxel Trihydrate I.P. eq. to Docetaxel", value: "40mg" },
          { name: "Polysorbate 80 I.P.", value: "527mg" },
          { name: "Ethanol I.P.", value: "qs" }
        ]
      },
      packaging: "Single-dose vial with tamper-evident seal",
      strength: "120mg/3ml",
      storageConditions: "Store between 2°C to 8°C, protect from light"
    }
  }
]

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                <div className="bg-[#F2EFF1] rounded-3xl transition-all duration-300 hover:shadow-xl">
                  <div className="p-6">
                    <img
                      src={product.image.src}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="mx-auto transform transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="bg-white px-6 py-6 rounded-3xl">
                    <div className="text-sm text-[#D12391] mb-2">{product.category}</div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-medium text-[#D12391]">
                        {product.details.strength}
                      </div>
                      <button className="bg-[#D12391] text-white rounded-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-[#D12391]/90 transition-colors">
                        <FaPlus size={12} /> 
                        <span>Request Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
           
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products

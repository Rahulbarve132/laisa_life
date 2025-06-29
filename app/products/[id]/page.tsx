"use client"

import { useParams } from 'next/navigation'
import Image from 'next/image'
import pacliaisa from "@/public/pacliaisa.png"
import docelaisa from "@/public/docelaisa.png"
import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa6"

// This would come from your database in a real app
const products = [
  {
    id: 1,
    name: "PACLILAISA Injection",
    category: "Oncology",
    description: "PACLILAISA (Paclitaxel) Injection is a mitotic inhibitor used in cancer chemotherapy. It is particularly effective in the treatment of ovarian, breast, lung, bladder, prostate, melanoma, esophageal, and other types of solid tumor cancers. The drug targets tubulin, which is essential for cell division, effectively disrupting the process of cancer cell growth.",
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
      storageConditions: "Store at a temperature not exceeding 25°C. Protect from light."
    }
  },  {
    id: 2,
    name: "DOCELAISA Injection",
    category: "Oncology",
    description: "DOCELAISA (Docetaxel) Injection is a chemotherapy medication used to treat various types of cancer including breast cancer, non-small cell lung cancer, prostate cancer, gastric cancer, and head and neck cancer. It works by interfering with cell division, specifically targeting rapidly growing cancer cells.",
    image: docelaisa,
    details: {      composition: {
        title: "Each ml contains:",
        components: [
          { name: "anhydrous Docetaxel", value: "120mg" },
          { name: "Polysorbate 80 I.P.", value: "q.s. to 3.0ml" },
          { name: " Alcohol (95%v/v) Ι.Ρ.", value: "13%w/v " },
          { name: " (Absolute Alcohol Content 15.25% v/v)"},
          { name: " Water for Injections I.P.", value: ".q.s. to 9.0ml " },
          { name: " (For IV infusion after Dilution)"},
        ]
      },
      packaging: "Single-dose vial with tamper-evident seal",
      strength: "120mg/3ml",
      storageConditions: "Store between 2°C to 8°C, protect from light"
    }
  }
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
          <div className="bg-[#F2EFF1] rounded-3xl p-8">
            <Image
              src= {product.image}
              alt={product.name}
              width={400}
              height={400}
              className="mx-auto object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6" >
            <div>
              <p className="text-sm text-[#D12391] mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
            </div>    

            <div>
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Details</h2>              <div className="space-y-4 text-gray-600">                <div className="bg-[#F8F5F7] p-4 rounded-lg">
                  <span className="font-medium text-[#D12391]">Composition:</span>
                  <div className="mt-2 font-mono text-sm">
                    <div className="mb-2">{product.details.composition.title}</div>
                    {product.details.composition.components.map((component, index) => (
                      <div key={index} className="flex justify-between border-b border-gray-200 py-1 last:border-0">
                        <span>{component.name}</span>
                        <span>{component.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#F8F5F7] p-4 rounded-lg">
                    <span className="font-medium text-[#D12391]">Strength:</span>
                    <div className="mt-1">{product.details.strength}</div>
                  </div>
                  <div className="bg-[#F8F5F7] p-4 rounded-lg">
                    <span className="font-medium text-[#D12391]">Packaging:</span>
                    <div className="mt-1">{product.details.packaging}</div>
                  </div>
                </div>
                <div className="bg-[#F8F5F7] p-4 rounded-lg">
                  <span className="font-medium text-[#D12391]">Storage Conditions:</span>
                  <div className="mt-1">{product.details.storageConditions}</div>
                </div>
              </div>
            </div>

            <Button 
              className="w-full md:w-auto bg-[#D12391] hover:bg-[#D12391]/90 text-white flex items-center gap-2"
            >
              <FaPlus size={16} />
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

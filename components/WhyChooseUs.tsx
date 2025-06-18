import React from 'react'
import Image from 'next/image'
import whyChoose from "@/public/whyChoose.png"

const chooseUsPoints = [
  {
    id: 1,
    title: "Certified Manufacturing Standards",
    description: "Compliant with WHO-GMP, ISO, and regulatory norms to ensure product safety and efficacy."
  },
  {
    id: 2,
    title: "Advanced Infrastructure",
    description: "State-of-the-art facilities equipped with modern machinery and quality control labs."
  },
  {
    id: 3,
    title: "Scalable Production Capacity",
    description: "Capable of handling bulk orders with consistent quality and timely delivery."
  },
  {
    id: 4,
    title: "Experienced R&D Team",
    description: "Innovative formulation development and support for customized medicine requirements."
  },
  
]


const WhyChooseUs = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold py-4 text-[#D12391] mb-8">Why choose us?</h2>
            <div className="space-y-6">
              {chooseUsPoints.map((point) => (
                <div key={point.id} className="flex items-start gap-4">
                  <span className="text-[#D12391] font-bold text-xl">{point.id}.</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>          <div className="w-full md:flex hidden md:w-1/2 px-4 md:px-28 py-10 md:py-20 relative h-[300px] md:h-[500px]">
            <img
              src={whyChoose.src}
              alt="Professional Doctor"
              height={500}
              width={450}
              className="object-cover rounded-lg w-full h-full"
              />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

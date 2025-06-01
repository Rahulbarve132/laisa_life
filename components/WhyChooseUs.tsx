import React from 'react'
import Image from 'next/image'
import whyChoose from "@/public/whyChoose.png"

const chooseUsPoints = [
  {
    id: 1,
    title: "Industry Expertise",
    description: "Specialized in pharmacy and healthcare web design with compliance and security in mind."
  },
  {
    id: 2,
    title: "Custom Solutions",
    description: "Tailored features like online prescriptions, appointment booking, and medication info."
  },
  {
    id: 3,
    title: "Mobile & SEO Optimized",
    description: "Fully responsive and search engine-friendly to boost visibility and reach."
  },
  {
    id: 4,
    title: "User-Friendly Design",
    description: "Intuitive layouts for easy navigation by all age groups and patients."
  },
  {
    id: 5,
    title: "Ongoing Support",
    description: "Reliable technical support and maintenance to keep your website running smoothly"
  }
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
          </div>
          <div className="w-full md:w-1/2 px-28 py-20 relative h-[500px]">
            <img
              src={whyChoose.src}
              alt="Professional Doctor"
              height={500}
              width={450}
              
              className="object-cover rounded-lg"
              
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

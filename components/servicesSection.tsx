import React from 'react'
import cold from "@/public/coldAndFlu.png"
import eyeCare from "@/public/eyeCare.png"
import diabetesCare from "@/public/daibaties.png"
import oncology from "@/public/oncology.png"
import neurology from "@/public/neurology.png"
import Image from 'next/image'

const servicesData = [
  {
    id: 1,
    title: "General Health",
    image: cold,
    bgColor: "bg-[#E39797]",
    imageClasses: "object-contain p-4"
  },
  {
    id: 2,
    title: "Oncology",
    image: oncology,
    bgColor: "bg-[#DAD28D]",
    imageClasses: "object-contain p-6"
  },
  {
    id: 3,
    title: "Neurology",
    image: neurology,
    bgColor: "bg-[#82D8C6]",
    imageClasses: "object-contain p-4"
  },
  {
    id: 4,
    title: "Diabetology",
    image: diabetesCare,
    bgColor: "bg-[#DDB0DF]",
    imageClasses: "object-contain p-6 pt-8"
  },
]

const ServicesSection = () => {
  return (
    <section className="py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className='flex flex-col items-center group hover:scale-105 transition-transform duration-300'
            >
              <div 
                className={`${service.bgColor} rounded-2xl w-full aspect-square flex items-center justify-center relative overflow-hidden`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    className={service.imageClasses}
                  />
                </div>
              </div>
              <span className="text-center text-xl py-3 font-bold">{service.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

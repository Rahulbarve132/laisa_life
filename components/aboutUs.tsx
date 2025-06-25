import React from 'react'
import aboutUsImg from "@/public/aboutUs.png"

const AboutUs = () => {
  return (
     <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 mb-8 flex flex-col gap-4 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-[#D12391] mb-6">About us</h2>
              <p className="text-gray-800 text-lg mb-4">
                We are a trusted pharmaceutical company committed to providing quality healthcare, personalized service, and
                expert advice. Our team ensures safe and accurate dispensing, convenient access to medications, and
                compassionate care. We prioritize your well-being and strive to be your reliable partner in health,
                every step of the way.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src={aboutUsImg.src}
                alt=" Character"
                width={230}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutUs

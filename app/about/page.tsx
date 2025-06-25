"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import aboutUs from "@/public/aboutUsPage.png"
import vision from "@/public/OurVision.png"
import presence from "@/public/presece.png"
import leadership from "@/public/leadership.png"
import mission from "@/public/mission.png"
import { useIsMobile } from "@/hooks/use-mobile"

export default function AboutUs() {
  const isMobile = useIsMobile()
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Mobile Components
  const MobileHero = () => (
    <section className="w-full bg-[#f7f7f7] rounded-3xl mt-4 mb-8 shadow-md">
      <div className="px-4 py-6 text-center">
        <img
          data-aos="fade-down"
          data-aos-duration="1000"
          src={aboutUs.src}
          alt="Doctor"
          className="w-64 mx-auto mb-6 rounded-2xl object-cover"
        />
        <h1 className="text-4xl font-bold text-[#D12391] mb-3">About us</h1>
        <p className="text-lg text-[#D12391] font-medium">
          Delivering Trust, One Medicine  at a Time.
        </p>
      </div>
    </section>
  )

  const MobileAboutContent = () => (
    <section className="py-8 bg-white">
      <div className="px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">About us</h2>
        <div className="space-y-4 text-gray-600">
          <p className="text-sm transform transition-all duration-700 hover:scale-[1.02] hover:bg-gray-50 p-4 rounded-lg">
            At Laisalife sciences pvt. ltd., we are a dedicated pharmaceutical startup committed to transforming
            cancer care through advanced, injectable oncology treatments.
          </p>
          <p className="text-sm sm:text-base lg:text-lg transform transition-all duration-700 hover:scale-[1.02] hover:bg-gray-50 p-4 sm:p-6 rounded-lg">
            Founded with a vision to innovate in the field of oncology, we focus on developing and delivering
            personalized treatment solutions that meet the unique needs of each patient. Our team of experienced
            scientists, clinicians, and industry professionals is driven by a shared passion to make a meaningful
            difference in the fight against cancer.
          </p>
          <p className="text-sm sm:text-base lg:text-lg transform transition-all duration-700 hover:scale-[1.02] hover:bg-gray-50 p-4 sm:p-6 rounded-lg">
            As a growing company, we are agile, research-driven, and patient-focused. We believe that every
            treatment should be as unique as the person receiving it, and we are dedicated to bringing precision,
            care, and hope to every Medicine  we produce.
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div data-aos="flip-left" className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl shadow-md">
            <div className="text-xs text-gray-500 font-medium mb-1">CIN NO:</div>
            <div className="text-sm font-semibold text-gray-800">U46497CT2024PTC016734</div>
          </div>
          <div data-aos="flip-right" className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl shadow-md">
            <div className="text-xs text-gray-500 font-medium mb-1">GST NO:</div>
            <div className="text-sm font-semibold text-gray-800">22AATCI9449G1ZF</div>
          </div>
        </div>
      </div>
    </section>
  )

  const MobileVision = () => (
    <section className="py-8">
      <div className="px-4 text-center">
        <div className="mb-6">
          <div data-aos="fade-down" className="text-2xl font-bold text-[#D12391] mb-4">
            Our Vision
          </div>
          <p className="text-base text-gray-700">
            Our vision is to lead in delivering safe, innovative, and accessible Medicine  solutions that improve
            health outcomes and enrich lives.
          </p>
        </div>
        <img
          data-aos="fade-down"
          src={vision.src}
          alt="Vision Image"
          className="w-48 mx-auto rounded-2xl object-cover"
        />
      </div>
    </section>
  )

  const MobileCards = () => (
    <section className="py-8 px-4">
      <div className="space-y-6">
        <div data-aos="fade-down" className="bg-[#F1F1F1] rounded-3xl shadow-md border border-gray-300">
          <div className="p-4">
            <h3 className="text-xl font-bold text-[#D12391] mb-1">Leadership</h3>
            <p className="text-base text-gray-800 mb-3">Experience. Expertise . Conviction.</p>
          </div>
          <img
            src={leadership.src}
            alt="Leadership Team"
            className="w-full object-cover rounded-b-3xl"
          />
        </div>
        <div data-aos="fade-down" className="bg-[#F1F1F1] rounded-3xl shadow-md border border-gray-300">
          <div className="p-4">
            <h3 className="text-xl font-bold text-[#D12391] mb-1">Presence</h3>
            <p className="text-base text-gray-800 mb-3">We specialize in high-quality Medicine  treatments</p>
          </div>
          <img
            src={presence.src}
            alt="Laisalife Office"
            className="w-full object-cover rounded-b-3xl"
          />
        </div>
      </div>
    </section>
  )

  const MobileMission = () => (
    <section className="py-8 px-4">
      <div className="text-center">
        <h2 data-aos="fade-down" className="text-2xl font-bold text-[#D12391] mb-4">
          Our mission
        </h2>
        <p className="text-base text-gray-700 mb-6">
          Our mission is to deliver safe, effective, and personalized Medicine  treatments that enhance lives,
          support well-being, and boost confidence.
        </p>
        <img
          data-aos="fade-down"
          src={mission.src}
          alt="mission"
          className="w-56 md:w-36 mx-auto rounded-2xl"
        />
      </div>
    </section>
  )

  // Desktop Components
  const DesktopHero = () => (
    <section className="w-full bg-[#f7f7f7] rounded-3xl mt-8 mb-12 shadow-md">
      <div data-aos="fade-down" className="flex items-center justify-between px-8 py-10 md:py-16">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold text-[#D12391] mb-3">About us</h1>
          <p className="text-xl md:text-2xl text-[#D12391] font-medium">
            Delivering Trust, One Medicine  at a Time.
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <img
            data-aos="fade-down"
            data-aos-duration="1000"
            src={aboutUs.src}
            alt="Doctor"
            className="w-80 rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  )

  const DesktopAboutContent = () => (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">About us</h2>
          <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed">
            <p className="text-sm sm:text-base lg:text-lg transform transition-all duration-700 hover:scale-[1.02] hover:bg-gray-50 p-4 sm:p-6 rounded-lg">
              At Laisalife sciences pvt. ltd., we are a dedicated pharmaceutical startup committed to transforming
              cancer care through advanced, injectable oncology treatments. Our mission is to provide safe, effective,
              and accessible therapies that support better health outcomes and improve quality of life for patients
              facing cancer.
            </p>
            <p className="text-sm sm:text-base lg:text-lg transform transition-all duration-700 hover:scale-[1.02] hover:bg-gray-50 p-4 sm:p-6 rounded-lg">
              Founded with a vision to innovate in the field of oncology, we focus on developing and delivering
              personalized treatment solutions that meet the unique needs of each patient. Our team of experienced
              scientists, clinicians, and industry professionals is driven by a shared passion to make a meaningful
              difference in the fight against cancer.
            </p>
            <p className="text-sm sm:text-base lg:text-lg transform transition-all duration-700 hover:scale-[1.02] hover:bg-gray-50 p-4 sm:p-6 rounded-lg">
              As a growing company, we are agile, research-driven, and patient-focused. We believe that every
              treatment should be as unique as the person receiving it, and we are dedicated to bringing precision,
              care, and hope to every Medicine  we produce.
            </p>
          </div>

          {/* CIN and GST Numbers */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div data-aos="flip-left" data-aos-duration="2000" className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-xs sm:text-sm text-gray-500 font-medium mb-1">CIN NO:</div>
              <div className="text-sm sm:text-base font-semibold text-gray-800">U46497CT2024PTC016734</div>
            </div>
            <div data-aos="flip-up"  data-aos-duration="2000" className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-xs sm:text-sm text-gray-500 font-medium mb-1">GST NO:</div>
              <div className="text-sm sm:text-base font-semibold text-gray-800">22AATCI9449G1ZF</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const DesktopVision = () => (
    <section className="py-12 sm:py-16 lg:py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 px-10 gap-8 lg:gap-12 items-center">
          <div data-aos="fade-up" className="text-center lg:text-left ">
            <div className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-[#D12391] mb-6 sm:mb-8">
              Our Vision
            </div>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Our vision is to lead in delivering safe, innovative, and accessible Medicine  solutions that improve
              health outcomes and enrich lives.
            </p>
          </div>
          <div  className="flex justify-center">
           <img
      src={vision.src}
      data-aos="fade-up"
      alt="Vision Image"
      className="w-56 md:w-80 rounded-2xl object-cover"
      
    />
          </div>
        </div>
      </div>
    </section>
  )

  const DesktopCards = () => (
    <section className="py-8">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Leadership Card */}
    <div  data-aos="fade-up" className="bg-[#F1F1F1]  rounded-3xl shadow-md border border-gray-300 p-0 overflow-hidden flex flex-col">
      <div className="p-6 pb-2">
        <h3 className="text-2xl font-bold text-[#D12391] mb-1">Leadership</h3>
        <p className="text-lg text-gray-800 mb-4">Experience. Expertise . Conviction.</p>
      </div>
      <div className="flex-1 flex items-end">
        <img
          src={leadership.src}
          alt="Leadership Team"
          className="w-full object-cover rounded-b-xl"
        />
      </div>
    </div>
    {/* Presence Card */}
    <div  data-aos="fade-up" className="bg-[#F1F1F1]  rounded-3xl  shadow-md border border-gray-300 p-0 overflow-hidden flex flex-col">
      <div className="p-6 pb-2">
        <h3 className="text-2xl font-bold text-[#D12391] mb-1">Presence</h3>
        <p className="text-lg text-gray-800 mb-4">We specialize in high-quality Medicine  treatments</p>
      </div>
      <div className="flex-1 flex items-end relative">
        <img
          src={presence.src}
          alt="Laisalife Office"
          className="w-full  object-cover rounded-b-2xl"
        />

      </div>
    </div>
  </div>
</section>
  )

  const DesktopMission = () => (
    <section className="py-12 sm:py-16 lg:py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div  data-aos="fade-up" className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-[#D12391] mb-6 sm:mb-8">
              Our mission
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Our mission is to deliver safe, effective, and personalized Medicine  treatments that enhance lives,
              support well-being, and boost confidence.
            </p>
          </div>
          <div className="flex justify-end">
           <img
            data-aos="fade-up"
            src={mission.src}
             alt="mission" />
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen mx-4 md:mx-8">
      {isMobile ? <MobileHero /> : <DesktopHero />}
      {isMobile ? <MobileAboutContent /> : <DesktopAboutContent />}
      {isMobile ? <MobileVision /> : <DesktopVision />}
      {isMobile ? <MobileCards /> : <DesktopCards />}
      {isMobile ? <MobileMission /> : <DesktopMission />}
    </div>
  )
}

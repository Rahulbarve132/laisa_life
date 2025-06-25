'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import instagram from '../public/instagram.png'
import facebook from '../public/facebook.png'
import linkedin from '../public/linkedIn.png'
import whatsapp from '../public/whatsapp.png'
import hero from '../public/hero.png'

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden mx-4 md:mx-8 rounded-3xl">
      {/* Background Image */}
      <Image
        src={hero}
        alt="Laboratory Background"
        fill
        className="object-cover rounded-3xl"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-900/30 to-blue-900/50 rounded-3xl">
        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-center items-center">
          {/* Main Text */}
          <div className="text-center space-y-4 z-10">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-wider">
              LAISA<span className="text-[#D12391]">LIFE</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-medium tracking-widest">
              SCIENCES PRIVATE LIMITED
            </h2>
          </div>

          {/* Features Box - Bottom */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8">
           
            
          </div>          {/* Social Links Box - Top Right (Hidden on Mobile) */}
          <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hidden md:block">
            <div className="flex gap-4 items-center">
              <Link href="#" className="hover:scale-110 transition-transform">
                <Image src={instagram} alt="Instagram" width={32} height={32} className="w-8 h-8" />
              </Link>
              <Link href="#" target="_blank" className="hover:scale-110 transition-transform">
                <Image src={facebook} alt="Facebook" width={32} height={32} className="w-8 h-8" />
              </Link>
              <Link href="#" target="_blank" className="hover:scale-110 transition-transform">
                <Image src={linkedin} alt="LinkedIn" width={32} height={32} className="w-8 h-8" />
              </Link>
              <Link href="https://wa.me/+917224093826" target="_blank" className="hover:scale-110 transition-transform">
                <Image src={whatsapp} alt="WhatsApp" width={32} height={32} className="w-8 h-8" />
              </Link>
            </div>
            <button 
              onClick={() => { console.log("Contact Us") }}
              className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-md font-medium transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

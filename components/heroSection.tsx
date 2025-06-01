'use client'
import React from 'react'
import homeSectionImage from '../public/homeSection.png'
import Image from 'next/image'
import Link from 'next/link'
import instagram from '../public/instagram.png'
import facebook from '../public/facebook.png'
import linkedin from '../public/linkedIn.png'
import whatsapp from '../public/whatsapp.png'


const HeroSection = () => {
  return (
    <section className="bg-[#61B5E1] rounded-3xl min-h-[530px] mx-4 md:mx-8 overflow-hidden">
      <div className="container mx-auto py-8 px-4 md:px-8 relative">
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[180px] text-center font-bold text-[#D12391] mb-4 md:mb-8">
          LAISA Life
        </h1>

        <div className="flex flex-col items-center relative">
          {/* Features section - Mobile */}
          <div className="flex flex-col gap-4 w-full md:hidden mt-4">
            <div className="flex flex-col gap-3">
              <div className="text-white px-4 py-2 rounded-full flex items-center">
                <div className="w-8 h-8 bg-[#F04A8F] rounded-lg mr-2"></div>
                <span className="text-sm">100% genuine products</span>
              </div>
              <div className="text-white px-4 py-2 rounded-full flex items-center">
                <div className="w-8 h-8 bg-[#F04A8F] rounded-lg mr-2"></div>
                <span className="text-sm">Delivery to your doorstep</span>
              </div>
            </div>
          </div>

          {/* Features section - Desktop */}
          <div className="hidden md:flex w-full justify-between absolute bottom-[-14rem]">
            <div className="flex gap-4">
              <div className="text-white px-4 py-2 rounded-full flex items-center">
                <div className="w-8 h-8 bg-[#F04A8F] rounded-lg mr-2"></div>
                <span className="text-sm">100% genuine products</span>
              </div>
              <div className="text-white px-4 py-2 rounded-full flex items-center">
                <div className="w-8 h-8 bg-[#F04A8F] rounded-lg mr-2"></div>
                <span className="text-sm">Delivery to your doorstep</span>
              </div>
            </div>
            <div className="bg-white  z-50 p-4 rounded-lg w-56 flex flex-col justify-between h-32">
              <div className="flex gap-2">
                 <div className=' flex gap-4 justify-center items-center'>     
                   <div className='size-8 object-contain hover:scale-110'>
        <Image className='' src={instagram} alt="instagram " width={36} />
      </div>
      <Link href="https://www.facebook.com/Ecoavenstra/" target="_blank">
        <div className='size-8 object-contain hover:scale-110'>
          <Image className='' src={facebook} alt="facebook" />
        </div>
      </Link>
      <Link href="https://www.linkedin.com/company/ecoavenstra-hr-infotech-pvt-ltd/" target="_blank">
        <div className='size-8 object-contain hover:scale-110'>
          <Image className='' src={linkedin} alt="linkedin" />
        </div>
      </Link>
      <Link href="https://wa.me/+919752505639" target="_blank">
        <div className='size- object-contain hover:scale-110'>
          <Image className='' src={whatsapp} alt="whatsapp"  height={45} />
        </div>
      </Link>
    </div>
              </div>
              <button onClick={()=>{
                console.log("Contact Us");
              }} className="bg-gray-200 text-black w-full py-2 rounded-md  font-semibold">
                Contact Us
              </button>
            </div>
          </div>
          
          {/* Centered Image */}
          <div className="relative w-full flex justify-center mt-4 md:mt-0 md:absolute right-10 md:right-0 top-[3rem] md:top-[-8rem]">
            <Image
              src={homeSectionImage}
              data-aos="fade-down"
              data-aos-duration="1000"
              alt="Pharmacist"
              width={420}
              height={300}
              className="w-[350px] sm:w-[350px] md:w-[420px] object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

"use client"

import Image from 'next/image'
import Link from 'next/link'
import contactUs from '@/public/contactUs.png'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50/20 py-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#D12391] mb-4" data-aos="fade-down">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up">
            Ready to transform cancer care together? Reach out to us through any of these channels.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background Image */}
          <div className="absolute right-0 top-0 -z-10 opacity-10">
            <Image
              src={contactUs}
              alt="Background"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Direct Call Card */}
            <div data-aos="fade-up" data-aos-delay="100" 
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="bg-pink-50 rounded-2xl p-4 mb-6 w-16 h-16 flex items-center justify-center group-hover:bg-[#D12391] transition-colors duration-300">
                <FaPhone className="text-2xl text-[#D12391] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us Directly</h3>
              <p className="text-gray-600 mb-4">Available 9:00 AM - 6:00 PM</p>
              <Link href="tel:+917224093826" className="text-[#D12391] font-medium hover:text-[#D12391]/80">
                7224093826
              </Link>
            </div>

            {/* WhatsApp Card */}
            <div data-aos="fade-up" data-aos-delay="200"
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="bg-pink-50 rounded-2xl p-4 mb-6 w-16 h-16 flex items-center justify-center group-hover:bg-[#D12391] transition-colors duration-300">
                <FaWhatsapp className="text-2xl text-[#D12391] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp Us</h3>
              <p className="text-gray-600 mb-4">Quick responses on WhatsApp</p>
              <Link href="https://wa.me/7224093826" className="text-[#D12391] font-medium hover:text-[#D12391]/80">
                7224093826
              </Link>
            </div>

            {/* Email Card */}
            <div data-aos="fade-up" data-aos-delay="300"
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="bg-pink-50 rounded-2xl p-4 mb-6 w-16 h-16 flex items-center justify-center group-hover:bg-[#D12391] transition-colors duration-300">
                <FaEnvelope className="text-2xl text-[#D12391] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
              <div className='flex flex-col gap-1'>
              <Link href="mailto:info@laisalife.com," className="text-[#D12391] font-medium hover:text-[#D12391]/80">
                info@laisalife.com
              </Link>
              
              <Link href="mailto:Laisalifesciences@gmail.com," className="text-[#D12391] font-medium hover:text-[#D12391]/80">
                Laisalifesciences@gmail.com
              </Link>
              </div>
            </div>
            
          </div>

          {/* Location Section */}
          <div className="mt-16" data-aos="fade-up">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Visit Our Office</h2>
                  <div className="flex items-start space-x-4 text-gray-600">
                    <FaMapMarkerAlt className="text-[#D12391] text-xl mt-1" />
                    <div>
                      <p className="font-medium mb-2">Headquarters</p>
                      <p className="text-gray-600">115 Tirupati Palace Nipania</p>
                      <p className="text-gray-600">Indore, Madhya Pradesh</p>
                      <p className="text-gray-600">India</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <Link href="#" className="bg-pink-50 p-3 rounded-full hover:bg-[#D12391] transition-colors duration-300 group">
                        <FaLinkedin className="text-xl text-[#D12391] group-hover:text-white" />
                      </Link>
                      <Link href="#" className="bg-pink-50 p-3 rounded-full hover:bg-[#D12391] transition-colors duration-300 group">
                        <FaInstagram className="text-xl text-[#D12391] group-hover:text-white" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Map or Office Image */}
                <div className="relative h-[300px] rounded-2xl overflow-hidden">
                  <Image
                    src={contactUs}
                    alt="Office Location"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

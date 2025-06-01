import HeroSection from "@/components/heroSection"
import ServicesSection from "@/components/servicesSection"
import AboutUs from "@/components/aboutUs"
import Products from "@/components/Products"
import Promotions from "@/components/Promotions"
import Testimonial from "@/components/Testimonial"
import WhyChooseUs from "@/components/WhyChooseUs"


export default function Home() {

 
  return (
    <div className="min-h-screen bg-gray-50">
     <HeroSection/>
     <ServicesSection/>
     <AboutUs/>
     <Products/>
     <Promotions />
     <Testimonial/>
     <WhyChooseUs/>
    
     
    </div>
  )
}

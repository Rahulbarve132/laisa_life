import React from 'react'
import flu from "@/public/flu.png"
import headache from "@/public/headache.png"
import maternalHealth from "@/public/maternal.png"

const promotionsData = [
  {
    
    background: 'bg-[#91C6FF]',
    discount: '5%',
    type: 'cashback',
    image: {
      src: flu.src,
      alt: 'Cold and flu',
      width: "260",
    }
  },
  {
    
    background: 'bg-[#91FF91]',
    discount: '10%',
    type: 'flat off',
    image: {
      src: maternalHealth.src,
      alt: 'Maternal Health',
      width:"200"
    }
  },
  {
    
    background: 'bg-[#FF91E4]',
    discount: '5%',
    type: 'cashback',
    image: {
      src: headache.src,
      alt: 'Headache',
      width:"200",
    }
  }
]

const Promotions = () => {
  return (
    <section className="py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {promotionsData.map((promotion, index) => (
            <div key={index} className={`${promotion.background} rounded-lg p-6 relative h-[330px] overflow-hidden`}>
              
              <img
                src={promotion.image.src}
                alt={promotion.image.alt}
                width={promotion.image.width}
                height={150}
                className="absolute bottom-0 right-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Promotions

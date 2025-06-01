import React from 'react'
import flu from "@/public/flu.png"
import headache from "@/public/headache.png"
import maternalHealth from "@/public/maternal.png"

const promotionsData = [
  {
    title: 'Cold and flu Relief',
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
    title: 'Maternal Health',
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
    title: 'Headache',
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
              <div>
                <div className="text-2xl font-bold mb-1">{promotion.title}</div>
                <button className="text-sm mt-4 font-semibold  mb-8">Browse all →</button>
                <div className="text-4xl pt-20 font-bold">{promotion.discount}</div>
                <div className="text-sm">{promotion.type}</div>
              </div>
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

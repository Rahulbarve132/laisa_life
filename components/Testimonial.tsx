import React from 'react'

const testimonialData = [
  {
    id: 1,
    title: "Top-Notch Medicine Quality",
    subtitle: "Consistent Standards & GMP Certified",
    review: "We’ve been sourcing from this trusted pharmaceutical company for over 2 years. Their medicines are always of premium quality, and regulatory compliance is excellent.",
    rating: 5,
    author: "Dr. Rajeev Mehra, Delhi"
  },
  {
    id: 2,
    title: "Reliable Bulk Supplier",
    subtitle: "Timely Delivery & Transparent Communication",
    review: "Their logistics and communication are smooth. Bulk orders are handled professionally with no delays. A trustworthy partner for our hospital network.",
    rating: 5,
    author: "Sneha Ramesh, Bengaluru"
  },
  {
    id: 3,
    title: "Affordable & Effective Formulations",
    subtitle: "Great Value for Healthcare Units",
    review: "We get top-quality Ethical medicines at very competitive rates. Their product stability and efficacy are impressive. Highly recommended for rural health programs.",
    rating: 5,
    author: "Anil Patil, Pune"
  },
  {
    id: 4,
    title: "Impressive R&D Support",
    subtitle: "Innovative Formulas & Custom Manufacturing",
    review: "They supported our private label with excellent R&D capabilities. The team is cooperative, responsive, and technically sound.",
    rating: 5,
    author: "Dr. Neha Sharma, Ahmedabad"
  }
]


const Testimonial = () => {
  return (
    <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D12391] mb-8">What our Customer say</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 py-2  gap-14">
            {testimonialData.map((item) => (
              <div key={item.id} className="bg-[#F2EFF1] rounded-2xl p-6">
                <div className="mb-4">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.subtitle}</div>
                </div>
                <p className="text-sm mb-4">
                  "{item.review}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(item.rating)].map((_, star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">{item.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Testimonial

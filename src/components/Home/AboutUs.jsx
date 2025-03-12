import React from 'react'

export default function AboutUs() {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 pr-0 md:pr-16 mb-8 md:mb-0">
              <h3 className="text-xl font-medium text-amber-800 mb-2">Why MoiPlane</h3>
              <h2 className="text-3xl font-bold text-[#081B46] mb-6">About Us</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                WingsJet is a private jet charter, flight management and aviation company. With decades of aviation experience under our belt,
                customer focused service that provides our clients with hassle-free access to the world of private aviation.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From planning and booking flights to ground transportation and accommodation, our expert team does it the next level. 
                All you need to do is relax, enjoy and enjoy the journey.
              </p>
              <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-blue-900 hover:text-white transition">
                Read more
              </button>
            </div>
            <div className="md:w-1/2 flex items-start justify-center pt-4">
              <div className="w-5/6 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/assets/seats.jpg" 
                  alt="Luxury jet interior" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
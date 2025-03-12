import React from 'react'
import { ChevronRight } from 'lucide-react';

export default function Blog() {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold text-[#081B46] mb-12">Blog</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blog Post 1 */}
            <div className="rounded-lg ">
              <img src="/assets/pilot.jpg" alt="Emission reduction" className="w-full h-48 object-cover" />
              <div className="p-6 pl-0">
                <h3 className="text-xl font-bold text-[#081B46] mb-2">Emission reduction in air</h3>
                <p className="text-sm text-gray-500 mb-4">10.02.2023</p>
                <p className="text-gray-700 mb-4">
                  We have one of the youngest fleets of wide-body aircraft with an average aircraft age of less than 3 years. Our stringent maintenance...
                </p>
                <a href="#" className="text-[#081B46] font-medium flex items-center hover:underline">
                  Read more <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Blog Post 2 */}
            <div className="rounded-lg">
              <img src="/assets/spa.jpg" alt="Wellness in Indonesia" className="w-full h-48 object-cover" />
              <div className="p-6 pl-0">
                <h3 className="text-xl font-bold text-[#081B46] mb-2">Discover best spa wellness in Indonesia</h3>
                <p className="text-sm text-gray-500 mb-4">13.02.2023</p>
                <p className="text-gray-700 mb-4">
                  Private Charter flight companies let users see exactly what our clients see and give you full transparency every step of the way...
                </p>
                <a href="#" className="text-[#081B46] font-medium flex items-center hover:underline">
                  Read more <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
import React from 'react';

const Advantage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/advantages1.jpg')" }}
      />
      
      {/* Content Container */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-8">
          <div className="max-w-lg">
            {/* Feature Header */}
            <div className="mb-3">
              <p className="text-amber-500 uppercase tracking-wide font-light">OUR FEATURES</p>
              <h1 className="text-white text-5xl font-bold mb-10">Advantages</h1>
            </div>
            
            {/* Feature Description */}
            <div className="mb-10">
              <h2 className="text-white text-2xl font-semibold mb-4">
                Control over schedules and routes
              </h2>
              <p className="text-white text-lg">
              Enjoy flexible flight schedules to meet the needs of our clients.
               We can aim to fly to regions where regular airlines don't fly.
              </p>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex space-x-2">
              <button className="w-12 h-12 border border-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-12 h-12 border border-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
        <div className="flex flex-col space-y-3">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full bg-white ${i === 0 ? 'w-3 h-3' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantage;
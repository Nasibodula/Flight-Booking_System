import React from 'react';

const HowFlyWithus = () => {
  return (
    <div className="relative h-100 text-white p-8 overflow-hidden">
      {/* Background image layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/assets/clouds.jpg')",
        //   filter: "blur(1px)"
        }}
      ></div>
      
      {/* Translucent overlay */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ backgroundColor: 'rgba(10, 22, 54, 0.85)' }}
      ></div>
      
      {/* Main content container */}
      <div className="relative z-20 max-w-6xl mx-auto pt-12">
        {/* Header section */}
        <div className="mb-12">
          <h4 className="text-amber-500 uppercase tracking-wider text-sm font-medium mb-2">STAGES OF COOPERATION</h4>
          <h1 className="text-5xl font-bold mb-16">How to fly with us</h1>
        </div>
        
        {/* Process timeline */}
        <div className="flex justify-between items-center mb-6">
          {/* Step 1 */}
          <div className="flex flex-col items-center w-1/4 relative">
            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-6">
              <span className="text-xl font-bold">1</span>
            </div>
            {/* Right connector line */}
            <div className="absolute w-1/2 h-px bg-white right-0 top-8"></div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center w-1/4 relative">
            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-6">
              <span className="text-xl font-bold">2</span>
            </div>
            {/* Left connector line */}
            <div className="absolute w-1/2 h-px bg-white left-0 top-8"></div>
            {/* Right connector line */}
            <div className="absolute w-1/2 h-px bg-white right-0 top-8"></div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center w-1/4 relative">
            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-6">
              <span className="text-xl font-bold">3</span>
            </div>
            {/* Left connector line */}
            <div className="absolute w-1/2 h-px bg-white left-0 top-8"></div>
            {/* Right connector line */}
            <div className="absolute w-1/2 h-px bg-white right-0 top-8"></div>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col items-center w-1/4 relative">
            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-6">
              <span className="text-xl font-bold">4</span>
            </div>
            {/* Left connector line */}
            <div className="absolute w-1/2 h-px bg-white left-0 top-8"></div>
          </div>
        </div>
        
        {/* Step descriptions */}
        <div className="flex justify-between">
          {/* Step 1 description */}
          <div className="w-1/4 px-2">
            <h3 className="font-semibold text-lg mb-2">Send your inquiry</h3>
            <p className="text-gray-300 text-sm">Register on our service and make a Request Quotes</p>
          </div>
          
          {/* Step 2 description */}
          <div className="w-1/4 px-2">
            <h3 className="font-semibold text-lg mb-2">Aircraft selection</h3>
            <p className="text-gray-300 text-sm">We check available flights for your dates and send you a confirmation within 24 hours</p>
          </div>
          
          {/* Step 3 description */}
          <div className="w-1/4 px-2">
            <h3 className="font-semibold text-lg mb-2">Flight confirmation</h3>
            <p className="text-gray-300 text-sm">Coordination of details, conclusion of an agreement, payment</p>
          </div>
          
          {/* Step 4 description */}
          <div className="w-1/4 px-2">
            <h3 className="font-semibold text-lg mb-2">Bon Voyage!</h3>
            <p className="text-gray-300 text-sm">Organize transfer for you, have a good fly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowFlyWithus;
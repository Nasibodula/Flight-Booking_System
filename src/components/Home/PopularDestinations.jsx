import React from 'react';

const PopularDestination = () => {
  return (
    <div className="relative min-h-screen w-full bg-white mt-3">
      {/* Cloud background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('assets/clouds.jpg')" }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header text */}
        <div className="mb-6">
          <p className="text-amber-500 uppercase font-light tracking-wide text-sm">
            We fly to over 4 000 airports in 68 countries
          </p>
          <h2 className="text-3xl font-bold text-[#081B46] mb-12">Popular destinations</h2>
        </div>
        
        {/* Destination cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Portugal */}
          <div className="relative rounded-lg overflow-hidden h-64 shadow-lg">
            <img 
              src="assets/portugal.jpg" 
              alt="Portugal coastal city view" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-semibold">Portugal</h3>
              <p className="text-white text-sm">Flight from \ to</p>
            </div>
          </div>
          
          {/* New York */}
          <div className="relative rounded-lg overflow-hidden h-64 shadow-lg">
            <img 
              src="/assets/newyork.jpg" 
              alt="New York skyline view" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-semibold">New York</h3>
              <p className="text-white text-sm">Flight from \ to</p>
            </div>
          </div>
          
          {/* Indonesia */}
          <div className="relative rounded-lg overflow-hidden h-64 shadow-lg">
            <img 
              src="/assets/indonesia.jpg" 
              alt="Indonesian beach view" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-semibold">Indonesia</h3>
              <p className="text-white text-sm">Flight from \ to</p>
            </div>
          </div>
        </div>
        
        {/* View more button */}
        <div className="flex justify-center mt-8">
            <button className="bg-[#081B46] text-white px-6 py-2 rounded font-medium">
              Popular destinations
            </button>
          </div>
      </div>
    </div>
  );
};

export default PopularDestination;
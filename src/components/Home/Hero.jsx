import React, { useState } from 'react';
import { Calendar, Clock, User, Search } from 'lucide-react';

const Hero = () => {
  const [tripType, setTripType] = useState('oneWay');
  const [date, setDate] = useState('18.03.2023');
  const [time, setTime] = useState('11:00');
  const [passengers, setPassengers] = useState(1);

  return (
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/herobackground3.jpg"
            alt="Modern airport architecture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">
                    Fly reassured and save your time with us
                </h1>
                <p className="text-white text-sm md:text-base mb-8">
                    Business Aviation Solutions, Private and Group Charter Flights. Global Network.
                </p>

          {/* Flight Search Box */}
                <div className="bg-white rounded-lg shadow-lg p-4">
                    <div className="flex mb-4">
                    <button 
                        className={`px-4 py-2 rounded-l-md ${tripType === 'oneWay' ? 'bg-[#081B46] text-white' : 'bg-gray-200'}`}
                        onClick={() => setTripType('oneWay')}
                    >
                        One way
                    </button>
                    <button 
                        className={`px-4 py-2 rounded-r-md ${tripType === 'roundTrip' ? 'bg-[#081B46] text-white' : 'bg-gray-200'}`}
                        onClick={() => setTripType('roundTrip')}
                    >
                        Round trip
                    </button>
                    </div>
            
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                    <div className="md:col-span-1">
                        <input type="text" placeholder="From" className="w-full p-2 border rounded" />
                    </div>
                    <div className="md:col-span-1">
                        <input type="text" placeholder="To" className="w-full p-2 border rounded" />
                    </div>
                    <div className="md:col-span-1">
                        <input type="date" className="w-full p-2 border rounded" />
                    </div>
                    <div className="md:col-span-1">
                        <input type="time" className="w-full p-2 border rounded" />
                    </div>
                    <div className="md:col-span-1">
                        <select className="w-full p-2 border rounded">
                        <option>1 Passenger</option>
                        <option>2 Passengers</option>
                        <option>3 Passengers</option>
                        <option>4+ Passengers</option>
                        </select>
                    </div>
                    </div>
                
                    <div className="mt-4 flex justify-end">
                    <button className="bg-[#081B46] text-white px-6 py-2 rounded font-medium">
                        Request Quote
                    </button>
                </div>
          </div>
        </div>
      </div>
  );
};


export default Hero;


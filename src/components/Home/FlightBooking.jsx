import React,{useState} from 'react'
import { Calendar, MapPin, Users, ArrowRight} from 'lucide-react';

export default function FlightBooking() {
    const [departureDate, setDepartureDate] = useState('');
    const [destination, setDestination] = useState('');
    const [origin, setOrigin] = useState('');
    const [passengers, setPassengers] = useState(1);
  return (
    <div>
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Book Your Flight</h2>
            <p className="text-center text-gray-600 mb-12">Find and compare the best flight deals for your next trip</p>
            
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <div className="flex mb-6 justify-center">
                <button className="mr-4 px-6 py-2 bg-blue-800 text-white rounded-full">Economy</button>
                <button className="mr-4 px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-full">Business</button>
                <button className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-full">First Class</button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-gray-700 mb-2">From</label>
                    <div className="border rounded p-3 flex items-center">
                    <MapPin size={18} className="text-gray-400 mr-2" />
                    <input 
                        type="text" 
                        placeholder="City or Airport" 
                        className="w-full outline-none"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                    />
                    </div>
                </div>
                
                <div>
                    <label className="block text-gray-700 mb-2">To</label>
                    <div className="border rounded p-3 flex items-center">
                    <MapPin size={18} className="text-gray-400 mr-2" />
                    <input 
                        type="text" 
                        placeholder="City or Airport" 
                        className="w-full outline-none"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                    </div>
                </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                    <label className="block text-gray-700 mb-2">Departure Date</label>
                    <div className="border rounded p-3 flex items-center">
                    <Calendar size={18} className="text-gray-400 mr-2" />
                    <input 
                        type="date" 
                        className="w-full outline-none"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                    />
                    </div>
                </div>
                
                <div>
                    <label className="block text-gray-700 mb-2">Return Date</label>
                    <div className="border rounded p-3 flex items-center">
                    <Calendar size={18} className="text-gray-400 mr-2" />
                    <input type="date" className="w-full outline-none" />
                    </div>
                </div>
                
                <div>
                    <label className="block text-gray-700 mb-2">Passengers</label>
                    <div className="border rounded p-3 flex items-center">
                    <Users size={18} className="text-gray-400 mr-2" />
                    <select 
                        className="w-full outline-none bg-white"
                        value={passengers}
                        onChange={(e) => setPassengers(Number(e.target.value))}
                    >
                        <option value={1}>1 Passenger</option>
                        <option value={2}>2 Passengers</option>
                        <option value={3}>3 Passengers</option>
                        <option value={4}>4 Passengers</option>
                        <option value={5}>5+ Passengers</option>
                    </select>
                    </div>
                </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-6">
                <div className="mb-4 md:mb-0">
                    <div className="flex items-center mb-1">
                    <input type="checkbox" id="flexible-dates" className="mr-2" />
                    <label htmlFor="flexible-dates">Show flexible dates</label>
                    </div>
                    <div className="flex items-center">
                    <input type="checkbox" id="direct-flights" className="mr-2" />
                    <label htmlFor="direct-flights">Direct flights only</label>
                    </div>
                </div>
                
                <button className="bg-blue-800 text-white px-8 py-3 rounded flex items-center">
                    Search Flights <ArrowRight size={16} className="ml-2" />
                </button>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

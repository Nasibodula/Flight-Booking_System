import React from 'react'
import {ArrowRight, Clock} from 'lucide-react';

export default function FeaturesFlight() {
  return (
    <div>
        <section className="py-16">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Featured Flights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                { from: 'New York', to: 'London', price: '$399', time: '7h 20m', date: 'Mar 15' },
                { from: 'London', to: 'Paris', price: '$89', time: '1h 10m', date: 'Mar 18' },
                { from: 'Tokyo', to: 'Sydney', price: '$879', time: '9h 45m', date: 'Mar 22' }
                ].map((flight, index) => (
                <div key={index} className="border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="border-b p-4 flex justify-between items-center bg-gray-50">
                    <div>
                        <div className="text-sm text-gray-500">From</div>
                        <div className="font-semibold">{flight.from}</div>
                    </div>
                    <ArrowRight size={20} className="text-gray-400" />
                    <div>
                        <div className="text-sm text-gray-500">To</div>
                        <div className="font-semibold">{flight.to}</div>
                    </div>
                    </div>
                    <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                        <Clock size={16} className="text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600">{flight.time}</span>
                        </div>
                        <div className="text-sm text-gray-600">{flight.date}</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-blue-800 font-bold text-xl">{flight.price}</div>
                        <button className="px-4 py-1 border border-blue-800 text-blue-800 rounded hover:bg-blue-800 hover:text-white transition">
                        Book Now
                        </button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            
            <div className="text-center mt-8">
                <button className="bg-blue-800 text-white px-6 py-3 rounded">
                VIEW ALL FLIGHTS
                </button>
            </div>
            </div>
        </section>
    </div>
  )
}

import React from 'react'
import { Search, Menu, ChevronDown, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Apple, PlayCircle, Send } from 'lucide-react';


export default function Newsletter() {
  return (
    <div>
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#081B46] mb-2">Subscribe to our Newsletter</h2>
            <p className="text-gray-600 mb-8">Stay informed and don't miss out!</p>
            
            <div className="max-w-md mx-auto flex">
                <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow p-3 border border-r-0 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                <button className="bg-[#081B46] text-white p-3 rounded-r">
                <Send className="h-5 w-5" />
                </button>
            </div>
            </div>
        </section>
    </div>
  )
}

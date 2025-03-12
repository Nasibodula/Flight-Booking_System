import React from 'react'
import { Search, Menu, ChevronDown, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Apple, PlayCircle, Send } from 'lucide-react';


export default function Navbar() {
  return (
    <div>
        <header className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold text-blue-800">MoiPlane</h1>
            </div>
            <div className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-blue-800">Home</a>
                <a href="#" className="text-gray-600 hover:text-blue-800">Flights</a>
                <a href="#" className="text-gray-600 hover:text-blue-800">Services</a>
                <a href="#" className="text-gray-600 hover:text-blue-800">About</a>
                <a href="#" className="text-gray-600 hover:text-blue-800">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
                <button className="bg-[#081B46] text-white px-4 py-2 rounded">Upgrade to Pro</button>
                <button className="border border-gray-300 px-4 py-2 rounded">Share</button>
                <button className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>
            </div>
        </header>
    </div>
  )
}

import React from 'react'
import { Search, Menu, ChevronDown, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Apple, PlayCircle, Send } from 'lucide-react';


export default function Footer() {
  return (
    <div>
        <footer className=" text-white py-12 bg-[#081B46]" >
            <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between mb-12">
                <div className="mb-8 md:mb-0">
                <h3 className="font-bold text-xl mb-4">MOIPLANE</h3>
                <div className="flex space-x-4 mt-4">
                    <a href="#" className="hover:text-blue-300">
                    <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="hover:text-blue-300">
                    <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="hover:text-blue-300">
                    <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="hover:text-blue-300">
                    <Linkedin className="h-5 w-5" />
                    </a>
                </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h4 className="font-bold mb-4">MoiPlane</h4>
                    <ul className="space-y-2">
                    <li><a href="#" className="text-sm hover:text-blue-300">About Us</a></li>
                    <li><a href="#" className="text-sm hover:text-blue-300">Services</a></li>
                    <li><a href="#" className="text-sm hover:text-blue-300">Destinations</a></li>
                    <li><a href="#" className="text-sm hover:text-blue-300">Blog</a></li>
                    <li><a href="#" className="text-sm hover:text-blue-300">Our fleet</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold mb-4">Support</h4>
                    <ul className="space-y-2">
                    <li><a href="#" className="text-sm hover:text-blue-300">Contact</a></li>
                    <li><a href="#" className="text-sm hover:text-blue-300">Orders</a></li>
                    <li><a href="#" className="text-sm hover:text-blue-300">FAQ</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold mb-4">Account</h4>
                    <ul className="space-y-2">
                    <li><a href="#" className="text-sm hover:text-blue-300">My account</a></li>
                    <li><a href="#" className="text-sm hover:text-blue-300">Forgot Password</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold mb-4">Contact Us</h4>
                    <ul className="space-y-2">
                    <li className="text-sm">Email: support@wingsjet.com</li>
                    <li className="text-sm">Address: Square 70, London, UK</li>
                    </ul>
                </div>
                </div>
            </div>
            
            <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-blue-300 mb-4 md:mb-0">© 2023 WingsJet. All rights reserved.</p>
                <div className="flex space-x-4">
                <a href="#" className="text-sm text-blue-300 hover:underline">Terms of Service</a>
                <a href="#" className="text-sm text-blue-300 hover:underline">Privacy Policy</a>
                </div>
            </div>
            </div>
        </footer>
    </div>
  )
}

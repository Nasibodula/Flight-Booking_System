import React from 'react'
import Hero from '../components/Home/components/Hero'
import PopularDestinations from '../components/Home/components/Destination'
import Blog from '../components/Home/components/Blog'
import FlightDashboard from '../components/Home/FlightDashboard/FlightDashboard'
import "./styles/Home.scss";
import ExtraService from '../components/Home/components/ExtraServices'
import CabinClass from '../components/Home/components/CabinClass'
import AboutUs from '../components/Home/components/AboutUs'
import Campaign from '../components/Home/components/Campaign'
import Faq from '../components/Home/components/Faq'


export default function Homepage() {
  return (
    <div className='home '>
        <Hero/>
        <FlightDashboard/>
        <ExtraService/>
        <CabinClass/>
        <AboutUs/>
        <Campaign/>
        <Faq/>
        <PopularDestinations/>
        <Blog/>
    </div>
  )
}

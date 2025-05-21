import React from 'react'
import Hero from '../components/Home/Hero'
import PopularDestinations from '../components/Home/Destination/Destination'
import Newsletter from '../components/Newsletter'
import Blog from '../components/Home/Blog/Blog'
import FlightDashboard from '../components/Home/FlightDashboard/FlightDashboard'
import "./styles/Home.scss";
import ExtraService from '../components/Home/ExtraServices/ExtraServices'
import CabinClass from '../components/Home/CabinClass/CabinClass'
import AboutUs from '../components/Home/AboutUs/AboutUs'
import Campaign from '../components/Home/Campaign/Campaign'
import Faq from '../components/Home/Faq/Faq'


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

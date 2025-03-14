import React from 'react'
import Hero from '../components/Home/Hero'
import AboutUs from '../components/Home/AboutUs'
import Advantage from '../components/Home/Advantage'
import PopularDestinations from '../components/Home/PopularDestinations'
import HowFlyWithus from '../components/Home/HowFlyWithus'
import FlightBooking from '../components/Home/FlightBooking'
import FeaturesFlight from '../components/Home/FeaturesFlight'
import Newsletter from '../components/Newsletter'
import Blog from '../components/Home/Blog'

export default function Homepage() {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <Advantage/>
        <PopularDestinations/>
        <HowFlyWithus/>
        <Blog/>
        <Newsletter/>
    </div>
  )
}

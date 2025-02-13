import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Hero } from '../../components/Hero/Hero'
import { Footer } from '../../components/Footer/Footer'
import { UpcomingEvents } from '../../components/UpcomingEvents/UpcomingEvents'
import { EventTicketing } from '../../components/EventTicketing/EventTicketing'
import { TopTalents } from '../../components/TopTalents/TopTalents'

const Events = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopTalents />
      <UpcomingEvents />
      <EventTicketing />
      <Footer />
    </div>
  )
}

export default Events

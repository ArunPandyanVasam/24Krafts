import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Hero } from '../../components/Hero/Hero'
import { Footer } from '../../components/Footer/Footer'
import { UpcomingEvents } from '../../components/UpcomingEvents/UpcomingEvents'

const Events = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <Footer />
    </div>
  )
}

export default Events

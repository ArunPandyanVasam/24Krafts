import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Hero } from '../../components/Hero/Hero'
import { Footer } from '../../components/Footer/Footer'
import { JobListings } from '../../components/JobListings/JobListings'

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <JobListings />
      <Footer />
    </div>
  )
}

export default Jobs

import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'
import { Hero } from '../../components/Hero/Hero'
import { Movie } from '../../components/Movie/Movie'
import { CrowdfundingSpotlight } from '../../components/CrowdfundingSpotlight/CrowdfundingSpotlight'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CrowdfundingSpotlight />
      <Footer />
    </div>
  )
}

export default Home

import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'
import { Hero } from '../../components/Hero/Hero'
import { CrowdfundingSpotlight } from '../../components/CrowdfundingSpotlight/CrowdfundingSpotlight'
import { CrowdFundingMovies } from '../../components/CrowdFundingMovies/CrowdFundingMovies'
import { Movie } from '../../components/Movie/Movie'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CrowdFundingMovies />
      <CrowdfundingSpotlight />
      <Movie category="Trending"/>
      <Footer />
    </div>
  )
}

export default Home

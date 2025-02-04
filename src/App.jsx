import './App.css'
import './index.css'; // Global CSS
import { Hero } from './components/Hero/Hero'
import { Movie } from './components/Movie/Movie'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer';
import { TopTalents } from './components/TopTalents/TopTalents';
import { CrowdfundingSpotlight } from './components/CrowdfundingSpotlight/CrowdfundingSpotlight';
import { UpcomingEvents } from './components/UpcomingEvents/UpcomingEvents';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopTalents />
      <CrowdfundingSpotlight />
      <UpcomingEvents />
      <Movie category="Trending"/>
      <Footer />
    </div>
  )
}

export default App

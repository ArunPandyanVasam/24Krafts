import './App.css'
import './index.css'; // Global CSS
import { Hero } from './components/Hero/Hero'
import { Movie } from './components/Movie/Movie'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Movie category="Trending"/>
      <Movie category="Action"/>
      <Movie category="Top-Rated"/>
      <Footer />
    </div>
  )
}

export default App

import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import "./index.css"; // Global CSS

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      {/* <Navbar />
      <Hero /> */}
      {/* <TopTalents /> */}
      {/* <CrowdFundingMovies /> */}
      {/* <CrowdfundingSpotlight /> */}
      {/* <UpcomingEvents />
      <JobListings />
      <EventTicketing />
      <Movie category="Trending"/>
      <Footer /> */}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

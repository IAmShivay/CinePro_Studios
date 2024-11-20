import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UpcomingProjects from './components/UpcomingProjects';
import FeaturedProjects from './components/FeaturedProjects';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <UpcomingProjects />
      <FeaturedProjects />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
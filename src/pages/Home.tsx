import Hero from '../components/Hero';
import UpcomingProjects from '../components/UpcomingProjects';
import FeaturedProjects from '../components/FeaturedProjects';
import Gallery from '../components/Gallery';
import Founders from '../components/Founders';

const Home = () => {
  return (
    <main className="pt-16">
      <Hero />
      <Founders />
      <UpcomingProjects />
      <FeaturedProjects />
      <Gallery />
    </main>
  );
};

export default Home;
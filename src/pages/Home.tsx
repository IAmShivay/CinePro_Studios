import Hero from '../components/Hero';
import UpcomingProjects from '../components/UpcomingProjects';
import FeaturedProjects from '../components/FeaturedProjects';
import Gallery from '../components/Gallery';
import Founders from '../components/Founders';
import ReleasingSoon from '../components/ReleasingSoon';

const Home = () => {
  return (
    <main className="pt-16">
      <Hero />
      <Founders />
      <ReleasingSoon/>
      <UpcomingProjects />
      <FeaturedProjects />
      <Gallery />
    </main>
  );
};

export default Home;
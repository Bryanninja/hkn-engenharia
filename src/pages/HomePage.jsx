import Header from '../components/Header';
import Hero from '../sections/Hero';
import SolutionSection from '../sections/SolutionSection';
import WhoSection from '../sections/WhoSection';
import WhySection from '../sections/WhySection';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <WhySection />
      <SolutionSection />
      <WhoSection />
      <div className="bg-hkn-surface p-52"></div>
    </div>
  );
};

export default HomePage;

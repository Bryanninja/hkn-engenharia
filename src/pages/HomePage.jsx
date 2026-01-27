import Header from '../components/Header';
import Hero from '../sections/Hero';
import Portfolio from '../sections/Portfolio';
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
      <Portfolio />
      <div className="p-52"></div>
    </div>
  );
};

export default HomePage;

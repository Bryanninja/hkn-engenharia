import Header from '../components/Header';
import Hero from '../sections/Hero';
import WhySection from '../sections/WhySection';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <WhySection />
      <div className="p-52"></div>
    </div>
  );
};

export default HomePage;

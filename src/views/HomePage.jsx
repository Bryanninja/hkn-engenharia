import Footer from '../sections/Footer';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Partners from '../sections/Partners';
import Portfolio from '../sections/Portfolio';
import PreFooter from '../sections/PreFooter';
import SolutionSection from '../sections/SolutionSection';
import Testimonials from '../sections/Testimonials';
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
      <Testimonials />
      <Partners />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default HomePage;

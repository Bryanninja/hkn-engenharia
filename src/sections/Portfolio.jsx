import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';
import PortfolioItem from '../components/PortfolioItem';

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-hkn-surface py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="mb-12 text-center text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
          Obras que levam a nossa assinatura
        </h2>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <PortfolioItem image={project1} span="lg:col-span-7" />
          <PortfolioItem image={project2} span="lg:col-span-5" />
          <PortfolioItem image={project3} span="lg:col-span-5" />
          <PortfolioItem image={project4} span="lg:col-span-7" />
          <PortfolioItem image={project6} span="lg:col-span-7" />
          <PortfolioItem image={project5} span="lg:col-span-5" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

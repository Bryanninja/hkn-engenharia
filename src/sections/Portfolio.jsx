import { useState } from 'react';

import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';
import Modal from '../components/Modal';
import PortfolioItem from '../components/PortfolioItem';
import ScrollReveal from '../components/ScrollReveal';

const Portfolio = () => {
  const PROJECTS = [
    {
      id: 1,
      image: project1,
      gallery: [project1, project2, project3],
      span: 'lg:col-span-7',
      title: 'Residência Alphaville',
      area: '350m²',
      desc: 'Desafio de vãos livres sem pilares. Usamos estrutura metálica mista.',
      tags: ['Estrutural', 'Hidrossanitário'],
    },
    {
      id: 2,
      image: project2,
      gallery: [project1, project2, project3],
      span: 'lg:col-span-5',
      title: 'Edifício Comercial HKN',
      area: '1200m²',
      desc: 'Compatibilização total em BIM para evitar retrabalho na obra.',
      tags: ['BIM', 'Elétrico'],
    },
    {
      id: 3,
      image: project3,
      gallery: [project1, project2, project3],
      span: 'lg:col-span-5',
      title: 'Residência Alphaville',
      area: '350m²',
      desc: 'Desafio de vãos livres sem pilares. Usamos estrutura metálica mista.',
      tags: ['Estrutural', 'Hidrossanitário'],
    },
    {
      id: 4,
      image: project4,
      gallery: [project1, project2, project3],
      span: 'lg:col-span-7',
      title: 'Residência Alphaville',
      area: '350m²',
      desc: 'Desafio de vãos livres sem pilares. Usamos estrutura metálica mista.',
      tags: ['Estrutural', 'Hidrossanitário'],
    },
    {
      id: 5,
      image: project6,
      gallery: [project1, project2, project3],
      span: 'lg:col-span-7',
      title: 'Residência Alphaville',
      area: '350m²',
      desc: 'Desafio de vãos livres sem pilares. Usamos estrutura metálica mista.',
      tags: ['Estrutural', 'Hidrossanitário'],
    },
    {
      id: 6,
      image: project5,
      gallery: [project1, project2, project3],
      span: 'lg:col-span-5',
      title: 'Residência Alphaville',
      area: '350m²',
      desc: 'Desafio de vãos livres sem pilares. Usamos estrutura metálica mista.',
      tags: ['Estrutural', 'Hidrossanitário'],
    },
  ];

  const [selectedproject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="bg-hkn-surface py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal width="100%">
          <h2 className="mb-12 text-center text-4xl font-semibold text-white lg:text-5xl">
            Obras que levam a nossa assinatura
          </h2>
        </ScrollReveal>

        <Modal
          project={selectedproject}
          closeModal={() => setSelectedProject(null)}
        />

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {PROJECTS.map((project) => (
              <PortfolioItem
                key={project.id}
                image={project.image}
                span={project.span}
                handleClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Portfolio;

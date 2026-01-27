import Button from '../components/Button';

const PortfolioItem = ({ image, span }) => {
  return (
    <div
      className={`group relative h-64 overflow-hidden rounded-lg md:h-80 lg:h-96 ${span}`}
    >
      <Button
        size="lg"
        variant="outlineFill"
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 translate-y-4 opacity-0 transition-all duration-500 group-hover:-translate-y-1/2 group-hover:opacity-100"
      >
        Visualizar Projeto
      </Button>

      <img
        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm group-hover:brightness-50"
        src={image}
        alt="Projeto HKN"
      />
    </div>
  );
};

export default PortfolioItem;

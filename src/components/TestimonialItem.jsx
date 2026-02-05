import { BsQuote } from 'react-icons/bs';

const TestimonialItem = ({ image, name, role, quote, isReversed = false }) => {
  return (
    <div
      className={`group flex flex-col items-center gap-8 transition-all duration-500 ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:gap-16`}
    >
      {/* Lado da Imagem */}
      <div className="w-full md:w-2/5 lg:w-1/4">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-hkn-surface">
          <img
            src={image}
            alt={`Foto de ${name}`}
            className="h-full w-full object-cover saturate-0 transition-all duration-500 group-hover:scale-105 group-hover:saturate-100"
          />
        </div>
      </div>

      {/* Lado do Texto */}
      <div
        className={`flex w-full flex-col md:w-3/5 lg:w-9/12 ${isReversed ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}
      >
        {/* Cabeçalho do Nome + Aspas */}
        <div
          className={`mb-6 flex items-center gap-4 ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
        >
          <BsQuote className="text-6xl text-hkn-gold opacity-50 md:text-8xl" />

          <div>
            <h2 className="text-2xl font-semibold text-white md:text-4xl lg:text-5xl">
              {name}
            </h2>
            <p className="text-pretty text-lg font-light text-hkn-gold md:text-xl">
              {role}
            </p>
          </div>
        </div>

        {/* O Texto do Depoimento */}
        <p className="max-w-2xl text-base leading-loose text-hkn-muted transition-colors group-hover:text-gray-200 md:text-lg">
          {quote}
        </p>
      </div>
    </div>
  );
};

export default TestimonialItem;

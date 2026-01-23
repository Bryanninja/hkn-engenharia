const CardSolution = ({ icon, title, subtitle }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center space-y-6 rounded-2xl border border-hkn-card bg-transparent px-10 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-hkn-gold-light/30 hover:bg-hkn-goldTransparent/35 hover:shadow-2xl hover:shadow-hkn-gold/5 xl:px-12 xl:py-10">
      <img
        className="h-full w-32 object-contain transition-transform duration-500 group-hover:scale-110"
        src={icon}
        alt="icone de estrutura"
      />
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold transition-colors group-hover:text-hkn-gold-light">
          {title}
        </h2>
        <p className="mx-auto max-w-sm text-base text-hkn-muted transition-colors group-hover:text-hkn-gray">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default CardSolution;

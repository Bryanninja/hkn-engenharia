import { BsThreeDots } from 'react-icons/bs';

const Card = ({ title, subtitle, image, className }) => {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border border-hkn-card bg-transparent transition-all duration-500 hover:-translate-y-2 hover:border-hkn-gold-light/30 ${className}`}
    >
      <div className="flex items-start justify-between px-5 py-6">
        <h2 className="text-xl font-semibold text-hkn-white group-hover:text-hkn-gold-light">
          {title}
        </h2>
        <BsThreeDots className="text-xl text-hkn-gold-light" />
      </div>
      <div className="flex-1 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="px-5 py-6">
        <p className="text-sm leading-relaxed text-hkn-muted group-hover:text-hkn-gray">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Card;

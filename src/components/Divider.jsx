const Divider = ({ className = '' }) => {
  return (
    <div
      className={`h-1 w-full bg-gradient-to-r from-hkn-gold via-hkn-gold-light to-hkn-gold ${className}`}
    ></div>
  );
};

export default Divider;

import { tv } from 'tailwind-variants';

const button = tv({
  base: 'flex items-center justify-center rounded-lg transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',

  variants: {
    // Propriedade 'variant'
    variant: {
      primary:
        'bg-gold-gradient text-hkn-black hover:brightness-110 shadow-lg shadow-hkn-gold/20',
      outline:
        'border border-hkn-white text-hkn-white hover:border-hkn-gold hover:bg-hkn-goldTransparent/70',
      outlineFill:
        'border text-hkn-white border-hkn-gold/50 bg-hkn-goldTransparent/70 hover:bg-hkn-goldTransparent hover:border-hkn-gold',
      ghost: 'text-hkn-muted hover:text-hkn-gold hover:bg-hkn-surface',
    },

    // Propriedade 'size'
    size: {
      sm: 'text-xs px-4 py-1.5 h-8',
      md: 'text-sm px-6 py-2 h-10',
      lg: 'text-base px-8 py-3 h-12',
      full: 'w-full py-3 text-sm',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

const Button = ({ children, variant, size, className, ...props }) => {
  return (
    <button className={button({ variant, size, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;

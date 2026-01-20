import { tv } from 'tailwind-variants';

const badge = tv({
  base: 'inline-flex items-center justify-center gap-2 rounded-full border border-hkn-gold/50 bg-hkn-goldTransparent/50 text-sm backdrop-blur-md transition-all',

  variants: {
    variant: {
      desktop: 'hidden animate-float xl:flex xl:right-[15%] px-4 py-2',

      mobile: 'px-3 py-1.5 xl:hidden text-gray-300',
    },
  },

  defaultVariants: {
    variant: 'desktop',
  },
});

const Badge = ({ children, variant, className, ...props }) => {
  return (
    <div className={badge({ variant, className })} {...props}>
      {children}
    </div>
  );
};

export default Badge;

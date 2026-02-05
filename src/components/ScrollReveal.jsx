import { motion } from 'framer-motion';

const ScrollReveal = ({
  children,
  delay = 0,
  width = 'fit-content',
  className,
}) => {
  return (
    // 1. Removi o 'overflow: hidden' (O vilão)
    // 2. width: Permite controlar a largura (importante pros botões)
    <div className={className} style={{ width }}>
      <motion.div
        // Começa um pouco mais perto (30px) para evitar pular demais
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }} // Margem de segurança menor
        transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.25, 0, 1] }} // Curva "ease" bem suave
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;

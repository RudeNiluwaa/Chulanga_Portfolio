import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';

export default function ParallaxLayer({
  speed = 0.5,
  className = '',
  children,
}) {
  const { ref, y } = useParallax(speed);

  return (
    <motion.div
      ref={ref}
      className={`pointer-events-none ${className}`}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
}

import { motion } from 'framer-motion';

export default function FloatingElement({
  children,
  amplitude = 15,
  duration = 4,
  delay = 0,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      className={className}
      style={{ ...style, willChange: 'transform' }}
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

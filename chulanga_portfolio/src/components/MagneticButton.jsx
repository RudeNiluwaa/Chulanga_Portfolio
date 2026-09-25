import { motion } from 'framer-motion';
import { useMagneticEffect } from '../hooks/useMagneticEffect';

export default function MagneticButton({
  children,
  className = '',
  strength = 0.4,
  onClick,
  href,
  style: externalStyle = {},
}) {
  const { ref, x, y, handlers } = useMagneticEffect(strength);

  const isMailto = href && href.startsWith('mailto:');
  const isAnchor = href && href.startsWith('#');
  const MotionTag = href ? motion.a : motion.button;
  const extraProps = href
    ? {
        href,
        ...(isMailto || isAnchor
          ? {}
          : { target: '_blank', rel: 'noopener noreferrer' }),
      }
    : { onClick };

  return (
    <MotionTag
      ref={ref}
      className={`relative inline-flex items-center justify-center gap-2 ${className}`}
      style={{ x, y, ...externalStyle }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...handlers}
      {...extraProps}
    >
      {/* Glow backdrop */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, var(--color-neon-purple), var(--color-electric-blue))',
          filter: 'blur(20px)',
          opacity: 0,
        }}
        whileHover={{ opacity: 0.5 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </MotionTag>
  );
}

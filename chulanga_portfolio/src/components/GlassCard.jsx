import { useState, useCallback, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  onHoverStart,
  onHoverEnd,
  onClick,
  dimmed = false,
  index = 0,
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = ((y - centerY) / centerY) * -8;
      const tiltY = ((x - centerX) / centerX) * 8;
      rotateX.set(tiltX);
      rotateY.set(tiltY);
    },
    [rotateX, rotateY]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    onHoverStart?.();
  }, [onHoverStart]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    onHoverEnd?.();
  }, [rotateX, rotateY, onHoverEnd]);

  return (
    <motion.div
      ref={cardRef}
      data-cursor="project"
      className={`glass-panel overflow-hidden cursor-pointer ${className}`}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        type: 'spring',
        stiffness: 60,
        damping: 20,
        delay: index * 0.1,
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 25px 60px rgba(168, 85, 247, 0.15), 0 10px 30px rgba(0,0,0,0.4)',
      }}
      animate={{
        opacity: dimmed ? 0.35 : 1,
        scale: dimmed ? 0.97 : 1,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
      {/* Hover glow overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 70%)',
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

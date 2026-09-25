import { motion } from 'framer-motion';

/**
 * Wraps each section with a staggered reveal animation as it scrolls into view.
 * Also adds a subtle gradient divider between sections.
 */
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 40,
      damping: 25,
      mass: 1,
      staggerChildren: 0.1,
    },
  },
};

export default function SectionTransition({
  children,
  className = '',
  showDivider = false,
  id,
}) {
  return (
    <>
      {showDivider && (
        <div className="section-divider" aria-hidden="true">
          <div className="section-divider__line" />
        </div>
      )}
      <motion.div
        id={id}
        className={`section-transition ${className}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05, margin: '-50px' }}
      >
        {children}
      </motion.div>
    </>
  );
}

import { useState, useEffect } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    setHidden(latest > previous && latest > 150);
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'glass-panel-strong' : ''
      }`}
      style={{
        borderRadius: 0,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
      }}
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="font-display text-xl font-bold tracking-tight text-text-primary no-underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          PASINDU
          <span className="text-neon-purple">.</span>
        </motion.a>

        {/* Nav links */}
        <div className="flex items-center gap-4 md:gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-text-secondary no-underline hover:text-text-primary transition-colors duration-200"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {link.label}
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-neon-purple"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

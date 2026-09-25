import { useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function HoverRevealList({ items }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Spring physics for smooth image trailing
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate mouse position relative to the container
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div 
      className="relative w-full border-t border-border"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {items.map((item, index) => (
        <div
          key={item.title}
          className="group relative border-b border-border py-8 md:py-12 cursor-pointer transition-colors hover:bg-surface/30"
          onMouseEnter={() => setHoveredIndex(index)}
          data-cursor="hover"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between px-6 max-w-7xl mx-auto z-10 relative pointer-events-none">
            <h3 className="font-display text-3xl md:text-5xl font-semibold text-text-secondary group-hover:text-text-primary transition-colors duration-300">
              {item.title}
            </h3>
            <p className="body-md text-text-muted max-w-sm mt-4 md:mt-0 text-right group-hover:text-neon-purple transition-colors duration-300">
              {item.desc}
            </p>
          </div>
        </div>
      ))}


    </div>
  );
}

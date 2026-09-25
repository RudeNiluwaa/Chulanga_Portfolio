import { createContext, useContext, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorContext = createContext();

export const useCursor = () => useContext(CursorContext);

export function CursorProvider({ children }) {
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothOptions = { stiffness: 300, damping: 20, mass: 0.5 };
  const smoothX = useSpring(mouseX, smoothOptions);
  const smoothY = useSpring(mouseY, smoothOptions);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  // Handle custom data-cursor attributes
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      const cursorTarget = target.closest('[data-cursor]');
      
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        const text = cursorTarget.getAttribute('data-cursor-text');
        setCursorType(type);
        setCursorText(text || '');
      } else if (target.closest('a') || target.closest('button')) {
        setCursorType('hover');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <CursorContext.Provider value={{ setCursorType, setCursorText }}>
      {/* Background glow (from original cursor) */}
      <motion.div
        className="cursor-glow hidden md:block"
        style={{ left: smoothX, top: smoothY, opacity: isVisible ? 1 : 0 }}
      />
      
      {/* Main interactive cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden md:flex items-center justify-center rounded-full overflow-hidden"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: cursorType === 'hover' || cursorType === 'text' ? 'difference' : 'normal',
        }}
        initial={{ width: 12, height: 12, backgroundColor: '#fff', opacity: 0 }}
        animate={{
          width: cursorType === 'project' ? 80 : cursorType === 'hover' ? 40 : 12,
          height: cursorType === 'project' ? 80 : cursorType === 'hover' ? 40 : 12,
          backgroundColor: cursorType === 'project' ? '#a855f7' : '#fff',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <motion.span 
          className="text-[10px] font-bold text-white tracking-widest uppercase font-display"
          initial={{ opacity: 0 }}
          animate={{ opacity: cursorType === 'project' ? 1 : 0 }}
        >
          {cursorText || 'VIEW'}
        </motion.span>
      </motion.div>
      {children}
    </CursorContext.Provider>
  );
}

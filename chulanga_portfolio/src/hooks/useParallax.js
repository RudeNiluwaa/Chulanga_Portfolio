import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export function useParallax(speed = 0.5, offset = ['start end', 'end start']) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return { ref, y, scrollYProgress };
}

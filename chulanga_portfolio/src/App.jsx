import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import SectionTransition from './components/SectionTransition';
import Hero from './sections/Hero';
import Work from './sections/Work';
import Services from './sections/Services';
import About from './sections/About';
import Footer from './sections/Footer';

import { CursorProvider } from './components/CustomCursor';
import InfiniteMarquee from './components/InfiniteMarquee';
import { useLenis } from './hooks/useLenis';

/* ── Page reveal animation (plays once after loading screen) ── */
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.15,
    },
  },
};

export default function App() {
  useLenis(); // Initialize smooth scroll
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  // Prevent scrolling during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {/* Main Site */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="visible"
          >
            <CursorProvider>
              <Navbar />
              <main>
                <SectionTransition>
                  <Hero />
                </SectionTransition>

                <SectionTransition className="py-20">
                  <InfiniteMarquee baseVelocity={1.5} className="text-6xl md:text-8xl text-neon-purple/50">
                    BRAND IDENTITY • UI/UX DESIGN • MOTION GRAPHICS • EDITORIAL •
                  </InfiniteMarquee>
                </SectionTransition>

              <SectionTransition showDivider>
                <Work />
              </SectionTransition>

              <SectionTransition showDivider>
                <Services />
              </SectionTransition>

              <SectionTransition showDivider>
                <About />
              </SectionTransition>

              <SectionTransition showDivider>
                <Footer />
              </SectionTransition>
            </main>
          </CursorProvider>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

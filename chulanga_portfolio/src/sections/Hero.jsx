import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FloatingElement from '../components/FloatingElement';
import SkillTag from '../components/SkillTag';
import ParallaxLayer from '../components/ParallaxLayer';
import MagneticButton from '../components/MagneticButton';

const skills = [
  { label: 'Brand Identity', className: 'top-[12%] left-[5%] md:left-[8%]', delay: 0 },
  { label: 'UI/UX Design', className: 'top-[25%] right-[3%] md:right-[10%]', delay: 0.5 },
  { label: 'Motion Graphics', className: 'bottom-[30%] left-[2%] md:left-[6%]', delay: 1.0 },
  { label: 'Typography', className: 'bottom-[15%] right-[5%] md:right-[12%]', delay: 1.5 },
  { label: 'Art Direction', className: 'top-[55%] left-[10%] md:left-[15%]', delay: 2.0 },
  { label: 'Editorial', className: 'top-[8%] right-[20%] md:right-[25%]', delay: 0.8 },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background Glows ── */}
      <ParallaxLayer speed={-0.3} className="absolute inset-0">
        <div
          className="glow-purple"
          style={{ top: '10%', left: '15%', opacity: 0.6 }}
        />
        <div
          className="glow-blue"
          style={{ bottom: '20%', right: '10%', opacity: 0.5 }}
        />
        <div
          className="glow-purple"
          style={{ bottom: '10%', left: '50%', opacity: 0.3, width: 400, height: 400 }}
        />
      </ParallaxLayer>

      {/* ── Grid lines (subtle) ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
        style={{ opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-32">
          {/* ── Left: Text ── */}
          <motion.div style={{ y: textY }}>
            <motion.p
              className="body-sm uppercase tracking-[0.3em] text-neon-purple mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Graphic Designer & Art Director
            </motion.p>

            <motion.h1
              className="heading-xl mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 40, damping: 20, delay: 0.4 }}
            >
              I Design
              <br />
              Brands That
              <br />
              <span className="bg-gradient-to-r from-neon-purple to-electric-blue bg-clip-text text-transparent">
                Defy Gravity
              </span>
            </motion.h1>

            <motion.p
              className="body-lg max-w-md mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Crafting elevated visual identities that float above the noise - 
              where bold design meets zero-gravity aesthetics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <MagneticButton
                href="#work"
                className="px-8 py-4 rounded-full glass-panel-strong text-sm font-display font-semibold tracking-wide hover:bg-glass-hover transition-colors"
              >
                View My Work
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* ── Right: Hero Image + Skill Tags ── */}
          <div className="relative flex items-center justify-center min-h-[500px] w-full">
            {/* Orbiting skill tags */}
            {skills.map((skill) => (
              <SkillTag
                key={skill.label}
                label={skill.label}
                delay={skill.delay}
                className={`${skill.className} z-20`}
              />
            ))}

            {/* Hero image */}
            <FloatingElement amplitude={18} duration={5}>
              <motion.div
                className="relative"
                style={{ y: heroImageY }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 30, damping: 20, delay: 0.3 }}
              >
                {/* Glow behind image */}
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    transform: 'scale(1.3)',
                  }}
                />
                <img
                  src="/chulanga-profile.jpeg"
                  alt="Pasindu Withanage - Graphic Designer"
                  className="relative w-72 md:w-96 rounded-3xl object-cover border border-white/10"
                  style={{
                    aspectRatio: '0.85',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 80px rgba(168, 85, 247, 0.25)',
                  }}
                />
              </motion.div>
            </FloatingElement>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ opacity }}
      >
        <span className="body-sm text-text-muted text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-text-muted/30 flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 rounded-full bg-neon-purple"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

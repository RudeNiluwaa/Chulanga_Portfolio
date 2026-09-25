import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import FloatingElement from '../components/FloatingElement';
import ParallaxLayer from '../components/ParallaxLayer';

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    desc: 'Deep dive into your brand DNA - audience, values, and competitive landscape.',
  },
  {
    number: '02',
    title: 'Conceptualize',
    desc: 'Explore visual directions through mood boards, typography studies, and color systems.',
  },
  {
    number: '03',
    title: 'Refine',
    desc: 'Iterate with precision until every pixel resonates with your brand story.',
  },
  {
    number: '04',
    title: 'Deliver',
    desc: 'Comprehensive brand assets, guidelines, and files - ready to launch.',
  },
];

const floatingImages = [
  {
    src: '/project-editorial.jpg',
    alt: 'Editorial design work',
  },
  {
    src: '/project-motion.jpg',
    alt: 'Motion graphics project',
  },
  {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
    alt: 'Abstract visual design',
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Images drift apart as user scrolls into view
  const img1X = useTransform(scrollYProgress, [0.2, 0.6], [20, -30]);
  const img1Y = useTransform(scrollYProgress, [0.2, 0.6], [40, -20]);
  const img2X = useTransform(scrollYProgress, [0.2, 0.6], [-10, 20]);
  const img2Y = useTransform(scrollYProgress, [0.2, 0.6], [30, -40]);
  const img3X = useTransform(scrollYProgress, [0.2, 0.6], [30, -10]);
  const img3Y = useTransform(scrollYProgress, [0.2, 0.6], [-20, 30]);
  const imgTransforms = [
    { x: img1X, y: img1Y },
    { x: img2X, y: img2Y },
    { x: img3X, y: img3Y },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <ParallaxLayer speed={-0.2} className="absolute inset-0">
        <div
          className="glow-purple"
          style={{ top: '20%', right: '20%', opacity: 0.2 }}
        />
        <div
          className="glow-blue"
          style={{ bottom: '30%', left: '10%', opacity: 0.2 }}
        />
      </ParallaxLayer>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* ── Left: Text ── */}
          <div>
            <ScrollReveal>
              <p className="body-sm uppercase tracking-[0.3em] text-neon-purple mb-4">
                About & Process
              </p>
              <h2 className="heading-lg mb-8">
                Where Vision
                <br />
                <span className="text-text-secondary">Meets Craft</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="body-lg mb-6">
                I believe great design isn't just seen - it's felt. Every brand has a gravity of its
                own, a pull that draws people in. My job is to make that force visible.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="body-lg mb-12">
                With over eight years shaping identities for startups and global brands alike, 
                I bring a meticulous eye for detail and a fearless approach to visual storytelling.
              </p>
            </ScrollReveal>

            {/* Process steps */}
            <div className="space-y-6">
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.number} delay={0.15 * i}>
                  <div className="flex gap-5 items-start group">
                    <span className="font-display text-2xl font-bold text-neon-purple/40 group-hover:text-neon-purple transition-colors duration-300 mt-0.5">
                      {step.number}
                    </span>
                    <div>
                      <h4 className="font-display font-semibold text-lg text-text-primary mb-1">
                        {step.title}
                      </h4>
                      <p className="body-sm text-text-secondary leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ── Right: Floating overlapping images ── */}
          <div className="relative h-[500px] lg:h-[600px] hidden lg:block">
            {floatingImages.map((img, i) => (
              <FloatingElement
                key={img.alt}
                amplitude={8 + i * 4}
                duration={4 + i}
                delay={i * 0.7}
                className="absolute"
                style={{
                  top: `${10 + i * 15}%`,
                  left: `${5 + i * 20}%`,
                  zIndex: 3 - i,
                }}
              >
                <motion.div style={{ x: imgTransforms[i].x, y: imgTransforms[i].y }}>
                  <div
                    className="glass-panel overflow-hidden"
                    style={{
                      width: i === 1 ? 280 : 240,
                      boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                    />
                    <div className="p-3">
                      <p className="text-xs text-text-muted">{img.alt}</p>
                    </div>
                  </div>
                </motion.div>
              </FloatingElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

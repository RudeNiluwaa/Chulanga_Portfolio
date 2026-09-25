import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';
import ParallaxLayer from '../components/ParallaxLayer';

export default function Footer() {
  return (
    <section id="contact" className="relative py-40 overflow-hidden">
      {/* Background glow */}
      <ParallaxLayer speed={0.15} className="absolute inset-0">
        <div
          className="glow-purple"
          style={{ top: '30%', left: '30%', opacity: 0.3, width: 800, height: 800 }}
        />
        <div
          className="glow-blue"
          style={{ top: '40%', right: '20%', opacity: 0.2, width: 500, height: 500 }}
        />
      </ParallaxLayer>

      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="body-sm uppercase tracking-[0.3em] text-neon-purple mb-6">
            Let's Collaborate
          </p>
        </ScrollReveal>

        <motion.h2
          className="heading-xl mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ type: 'spring', stiffness: 40, damping: 20, delay: 0.1 }}
        >
          Ready to build
          <br />
          something{' '}
          <span className="bg-gradient-to-r from-neon-purple via-electric-blue to-accent-cyan bg-clip-text text-transparent">
            extraordinary
          </span>
          ?
        </motion.h2>

        <motion.p
          className="body-lg max-w-lg mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm always open to discussing new projects, creative ideas,
          or opportunities to be part of your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ type: 'spring', stiffness: 50, damping: 20, delay: 0.3 }}
        >
          <MagneticButton
            href="mailto:hello@chulanga.design"
            strength={0.5}
            className="px-16 py-6 rounded-full text-xl md:text-2xl font-display font-bold tracking-wide"
            style={{
              background: 'linear-gradient(135deg, var(--color-neon-purple), var(--color-electric-blue))',
              boxShadow: '0 0 40px rgba(168, 85, 247, 0.3), 0 0 80px rgba(59, 130, 246, 0.15)',
            }}
          >
            Let's Talk
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </MagneticButton>
        </motion.div>

        {/* Bottom credits */}
        <motion.div
          className="mt-32 flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="body-sm">
            © {new Date().getFullYear()} Chulanga. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Dribbble', 'Behance', 'Instagram', 'LinkedIn'].map((social) => (
              <motion.a
                key={social}
                href="#"
                className="body-sm hover:text-text-primary transition-colors duration-200 no-underline"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

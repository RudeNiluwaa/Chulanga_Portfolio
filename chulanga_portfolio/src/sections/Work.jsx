import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxLayer from '../components/ParallaxLayer';

const projects = [
  { title: 'Project Design 1', category: 'Graphic Design', image: '/designs/1.jpeg', span: 'row-span-2' },
  { title: 'Project Design 2', category: 'UI/UX Design', image: '/designs/2.jpeg', span: '' },
  { title: 'Project Design 3', category: 'Branding', image: '/designs/3.jpeg', span: '' },
  { title: 'Project Design 4', category: 'Graphic Design', image: '/designs/4.jpeg', span: 'row-span-2' },
  { title: 'Project Design 5', category: 'Web Design', image: '/designs/5.jpeg', span: '' },
  { title: 'Project Design 6', category: 'Typography', image: '/designs/6.jpeg', span: '' },
  { title: 'Project Design 7', category: 'Motion Graphics', image: '/designs/7.jpeg', span: 'row-span-2' },
  { title: 'Project Design 8', category: 'UI/UX Design', image: '/designs/12.jpeg', span: '' },
  { title: 'Project Design 9', category: 'Branding', image: '/designs/123.jpeg', span: '' },
  { title: 'Project Design 10', category: 'Editorial', image: '/designs/3333333.jpeg', span: 'row-span-2' },
  { title: 'Project Design 11', category: 'Graphic Design', image: '/designs/44444.jpeg', span: '' },
  { title: 'Project Design 12', category: 'UI/UX Design', image: '/designs/444444444.jpeg', span: '' },
  { title: 'Project Design 13', category: 'Web Design', image: '/designs/56.jpeg', span: 'row-span-2' },
  { title: 'Project Design 14', category: 'Typography', image: '/designs/6666.jpeg', span: '' },
  { title: 'Project Design 15', category: 'Branding', image: '/designs/6765.jpeg', span: '' },
  { title: 'Project Design 16', category: 'Graphic Design', image: '/designs/676767667676.jpeg', span: 'row-span-2' },
  { title: 'Project Design 17', category: 'UI/UX Design', image: '/designs/77777.jpeg', span: '' },
  { title: 'Project Design 18', category: 'Web Design', image: '/designs/7777777777777.jpeg', span: '' },
  { title: 'Project Design 19', category: 'Motion Graphics', image: '/designs/7777777777777777.jpeg', span: 'row-span-2' },
  { title: 'Project Design 20', category: 'Branding', image: '/designs/88.jpeg', span: '' },
  { title: 'Project Design 21', category: 'Graphic Design', image: '/designs/88888.jpeg', span: '' },
  { title: 'Project Design 22', category: 'UI/UX Design', image: '/designs/8888888.jpeg', span: 'row-span-2' },
  { title: 'Project Design 23', category: 'Typography', image: '/designs/WhatsApp%20Image%202026-09-21%205.jpeg', span: '' },
  { title: 'Project Design 24', category: 'Branding', image: '/designs/WhatsApp%20Image%202026-09-21%20aPM.jpeg', span: '' },
  { title: 'Project Design 25', category: 'Web Design', image: '/designs/WhatsApp%20Image%202026-09-21%20at%2012.32.39%20PM.jpeg', span: 'row-span-2' },
  { title: 'Project Design 26', category: 'Graphic Design', image: '/designs/WhatsApp%20Image%202026-09-21%20at%2012.32.jpeg', span: '' },
  { title: 'Project Design 27', category: 'UI/UX Design', image: '/designs/WhatsApp%20Image%202026-09-21%20at%2012.38.02%20PM.jpeg', span: '' },
  { title: 'Project Design 28', category: 'Motion Graphics', image: '/designs/WhatsApp%20Image%202026-09-21%20at%2012.38.03%20PM.jpeg', span: 'row-span-2' },
  { title: 'Project Design 29', category: 'Editorial', image: '/designs/WhatsApp%20Image%202026-09-21%20at%2012.38.05%20PM.jpeg', span: '' },
  { title: 'Project Design 30', category: 'Typography', image: '/designs/WhatsApp%20Image%202026-09-21%20at%2012.38.06%20PM.jpeg', span: '' },
  { title: 'Project Design 31', category: 'Branding', image: '/designs/WhatsApp%20Image%202026-09-21%20at%2012.38.10%20PM.jpeg', span: 'row-span-2' },
  { title: 'Project Design 32', category: 'Graphic Design', image: '/designs/uuuuu.jpeg', span: '' },
  { title: 'Project Design 33', category: 'UI/UX Design', image: '/designs/uuuuuuu.jpeg', span: '' },
];

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="work" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <ParallaxLayer speed={0.2} className="absolute inset-0">
        <div
          className="glow-blue"
          style={{ top: '30%', left: '-5%', opacity: 0.3 }}
        />
        <div
          className="glow-purple"
          style={{ bottom: '10%', right: '-10%', opacity: 0.25 }}
        />
      </ParallaxLayer>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-20">
            <p className="body-sm uppercase tracking-[0.3em] text-neon-purple mb-4">
              Selected Works
            </p>
            <h2 className="heading-lg">
              Projects That
              <br />
              <span className="text-text-secondary">Push Boundaries</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {projects.map((project, i) => (
            <GlassCard
              key={project.title}
              className={`relative group ${project.span}`}
              index={i}
              dimmed={hoveredIndex !== null && hoveredIndex !== i}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedImage(project.image)}
            >
              {/* Project image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl" />

              {/* Project info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <p className="text-xs uppercase tracking-[0.2em] text-neon-purple mb-2 font-medium">
                  {project.category}
                </p>
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  {project.title}
                </h3>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full glass-panel-strong flex items-center justify-center">
                  <svg className="w-4 h-4 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 md:p-10 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="High Quality Project"
              className="w-auto h-auto max-w-[95vw] max-h-[90vh] rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-md transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

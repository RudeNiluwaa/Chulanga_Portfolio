import ScrollReveal from '../components/ScrollReveal';
import HoverRevealList from '../components/HoverRevealList';

const services = [
  {
    title: 'Brand Identity',
    desc: 'Crafting memorable visual systems that tell your unique story.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80',
  },
  {
    title: 'UI/UX Design',
    desc: 'Designing intuitive digital experiences that engage and convert.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  },
  {
    title: 'Art Direction',
    desc: 'Guiding the visual language across campaigns and platforms.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
  },
  {
    title: 'Motion Graphics',
    desc: 'Bringing static designs to life with dynamic animation.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <ScrollReveal>
          <p className="body-sm uppercase tracking-[0.3em] text-neon-purple mb-4">
            Capabilities
          </p>
          <h2 className="heading-lg">
            Services &<br />
            <span className="text-text-secondary">Expertise</span>
          </h2>
        </ScrollReveal>
      </div>
      
      {/* Interactive hover reveal list */}
      <HoverRevealList items={services} />
    </section>
  );
}

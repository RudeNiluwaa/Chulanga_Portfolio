import FloatingElement from './FloatingElement';

export default function SkillTag({ label, delay = 0, className = '' }) {
  return (
    <FloatingElement
      amplitude={10 + Math.random() * 10}
      duration={3 + Math.random() * 3}
      delay={delay}
      className={`absolute ${className}`}
    >
      <div className="glass-panel-strong px-4 py-2 text-sm font-medium tracking-wide text-text-primary/80 whitespace-nowrap select-none">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-purple mr-2 align-middle" />
        {label}
      </div>
    </FloatingElement>
  );
}

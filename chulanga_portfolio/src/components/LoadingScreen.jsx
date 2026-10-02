import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingMessages = [
  'Loading assets',
  'Preparing visuals',
  'Almost ready',
];

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2800; // total loading time in ms
    const interval = 30;
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step + Math.random() * 1.2;
        if (next >= 100) {
          clearInterval(timer);
          // Start exit sequence
          setTimeout(() => setIsExiting(true), 300);
          setTimeout(() => onComplete?.(), 1200);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Cycle through loading messages
  useEffect(() => {
    const msgTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 900);
    return () => clearInterval(msgTimer);
  }, []);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Background ambient glows */}
          <div
            className="glow-purple"
            style={{
              top: '20%',
              left: '30%',
              opacity: 0.4,
              width: 600,
              height: 600,
            }}
          />
          <div
            className="glow-blue"
            style={{
              bottom: '20%',
              right: '20%',
              opacity: 0.3,
              width: 500,
              height: 500,
            }}
          />

          {/* Center content */}
          <div className="loading-content">
            {/* Logo mark - animated ring */}
            <motion.div
              className="loading-logo-ring"
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="url(#loader-gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="180 90"
                />
                <defs>
                  <linearGradient
                    id="loader-gradient"
                    x1="0"
                    y1="0"
                    x2="80"
                    y2="80"
                  >
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Logo text */}
            <motion.div
              className="loading-logo-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="loading-logo-name">PASINDU</span>
              <span className="loading-logo-dot">.</span>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="loading-progress-track"
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <motion.div
                className="loading-progress-fill"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </motion.div>

            {/* Loading message */}
            <AnimatePresence mode="wait">
              <motion.p
                key={messageIndex}
                className="loading-message"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {loadingMessages[messageIndex]}
                <span className="loading-dots">
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
                  >
                    .
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                  >
                    .
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                  >
                    .
                  </motion.span>
                </span>
              </motion.p>
            </AnimatePresence>

            {/* Percentage */}
            <motion.span
              className="loading-percentage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {Math.round(Math.min(progress, 100))}%
            </motion.span>
          </div>

          {/* Screen wipe panels (exit animation) */}
          <motion.div
            className="loading-wipe loading-wipe--top"
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          />
          <motion.div
            className="loading-wipe loading-wipe--bottom"
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

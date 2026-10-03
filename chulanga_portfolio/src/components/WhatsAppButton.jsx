import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '94712723608';
const WHATSAPP_MESSAGE = 'Hi Chulanga! I came across your portfolio and would love to discuss a project with you.';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.div
      className="whatsapp-fab"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: 'spring', stiffness: 200 }}
    >
      {/* Pulse ring */}
      <span className="whatsapp-fab__pulse" />

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="whatsapp-fab__tooltip"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
          >
            Chat with me!
          </motion.span>
        )}
      </AnimatePresence>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-fab__button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* WhatsApp SVG icon */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="whatsapp-fab__icon"
        >
          <path
            d="M16.004 2.667A13.26 13.26 0 0 0 2.76 15.91a13.18 13.18 0 0 0 1.765 6.604L2.667 29.333l7.013-1.838A13.2 13.2 0 0 0 16.004 29.2 13.27 13.27 0 0 0 29.333 15.91 13.27 13.27 0 0 0 16.004 2.667Zm0 24.266a10.93 10.93 0 0 1-5.572-1.524l-.4-.237-4.143 1.087 1.105-4.04-.26-.414a10.88 10.88 0 0 1-1.67-5.828A10.99 10.99 0 0 1 16.004 4.94a10.99 10.99 0 0 1 10.94 11.036 10.99 10.99 0 0 1-10.94 10.957Zm6.013-8.205c-.33-.165-1.952-.963-2.254-1.073-.303-.11-.523-.165-.743.165-.22.33-.854 1.073-1.046 1.293-.193.22-.385.248-.715.083-.33-.165-1.393-.513-2.653-1.636-.98-.875-1.643-1.953-1.835-2.283-.193-.33-.02-.509.144-.673.149-.148.33-.385.495-.578.166-.193.22-.33.33-.55.11-.22.056-.413-.028-.578-.083-.165-.743-1.79-1.018-2.45-.268-.644-.54-.557-.743-.567-.192-.01-.413-.012-.633-.012-.22 0-.578.083-.88.413-.303.33-1.156 1.13-1.156 2.755s1.183 3.195 1.349 3.415c.165.22 2.329 3.555 5.642 4.985.788.34 1.403.543 1.882.695.791.251 1.512.216 2.081.131.635-.095 1.952-.798 2.228-1.568.275-.77.275-1.43.193-1.568-.083-.138-.303-.22-.633-.385Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </motion.div>
  );
}

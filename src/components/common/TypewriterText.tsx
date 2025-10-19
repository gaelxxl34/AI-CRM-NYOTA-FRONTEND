'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  speed?: number;
}

/**
 * TypewriterText component creates a typing animation effect for text
 * @param text - The text to be typed out
 * @param delay - Delay before typing starts (in milliseconds)
 * @param className - CSS classes to apply to the text
 * @param speed - Speed of typing animation (in milliseconds per character)
 */
export function TypewriterText({ 
  text, 
  delay = 0, 
  className = '',
  speed = 50 
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex === 0 && delay > 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }

    if (currentIndex > 0 && currentIndex <= text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }

    if (currentIndex > text.length) {
      setIsTypingComplete(true);
    }
  }, [currentIndex, text, delay, speed]);

  return (
    <span className={className}>
      {displayedText}
      {!isTypingComplete && currentIndex > 0 && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-6 sm:h-8 lg:h-10 bg-burgundy-700 ml-1 align-middle"
        />
      )}
    </span>
  );
}

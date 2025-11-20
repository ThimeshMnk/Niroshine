"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface AccordionProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const Accordion = ({ question, answer, isOpen = false }: AccordionProps) => {
  const [isActive, setIsActive] = useState(isOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
        onClick={() => setIsActive(!isActive)}
        aria-expanded={isActive}
      >
        {/* 1. Added pr-4 (padding-right) so text doesn't touch the icon 
            2. Responsive text size: text-base (mobile) -> text-lg (desktop) */}
        <h3 className="text-base md:text-lg font-semibold text-niro-blue pr-4 group-hover:text-niro-accent transition-colors">
          {question}
        </h3>

        {/* 3. Added shrink-0 to prevent icon from being squashed on small screens */}
        <div className="shrink-0">
          {isActive ? (
            <Minus className="w-5 h-5 text-niro-accent" />
          ) : (
            <Plus className="w-5 h-5 text-gray-400 group-hover:text-niro-accent transition-colors" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* 4. Added pb-4 to give the answer breathing room at the bottom */}
            <p className="pb-4 text-gray-600 text-sm md:text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
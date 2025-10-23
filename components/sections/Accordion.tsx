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
    <div className="border-b border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <h3 className="text-lg font-semibold text-niro-blue">{question}</h3>
        {isActive ? <Minus className="text-niro-accent" /> : <Plus className="text-gray-500" />}
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
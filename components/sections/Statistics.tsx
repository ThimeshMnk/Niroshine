"use client"; // This component uses client-side hooks for animations

import { Briefcase, Home, Smile } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FadeIn } from '../FadeIn';

const stats = [
  {
    icon: <Home className="h-10 w-10 text-white" />,
    value: 500,
    label: 'Homes Cleaned',
  },
  {
    icon: <Smile className="h-10 w-10 text-white" />,
    value: 99,
    label: 'Happy Clients (%)',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-white" />,
    value: 5,
    label: 'Years of Experience',
  },
];

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px 0px" });

  return (
    <section id="statistics" className="p-16 bg-[#005acd]" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 text-center text-white">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="flex flex-col items-center">
                {stat.icon}
                <div className="mt-4 text-4xl font-bold">
                  {isInView ? <CountUp start={0} end={stat.value} duration={2.5} /> : '0'}
                  {stat.label.includes('%') && '%'}
                </div>
                <p className="mt-2 text-lg text-blue-200">{stat.label.replace(' (%)', '')}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
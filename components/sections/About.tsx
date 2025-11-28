"use client";

import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FadeIn } from '@/components/FadeIn'; 

const About = () => {
  const statRef = useRef(null);
  const isInView = useInView(statRef, { once: true, margin: "-100px" });

  return (
 
    <section id="about" className="py-12 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <FadeIn direction="right">
            <div className="space-y-6 text-center lg:text-left">
              <p className="font-semibold text-niro-accent tracking-wider uppercase">
                Who We Are
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight max-w-2xl mx-auto lg:mx-0">
                Our Achievements Over The Years As A Cleaning Company
              </h2>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                Niroshine is Tasmania's trusted partner for creating spotless, healthy, and happy homes. Our qualified and expert cleaners are committed to delivering excellence and reliability, with no obligations.
              </p>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-block bg-(--niro-accent) text-white font-semibold px-8 py-3 rounded-md hover:bg-opacity-90 transition duration-300 shadow-md"
                >
                  More Details
                </a>
              </div>
            </div>
          </FadeIn>

       
          <div className="relative mt-8 lg:mt-0 h-[400px] sm:h-[450px] lg:h-[550px] w-full max-w-lg mx-auto lg:max-w-none">
            
            <FadeIn className="absolute top-0 right-0 h-4/5 w-4/5 rounded-lg z-10">
              <div className="relative w-full h-full rounded-lg shadow-xl overflow-hidden">
                <Image
                  src={`/about-main.jpg`}
                  alt="Professional cleaner wiping a glass shower door"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="absolute bottom-0 left-0 h-2/5 w-1/2 rounded-lg z-20">
              <div className="relative w-full h-full rounded-lg shadow-lg border-4 border-white overflow-hidden">
                <Image
                  src={`/about-secondary.jpg`}
                  alt="Professional cleaner wiping a toilet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
              </div>
            </FadeIn>

       
            <FadeIn delay={0.4} direction="up" className="absolute bottom-4 right-4 md:-bottom-12 md:-right-12 z-30">
              <div
                ref={statRef}
                className="bg-white rounded-full h-32 w-32 md:h-48 md:w-48 flex flex-col items-center justify-center shadow-2xl text-center border border-gray-100"
              >
                <p className="text-3xl md:text-5xl font-bold text-niro-accent">
                  {isInView ? <CountUp start={0} end={20} duration={3} /> : '0'}
                </p>
                <p className="mt-1 text-xs md:text-base text-gray-600 font-semibold">
                  Happy Clients
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
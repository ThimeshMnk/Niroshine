"use client"; // Required for the CountUp animation

import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FadeIn } from '../FadeIn';
const basePath = '/Niroshine'; 
const About = () => {
  const statRef = useRef(null);
  const isInView = useInView(statRef, { once: true, margin: "-200px" });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <FadeIn direction="right">
            <div>
              <p className="font-semibold text-gray-800">Who We Are</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
                Our Achievements Over The Years As A Cleaning Service Company
              </h2>
              <p className="mt-4 text-gray-600">
                Niroshine is Tasmania's trusted partner for creating spotless, healthy, and happy homes. Our qualified and expert cleaners are committed to delivering excellence and reliability, with no obligations.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-block bg-(--niro-accent) text-white font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition duration-300"
              >
                More Details
              </a>
            </div>
          </FadeIn>

          {/* Right Column: Image Collage */}
          <div className="relative h-[400px] lg:h-[500px]">
            <FadeIn className="absolute top-0 right-0 h-4/5 w-4/5 rounded-lg">
              <Image
                src={`${basePath}/about-main.jpg`}
                alt="Professional cleaner wiping a glass shower door"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-xl"
              />
            </FadeIn>
            <FadeIn delay={0.2} className="absolute bottom-0 left-0 h-2/5 w-1/2 rounded-lg">
              <Image
                src={`${basePath}/about-secondary.jpg`}
                alt="Professional cleaner wiping a toilet"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg border-4 border-white"
              />
            </FadeIn>
            <FadeIn delay={0.4} direction="up" className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12">
              <div
                ref={statRef}
                className="bg-white rounded-full h-40 w-40 md:h-48 md:w-48 flex flex-col items-center justify-center shadow-2xl text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-niro-accent">
                  {isInView ? <CountUp start={0} end={9800} duration={3} /> : '0'}
                </p>
                <p className="mt-1 text-gray-600 font-semibold">Happy Clients</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
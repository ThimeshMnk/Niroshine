import Image from 'next/image';
import { FadeIn } from '../FadeIn';

const processSteps = [
  {
    image: `/process-1.svg`, 
    title: "Book Online Form",
    description: "Easily schedule your cleaning service through our simple and quick online form."
  },
  {
    image: `/process-2.jpeg`,
    title: "Get Expert Cleaner",
    description: "A professional, vetted, and friendly cleaner is dispatched to your location at the scheduled time."
  },
  {
    image: `/process-3.svg`,
    title: "Enjoy Cleaning",
    description: "Sit back, relax, and enjoy your sparkling clean and fresh home. It's that simple!"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-12 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn direction="down">
          <p className="font-semibold text-(--niro-accent) uppercase tracking-wider text-sm md:text-base">
            Work Progress
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
            We Make Life Easier
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Our straightforward process ensures you get a hassle-free, top-quality cleaning experience from start to finish.
          </p>
        </FadeIn>

        {/* 
          GRID LAYOUT:
          - grid-cols-1: Stacks vertically on mobile
          - md:grid-cols-3: Spreads horizontally on desktop
        */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          
          {/* DESKTOP LINE: Horizontal (Hidden on mobile) */}
          <div className="hidden md:block absolute top-20 left-0 w-full h-px -z-10">
            <svg width="100%" height="2">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="#bdd5e7" strokeWidth="2" strokeDasharray="8 8" />
            </svg>
          </div>

          {/* MOBILE LINE: Vertical (Hidden on desktop) */}
          {/* This creates a line going down through the center of the items on mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-px -ml-[1px] -z-10 border-l-2 border-dashed border-[#bdd5e7]"></div>
          
          {processSteps.map((step, index) => (
            <FadeIn 
              key={index} 
              delay={index * 0.2} 
              className="relative z-10 flex flex-col items-center group"
            >
              {/* Image Container - Added transition for hover effect */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 flex shrink-0 items-center justify-center bg-white rounded-full shadow-lg mb-6 border border-gray-50 transition-transform duration-300 group-hover:scale-105">
                
                {/* Steps Images */}
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                   <Image 
                     src={step.image} 
                     alt={step.title} 
                     fill
                     className="object-contain"
                   />
                </div>
                
                {/* Number Badge */}
                <div className="absolute top-0 left-0 bg-(--niro-accent) text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-base md:text-xl font-bold border-2 md:border-4 border-white shadow-sm">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-500 text-sm md:text-base max-w-xs mx-auto">
                {step.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
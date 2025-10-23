import Image from 'next/image';
import { FadeIn } from '../FadeIn';

const processSteps = [
  {
    image: "/process-1.svg", // Using your SVG assets
    title: "Book Online Form",
    description: "Easily schedule your cleaning service through our simple and quick online form."
  },
  {
    image: "/process-2.svg",
    title: "Get Expert Cleaner",
    description: "A professional, vetted, and friendly cleaner is dispatched to your location at the scheduled time."
  },
  {
    image: "/process-3.svg",
    title: "Enjoy Cleaning",
    description: "Sit back, relax, and enjoy your sparkling clean and fresh home. It's that simple!"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn direction="down">
          <p className="font-semibold text-(--niro-accent)">Work Progress</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">We Make Life Easier</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our straightforward process ensures you get a hassle-free, top-quality cleaning experience from start to finish.
          </p>
        </FadeIn>

        <div className="mt-20 grid md:grid-cols-3 gap-8 items-start relative">
          {/* Dotted line for desktop - positioned precisely */}
          <div className="hidden md:block absolute top-20 left-0 w-full h-px -z-10">
            <svg width="100%" height="2">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="#bdd5e7" strokeWidth="2" strokeDasharray="8 8" />
            </svg>
          </div>
          
          {processSteps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.2} className="relative z-10 flex flex-col items-center">
              {/* 1. This is the main container that ensures consistent size and alignment */}
              <div className="relative w-40 h-40 flex items-center justify-center bg-white rounded-full shadow-lg mb-6">
                
                {/* 2. The image is placed inside the container */}
                <Image src={step.image} alt={step.title} width={100} height={100} className="object-contain" />
                
                {/* 3. The number circle with corrected background color syntax */}
                <div className="absolute top-0 left-0 bg-(--niro-accent) text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold border-4 border-white">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="mt-2 text-gray-500">{step.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
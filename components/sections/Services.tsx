import Image from 'next/image';
import { Check } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const servicesList = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "End-of-Lease / Bond Cleaning",
  "Deep Cleaning",
  "Airbnb / Short-Stay Cleaning",
  "Oven Cleaning & Cooktop Detailing",
  "Kitchen Deep Cleaning",
  "Bathroom & Toilet Deep Cleaning",
  "Window Cleaning (Internal & External)",
  "Carpet & Upholstery Cleaning"
];

const galleryImages = [
  { src: "/service-1.jpg", alt: "Cleaning a window", delay: 0.2 },
  { src: "/service-2.jpg", alt: "Cleaning a sink", delay: 0.4 },
  { src: "/service-3.jpg", alt: "Organizing cleaning supplies", delay: 0.6 },
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20 lg:py-24 bg-blue-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* --- TOP SECTION (Text & Main Image) --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 md:mb-20">
          <FadeIn direction="right">
            <div className="text-center lg:text-left">
              <p className="font-semibold text-niro-accent uppercase tracking-wider text-sm md:text-base">
                Our Services
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                We Give The Best Services
              </h2>
              <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
                From deep cleaning to regular maintenance, we offer a wide range of services to meet your specific needs. Our team uses eco-friendly products to ensure a safe environment for you and your family.
              </p>

              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-left">
                {servicesList.map((service, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <div className="shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-white bg-(--niro-accent) rounded-full p-1" />
                    </div>
                    <span className="text-sm md:text-base font-medium">{service}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-block w-full md:w-auto text-center bg-(--niro-accent) text-white font-semibold px-8 py-3.5 rounded-md hover:bg-opacity-90 transition duration-300 shadow-md"
                >
                  More Details
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="relative h-[300px] md:h-[450px] rounded-xl shadow-xl overflow-hidden group">
               <Image
                src={"/service-3.jpg"}
                alt="A sparkling clean modern kitchen"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>

        {/* --- BOTTOM SECTION (Responsive Carousel) --- */}
        {/* 
           MOBILE: Flex + Overflow-Auto (Carousel)
           DESKTOP: Grid (Standard Layout) 
        */}
        <div className="
          flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4
          sm:grid sm:grid-cols-2 sm:gap-6 sm:pb-0 sm:mx-0 sm:px-0
          lg:grid-cols-3
          scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
        ">
          {galleryImages.map((img, index) => (
            <FadeIn 
              key={index} 
              delay={img.delay} 
              // Important: Width constraints for mobile carousel
              className={`
                relative shrink-0 snap-center 
                w-[85vw] h-64 sm:w-auto sm:h-60 
                rounded-lg shadow-md overflow-hidden
                ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''} 
              `}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill
                className="object-cover hover:scale-110 transition-transform duration-500" 
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
              />
            </FadeIn>
          ))}
        </div>
        
        {/* Optional: Mobile Swipe Indicator Hint (Text) */}
        <div className="sm:hidden text-center mt-2 text-gray-400 text-xs font-medium animate-pulse">
          Swipe to see more &rarr;
        </div>

      </div>
    </section>
  );
};

export default Services;
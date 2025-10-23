import Image from 'next/image';
import { Check } from 'lucide-react';
import { FadeIn } from '../FadeIn';

const servicesList = [
  "We Provide Qualified & Expert Cleaners",
  "No Obligation — May Stop at Any Time!",
  "Neat & Cleaning Top Service",
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-niro-light-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Part */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <p className="font-semibold text-niro-accent">Our Services</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
                We Give The Best Services
              </h2>
              <p className="mt-4 text-gray-600">
                From deep cleaning to regular maintenance, we offer a wide range of services to meet your specific needs. Our team uses eco-friendly products to ensure a safe environment for you and your family.
              </p>
              <ul className="mt-6 space-y-3">
                {servicesList.map((service, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 mr-3 text-white bg-(--niro-accent) rounded-full p-1" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-block bg-(--niro-accent) text-white font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition duration-300"
              >
                More Details
              </a>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="h-[400px] rounded-lg shadow-xl overflow-hidden">
               <Image
                src="/services-main.jpg"
                alt="A sparkling clean modern kitchen"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>

        {/* Bottom Image Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FadeIn delay={0.2}>
            <Image src="/service-1.jpg" alt="Cleaning a window" width={500} height={400} className="rounded-lg shadow-md object-cover w-full h-60 hover:scale-105 transition-transform duration-300" />
          </FadeIn>
          <FadeIn delay={0.4}>
            <Image src="/service-2.jpg" alt="Cleaning a sink" width={500} height={400} className="rounded-lg shadow-md object-cover w-full h-60 hover:scale-105 transition-transform duration-300" />
          </FadeIn>
          <FadeIn delay={0.6}>
            <Image src="/service-3.jpg" alt="Organizing cleaning supplies" width={500} height={400} className="rounded-lg shadow-md object-cover w-full h-60 hover:scale-105 transition-transform duration-300" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Services;
import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

const basePath = '/Niroshine';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-start mt-2.5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`${basePath}/hero3.png`}
          alt="Background image of a clean home"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100} 
          priority 
        />
      </div>

      {/* Vignette Shadow Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.7) 100%)',
        }}
      ></div>

      {/* Text Content */}
      <div className="relative z-20 text-white p-8 md:p-16 lg:p-24 max-w-5xl text-left">
        <FadeIn direction="down">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-6 opacity-90">
            Professional Cleaning Solutions
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg text-pretty">
            Sparkling Clean Homes in Tasmania
          </h1>
        </FadeIn>

        <FadeIn direction="down" delay={0.2}>
          <p className="text-lg md:text-xl text-white/90 max-w-5xl mx-auto mb-8 leading-relaxed drop-shadow-md">
            Professional, reliable, and affordable house cleaning services. We transform your home into a spotless
            sanctuary you'll love.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <a
            href="#contact"
            className="mt-8 inline-block bg-blue-500 text-white text-lg font-semibold px-8 py-3 rounded-md hover:brightness-110 transition duration-300 shadow-lg"
          >
            Book Your Cleaning Today
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
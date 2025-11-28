import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

const Hero = () => {
  return (
    <section id="home" className="relative w-full flex flex-col lg:block h-auto lg:h-screen min-h-[600px] overflow-hidden">
      
 
      <div className="relative w-full h-[50vh] order-1 lg:order-0 lg:absolute lg:inset-0 lg:h-full z-0">
        <Image
          src={`/hero3.png`}
          alt="Background image of a clean home"
          fill
      
          className="object-cover object-bottom lg:object-center"
          priority 
        />
        
        <div
          className="hidden lg:block absolute inset-0 z-10"
          style={{
            backgroundImage: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.7) 100%)',
          }}
        ></div>
      </div>


      <div className="
        relative z-20 order-2 
        w-full flex flex-col justify-center 
        bg-[#0f3460] lg:bg-transparent py-12 lg:py-0 
        lg:absolute lg:inset-0 lg:h-full 
        container mx-auto px-4 md:px-8 lg:px-16
      ">
        
        <div className="max-w-4xl text-white text-center lg:text-left">
          <FadeIn direction="down">
            <p className="text-blue-200 lg:text-accent font-semibold text-xs md:text-sm tracking-wider uppercase mb-4 md:mb-6 opacity-90">
              Professional Cleaning Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white">
              Sparkling Clean Homes in Tasmania
            </h1>
          </FadeIn>

          <FadeIn direction="down" delay={0.2}>
            <p className="text-base md:text-xl text-blue-100 lg:text-white/90 max-w-2xl mb-8 leading-relaxed drop-shadow-md mx-auto lg:mx-0">
              Professional, reliable, and affordable house cleaning. We transform your home into a spotless
              sanctuary you'll love.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <a
              href="#contact"
              className="inline-block w-full md:w-auto text-center bg-blue-500 text-white text-lg font-semibold px-8 py-4 md:py-3 rounded-md hover:brightness-110 transition duration-300 shadow-lg"
            >
              Book Your Cleaning Today
            </a>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default Hero;
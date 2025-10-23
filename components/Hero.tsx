import { FadeIn } from '@/components/FadeIn';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Vignette Shadow Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.4) 100%)'
        }}
      ></div>

      {/* Text Content */}
      <div className="relative z-20 text-center text-white p-4">
        <FadeIn direction="down">
          <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
            Sparkling Clean Homes in Tasmania
          </h1>
        </FadeIn>
        <FadeIn direction="down" delay={0.2}>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Professional, reliable, and affordable house cleaning services.
            We make your home shine!
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={0.4}>
          <a
            href="#contact"
            className="mt-8 inline-block  bg-(--niro-accent)  text-white text-lg font-semibold px-8 py-3 rounded-md hover:brightness-110 transition duration-300 shadow-lg"
          >
            Book Your Cleaning Today
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
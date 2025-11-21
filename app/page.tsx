import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";


export default function Home() {
  return (
    <main>
     <Hero />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
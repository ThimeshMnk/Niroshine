import Accordion from './Accordion';
import { FadeIn } from '@/components/FadeIn'; // Ensure path is correct

const faqItems = [
  {
    question: "How Much Will It Cost?",
    answer: "The cost depends on the size of your home and the specific services you require. We provide a free, no-obligation estimate tailored to your needs. Contact us to get your personalized quote today!"
  },
  {
    question: "Do You Offer Free Estimates?",
    answer: "Yes, absolutely! We are happy to provide a detailed and transparent estimate for free. There are no hidden fees or obligations."
  },
  {
    question: "Do You Have Insurance?",
    answer: "Yes, Niroshine is a fully insured cleaning company. We take every precaution to ensure the safety and security of your property and our staff."
  }
];

const FAQ = () => {
  return (
    // 1. Changed p-16 to py-12 px-4 for mobile sizing
    <section id="faq" className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid stacks to 1 column on mobile, 2 columns on large screens */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Text & CTA */}
          <FadeIn direction="right">
            {/* Centered text on mobile, Left aligned on Desktop */}
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <p className="font-semibold text-niro-accent uppercase tracking-wider text-sm md:text-base">
                FAQ
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Do You Have A Question?
              </h2>
              <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Find answers to common questions below. If you can't find what you're looking for, feel free to reach out to us directly. We're here to help!
              </p>
              
              <div className="mt-8">
                <a
                  href="#contact"
                  // Button is full width on mobile (w-full), auto width on desktop (md:w-auto)
                  className="inline-block w-full md:w-auto bg-(--niro-accent) text-white font-semibold px-8 py-3.5 rounded-md hover:bg-opacity-90 transition duration-300 shadow-md"
                >
                  Make An Appointment
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Accordion List */}
          <FadeIn direction="left">
            <div className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <Accordion
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={index === 0} // Keep first item open by default
                />
              ))}
            </div>
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
};

export default FAQ;
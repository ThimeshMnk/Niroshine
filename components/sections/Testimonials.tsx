import { FadeIn } from '@/components/FadeIn';
import { Quote } from 'lucide-react'; // Optional: Adds a nice visual element

const testimonials = [
  {
    quote: "Niroshine did an absolutely fantastic job! My house has never looked so clean. The team was punctual, professional, and incredibly thorough. Highly recommended!",
    name: "Sarah L.",
    location: "Hobart, TAS",
  },
  {
    quote: "I was amazed by the attention to detail. They cleaned places I wouldn't have even thought of. Excellent service and great value for money. Will definitely use them again.",
    name: "Mark T.",
    location: "Launceston, TAS",
  },
  {
    quote: "Reliable, friendly, and efficient. It's such a relief to come home to a sparkling clean house after a long day at work. Thank you, Niroshine!",
    name: "Emily R.",
    location: "Devonport, TAS",
  },
];

const Testimonials = () => {
  return (
    // 1. Reduced padding for mobile (py-12 px-4)
    <section id="testimonials" className="py-12 md:py-20 lg:py-24 bg-[#F5FBFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn direction="down" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from our happy customers across Tasmania.
          </p>
        </FadeIn>

        {/* 
           CAROUSEL CONTAINER:
           - Mobile: flex, overflow-x-auto, snap-x (Horizontal Scroll)
           - Desktop (lg): grid, grid-cols-3 (Standard Grid)
           - scrollbar-hide: Hides the scrollbar for a clean look
        */}
        <div className="
          flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4
          lg:grid lg:grid-cols-3 lg:gap-8 lg:pb-0 lg:mx-0 lg:px-0
          scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
        ">
          {testimonials.map((testimonial, index) => (
            <FadeIn 
              key={index} 
              delay={0.2 + index * 0.2}
              // Card sizing: w-[85vw] on mobile (peek effect), w-auto on desktop
              className="w-[85vw] shrink-0 snap-center lg:w-auto h-full"
            >
              <div className="bg-white h-full p-8 rounded-xl shadow-md border border-gray-100 flex flex-col relative">
                
                {/* Decorative Quote Icon */}
                <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6" />

                <p className="text-gray-600 italic relative z-10 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                {/* mt-auto pushes the name to the bottom so all cards align nicely */}
                <div className="mt-auto pt-6">
                  <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-niro-accent font-medium">{testimonial.location}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="lg:hidden text-center mt-2 text-gray-400 text-xs font-medium animate-pulse">
          Swipe to read more &rarr;
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
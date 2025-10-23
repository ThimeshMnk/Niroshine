import { FadeIn } from '../FadeIn';

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
    <section id="testimonials" className="py-20 bg-[#F5FBFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="down" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real feedback from our happy customers across Tasmania.
          </p>
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.2}>
              <div className="bg-white h-full p-8 rounded-lg shadow-md border border-gray-100">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
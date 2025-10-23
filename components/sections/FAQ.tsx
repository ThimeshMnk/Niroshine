import Accordion from './Accordion';
import { FadeIn } from '../FadeIn';

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
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn direction="right">
            <div>
              <p className="font-semibold text-niro-accent">FAQ</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
                Do You Have A Question?
              </h2>
              <p className="mt-4 text-gray-600">
                Find answers to common questions below. If you can't find what you're looking for, feel free to reach out to us directly. We're here to help!
              </p>
              <a
                href="#contact"
                className="mt-8 inline-block bg-niro-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition duration-300"
              >
                Make An Appointment
              </a>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="space-y-2">
              {faqItems.map((item, index) => (
                <Accordion
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={index === 0} // Make the first item open by default
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
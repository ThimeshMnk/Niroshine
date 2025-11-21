"use client"; 

import { useState, FormEvent } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn'; // Ensure path is correct

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    
    const form = event.currentTarget;
    
    const formData = new FormData(form);

    formData.append("access_key", "46952a24-8fbc-4360-bfc0-b9cf67aa4c0d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Form Error:", error); 
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-[#F5FBFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn direction="down" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get In Touch</h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Ready for a sparkling clean home? Contact us today!
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
           <FadeIn direction="right">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-800">Contact Details</h3>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-niro-accent mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Our Location</h4>
                  <p className="text-gray-600">Servicing all of Tasmania, Australia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-niro-accent mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Phone Number</h4>
                  <p className="text-gray-600">(+61) 426 702 208</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-niro-accent mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Email Address</h4>
                  <p className="text-gray-600 break-all">
                    niroshinecleaningservices@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form Side */}
          <FadeIn direction="left">
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
              <form onSubmit={onSubmit}>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-niro-accent focus:border-transparent outline-none transition-all" 
                    required 
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-niro-accent focus:border-transparent outline-none transition-all" 
                    required 
                  />
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-niro-accent focus:border-transparent outline-none transition-all resize-none" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="mt-6 w-full bg-(--niro-accent) text-white font-semibold py-3.5 px-6 rounded-md hover:bg-opacity-90 hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
                
                <span className="block mt-4 text-center text-sm text-gray-600 min-h-5">
                  {result}
                </span>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
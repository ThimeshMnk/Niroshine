"use client";

import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FadeIn } from '../FadeIn';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setStatus('loading');

    try {
         const response = await fetch('/Niroshine/api/contact/', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFeedbackMessage(data.message || 'Your message has been sent successfully!');
        // Clear the form
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setFeedbackMessage(data.message || 'An unexpected error occurred.');
      }
    } catch (error) {
      setStatus('error');
      setFeedbackMessage('An error occurred while sending your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-niro-light-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="down" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-600">
            Ready for a sparkling clean home? Contact us today for a free, no-obligation quote!
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <FadeIn direction="right">
            {/* ... your contact details JSX remains unchanged ... */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Contact Details</h3>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#005acd] mt-1" />
                <div>
                  <h4 className="font-semibold">Our Location</h4>
                  <p className="text-gray-600">Servicing all of Tasmania, Australia</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-[#005acd] mt-1" />
                <div>
                  <h4 className="font-semibold">Phone Number</h4>
                  <p className="text-gray-600">(+61) 426702208</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-[#005acd] mt-1" />
                <div>
                  <h4 className="font-semibold">Email Address</h4>
                  <p className="text-gray-600">niroshinecleaningservices@gmail.com</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#005acd] focus:border-[#005acd]"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#005acd] focus:border-[#005acd]"
                    required
                  />
                  <textarea
                    placeholder="Your Message (e.g., house size, services needed)"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#005acd] focus:border-[#005acd]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-6 w-full bg-[#005acd] text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && <p className="mt-4 text-green-600">{feedbackMessage}</p>}
                {status === 'error' && <p className="mt-4 text-red-600">{feedbackMessage}</p>}
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
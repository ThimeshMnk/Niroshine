import { Mail, MapPin, Phone } from 'lucide-react';
import { FadeIn } from '../FadeIn';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
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
                  <p className="text-gray-600">(03) 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-[#005acd] mt-1" />
                <div>
                  <h4 className="font-semibold">Email Address</h4>
                  <p className="text-gray-600">contact@niroshine.com.au</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <form action="#" method="POST">
                <div className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#005acd] focus:border-[#005acd]" required />
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#005acd] focus:border-[#005acd]" required />
                  <textarea placeholder="Your Message (e.g., house size, services needed)" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#005acd] focus:border-[#005acd]" required></textarea>
                </div>
                <button type="submit" className="mt-6 w-full bg-[#005acd] text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
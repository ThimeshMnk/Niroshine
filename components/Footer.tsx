import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const quickLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Our Process' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-40 h-12">
                <Image
                  src={`/logo2.jpeg`}
                  alt="Niroshine Logo"
                  fill
                  className="object-contain object-left" 
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted partner for professional cleaning services in Tasmania. We bring the shine back to your home.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="hover:text-niro-accent transition-colors text-sm block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-niro-accent" />
                <span>Servicing all of Tasmania, Australia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0 text-niro-accent" />
                <span>(+61) 426 702 208</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 shrink-0 text-niro-accent" />
                <span className="wrap-break-word break-all">
                  niroshinecleaningservices@gmail.com
                </span>
              </li>
            </ul>
          </div>

          <div>
             <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Follow Us</h3>
             <p className="text-sm text-gray-400 mb-4">
               Stay up to date with our latest news and offers.
             </p>
             <div className="flex space-x-4">
                <a 
                  href="#" 
                  aria-label="Facebook" 
                  className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-niro-accent transition-all duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  aria-label="Instagram" 
                  className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-niro-accent transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  aria-label="Twitter" 
                  className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-niro-accent transition-all duration-300"
                >
                  <Twitter size={20} />
                </a>
             </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Niroshine. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
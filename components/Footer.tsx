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
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Branding & About */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.jpeg"
                alt="Niroshine Logo"
                width={150}
                height={45}
              />
            </Link>
            <p className="text-sm">
              Your trusted partner for professional cleaning services in Tasmania. We bring the shine back to your home.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-(--niro-accent) transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0 text-(--niro-accent)" />
                <span>Servicing all of Tasmania, Australia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0 text-(--niro-accent)" />
                <span>(03) 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0 text-(--niro-accent)" />
                <span>contact@niroshine.com.au</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
             <h3 className="font-semibold text-white mb-4">Follow Us</h3>
             <p className="text-sm mb-4">Stay up to date with our latest news and offers.</p>
             <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-(--niro-accent) transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-(--niro-accent) transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-(--niro-accent) transition-colors">
                  <Twitter size={24} />
                </a>
             </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} Niroshine. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const basePath = '/Niroshine';

const navLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; 

      let currentSectionId = '';
      for (const link of navLinks) {
        const section = document.querySelector(link.href) as HTMLElement | null;

        if (section) {
          if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            currentSectionId = link.href.substring(1);
            break; 
          }
        }
      }

       console.log('Current Active Section:', currentSectionId);
      
      setActiveLink(currentSectionId);
    };

    handleScroll(); // Run on initial load

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-[#F7F7F7] backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <Link href="/">
              <Image
                src={`${basePath}/logo2.jpeg`}
                alt="Niroshine Logo"
                width={63}
                height={60}
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out hover:text-niro-accent ${
                    activeLink === link.href.substring(1)
                      ? 'text-niro-accent font-bold' // Active style
                      : 'text-gray-600' // Default style
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="hidden md:block">
            <Link href="#contact" className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-opacity-90">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
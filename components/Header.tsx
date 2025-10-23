import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <header className="bg-white backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
             <Link href="/">
              <Image
                src="/logo.jpeg" 
                alt="Niroshine Logo"
                width={63} 
                height={60} 
                priority 
              />
            </Link>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#about" className="text-gray-600 hover:text-niro-accent px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
              <Link href="#services" className="text-gray-600 hover:text-niro-accent px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link href="#process" className="text-gray-600 hover:text-niro-accent px-3 py-2 rounded-md text-sm font-medium">Process</Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-niro-accent px-3 py-2 rounded-md text-sm font-medium">Testimonials</Link>
              <Link href="#faq" className="text-gray-600 hover:text-niro-accent px-3 py-2 rounded-md text-sm font-medium">FAQ</Link>
            </div>
          </nav>
          <div className="hidden md:block">
             <Link href="#contact" className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-(--niro-accent) hover:bg-opacity-90">
                Get a Free Quote
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
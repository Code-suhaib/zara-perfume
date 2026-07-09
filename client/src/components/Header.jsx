import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Skip to content — Accessibility */}
      <a 
        href="#smooth-wrapper" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-gold focus:text-black focus:px-4 focus:py-2 focus:text-sm focus:rounded"
      >
        Skip to content
      </a>

      {/* Top Bar */}
      <div className="relative z-50 bg-black text-[0.65rem] tracking-[0.2em] text-center py-2.5 text-gold uppercase border-b border-gray-900 flex justify-between px-6 items-center">
        <div className="w-10"></div>
        <div>Free Worldwide Shipping On Orders Over $200</div>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-white transition-colors text-gray-400">
          <span>EN</span>
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 py-4 px-8 lg:px-16 flex justify-between items-center border-b transition-all duration-700 ease-luxury ${
        isScrolled 
          ? 'liquid-glass border-gray-800/50 shadow-lg' 
          : 'bg-transparent border-transparent'
      }`}>
        <Link to="/" className="flex flex-col items-center">
          <svg className="h-8 w-8 text-gold mb-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2 20h20v2H2v-2zm18-10.5l-4.5 4.5L12 4l-3.5 10L4 9.5l-2 8.5h20l-2-8.5z"></path>
          </svg>
          <div className="font-serif-lux text-xl tracking-lux text-gold-light leading-none">
            ZARA
          </div>
          <div className="text-[0.45rem] tracking-[0.4em] text-gray-400 mt-1 uppercase">
            Perfumes
          </div>
        </Link>

        <nav className="hidden md:flex space-x-8 text-[0.65rem] tracking-widest uppercase items-center" role="navigation" aria-label="Main navigation">
          <a className="text-gold-light border-b border-gold-light pb-1" href="#">Home</a>
          <a className="text-gray-300 hover:text-gold-light nav-link-hover pb-1" href="#">Collection</a>
          <a className="text-gray-300 hover:text-gold-light nav-link-hover pb-1" href="#">Our Story</a>
          <a className="text-gray-300 hover:text-gold-light nav-link-hover pb-1" href="#">Fragrances</a>
          <a className="text-gray-300 hover:text-gold-light nav-link-hover pb-1" href="#">Journal</a>
          <a className="text-gray-300 hover:text-gold-light nav-link-hover pb-1" href="#">Contact</a>
        </nav>

        <div className="flex items-center space-x-5">
          <button className="text-gray-400 hover:text-gold-light transition-colors" aria-label="Search">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </button>
          <Link to="/auth" className="text-[0.65rem] tracking-widest uppercase text-gray-300 hover:text-gold hover:border-gold flex items-center border border-gray-700 px-4 py-1.5 rounded-full">
            <span>Sign In</span>
          </Link>
          <button className="text-gray-400 hover:text-gold-light transition-colors relative" aria-label="Shopping bag, 0 items">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
            <span className="absolute -top-1.5 -right-1.5 bg-gold text-black text-[0.55rem] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
          <MagneticButton href="#" className="hidden lg:inline-block border border-gold text-gray-300 hover:bg-gold hover:text-black px-6 py-2 text-[0.65rem] tracking-widest uppercase btn-discover rounded-full">
            Discover
          </MagneticButton>
          <button 
            aria-controls="mobile-menu" 
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu" 
            className="md:hidden text-gray-300 hover:text-gold-light"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div 
        id="mobile-menu"
        className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:hidden fixed inset-x-0 top-0 z-[60] liquid-glass border-b border-gray-900 px-8 py-6 flex-col space-y-6 text-[0.7rem] tracking-widest uppercase`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <button 
          aria-label="Close navigation menu" 
          className="self-end text-gray-400 hover:text-gold-light"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
          </svg>
        </button>
        <a className="text-gold-light" href="#">Home</a>
        <a className="text-gray-300 hover:text-gold-light" href="#">Collection</a>
        <a className="text-gray-300 hover:text-gold-light" href="#">Our Story</a>
        <a className="text-gray-300 hover:text-gold-light" href="#">Fragrances</a>
        <a className="text-gray-300 hover:text-gold-light" href="#">Journal</a>
        <a className="text-gray-300 hover:text-gold-light" href="#">Contact</a>
      </div>
    </>
  );
}

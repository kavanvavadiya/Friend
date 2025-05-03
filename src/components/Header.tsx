import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Toggle body scroll when menu is open
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-4 sm:px-6 transition-all duration-300 ${
        scrolled 
        ? 'bg-white bg-opacity-95 shadow-md' 
        : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Heart 
            className={`${scrolled ? 'text-pink-600' : 'text-white'} mr-2`} 
            size={22} 
            fill="currentColor" 
          />
          <h1 
            className={`text-lg sm:text-xl md:text-2xl font-bold ${
              scrolled ? 'text-gray-800' : 'text-white'
            } transition-colors duration-300`}
          >
            For My Best Friend
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#memories" 
                className={`${
                  scrolled ? 'text-gray-800 hover:text-pink-600' : 'text-white hover:text-pink-200'
                } transition-colors duration-300`}
              >
                Memories
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                className={`${
                  scrolled ? 'text-gray-800 hover:text-pink-600' : 'text-white hover:text-pink-200'
                } transition-colors duration-300`}
              >
                Gallery
              </a>
            </li>
            <li>
              <a 
                href="#messages" 
                className={`${
                  scrolled ? 'text-gray-800 hover:text-pink-600' : 'text-white hover:text-pink-200'
                } transition-colors duration-300`}
              >
                Messages
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden focus:outline-none ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 z-40 transition-transform duration-300 ease-in-out transform md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0', paddingTop: '4rem' }}
      >
        <nav className="container mx-auto px-6 py-8">
          <ul className="flex flex-col space-y-6">
            <li>
              <a 
                href="#memories" 
                className="text-white text-2xl font-semibold block py-2"
                onClick={closeMobileMenu}
              >
                Memories
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                className="text-white text-2xl font-semibold block py-2"
                onClick={closeMobileMenu}
              >
                Gallery
              </a>
            </li>
            <li>
              <a 
                href="#messages" 
                className="text-white text-2xl font-semibold block py-2"
                onClick={closeMobileMenu}
              >
                Messages
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
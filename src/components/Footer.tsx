import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <Heart className="text-white mr-2" size={20} fill="currentColor" />
              <span className="font-semibold">For My Best Friend</span>
            </div>
            <p className="mt-2 text-sm text-white/80">
              Made with love, just for you
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <nav className="mb-4">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
                <li>
                  <a 
                    href="#memories" 
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Memories
                  </a>
                </li>
                <li>
                  <a 
                    href="#gallery" 
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a 
                    href="#messages" 
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Messages
                  </a>
                </li>
              </ul>
            </nav>
            <p className="text-xs text-white/70">
              &copy; {currentYear} - All memories cherished forever
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
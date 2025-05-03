import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-400">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover"
          style={{ 
            backgroundImage: "url('hero.jpg')",
            backgroundPosition: "center",
            filter: "brightness(0.7)"
          }}
        ></div>
      </div>
      
      <div 
        className={`container mx-auto my-8 px-4 sm:px-6 z-10 text-center transform transition-all duration-1000 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="inline-block mb-4 sm:mb-6">
          <Sparkles className="text-yellow-300 mx-auto" size={32} />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          To My Amazing<br />Best Friend
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-10 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed">
          Thank you for being the extraordinary person that you are and for filling my life with joy, laughter, and unforgettable memories.
        </p>
        <button
          className="px-6 sm:px-8 py-3 rounded-full bg-white text-pink-600 font-semibold hover:bg-pink-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 shadow-lg transform hover:-translate-y-1 text-base sm:text-lg"
          onClick={() => document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Our Friendship
        </button>
      </div>

      <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 text-center">
        <div 
          className="animate-bounce inline-block cursor-pointer"
          onClick={() => document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
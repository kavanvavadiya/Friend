import React, { useState } from 'react';
import { funFacts } from '../data/funFacts';
import { 
  Gamepad2 , HeartHandshake  , Music, Coffee,
  Smile, Star, Heart , Sparkles, Pizza,
} from 'lucide-react';

const FunFactsSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'pizza': return <Pizza className="text-pink-500" size={24} />;
      case 'gamepad': return <Gamepad2  className="text-pink-500" size={24} />;
      case 'helper': return <HeartHandshake  className="text-pink-500" size={24} />;
      case 'music': return <Music className="text-pink-500" size={24} />;
      case 'coffee': return <Coffee className="text-pink-500" size={24} />;
      case 'heart': return <Heart   className="text-pink-500" size={24} fill="currentColor" />;
      case 'smile': return <Smile className="text-pink-500" size={24} />;
      case 'star': return <Star className="text-pink-500" size={24} />;
      case 'sparkles': return <Sparkles className="text-pink-500" size={24} />;
      default: return <Sparkles className="text-pink-500" size={24} />;
    }
  };

  const toggleCard = (id: number) => {
    if (activeCard === id) {
      setActiveCard(null);
    } else {
      setActiveCard(id);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Little Things I Love About You</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-md sm:max-w-2xl mx-auto">
            The quirks, habits, and special things that make you uniquely you and why I adore them.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {funFacts.map((fact) => (
            <div 
              key={fact.id}
              className={`
                bg-white rounded-xl shadow-md overflow-hidden cursor-pointer
                transform transition-all duration-300 border-2
                ${activeCard === fact.id 
                  ? 'scale-102 shadow-xl border-pink-300' 
                  : 'hover:-translate-y-1 hover:shadow-lg border-transparent'
                }
              `}
              onClick={() => toggleCard(fact.id)}
            >
              <div className="p-5 sm:p-6">
                <div className="flex items-center mb-3">
                  {getIcon(fact.icon)}
                  <span className="ml-2 text-sm text-pink-600 font-medium">Fact #{fact.id}</span>
                </div>
                <p className="text-gray-700 text-base sm:text-lg">{fact.text}</p>
                <div 
                  className={`
                    mt-4 flex justify-end
                    transform transition-opacity duration-300
                    ${activeCard === fact.id ? 'opacity-100' : 'opacity-0'}
                  `}
                >
                  <span className="text-sm text-pink-500 font-medium">💕 And that's why you're amazing!</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
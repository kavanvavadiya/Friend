import React, { useEffect, useRef } from 'react';
import { CalendarDays } from 'lucide-react';
import { memories } from '../data/memories';

const MemoryTimeline: React.FC = () => {
  const timelineRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    timelineRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      timelineRef.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="memories" className="py-16 sm:py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Our Journey</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-md sm:max-w-2xl mx-auto">
            Every moment with you has been a treasure. Here's a look back at some of our most special memories together.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {memories.map((memory, index) => (
            <div 
              key={memory.id} 
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-8 group`}
              ref={el => timelineRef.current[index] = el}
            >
              {/* Avatar */}
              <div className={`w-1/3 flex ${index % 2 === 0 ? 'justify-center pr-4' : 'justify-center pl-4'} items-center relative`}>
                {/* Vertical line */}
                <div className={`hidden sm:block absolute ${index % 2 === 0 ? 'right-3' : 'left-3'} top-20 bottom-0 w-0.5 bg-pink-200 -z-10`}></div>

                <div className={`
                  w-[120px] h-[120px] sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg 
                  transform transition-all duration-500 
                  group-hover:scale-105 group-hover:shadow-xl
                  ${index % 2 === 0 ? 'group-hover:rotate-3' : 'group-hover:-rotate-3'}
                  flex-shrink-0
                `}>
                  <img 
                    src={memory.imageUrl} 
                    alt={memory.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content Card */}
              <div className="w-2/3 bg-white p-4 sm:p-6 rounded-lg shadow-md transform transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lg">
                <div className="flex items-center mb-2 sm:mb-3">
                  <CalendarDays className="text-pink-500 mr-2" size={16} />
                  <span className="text-xs sm:text-sm font-semibold text-pink-600">{memory.date}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{memory.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{memory.description}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default MemoryTimeline;
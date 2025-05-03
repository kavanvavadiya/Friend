import React, { useState } from 'react';
import { gallery } from '../data/gallery';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedImageId(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImageId(null);
    document.body.style.overflow = 'auto';
  };

  const selectedMedia = selectedImageId !== null ? gallery.find(m => m.id === selectedImageId) : null;

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Our Gallery</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-md sm:max-w-2xl mx-auto">
            Each photo and video captures a precious moment in our journey. Click to view full screen.
          </p>
        </div>

        {/* Flex Gallery */}
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
          {gallery.map((memory) => (
            memory.imageUrl && (
              <div
                key={memory.id}
                className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => openModal(memory.id)}
                
              >
                {memory.type === 'video' ? (
                  <video
                    src={memory.imageUrl}
                    className="w-full h-80 object-cover rounded-md"
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={memory.imageUrl}
                    alt={memory.title}
                    className="w-full h-80 object-cover rounded-md"
                    loading="lazy"
                  />
                )}
              </div>
            )
          ))}
        </div>

        {/* Modal */}
        {selectedImageId !== null && selectedMedia && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={closeModal}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors z-60"
              onClick={closeModal}
              aria-label="Close gallery"
            >
              <X size={28} />
            </button>
            <div
              className="w-[80vw] h-[80vh] flex justify-center items-center bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.imageUrl}
                  controls
                  autoPlay
                  className="max-h-full max-w-full rounded-lg"
                />
              ) : (
                <img
                  src={selectedMedia.imageUrl}
                  alt=""
                  className="max-h-full max-w-full rounded-lg object-cover"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

import { useState, useEffect } from 'react';
import ScrollReveal from '../../../components/effects/ScrollReveal';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://www.cawap.ca/wp-content/uploads/2024/12/gallery-1.jpg',
    'https://www.cawap.ca/wp-content/uploads/2024/12/gallery-2.jpg',
    'https://www.cawap.ca/wp-content/uploads/2024/12/gallery-3.jpg',
    'https://www.cawap.ca/wp-content/uploads/2024/12/gallery-4.jpg',
    'https://www.cawap.ca/wp-content/uploads/2024/12/gallery-5.jpg',
    'https://www.cawap.ca/wp-content/uploads/2024/12/gallery-6.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const visibleImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] mb-4 gradient-text">
              Community in Action
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the impact of our programs through moments captured in our community
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleImages.map((image, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="elite-card overflow-hidden rounded-2xl shadow-lg group"
                  style={{
                    animation: `slideIn 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3c1053]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'bg-[#c9b037] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <a
              href="/gallery"
              className="inline-block bg-[#c9b037] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b39f2f] transition-all duration-300 elite-btn glow-effect whitespace-nowrap"
            >
              View Full Gallery
            </a>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default ImageCarousel;

import { useState, useEffect } from 'react';
import ParallaxSection from '../../../components/effects/ParallaxSection';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/IMG_0001-scaled.jpg',
      title: 'Empowering Communities',
      subtitle: 'Building Stronger Futures Together',
    },
    {
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/IMG_0002-scaled.jpg',
      title: 'Youth Leadership',
      subtitle: 'Nurturing Tomorrow\'s Leaders',
    },
    {
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/IMG_0003-scaled.jpg',
      title: 'Community Support',
      subtitle: 'Making a Difference Every Day',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <ParallaxSection speed={0.3}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </ParallaxSection>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl reveal reveal-fade reveal-visible">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 gradient-text-white animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-delay">
                {slide.subtitle}
              </p>
              <div className="flex gap-4 justify-center animate-fade-in-delay-2">
                <a
                  href="/programs"
                  className="bg-[#c9b037] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b39f2f] transition-all duration-300 elite-btn glow-effect whitespace-nowrap text-lg"
                >
                  Explore Programs
                </a>
                <a
                  href="/contact"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 elite-btn border-2 border-white/30 whitespace-nowrap text-lg"
                >
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'bg-[#c9b037] w-12'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 elite-btn z-20"
        aria-label="Previous slide"
      >
        <i className="ri-arrow-left-line text-2xl"></i>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 elite-btn z-20"
        aria-label="Next slide"
      >
        <i className="ri-arrow-right-line text-2xl"></i>
      </button>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.6s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.9s both;
        }

        .gradient-text-white {
          text-shadow: 0 0 30px rgba(201, 176, 55, 0.5);
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;

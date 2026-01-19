import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import ImageCarousel from './components/ImageCarousel';
import FounderMessage from './components/FounderMessage';
import JavascriptSection from './components/JavascriptSection';
import ScrollReveal from '../../components/effects/ScrollReveal';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      
      {/* Important Location Change Announcement */}
      <section className="py-6 bg-gradient-to-r from-[#8e24aa] to-[#26194f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-white/30">
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                <i className="ri-map-pin-line text-[#8e24aa] text-3xl md:text-4xl"></i>
              </div>
              
              {/* Content */}
              <div className="flex-grow text-center md:text-left">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Important Update
                  </span>
                  <i className="ri-notification-badge-line text-white text-xl animate-bounce"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  We've Moved to a New Location!
                </h3>
                <p className="text-white/95 text-base md:text-lg leading-relaxed">
                  Please note our <strong>new address</strong>: We have relocated from <span className="line-through opacity-75">101 West Drive, Unit C</span> to <strong className="text-yellow-300">101 West Drive, Unit 7</strong>. Same building, new unit! We look forward to welcoming you at our new location.
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="flex-shrink-0">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#26194f] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <i className="ri-map-pin-2-line"></i>
                  <span className="text-sm md:text-base">Get Directions</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AboutSection />
      <ProgramsSection />
      
      {/* Food Bank Quick Link Section */}
      <section className="py-16 bg-gradient-to-br from-[#c9b037]/10 to-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[400px]">
                  <img
                    src="https://readdy.ai/api/search-image?query=welcoming%20community%20food%20bank%20with%20volunteers%20helping%20diverse%20families%2C%20organized%20shelves%20of%20fresh%20produce%20and%20nutritious%20groceries%2C%20bright%20caring%20atmosphere%20showing%20food%20security%20and%20community%20support%2C%20professional%20photography%20with%20warm%20lighting&width=800&height=400&seq=home-food-bank-feature&orientation=landscape"
                    alt="CAWAP Food Bank"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                    <i className="fas fa-shopping-basket text-[#c9b037] text-3xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">CAWAP Food Bank</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Providing nutritious food assistance to families and individuals facing food insecurity. We serve our community with dignity, compassion, and respect.
                  </p>
                  <div className="flex items-center gap-6 mb-6">
                    <div>
                      <div className="text-3xl font-bold text-[#c9b037]">500+</div>
                      <div className="text-sm text-gray-600">Families Served</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#c9b037]">15,000+</div>
                      <div className="text-sm text-gray-600">Meals Distributed</div>
                    </div>
                  </div>
                  <a
                    href="/food-pantry"
                    className="inline-block bg-[#c9b037] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer w-fit"
                  >
                    Learn More About Our Food Bank
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <JavascriptSection />
      <FounderMessage />
      <ImageCarousel />
      <DonationCTA />
      <Footer />
    </div>
  );
};

export default HomePage;

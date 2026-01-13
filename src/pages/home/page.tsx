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

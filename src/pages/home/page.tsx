import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import ImageCarousel from './components/ImageCarousel';
import FounderMessage from './components/FounderMessage';
import JavascriptSection from './components/JavascriptSection';

const HomePage = () => {
  return (
    <div className="page-transition">
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <ProgramsSection />
        <ImageCarousel />
        <FounderMessage />
        <JavascriptSection />
      </main>
      <DonationCTA />
      <Footer />
    </div>
  );
};

export default HomePage;

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProgramsOpen(false);
    setIsEventsOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#3c1053] text-white py-2 text-sm transition-all duration-500">
        <div className="container mx-auto px-4 flex justify-end items-center gap-4 text-sm">
          <a href="tel:+16475815901" className="hover:text-secondary transition-colors whitespace-nowrap">
            +1 (647) 581-5901
          </a>
          <span>|</span>
          <a href="mailto:info@cawap.ca" className="hover:text-secondary transition-colors whitespace-nowrap">
            info@cawap.ca
          </a>
          <button className="ml-2 hover:text-secondary transition-colors cursor-pointer" aria-label="Search">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-500 ${
          isScrolled ? 'shadow-2xl backdrop-blur-sm bg-white/95' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center magnetic-btn">
              <img
                src="https://www.cawap.ca/wp-content/uploads/2020/12/CAWAP-LOGO-313x91.png"
                alt="C.A.W.A.P"
                className="h-12 md:h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#3c1053] font-medium transition-all duration-300 hover:scale-110"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-[#3c1053] font-medium transition-all duration-300 hover:scale-110"
              >
                About
              </Link>

              {/* Programs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                <button className="text-gray-700 hover:text-[#3c1053] font-medium flex items-center transition-all duration-300 hover:scale-110 whitespace-nowrap">
                  Programs
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>

                {/* Mega Menu - Aligned to the right edge */}
                {isProgramsOpen && (
                  <div className="absolute right-0 mt-2 w-[800px] bg-white rounded-lg shadow-2xl p-8 reveal reveal-fade reveal-visible border-t-4 border-[#c9b037]">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Link to="/youth-leadership" className="block py-2 text-sm text-gray-700 hover:text-secondary whitespace-nowrap">
                          Youth Leadership
                        </Link>
                        <Link to="/capital-g-girls" className="block py-2 text-sm text-gray-700 hover:text-secondary whitespace-nowrap">
                          Capital G-Girls
                        </Link>
                        <Link to="/heart-wise-seniors" className="block py-2 text-sm text-gray-700 hover:text-secondary whitespace-nowrap">
                          Heart Wise Seniors
                        </Link>
                        <Link to="/women-empowerment" className="block py-2 text-sm text-gray-700 hover:text-secondary whitespace-nowrap">
                          Women Empowerment
                        </Link>
                        <Link to="/sankofa-royale-awards" className="block py-2 text-sm text-gray-700 hover:text-secondary whitespace-nowrap">
                          Sankofa Royale Awards
                        </Link>
                      </div>
                      <div>
                        <Link to="/food-pantry" className="block py-2 text-sm text-gray-700 hover:text-secondary whitespace-nowrap">
                          Food Pantry
                        </Link>
                        <Link to="/financial-literacy" className="block py-2 text-sm text-gray-700 hover:text-secondary whitespace-nowrap">
                          Financial Literacy
                        </Link>
                        <Link to="/javascript-program" className="block py-2 text-sm text-gray-700 hover:text-secondary whitespace-nowrap">
                          JavaScript Program
                        </Link>
                        <Link to="/children-summer-camp" className="block py-2 text-sm text-gray-700 hover:text-secondary whitespace-nowrap">
                          Children Summer Camp
                        </Link>
                        <Link to="/mental-health" className="block py-2 text-sm text-gray-700 hover:text-secondary whitespace-nowrap">
                          Mental Health
                        </Link>
                      </div>
                      <div>
                        <Link to="/new-breed-women-of-substance" className="block py-2 text-sm text-gray-700 hover:text-secondary whitespace-nowrap">
                          New Breed Women of Substance
                        </Link>
                        <Link to="/project-and-evaluation" className="block py-2 text-sm text-gray-700 hover:text-secondary whitespace-nowrap">
                          Project and Evaluation
                        </Link>
                        <Link to="/newcomers-settlement-program" className="block py-2 text-sm text-gray-700 hover:text-secondary whitespace-nowrap">
                          Newcomer's Settlement Program
                        </Link>
                        <Link to="/cultural-events" className="block py-2 text-sm text-gray-700 hover:text-secondary whitespace-nowrap">
                          Cultural Events
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/gallery"
                className="text-gray-700 hover:text-[#3c1053] font-medium transition-all duration-300 hover:scale-110"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-[#3c1053] font-medium transition-all duration-300 hover:scale-110"
              >
                Contact
              </Link>

              {/* Events Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsEventsOpen(true)}
                onMouseLeave={() => setIsEventsOpen(false)}
              >
                <button className="text-gray-700 hover:text-[#3c1053] font-medium flex items-center transition-all duration-300 hover:scale-110 whitespace-nowrap">
                  Events
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>

                {/* Events Dropdown Menu - Aligned to the right edge */}
                {isEventsOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-2xl p-4 reveal reveal-fade reveal-visible border-t-4 border-[#c9b037]">
                    <Link to="/upcoming-events" className="block py-2 text-sm text-gray-700 hover:text-secondary whitespace-nowrap">
                      Upcoming Events
                    </Link>
                    <Link to="/christmas-event" className="block py-2 text-sm text-gray-700 hover:text-secondary whitespace-nowrap">
                      Christmas Events
                    </Link>
                  </div>
                )}
              </div>

              {/* Donate Button */}
              <a
                href="https://www.canadahelps.org/en/dn/19757"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c9b037] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#b39f2f] transition-all duration-300 elite-btn glow-effect whitespace-nowrap"
              >
                Donate
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <Link to="/" className="block py-2 text-gray-700 hover:text-secondary whitespace-nowrap">
                Home
              </Link>
              <Link to="/about" className="block py-2 text-gray-700 hover:text-secondary whitespace-nowrap">
                About
              </Link>
              <Link to="/programs" className="block py-2 text-gray-700 hover:text-secondary whitespace-nowrap">
                Programs
              </Link>
              <Link to="/events" className="block py-2 text-gray-700 hover:text-secondary whitespace-nowrap">
                Events
              </Link>
              <Link to="/gallery" className="block py-2 text-gray-700 hover:text-secondary whitespace-nowrap">
                Gallery
              </Link>
              <Link to="/contact" className="block py-2 text-gray-700 hover:text-secondary whitespace-nowrap">
                Contact
              </Link>
              <a
                href="https://www.cawap.ca/donations/833/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-secondary text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
              >
                Donate
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
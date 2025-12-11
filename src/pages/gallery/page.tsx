
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const images = [
  'https://www.cawap.ca/wp-content/uploads/elementor/thumbs/32015394-59d4-44dc-9ad5-b8aee1746162-oqkvz2a0o16ma2dsnpxjmgsju2kp3kpeqmgbhvewfs.jpg',
  'https://www.cawap.ca/wp-content/uploads/elementor/thumbs/61b0f793-6faf-43f5-aada-8ff3858106aa-oqkvyttgyiv1dkq3149wi0xehlqe6artpgky6drfzs.jpg',
  'https://www.cawap.ca/wp-content/uploads/elementor/thumbs/7cfeb75a-0a1c-453b-a9fe-f485c00459c1-oqkv2mugvsshqdhk0pawlne21ietjhysa479g7hv3s.jpg',
  'https://www.cawap.ca/wp-content/uploads/elementor/thumbs/4ebea20d-93a2-4d26-9ced-adda1a1ca1aa-1-oqkv2j344gncfxn0mnoeboc7nyxcopjuxllbj3nfso.jpg',
  'https://www.cawap.ca/wp-content/uploads/elementor/thumbs/cb4e8a2e-77d9-47f6-90e7-ac873013d039-oqc8tzkx89r8peki2hsbbio9598wq67qeg7i6xcxq0.jpg',
  'https://www.cawap.ca/wp-content/uploads/elementor/thumbs/c1cd3d3f-4658-4e5c-8475-190a08df40e0-oqc8txp8uloo26n8dgz26j5byhi6as09q6wj8dfq2g.jpg',
  'https://www.cawap.ca/wp-content/uploads/elementor/thumbs/4c1a32b4-8e71-4036-b738-63aca7070568-oqc8tjlo035d817pnsvnn4pf1pfo3bgao949180mns.jpg',
  'https://www.cawap.ca/wp-content/uploads/elementor/thumbs/f5ea03fc-b181-4c43-96e9-5989cd59c88e-1-oqb3j7d518gmhw7eubndv7bmxbeyhgsazjxnrnttq0.jpg',
  'https://www.cawap.ca/wp-content/uploads/elementor/thumbs/e948166a-c62a-411b-a4ac-3e3a834540ce-oqb3j5hgnke1uoa55au4q7spqjo822kubamot3wm2g.jpg',
  'https://www.cawap.ca/wp-content/uploads/elementor/thumbs/3328180b-dbe0-4b5e-b960-c3df8fb2cfd7-oqb3ix0wy22gy6mfip6hlrxke2tx4sn9a4rbhm95mg.jpg',
  'https://www.cawap.ca/wp-content/uploads/elementor/thumbs/bc41ee48-b7f8-487d-9b44-a6df0b567ad3-oqb2zjko2zjpnirinbpb7nxjm6bkhdqfa8p1eaz9vc.jpg',
  'https://www.cawap.ca/wp-content/uploads/elementor/thumbs/ae081430-5ed4-4e2f-bf46-c648c939e0e8-oqb2dffdab9uhsvys9kb1qu4gtbodqxrws4rwxrq9k.jpg',
  'https://www.cawap.ca/wp-content/uploads/elementor/thumbs/8c0fd0c6-22cb-4d8d-baca-dfbfba05ce0c-oqb2d60zdywz9p9mb5i1ct7iiym08rwgjhlx465nzs.jpg',
  'https://www.cawap.ca/wp-content/uploads/elementor/thumbs/7e0c17a3-8afc-440d-9465-706f9adcba8e-oqb2d45b0auemhccm4os7tolc6v9tdozv8ay5m8gc8.jpg',
  'https://www.cawap.ca/wp-content/uploads/elementor/thumbs/71871832_125358195530096_5628777077764259840_o-oq1rsalmtae5et47woui8ajucy990yl9uwihm17kxk.jpg',
  'https://www.cawap.ca/wp-content/uploads/elementor/thumbs/7cd552c1-702a-4fa9-b28a-70f5452fa71e-oqb2d37mwqq5fpht61935igx5t5ncophr3lndfm0kw.jpg',
];

// Additional placeholder images for enhanced gallery
const additionalImages = [
  'https://readdy.ai/api/search-image?query=African%20Canadian%20women%20community%20empowerment%20workshop%20event%2C%20diverse%20group%20collaborating%2C%20bright%20modern%20space%2C%20professional%20photography%2C%20warm%20atmosphere&width=400&height=400&seq=gallery-img-17&orientation=squarish',
  'https://readdy.ai/api/search-image?query=Youth%20leadership%20training%20program%2C%20young%20diverse%20students%20learning%20together%2C%20educational%20setting%2C%20inspiring%20mentorship%20moment%2C%20natural%20lighting&width=400&height=400&seq=gallery-img-18&orientation=squarish',
  'https://readdy.ai/api/search-image?query=Community%20food%20pantry%20volunteers%20serving%20families%2C%20charitable%20organization%20helping%20people%2C%20heartwarming%20community%20service%2C%20professional%20documentary%20style&width=400&height=400&seq=gallery-img-19&orientation=squarish',
  'https://readdy.ai/api/search-image?query=Women%20entrepreneurship%20training%20session%2C%20business%20skills%20workshop%2C%20professional%20development%2C%20diverse%20women%20learning%20financial%20literacy%2C%20modern%20classroom&width=400&height=400&seq=gallery-img-20&orientation=squarish',
  'https://readdy.ai/api/search-image?query=Senior%20citizens%20social%20gathering%2C%20elderly%20people%20enjoying%20activities%20together%2C%20community%20center%20event%2C%20joyful%20seniors%20program%2C%20warm%20friendly%20atmosphere&width=400&height=400&seq=gallery-img-21&orientation=squarish',
  'https://readdy.ai/api/search-image?query=Children%20summer%20camp%20outdoor%20activities%2C%20kids%20playing%20learning%20together%2C%20diverse%20children%20having%20fun%2C%20colorful%20educational%20camp%20setting&width=400&height=400&seq=gallery-img-22&orientation=squarish',
  'https://readdy.ai/api/search-image?query=Cultural%20celebration%20event%2C%20African%20Canadian%20community%20festival%2C%20traditional%20clothing%20colorful%20decorations%2C%20joyful%20cultural%20gathering%2C%20vibrant%20atmosphere&width=400&height=400&seq=gallery-img-23&orientation=squarish',
  'https://readdy.ai/api/search-image?query=Mental%20health%20awareness%20workshop%2C%20supportive%20group%20therapy%20session%2C%20diverse%20people%20sharing%20stories%2C%20safe%20welcoming%20space%2C%20professional%20counseling%20setting&width=400&height=400&seq=gallery-img-24&orientation=squarish',
];

const videos = [
  {
    thumbnail: 'https://readdy.ai/api/search-image?query=Community%20empowerment%20program%20video%20thumbnail%2C%20inspiring%20women%20leadership%20moment%2C%20professional%20video%20production%2C%20engaging%20presentation&width=600&height=400&seq=video-thumb-1&orientation=landscape',
    title: 'CAWAP Impact Story',
    duration: '3:45'
  },
  {
    thumbnail: 'https://readdy.ai/api/search-image?query=Youth%20mentorship%20program%20highlights%20video%2C%20young%20people%20achieving%20goals%2C%20success%20stories%20compilation%2C%20motivational%20video%20thumbnail&width=600&height=400&seq=video-thumb-2&orientation=landscape',
    title: 'Youth Leadership Highlights',
    duration: '5:20'
  },
  {
    thumbnail: 'https://readdy.ai/api/search-image?query=Annual%20community%20gala%20event%20video%2C%20awards%20ceremony%20celebration%2C%20formal%20gathering%20professional%20videography%2C%20elegant%20event%20coverage&width=600&height=400&seq=video-thumb-3&orientation=landscape',
    title: 'Annual Gala 2024',
    duration: '8:15'
  },
  {
    thumbnail: 'https://readdy.ai/api/search-image?query=Founder%20interview%20video%20thumbnail%2C%20professional%20woman%20speaking%2C%20inspirational%20leadership%20message%2C%20documentary%20style%20interview&width=600&height=400&seq=video-thumb-4&orientation=landscape',
    title: "Founder's Vision",
    duration: '6:30'
  }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'photos' | 'videos'>('all');

  const allImages = [...images, ...additionalImages];

  return (
    <div className="min-h-screen page-transition">
      <Header />
      <main>
        {/* Page Header with HD Background */}
        <section className="relative h-[400px] overflow-hidden">
          {/* HD Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20photography%20gallery%20exhibition%20space%2C%20modern%20art%20gallery%20interior%20with%20diverse%20community%20photos%20displayed%20on%20walls%2C%20elegant%20lighting%2C%20cultural%20celebration%20images%2C%20inspiring%20community%20moments%20showcase%2C%20ultra%20HD%208K%20quality%2C%20sophisticated%20atmosphere&width=1920&height=800&seq=gallery-hero-bg&orientation=landscape"
              alt="Gallery Background"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* 80% Opacity Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3c1053]/80 to-[#5a1a7a]/80"></div>
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9b037] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Gallery</h1>
              <p className="text-xl text-white/90">Moments That Define Our Journey</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="fade">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#3c1053] mb-4 gradient-text">Our Community in Action</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Explore the vibrant moments and impactful events that showcase our commitment to community empowerment
                </p>
              </div>
            </ScrollReveal>

            {/* Filter Tabs */}
            <ScrollReveal direction="fade" delay={50}>
              <div className="flex justify-center mb-12">
                <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`px-8 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === 'all'
                        ? 'bg-gradient-to-r from-[#3c1053] to-[#5a1a7a] text-white shadow-lg'
                        : 'text-gray-600 hover:text-[#3c1053]'
                    }`}
                  >
                    All Media
                  </button>
                  <button
                    onClick={() => setActiveTab('photos')}
                    className={`px-8 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === 'photos'
                        ? 'bg-gradient-to-r from-[#3c1053] to-[#5a1a7a] text-white shadow-lg'
                        : 'text-gray-600 hover:text-[#3c1053]'
                    }`}
                  >
                    Photos
                  </button>
                  <button
                    onClick={() => setActiveTab('videos')}
                    className={`px-8 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === 'videos'
                        ? 'bg-gradient-to-r from-[#3c1053] to-[#5a1a7a] text-white shadow-lg'
                        : 'text-gray-600 hover:text-[#3c1053]'
                    }`}
                  >
                    Videos
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Photos Grid */}
            {(activeTab === 'all' || activeTab === 'photos') && (
              <div className="mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {allImages.map((image, index) => (
                    <ScrollReveal key={index} delay={index * 20} direction="up">
                      <div
                        className="elite-card aspect-square overflow-hidden rounded-2xl shadow-lg group cursor-pointer relative hover:shadow-2xl transition-all duration-500"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3c1053]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                          <i className="ri-zoom-in-line text-white text-3xl"></i>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

            {/* Videos Grid */}
            {(activeTab === 'all' || activeTab === 'videos') && (
              <div>
                <ScrollReveal direction="fade">
                  <h3 className="text-3xl font-bold text-[#3c1053] mb-8 text-center">Video Gallery</h3>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                  {videos.map((video, index) => (
                    <ScrollReveal key={index} delay={index * 50} direction="up">
                      <div className="elite-card rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 flex items-center justify-center bg-white/90 rounded-full group-hover:bg-[#c9b037] transition-all duration-300 group-hover:scale-110">
                              <i className="ri-play-fill text-3xl text-[#3c1053] group-hover:text-white"></i>
                            </div>
                          </div>
                          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                            {video.duration}
                          </div>
                        </div>
                        <div className="p-6 bg-white">
                          <h4 className="text-lg font-semibold text-[#3c1053] group-hover:text-[#c9b037] transition-colors duration-300">
                            {video.title}
                          </h4>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
            style={{ animation: 'fadeIn 0.3s ease-out' }}
          >
            <button
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-[#c9b037] transition-all duration-300 elite-btn z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{ animation: 'zoomIn 0.3s ease-out' }}
            />
          </div>
        )}
      </main>
      <DonationCTA />
      <Footer />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;


import ScrollReveal from '../../../components/effects/ScrollReveal';

const FounderMessage = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3c1053] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c9b037] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal direction="fade">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] mb-4 gradient-text">
              Founder's Message
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Rev. Irine Ashu, PhD - Founder of CAWAP</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <div className="elite-card rounded-3xl p-8 md:p-12 shadow-2xl bg-white">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Founder's Image */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Professional%20African%20woman%20leader%20CEO%20founder%20wearing%20elegant%20business%20attire%2C%20confident%20smile%2C%20warm%20expression%2C%20studio%20portrait%20with%20soft%20lighting%2C%20dignified%20and%20inspiring%20presence%2C%20corporate%20headshot%20style&width=400&height=500&seq=founder-rev-irine-ashu&orientation=portrait"
                      alt="Rev. Irine Ashu, PhD - Founder of CAWAP"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-lg font-semibold text-[#3c1053]">Rev. Irine Ashu, PhD</p>
                    <p className="text-sm text-[#c9b037] font-medium">Founder, CAWAP</p>
                  </div>
                </div>
              </div>

              {/* Founder's Message Content */}
              <div className="w-full md:w-2/3 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Rev. Irine Ashu, PhD, is the founder and CEO of Canadian and African Women Aid Program (CAWAP). 
                  She is the pastor of Jesus Revival for All Nations. Her journey into philanthropism started in her 
                  native country, Cameroun where she formed the Community Aid Center. This was informed by her personal 
                  experiences and challenges growing up.
                </p>
                <p>
                  Rev. Ashu, is also an entrepreneur. She is the founder of Heavenly Breeze Cosmetics and Gospel Lane 
                  Media Inc. Gospel lane media is a dedicated platform for sharing information, messages, news and 
                  education. She leverages her worldwide travels and experiences as a life coach, a mentor, an advocate, 
                  a community and social service worker.
                </p>
                <p>
                  Her dynamism has been described as infectious by people around her. Her uncanny leadership abilities 
                  are evident in the many organisations she leads at the same time. Rev. Ashu is also a doting mother 
                  of four boys.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FounderMessage;

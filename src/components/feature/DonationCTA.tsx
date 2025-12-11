import ScrollReveal from '../effects/ScrollReveal';

const DonationCTA = () => {
  return (
    <section className="relative py-12 overflow-hidden my-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=empowered%20diverse%20women%20standing%20together%20in%20solidarity%20with%20raised%20hands%20celebrating%20success%20and%20unity%2C%20warm%20golden%20lighting%20creating%20an%20inspiring%20and%20uplifting%20atmosphere%2C%20professional%20photography%20with%20soft%20focus%20background%20showing%20community%20support%20and%20sisterhood%2C%20vibrant%20colors%20representing%20hope%20and%20transformation&width=1920&height=400&seq=donation-cta-bg&orientation=landscape"
          alt="Women Empowerment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#3c1053]/80 to-[#5a1a7a]/80"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal direction="fade">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Empower Women, Transform Lives
          </h2>
          <p className="text-base text-white/90 mb-6 leading-relaxed max-w-3xl mx-auto">
            Join us in our transformative mission to unlock boundless opportunities for women. Your generosity holds the key to making dreams come true. Donate today and be the catalyst for empowering women to thrive and soar to new heights. Together, let's create a future where every woman's potential knows no bounds.
          </p>
          <a
            href="https://www.canadahelps.org/en/dn/19697"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#c9b037] text-white px-8 py-3 rounded-full font-bold text-base hover:bg-[#b39f2f] transition-all duration-300 elite-btn glow-effect whitespace-nowrap cursor-pointer"
          >
            DONATE TODAY
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DonationCTA;

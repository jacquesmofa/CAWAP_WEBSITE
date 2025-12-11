import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';

const CapitalGGirlsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center">Capital G-Girls</h1>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-user-graduate text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Empowering Young Girls to Dream Big</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A transformative mentorship and training program meticulously crafted to uplift and empower young girls who dare to dream and aspire to achieve remarkable life goals.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Capital G-Girls program provides a supportive environment where young girls can develop their talents, build confidence, and learn essential life skills. Through mentorship from successful women leaders, participants gain valuable insights and guidance for their personal and professional development.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We focus on building self-esteem, leadership abilities, and academic excellence while fostering a sense of community and sisterhood among participants.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">One-on-one mentorship with successful women</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Life skills and personal development workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Academic support and tutoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Leadership training and confidence building</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Cultural enrichment activities</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="tel:+16475815901"
                  className="inline-block bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >
                  Join Our Program
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DonationCTA />
      <Footer />
    </div>
  );
};

export default CapitalGGirlsPage;
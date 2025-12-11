import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';

const JavascriptProgramPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center">JavaScript Program</h1>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="far fa-file-code text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">JavaScript for Afro Black Women</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We are committed to bridging the diversity gap in the tech sector and providing equitable opportunities for underrepresented communities.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our JavaScript program is specifically designed to empower Afro Black women with the technical skills needed to succeed in the technology industry. Through comprehensive training in JavaScript programming, web development, and software engineering, we prepare participants for rewarding careers in tech.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The program includes hands-on projects, mentorship from industry professionals, and job placement assistance to ensure participants can successfully transition into tech careers.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Program Details</h3>
                <div className="mb-6">
                  <p className="text-gray-600 mb-2">
                    <strong>Start Date:</strong> August 2nd, 2021
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Location:</strong> 101 West Dr Unit C2, Brampton, ON L6T 2J6, Canada
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Contact:</strong> <a href="tel:647-581-5901" className="text-secondary hover:underline">647-581-5901</a>
                  </p>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">What You'll Learn</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">JavaScript fundamentals and advanced concepts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Web development with HTML, CSS, and JavaScript</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Modern frameworks and libraries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Project-based learning and portfolio development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Career preparation and job placement support</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdDz6ynDpr0wR5ejrSQOvjEBxTm0sb3A_8LaaHYKXKjDgRWDw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >
                  <i className="far fa-arrow-alt-circle-right"></i>
                  Register Online
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

export default JavascriptProgramPage;
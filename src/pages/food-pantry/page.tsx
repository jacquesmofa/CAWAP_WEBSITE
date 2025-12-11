import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';

const FoodPantryPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center">Food Pantry</h1>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-kiwi-bird text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Nourishing Our Community</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At CAWAP, we recognize that access to nutritious food is a fundamental right that should be available to every individual in our community.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Food Pantry program provides essential food assistance to families and individuals facing food insecurity. We distribute fresh produce, non-perishable items, and nutritious meals to ensure that no one in our community goes hungry.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Through partnerships with local food banks, donors, and volunteers, we are able to serve hundreds of families each month, providing them with the nutrition they need to thrive.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What We Provide</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Fresh fruits and vegetables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Non-perishable food items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Prepared meals and hot food distribution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Nutritional education and cooking workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Emergency food assistance</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="tel:+16475815901"
                  className="inline-block bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >
                  Get Food Assistance
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

export default FoodPantryPage;
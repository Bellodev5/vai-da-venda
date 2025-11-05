import Header from "./components/Header";
import HeroPlans from "./components/Hero";
import FAQPlans from "./components/Faq";
import Footer from "./components/Footer";

function PlansApp() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <HeroPlans/>
      <FAQPlans/>
      <Footer />
    </div>
  );
}

export default PlansApp;
import Header from "./components/Header";
import HeroPlans from "./components/HeroPlans";
import Plans from "./components/Plans";
import CustomPlanCTA from "./components/customPlan";
import FeaturesBoard from "./components/Features";
import FAQPlans from "./components/FaqPlans";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; 

function PlansApp() {
  return (
    <div className="bg-white text-gray-900">
      <ScrollToTop/>
      
      <Header />
      <HeroPlans/>
      <Plans/>
      <CustomPlanCTA/>
      <FeaturesBoard/>
      <FAQPlans/>
      <Footer />
    </div>
  );
}

export default PlansApp;
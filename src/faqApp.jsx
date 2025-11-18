import Header from "./components/Header";
import FaqHome from "./components/FaqHome";
import FAQPlans from "./components/FaqPlans";
import QuestionButton from "./components/QuestionButton";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; 
function FAQApp() {
  return (
    <div className="bg-white text-gray-900">
      <ScrollToTop/>
      
      <Header />
      <FaqHome/>
      <FAQPlans/>
      <QuestionButton/>
      <Footer />
    </div>
  );
}

export default FAQApp;
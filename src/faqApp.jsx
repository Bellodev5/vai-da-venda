import Header from "./components/Header";
import FaqHome from "./components/FaqHome";
import FAQPlans from "./components/FaqPlans";
import QuestionButton from "./components/QuestionButton";
import Footer from "./components/Footer";

function FAQApp() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <FaqHome/>
      <FAQPlans/>
      <QuestionButton/>
      <Footer />
    </div>
  );
}

export default FAQApp;
import Header from "./components/Header";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import Plans from "./components/Plans";
import VideoSection from "./components/VideoSection";
import URAFeature from "./components/URAFeature";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import FaqHome from "./components/FaqHome";
import QuestionButton from "./components/QuestionButton";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop"; 

function App() {
  return (
    <div className="bg-white text-gray-900">
      <ScrollToTop />
              <Header />
              <Hero />
              <Partners />
              <VideoSection />
              <Testimonials />
              <Advantages />
              <Plans />
              <URAFeature />
              <FaqHome />
              <QuestionButton />
              <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Bonus from "./components/Bonus";
import Faqs from "./components/FAQs";
// import Background from "./components/Background";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionSix from "./components/SectionSix";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import LearningPoint from "./components/LearningPoints";

function App() {
  return (
    <>
      <div className=" font-[Montserrat] w-[90%] mx-auto place-content-center flex flex-col">
        {/* <Background /> */}
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Testimonials />
        <LearningPoint />
        <Bonus />
        <SectionSix />
        <Faqs />
      </div>

      <Footer className="w-screen" />
    </>
  );
}

export default App;

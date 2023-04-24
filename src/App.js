import "./App.css";
import ClosingRemarks from "./components/ClosingRemarks";
import Faqs from "./components/FAQs";
// import Background from "./components/Background";
import Header from "./components/Header";
import SectionFive from "./components/SectionFive";
import SectiionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionSix from "./components/SectionSix";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import Testimonials from "./components/Testimonials";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className=" font-[Montserrat] w-[90%] mx-auto place-content-center flex flex-col">
      {/* <Background /> */}
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Testimonials />
      <SectiionFour />
      <SectionFive />
      <SectionSix />
      <Faqs />
      <ClosingRemarks />
    </div>
  );
}

export default App;

import Bonus from "./sections/Bonus";
import Faqs from "./sections/FAQs";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import LearningPoint from "./sections/LearningPoints";
import SectionOne from "./sections/SectionOne";
import SectionSix from "./sections/SectionSix";
import SectionThree from "./sections/SectionThree";
import SectionTwo from "./sections/SectionTwo";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <>
      <div className=" font-[Montserrat] w-[80%] mx-auto place-content-center flex flex-col">
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

import AboutUs from "../Components/UI/AboutUs";
import ContactUs from "../Components/UI/ContactUs";
import FAQs from "../Components/UI/FAQ";
import Gallery from "../Components/UI/Gallery";
import ProgressCounter from "../Components/UI/Intro";
import Landing from "../Components/UI/Landing";
import Section from "../Components/UI/Section";
import Services from "../Components/UI/Services";
import TestimonialSlider from "../Components/UI/Testimonial";
import { useState, useEffect } from "react";
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 3000);
    };
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="relative">
      {loading && <ProgressCounter onComplete={() => setLoading(false)} />}
      {!loading && (
        <div className="xl:w-max-[1920px] flex flex-col justify-center items-center mx-auto w-full">
          <Landing />
          <Section />
          <Services />
          <Gallery />
          <AboutUs />
          <FAQs />
          <TestimonialSlider />
          <ContactUs />
        </div>
      )}
    </div>
  );
};

export default Home;

import AboutUs from "../Components/UI/AboutUs";
import FAQs from "../Components/UI/FAQ";
import Gallery from "../Components/UI/Gallery";
import Landing from "../Components/UI/Landing";
import Section from "../Components/UI/Section";
import Services from "../Components/UI/Services";

const Home = () => {
  return (
    <div className="xl:w-max-[1920px] flex flex-col justify-center items-center mx-auto w-full">
      <Landing />
      <Section />
      <Services />
      <Gallery />
      <AboutUs />
      <FAQs />
    </div>
  );
};

export default Home;

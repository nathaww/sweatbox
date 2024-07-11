import Landing from "../Components/UI/Landing";
import Section from "../Components/UI/Section";

const Home = () => {
  return (
    <div className="xl:w-max-[1920px] flex flex-col justify-center items-center mx-auto w-full">
      <Landing />
      <Section />
    </div>
  );
};

export default Home;

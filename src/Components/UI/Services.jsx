import { useRef } from "react";

const Services = () => {
  let serviceSection = useRef(null);
  return (
    <div
      ref={(el) => (serviceSection = el)}
      className="py-8 ss:py-10 sm:py-10 lg:py-20 w-full"
    >
      <div className="w-full">
        <div className="overflow-hidden">
          <p className="sectionH1 font-Akira font-bold pointer-events-none  xxs:text-2xl ss:text-5xl sm:text-6xl lg:text-7xl xl:text-[7rem] xs:leading-6 leading-[5rem] uppercase text-center text-white">
            Services
          </p>
        </div>
        <div className="overflow-hidden xxs:mb-3 xs:mb-4 ss:mt-2 ss:mb-4 sm:mt-2 sm:mb-6 lg:mt-6 lg:mb-10 xl:mt-8 xl:mb-16 pb-2">
          <p className="sectionP text-white text-center pointer-events-none text-base ss:text-xl sm:text-2xl lg:text-4xl xl:text-5xl ">
            Training Plans
          </p>
        </div>
      </div>

      <div className="h-[80vh] gap-x-6 gap-y-10 grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 place-items-center">
        <div className="bg-secondary w-full h-full rounded-[2rem] px-12 py-4 flex flex-col justify-end">
          <div className="h-4/5 flex flex-col justify-between">
            <p className="text-white text-base">
              With this plan, you get full access to our gym facilities and work
              out without a trainer. However, if you need any support, our
              trainers are readily available upon request. This option is
              perfect for those who enjoy independent workouts but might need a
              little support from time to time.
            </p>
            <div className="w-full flex justify-between items-center">
              <h1 className="text-6xl text-white font-Akira">
                Individual <br /> Plan
              </h1>
              <button className="bg-white rounded text-secondary p-2">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-secondary w-full h-full rounded-[2rem] px-12 py-4 flex flex-col justify-end">
          <div className="h-4/5 flex flex-col justify-between">
            <p className="text-white text-base">
              On this plan, we have customized training programs that are
              carefully designed to help you reach your goals, whether it’s
              losing weight, getting fit, building On this plan, we have
              customized training programs that are carefully designed strength,
              or developing your skills in boxing or kickboxing. You’ll work
              with a dedicated trainer matched to your goals, preferences, and
              schedule, with options for 1-on-1, 2-on-1, or 3-on-1 sessions.
            </p>
            <div className="w-full flex justify-between items-center">
              <h1 className="text-6xl text-white font-Akira">
                Personal <br />
                training
              </h1>
              <button className="bg-white rounded text-secondary p-2">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-secondary w-full h-full rounded-[2rem] px-12 py-4 flex flex-col justify-end">
          <div className="h-4/5 flex flex-col justify-between">
            <p className="text-white text-base">
              Group Class Plan, a favorite among our members, is led by
              certified CrossFit trainers. This plan offers intense group
              workouts for up to 20 participants. Our structured sessions
              feature a mix of High-Intensity Interval Training (HIIT), Olympic
              weightlifting, Strength Training, Gymnastics and Cardiovascular
              Training.
            </p>
            <div className="w-full flex justify-between items-center">
              <h1 className="text-6xl text-white font-Akira">
                Group <br />
                class
              </h1>
              <button className="bg-white rounded text-secondary p-2">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-secondary w-full h-full rounded-[2rem] px-12 py-4 flex flex-col justify-end">
          <div className="h-4/5 flex flex-col justify-between">
            <p className="text-white text-base">
              Let your kids discover the joy of movement and build confidence
              with our Kids Gymnastics program. Led by an experienced gymnast,
              children will learn funda mental gymnastics skills in a safe and
              supportive environment. From balancing to tumbling, each session
              fosters physical development and coordination while promoting
              teamwork and fun.
            </p>

            <div className="w-full flex justify-between items-center">
              <h1 className="text-6xl text-white font-Akira">
                Kids <br /> gymnastics
              </h1>
              <button className="bg-white rounded text-secondary p-2">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-24">
        <div className="overflow-hidden">
          <p className="sectionH1 font-Akira font-bold pointer-events-none xxs:text-2xl ss:text-5xl sm:text-6xl lg:text-4xl xl:text-6xl uppercase text-center text-white">
            Not convinced yet ?
          </p>
        </div>
        <div className="overflow-hidden xxs:mb-3 xs:mb-4 ss:mt-2 ss:mb-4 sm:mt-2 sm:mb-6 lg:mt-6 lg:mb-10 xl:mt-6 xl:mb-10 pb-2">
          <p className="sectionP text-white text-center pointer-events-none text-base ss:text-xl sm:text-2xl lg:text-4xl xl:text-5xl ">
            Get a glimpse with our Day Pass option
          </p>
        </div>
      </div>

      <div className="h-[15vh] gap-8 grid grid-cols-2 ss:grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 place-items-center">
        <div className="w-full h-full bg-white text-secondary rounded-[1rem] px-6 py-4 flex flex-col justify-center gap-y-8">
            <p className="text-center text-3xl">Day pass</p>
            <h1 className="font-Akira text-center font-bold text-5xl">999 ETB</h1>
        </div>
        <div className="w-full h-full bg-white text-secondary rounded-[1rem] px-6 py-4 flex flex-col justify-between">
            <p className="text-center text-3xl">Day pass <br /> [With Trainer]</p>
            <h1 className="font-Akira text-center font-bold text-5xl mt-2">1499 ETB</h1>
        </div>
        <div className="w-full h-full bg-white text-secondary rounded-[1rem] px-6 py-4 flex flex-col justify-between">
            <p className="text-center text-3xl">Group Class <br /> Day pass</p>
            <h1 className="font-Akira text-center font-bold text-5xl mt-2">1499 ETB</h1>
        </div>
        <div className="w-full h-full bg-white text-secondary rounded-[1rem] px-6 py-4 flex flex-col justify-between">
            <p className="text-center text-3xl">Boxing/KickBoxing <br /> Day pass</p>
            <h1 className="font-Akira text-center font-bold text-5xl mt-2">1499 ETB</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;

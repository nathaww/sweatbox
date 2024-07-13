import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  let serviceSection = useRef(null);
  let dayPassSection = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({
        defaults: {
          ease: "expo.inOut",
          duration: 1.2,
        },
        scrollTrigger: {
          trigger: serviceSection,
          start: "top center",
        },
      })
      .from(".serviceSectionH1, .serviceSectionP", {
        opacity: 0,
        y: 100,
        stagger: 0.15,
      })
      .from(".serviceCard", {
        opacity: 0,
        scale: 0.9,
      }, "-=1.2");

      gsap
      .timeline({
        defaults: {
          ease: "expo.inOut",
          duration: 1.2,
        },
        scrollTrigger: {
          trigger: dayPassSection,
          start: "top center",
        },
      })
      .from(".dayPassSectionH1, .dayPassSectionP", {
        opacity: 0,
        y: 100,
        stagger: 0.2,
      })
      .from(".dayPassCard", {
        opacity: 0,
        scale: 0.9,
        stagger: 0.05
      }, "-=.5");
  });

  return (
    <div
      id="service"
      ref={(el) => (serviceSection = el)}
      className="py-8 xs:py-8 ss:py-10 sm:py-10 lg:py-6 xl:py-20 w-full"
    >
      <div className="w-full">
        <div className="overflow-hidden">
          <p className="serviceSectionH1 font-Akira font-bold pointer-events-none xxs:text-2xl xs:text-4xl ss:text-5xl sm:text-6xl lg:text-7xl xl:text-[7rem] xs:leading-6 leading-[5rem] uppercase text-center text-white">
            Services
          </p>
        </div>
        <div className="overflow-hidden xxs:mb-3 xs:my-4 ss:mt-2 ss:mb-4 sm:mt-2 sm:mb-6 lg:mt-6 lg:mb-10 xl:mt-8 xl:mb-16 pb-2">
          <p className="serviceSectionP text-white font-Sora text-center pointer-events-none text-base ss:text-xl sm:text-2xl lg:text-4xl xl:text-5xl ">
            Training Plans
          </p>
        </div>
      </div>

      <div className="lg:h-[85vh] xl:h-[80vh] ss:gap-x-2 sm:gap-x-6 lg:gap-x-6 gap-y-2 ss:gap-y-2 sm:gap-y-6 lg:gap-y-6 xl:gap-y-10 grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 place-items-center">
        <div className="serviceCard bg-secondary w-full h-full rounded-[2rem] xs:p-4 ss:px-4 ss:py-4 sm:px-4 sm:py-4 lg:px-8 xl:px-12 lg:pb-4 xl:py-4 flex flex-col justify-end">
          <div className="h-[95%] lg:h-4/5 flex flex-col justify-between xs:gap-y-2 ss:gap-y-2 sm:gap-y-3 lg:gap-y-0">
            <p className="text-white text-xs lg:text-sm xl:text-base font-Sora">
              With this plan, you get full access to our gym facilities and work
              out without a trainer. However, if you need any support, our
              trainers are readily available upon request. This option is
              perfect for those who enjoy independent workouts but might need a
              little support from time to time.
            </p>
            <div className="w-full flex justify-between items-center">
              <h1 className="text-2xl lg:text-4xl xl:text-6xl text-white font-Akira">
                Individual <br /> Plan
              </h1>
            </div>
          </div>
        </div>
        <div className="serviceCard bg-secondary w-full h-full rounded-[2rem] xs:p-4 ss:px-4 ss:py-4 sm:px-4 sm:py-4 lg:px-8 xl:px-12 lg:pb-4 xl:py-4 flex flex-col justify-end">
          <div className="h-[95%] lg:h-4/5 flex flex-col justify-between xs:gap-y-2 ss:gap-y-2 sm:gap-y-3 lg:gap-y-0">
            <p className="text-white text-xs lg:text-sm xl:text-base font-Sora">
              On this plan, we have customized training programs that are
              carefully designed to help you reach your goals, whether it’s
              losing weight, getting fit, building On this plan, we have
              customized training programs that are carefully designed strength,
              or developing your skills in boxing or kickboxing. You’ll work
              with a dedicated trainer matched to your goals, preferences, and
              schedule, with options for 1-on-1, 2-on-1, or 3-on-1 sessions.
            </p>
            <div className="w-full flex justify-between items-center">
              <h1 className="text-2xl lg:text-4xl xl:text-6xl text-white font-Akira">
                Personal <br />
                training
              </h1>
            </div>
          </div>
        </div>
        <div className="serviceCard bg-secondary w-full h-full rounded-[2rem] xs:p-4 ss:px-4 ss:py-4 sm:px-4 sm:py-4 lg:px-8 xl:px-12 lg:pb-4 xl:py-4 flex flex-col justify-end">
          <div className="h-[95%] lg:h-4/5 flex flex-col justify-between xs:gap-y-2 ss:gap-y-2 sm:gap-y-3 lg:gap-y-0">
            <p className="text-white text-xs lg:text-sm xl:text-base font-Sora">
              Group Class Plan, a favorite among our members, is led by
              certified CrossFit trainers. This plan offers intense group
              workouts for up to 20 participants. Our structured sessions
              feature a mix of High-Intensity Interval Training (HIIT), Olympic
              weightlifting, Strength Training, Gymnastics and Cardiovascular
              Training.
            </p>
            <div className="w-full flex justify-between items-center">
              <h1 className="text-2xl lg:text-4xl xl:text-6xl text-white font-Akira">
                Group <br />
                class
              </h1>
            </div>
          </div>
        </div>
        <div className="serviceCard bg-secondary w-full h-full rounded-[2rem] xs:p-4 ss:px-4 ss:py-4 sm:px-4 sm:py-4 lg:px-8 xl:px-12 lg:pb-4 xl:py-4 flex flex-col justify-end">
          <div className="h-[95%] lg:h-4/5 flex flex-col justify-between xs:gap-y-2 ss:gap-y-2 sm:gap-y-3 lg:gap-y-0">
            <p className="text-white text-xs lg:text-sm xl:text-base font-Sora">
              Let your kids discover the joy of movement and build confidence
              with our Kids Gymnastics program. Led by an experienced gymnast,
              children will learn funda mental gymnastics skills in a safe and
              supportive environment. From balancing to tumbling, each session
              fosters physical development and coordination while promoting
              teamwork and fun.
            </p>

            <div className="w-full flex justify-between items-center">
              <h1 className="text-2xl lg:text-4xl xl:text-6xl text-white font-Akira">
                Kids <br /> gymnastics
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div ref={(el) => (dayPassSection = el)} className="w-full mt-4 xxs:mt-6 xs:mt-8 ss:mt-16 sm:mt-16 lg:mt-24">
        <div className="overflow-hidden">
          <p className="dayPassSectionH1 font-Akira font-bold pointer-events-none xxs:text-2xl xs:text-xl ss:text-3xl sm:text-4xl lg:text-4xl xl:text-6xl uppercase text-center text-white">
            Not convinced yet ?
          </p>
        </div>
        <div className="overflow-hidden xxs:mb-3 xs:mb-4 ss:mt-2 ss:mb-4 sm:mt-2 sm:mb-6 lg:mt-6 lg:mb-10 xl:mt-6 xl:mb-10 pb-2">
          <p className="dayPassSectionP font-Sora text-white text-center pointer-events-none text-base xs:text-base ss:text-xl sm:text-2xl lg:text-4xl xl:text-4xl ">
            Get a glimpse with our Day Pass option
          </p>
        </div>
      </div>

      <div className="sm lg:h-[15vh] xs:gap-2 ss:gap-4 sm:gap-6 lg:gap-8 grid grid-cols-2 ss:grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 place-items-center">
        <div className="dayPassCard w-full h-full bg-white text-secondary rounded-[1rem] p-1.5 xs:p-2 ss:p-2 sm:p-3 lg:px-6 lg:py-4 flex flex-col justify-center gap-y-8">
          <p className="font-Sora text-center xs:text-lg ss:text-lg sm:text-xl lg:text-3xl">Day pass</p>
          <h1 className="font-Akira text-center font-bold xs:text-2xl ss:text-3xl sm:text-2xl lg:text-5xl">999 ETB</h1>
        </div>
        <div className="dayPassCard w-full h-full bg-white text-secondary rounded-[1rem] p-1.5 xs:p-2 ss:p-2 sm:p-3 lg:px-6 lg:py-4 flex flex-col justify-between">
          <p className="font-Sora text-center xs:text-lg ss:text-lg sm:text-xl lg:text-3xl">
            Day pass <br /> [With Trainer]
          </p>
          <h1 className="font-Akira text-center font-bold xs:text-2xl ss:text-3xl sm:text-2xl lg:text-5xl mt-2">
            1499 ETB
          </h1>
        </div>
        <div className="dayPassCard w-full h-full bg-white text-secondary rounded-[1rem] p-1.5 xs:p-2 ss:p-2 sm:p-3 lg:px-6 lg:py-4 flex flex-col justify-between">
          <p className="font-Sora text-center xs:text-lg ss:text-lg sm:text-xl lg:text-3xl">
            Group Class <br /> Day pass
          </p>
          <h1 className="font-Akira text-center font-bold xs:text-2xl ss:text-3xl sm:text-2xl lg:text-5xl mt-2">
            1499 ETB
          </h1>
        </div>
        <div className="dayPassCard w-full h-full bg-white text-secondary rounded-[1rem] p-1.5 xs:p-2 ss:p-2 sm:p-3 lg:px-6 lg:py-4 flex flex-col justify-between">
          <p className="font-Sora text-center xs:text-lg ss:text-lg sm:text-xl lg:text-3xl">
            Boxing/KickBoxing <br /> Day pass
          </p>
          <h1 className="font-Akira text-center font-bold xs:text-2xl ss:text-3xl sm:text-2xl lg:text-5xl mt-2">
            1499 ETB
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;

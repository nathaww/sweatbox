import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";
import { ServicesDetail } from "../../data";

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
      .from(
        ".serviceCard",
        {
          opacity: 0,
          scale: 0.9,
        },
        "-=1.2"
      );

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
      .from(
        ".dayPassCard",
        {
          opacity: 0,
          scale: 0.9,
          stagger: 0.05,
        },
        "-=1"
      );
  });

  return (
    <div
      id="service"
      ref={(el) => (serviceSection = el)}
      className="py-8 xs:py-8 ss:py-10 sm:py-10 lg:py-18 xl:py-20 w-full"
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

      <div className=" ss:gap-x-2 sm:gap-x-6 lg:gap-x-6 gap-y-2 ss:gap-y-2 sm:gap-y-6 lg:gap-y-6 xl:gap-y-10 grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 place-items-center">
        {ServicesDetail.map((item) => (
          <div
            key={item.id}
            className="serviceCard h-[250px] xs:h-[260px] ss:h-[260px] sm:h-[280px] lg:h-[280px] xl:h-[350px] bg-secondary w-full rounded-[2rem] p-4 xs:p-4 ss:px-4 ss:py-4 sm:px-4 sm:py-4 lg:px-8 xl:px-12 lg:pb-4 xl:py-4 flex flex-col justify-end"
          >
            <div className="h-[95%] lg:h-[90%] flex flex-col justify-between gap-y-3 xs:gap-y-2 ss:gap-y-2 sm:gap-y-3 lg:gap-y-0">
              <p className="text-white text-xs lg:text-sm xl:text-base font-Sora">
                {item.description}
              </p>

              <div className="w-full flex flex-col justify-center items-start">
                <h1 className="text-[1.3rem] leading-6 ss:text-2xl sm:text-2xl lg:text-4xl xl:text-6xl text-white font-Akira">
                  {item.title1}
                </h1>
                <h1 className="text-[1.3rem] leading-6 ss:text-2xl sm:text-2xl lg:text-4xl xl:text-6xl text-white font-Akira">
                  {item.title2}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        ref={(el) => (dayPassSection = el)}
        className="w-full mt-4 xxs:mt-6 xs:mt-8 ss:mt-16 sm:mt-16 lg:mt-24"
      >
        <div className="overflow-hidden">
          <p className="dayPassSectionH1 font-Akira font-bold pointer-events-none xxs:text-xl xs:text-xl ss:text-3xl sm:text-4xl lg:text-4xl xl:text-6xl uppercase text-center text-white">
            Not convinced yet ?
          </p>
        </div>
        <div className="overflow-hidden xxs:mb-3 xs:mb-4 ss:mt-2 ss:mb-4 sm:mt-2 sm:mb-6 lg:mt-6 lg:mb-10 xl:mt-6 xl:mb-10 pb-2">
          <p className="dayPassSectionP font-Sora text-white text-center pointer-events-none text-base xs:text-base ss:text-xl sm:text-2xl lg:text-4xl xl:text-4xl ">
            Get a glimpse with our Day Pass option
          </p>
        </div>
      </div>

      <div className="gap-2 xs:gap-2 ss:gap-4 sm:gap-6 lg:gap-8 grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 place-items-center">
        <div className="dayPassCard w-full h-full bg-white text-secondary rounded-[1rem] p-1.5 xs:p-2 ss:p-2 sm:p-3 lg:px-6 lg:py-4 flex flex-col justify-center gap-y-2 ss:gap-y-8 sm:gap-y-8 lg:gap-y-8">
          <p className="font-Sora text-center text-base xs:text-lg ss:text-lg sm:text-xl lg:text-2xl xl:text-3xl">
            Day pass
          </p>
          <h1 className="font-Akira text-center font-bold text-xl xs:text-2xl ss:text-3xl sm:text-2xl lg:text-4xl xl:text-5xl">
            999 ETB
          </h1>
        </div>
        <div className="dayPassCard w-full h-full bg-white text-secondary rounded-[1rem] p-1.5 xs:p-2 ss:p-2 sm:p-3 lg:px-6 lg:py-4 flex flex-col justify-between">
          <p className="font-Sora text-center text-base xs:text-lg ss:text-lg sm:text-xl lg:text-2xl xl:text-3xl">
            Day pass <br /> [With Trainer]
          </p>
          <h1 className="font-Akira text-center font-bold text-2xl xs:text-2xl ss:text-3xl sm:text-2xl lg:text-4xl xl:text-5xl sm:mt-2 lg:mt-2">
            1499 ETB
          </h1>
        </div>
        <div className="dayPassCard w-full h-full bg-white text-secondary rounded-[1rem] p-1.5 xs:p-2 ss:p-2 sm:p-3 lg:px-6 lg:py-4 flex flex-col justify-between">
          <p className="font-Sora text-center text-base xs:text-lg ss:text-lg sm:text-xl lg:text-2xl xl:text-3xl">
            Group Class <br /> Day pass
          </p>
          <h1 className="font-Akira text-center font-bold text-2xl xs:text-2xl ss:text-3xl sm:text-2xl lg:text-4xl xl:text-5xl sm:mt-2 lg:mt-2">
            1499 ETB
          </h1>
        </div>
        <div className="dayPassCard w-full h-full bg-white text-secondary rounded-[1rem] p-1.5 xs:p-2 ss:p-2 sm:p-3 lg:px-6 lg:py-4 flex flex-col justify-between">
          <p className="font-Sora text-center text-base xs:text-lg ss:text-lg sm:text-xl lg:text-2xl xl:text-3xl">
            Boxing/KickBoxing <br /> Day pass
          </p>
          <h1 className="font-Akira text-center font-bold text-2xl xs:text-2xl ss:text-3xl sm:text-2xl lg:text-4xl xl:text-5xl sm:mt-2 lg:mt-2">
            1499 ETB
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;

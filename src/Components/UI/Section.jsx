import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  let sectionImageSection = useRef(null);
  let mainSection = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({
        defaults: {
          ease: "expo.inOut",
        },
        scrollTrigger: {
          trigger: mainSection,
          start: "top center",
        },
      })
      .from(".sectionH1, .sectionP", {
        opacity: 0,
        y: 100,
        stagger: 0.1,
        duration: 1.2,
      })
      .from(
        ".leftCard",
        {
          opacity: 0,
          x: -100,
          stagger: 0.1,
          duration: 1.2,
        },
        "-=1"
      )
      .from(
        ".leftText span",
        {
          opacity: 0,
          stagger: 0.1,
          duration: 1.2,
        },
        "-=1.2"
      )
      .from(
        ".rightCard",
        {
          opacity: 0,
          y: 100,
          stagger: 0.1,
          duration: 1.2,
        },
        "-=1.6"
      )
      .from(
        ".sectionArrow",
        {
          opacity: 0,
          x: -100,
          stagger: 0.1,
          duration: 1.2,
        },
        "-=1.1"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionImageSection,
          start: "top center",
          scrub: 1.9,
        },
      })
      .to(".sectionImg", {
        scale: 1.2,
      });
  });

  return (
    <div
      ref={(el) => (mainSection = el)}
      className="py-8 ss:py-10 sm:py-10 lg:pt-28 w-full relative"
    >
      <div className="absolute -top-[7%] -left-10 z-10">
        <img
          src="/Images/dumbbell.png"
          className="w-7 sm:w-28 lg:w-36 xl:w-48"
          alt="sweatbox dumbbell image"
        />
      </div>
      <div className="w-full">
        <div className="overflow-hidden">
          <p className="sectionH1 font-Akira font-bold pointer-events-none  xxs:text-2xl xs:text-2xl ss:text-5xl sm:text-6xl lg:text-7xl xl:text-[7rem] xs:leading-6 leading-[5rem] uppercase text-center text-white">
            Dare to stand out!
          </p>
        </div>
        <div className="overflow-hidden xxs:mb-3 xs:my-4 ss:mt-2 ss:mb-4 sm:mt-2 sm:mb-6 lg:mt-6 lg:mb-10 xl:mt-8 xl:mb-16 pb-2">
          <p className="sectionP text-white text-center pointer-events-none text-base ss:text-xl sm:text-2xl lg:text-4xl xl:text-5xl ">
            Lets show you how
          </p>
        </div>
      </div>
      <div className="h-[95vh] w-full flex flex-col ss:flex-row sm:flex-row lg:flex-row justify-between items-center xxs:gap-y-4 xs:gap-y-4">
        <div className="ss:w-[39%] sm:w-[39%] lg:w-[39%] xxs:w-full xs:w-full h-full flex flex-row justify-between">
          <div
            ref={(el) => (sectionImageSection = el)}
            className="leftCard w-[72%] flex flex-col justify-between items-center bg-white h-full rounded-[2rem] p-4 xss:p-4 xs:pt-6 ss:p-2 sm:p-4 lg:p-6 xl:p-7"
          >
            <div className="overflow-hidden h-[80%] rounded-[2rem]">
              <img
                src="/Images/gym1.webp"
                alt="trainer image sweatbox"
                className="sectionImg w-full h-full object-cover"
              />
            </div>
            <p className="text-left w-full text-2xl xss:text-3xl xs:text-3xl ss:text-3xl sm:text-4xl lg:text-5xl xl:text-[4.1rem] leading-[1] font-bold font-Akira">
              Our <br /> Coaches
            </p>
          </div>
          <div className="leftCard w-[23%] h-full bg-secondary flex flex-row justify-center items-center rounded-[2rem] relative ">
            <p className="leftText font-Akira pointer-events-none font-bold text-white w-screen text-4xl ss:text-5xl sm:text-5xl lg:text-[4rem] xl:text-[6.2rem] -rotate-90 text-center">
              <span>S</span>
              <span>w</span>
              <span>e</span>
              <span>a</span>
              <span>t</span>
              <span>b</span>
              <span>o</span>
              <span>x</span>
            </p>
          </div>
        </div>
        <div className="ss:w-[59%] sm:w-[59%] lg:w-[59%] xxs:w-full xs:w-full h-full flex flex-col justify-between">
          <a href="#service" className="rightCard h-[48%] w-full bg-secondary rounded-[2rem] flex flex-col justify-end p-4 ss:p-6 sm:p-8 lg:p-8 xl:p-12">
            <p className="text-2xl ss:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl text-start font-bold font-Akira text-white">
              Our Best <br />
              Activities
            </p>
          </a>
          <a href="#gallery" className="rightCard h-[48%] w-full bg-white rounded-[2rem] flex flex-row items-end p-4 ss:p-6 sm:p-8 lg:p-8 xl:p-12">
            <p className="text-2xl ss:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold font-Akira text-black">
              Gym <br />
              Gallery
            </p>
            <div className="w-full h-full flex justify-end items-center">
              <img
                src="/Images/arrowPrimary.png"
                className="sectionArrow w-1/4 ss:w-[30%] sm:w-[25%] lg:w-[30%] xl:w-[35%]"
                alt="arrow image sweatbox"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section;

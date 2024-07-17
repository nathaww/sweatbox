import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  let landingImageSection = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({
        defaults: {
          ease: "expo.inOut",
        },
      })
      .from(".landingDiv", {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
      })
      .from(
        ".landingH1",
        {
          opacity: 0,
          y: 100,
          duration: 1.2,
        },
        "-=1.2"
      )
      .from(
        ".landingBtnSecondary",
        {
          opacity: 0,
          x: -100,
          stagger: 0.1,
          duration: 1.2,
        },
        "-=1.2"
      );
    gsap
      .timeline({
        scrollTrigger: {
          trigger: landingImageSection,
          start: "top center",
          scrub: 1.9,
        },
      })
      .to(".landingImg", {
        scale: 1.2,
      });
  });

  return (
    <div className="min-h-screen w-full relative flex justify-center items-center">
      <div className="bg-white landingDiv rounded-[3rem] w-full overflow-hidden p-2 xxs:p-3 xs:p-4 py-10 lg:p-14 xl:p-12">
        <div className="flex flex-col sm:flex-row lg:flex-row xl:flex-row items-end gap-y-4 pt-2">
          <div className="w-full h-full flex flex-col  items-start">
            <div className="overflow-hidden uppercase w-max">
              <h1 className="landingH1 pointer-events-none text-4xl xss:leading-4 xxs:text-[1.9rem] xs:text-[2.4rem] xs:leading-[2.8rem] sm:text-5xl lg:text-7xl xl:text-8xl font-Akira font-extrabold">
                You control
              </h1>
            </div>
            <div className="overflow-hidden uppercase w-max">
              <h1 className="landingH1 pointer-events-none text-4xl xss:leading-4 xxs:text-[1.9rem] xs:text-[2.4rem] xs:leading-[2.8rem] sm:text-5xl lg:text-7xl xl:text-8xl font-Akira font-extrabold">
                Your body!
              </h1>
            </div>
          </div>
          <div className="group flex flex-row lg:gap-x-2 justify-start w-full lg:justify-end items-center sm:w-3/5 lg:w-3/5 xl:w-3/5 h-full mb-3">
            <div className="landingBtnSecondary pe-2 group-hover:pe-0 duration-200 transition-all">
              <img
                src="/Images/arrowSecondary.png"
                className="w-7 xs:w-8 lg:w-14 xl:w-14"
                alt="arrow image sweatbox"
              />
            </div>
            <a href="#contactUs" className="landingBtnSecondary rounded-full font-Akira text-lg xs:text-xl sm:text-3xl lg:text-3xl xl:text-[2.8rem] py-2 px-8 xs:py-3 xs:px-6 lg:px-12 lg:py-6 font-bold text-white bg-secondary">
              Join Now
            </a>
          </div>
        </div>
        <div className="overflow-hidden w-max mb-3 lg:mb-12 lg:mt-6">
          <p className="landingH1 font-Sora text-xl lg:text-4xl xl:text-5xl lg:mb-2">
            Lets show you how...
          </p>
        </div>
        <div
          ref={(el) => (landingImageSection = el)}
          className="flex flex-col ss:flex-row sm:flex-row lg:flex-row xl:flex-row justify-between gap-4 lg:gap-8 items-center min-h-[70vh] ss:h-[70vh] sm:h-[70vh] lg:h-[70vh] xl:h-[70vh] lg:mb-6 xl:mb-8"
        >
          <div className="flex flex-col justify-between gap-4 lg:gap-7 items-center h-full w-full lg:w-[40%]">
            <div className="rounded-[3rem] overflow-hidden w-full h-full">
              <img
                src="/Images/gym1.webp"
                alt="landing image sweatbox"
                className="landingImg h-full w-full object-cover object-center"
              />
            </div>
            <div className="group flex-1 flex flex-row justify-between items-center w-full gap-x-1">
              <div>
                <img
                  src="/Images/arrowFilled.png"
                  alt="arrow image sweatbox"
                  className="object-cover object-center w-20 lg:w-32 xl:w-44 group-hover:rotate-90 transition-all duration-200"
                />
              </div>
              <a href="#gallery" className="rounded-full w-full text-center text-xl xss:text-xl xs:text-3xl sm:text-3xl lg:text-3xl xl:text-[2.5rem] font-Akira font-bold text-white bg-black p-4 xs:p-4 sm:p-4 lg:p-6 xl:py-12 xl:px-2">
                Gallery
              </a>
            </div>
          </div>
          <div className="h-[70vh] lg:h-full w-full rounded-[3rem] overflow-hidden relative">
            <img
              src="/Images/gym2.webp"
              alt="landing image sweatbox"
              className="landingImg h-full w-full object-cover object-center"
            />
            <div className="absolute bottom-6 left-4 lg:left-10 w-4/5 lg:max-w-md">
              <p className="text-xs font-Sora sm:text-xs xl:text-base text-white">
                At Sweatbox, we’re not your average gym. As Addis Ababa’s
                premier performance center, we’re here to supercharge your
                fitness journey. Picture a life filled with energy and
                strength—that’s what we offer
              </p>
              <p className="uppercase font-bold font-Akira text-base sm:text-lg lg:text-2xl xl:text-3xl text-white mt-2">
                A state of mind
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

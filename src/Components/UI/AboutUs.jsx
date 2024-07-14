import { useRef } from "react";

const AboutUs = () => {
  let aboutUsSection = useRef(null);

  return (
    <div
      id="service"
      ref={(el) => (aboutUsSection = el)}
      className="py-8 xs:py-8 ss:py-10 sm:py-10 lg:py-6 xl:py-20 w-full"
    >
      <div className="w-full">
        <div className="overflow-hidden">
          <p className="aboutUsSectionH1 font-Akira font-bold pointer-events-none xxs:text-2xl xs:text-4xl ss:text-5xl sm:text-6xl lg:text-7xl xl:text-[7rem] xs:leading-8 leading-[5rem] uppercase text-center text-white">
            About Us
          </p>
        </div>
        <div className="overflow-hidden xxs:mb-3 xs:my-4 ss:mt-2 ss:mb-4 sm:mt-2 sm:mb-6 lg:my-6 xl:my-8 pb-2">
          <p className="aboutUsSectionP text-white font-Sora text-center pointer-events-none text-base xs:text-lg ss:text-xl sm:text-2xl lg:text-4xl xl:text-5xl ">
            Our story
          </p>
        </div>
        <div className="mx-auto w-full flex flex-col justify-center items-center">
          <p className="text-white text-xs xs:text-xs ss:text-sm sm:text-base lg:text-base font-Sora text-center max-w-full ss:max-w-2xl sm:max-w-2xl lg:max-w-6xl">
            This is the story of how Sweatbox APG, founded by Getachew Melese,
            transformed from a one-man operation into a thriving fitness
            movement. It’s a testament to the power of resilience, community,
            and a shared passion for health and wellness.
          </p>
          <p className="text-white text-xs xs:text-xs ss:text-sm sm:text-base lg:text-base font-Sora text-center max-w-full ss:max-w-2xl sm:max-w-2xl lg:max-w-6xl">
            Join us as we take you through our journey, from those initial steps
            to becoming a household name. We invite you to be a part of our
            ever-growing family and write history with us!
          </p>
        </div>
        <div>
          <div className="overflow-hidden xxs:my-3 xs:my-4 ss:my-4 ss:mb-4 sm:my-6 lg:mt-6 lg:mb-10 xl:mt-8 xl:mb-16 pb-2">
            <p className="aboutUsSectionP text-white font-Sora text-center pointer-events-none text-base xs:text-lg ss:text-xl sm:text-2xl lg:text-4xl xl:text-5xl ">
              Meet the team
            </p>
          </div>
          <div className="grid grid-cols-2 ss:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 place-items-center gap-2 xs:gap-2 ss:gap-6 sm:gap-6 lg:gap-10 ss:w-11/12 sm:w-11/12 lg:w-2/3 min-h-screen ss:h-[80vh] sm:h-[80vh] lg:h-[80vh] mx-auto">
            <div className="bg-white rounded-xl w-full h-full flex flex-col justify-evenly items-center p-2 ss:p-4 sm:p-5 lg:p-6">
              <div className="rounded-full overflow-hidden w-28 h-28 ss:w-32 ss:h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                <img
                  src="/Images/Gallery/1.webp"
                  alt="meet the team images sweatbox"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="">
                <h1 className="font-Akira text-center text-primary text-base leading-4 ss:text-lg ss:leading-4 sm:text-2xl sm:leading-5 lg:text-2xl lg:leading-5 uppercase">
                  Getachew
                </h1>
                <h1 className="font-Akira text-center text-primary text-base leading-4 ss:text-lg ss:leading-4 sm:text-2xl sm:leading-5 lg:text-2xl lg:leading-5 uppercase">
                  Melese
                </h1>
                <p className="font-Sora font-semibold text-gray-600 text-center text-xs xs:text-xs ss:text-xs sm:text-sm lg:text-sm uppercase mt-2">
                  Founder and CEO
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl w-full h-full flex flex-col justify-evenly items-center p-6">
              <div className="rounded-full overflow-hidden w-28 h-28 ss:w-32 ss:h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                <img
                  src="/Images/Gallery/1.webp"
                  alt="meet the team images sweatbox"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="">
                <h1 className="font-Akira text-center text-primary text-base leading-4 ss:text-lg ss:leading-4 sm:text-2xl sm:leading-5 lg:text-2xl lg:leading-5 uppercase">
                  Nathan
                </h1>
                <h1 className="font-Akira text-center text-primary text-base leading-4 ss:text-lg ss:leading-4 sm:text-2xl sm:leading-5 lg:text-2xl lg:leading-5 uppercase">
                  Abebe
                </h1>
                <p className="font-Sora font-semibold text-gray-600 text-center text-xs xs:text-xs ss:text-xs sm:text-sm lg:text-sm uppercase mt-2">
                  Branch Manager
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl w-full h-full flex flex-col justify-evenly items-center p-6">
              <div className="rounded-full overflow-hidden w-28 h-28 ss:w-32 ss:h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                <img
                  src="/Images/Gallery/1.webp"
                  alt="meet the team images sweatbox"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="">
                <h1 className="font-Akira text-center text-primary text-base leading-4 ss:text-lg ss:leading-4 sm:text-2xl sm:leading-5 lg:text-2xl lg:leading-5 uppercase">
                  Samrawit
                </h1>
                <h1 className="font-Akira text-center text-primary text-base leading-4 ss:text-lg ss:leading-4 sm:text-2xl sm:leading-5 lg:text-2xl lg:leading-5 uppercase">
                  Tamirat
                </h1>
                <p className="font-Sora font-semibold text-gray-600 text-center text-xs xs:text-xs ss:text-xs sm:text-sm lg:text-sm uppercase mt-2">
                  Medical Doctor & Trainer
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl w-full h-full flex flex-col justify-evenly items-center p-6">
              <div className="rounded-full overflow-hidden w-28 h-28 ss:w-32 ss:h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                <img
                  src="/Images/Gallery/1.webp"
                  alt="meet the team images sweatbox"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="">
                <h1 className="font-Akira text-center text-primary text-base leading-4 ss:text-lg ss:leading-4 sm:text-2xl sm:leading-5 lg:text-2xl lg:leading-5 uppercase">
                  Woinshet
                </h1>
                <h1 className="font-Akira text-center text-primary text-base leading-4 ss:text-lg ss:leading-4 sm:text-2xl sm:leading-5 lg:text-2xl lg:leading-5 uppercase">
                  Tesfaye
                </h1>
                <p className="font-Sora font-semibold text-gray-600 text-center text-xs xs:text-xs ss:text-xs sm:text-sm lg:text-sm uppercase mt-2">
                  Branch Manager
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl w-full h-full flex flex-col justify-evenly items-center p-6">
              <div className="rounded-full overflow-hidden w-28 h-28 ss:w-32 ss:h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                <img
                  src="/Images/Gallery/1.webp"
                  alt="meet the team images sweatbox"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="">
                <h1 className="font-Akira text-center text-primary text-base leading-4 ss:text-lg ss:leading-4 sm:text-2xl sm:leading-5 lg:text-2xl lg:leading-5 uppercase">
                  Fasika
                </h1>
                <h1 className="font-Akira text-center text-primary text-base leading-4 ss:text-lg ss:leading-4 sm:text-2xl sm:leading-5 lg:text-2xl lg:leading-5 uppercase">
                  Mekbib
                </h1>
                <p className="font-Sora font-semibold text-gray-600 text-center text-xs xs:text-xs ss:text-xs sm:text-sm lg:text-sm uppercase mt-2">
                  Assistant Manager
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl w-full h-full flex flex-col justify-evenly items-center p-6">
              <div className="rounded-full overflow-hidden w-28 h-28 ss:w-32 ss:h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                <img
                  src="/Images/Gallery/1.webp"
                  alt="meet the team images sweatbox"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="">
                <h1 className="font-Akira text-center text-primary text-base leading-4 ss:text-lg ss:leading-4 sm:text-2xl sm:leading-5 lg:text-2xl lg:leading-5 uppercase">
                  Eleni
                </h1>
                <h1 className="font-Akira text-center text-primary text-base leading-4 ss:text-lg ss:leading-4 sm:text-2xl sm:leading-5 lg:text-2xl lg:leading-5 uppercase">
                  Mekuria
                </h1>
                <p className="font-Sora font-semibold text-gray-600 text-center text-xs xs:text-xs ss:text-xs sm:text-sm lg:text-sm uppercase mt-2">
                  Nutritionist & Dietitian
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

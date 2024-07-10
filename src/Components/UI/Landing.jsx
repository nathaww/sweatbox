import { FaAnglesRight } from "react-icons/fa6";

const Landing = () => {

    
  return (
    <div className="min-h-screen">
      <div className="bg-white rounded-[3rem] w-full overflow-hidden p-4 xxs:p-6 xs:p-6 py-10 lg:p-14 xl:p-16">
        <div className="flex flex-col lg:flex-row xl:flex-row items-end gap-y-4 pt-2">
          <div className="w-full h-full flex flex-col justify- items-start">
            <div className="overflow-hidden uppercase w-max">
              <h1 className="text-4xl xxs:text-[2.7rem] xs:text-[3.2rem] xs:leading-[2.8rem] sm:text-5xl lg:text-7xl xl:text-8xl font-Akira font-extrabold">
                You control
              </h1>
            </div>
            <div className="overflow-hidden uppercase w-max">
              <h1 className="text-4xl xxs:text-[2.7rem] xs:text-[3.2rem] xs:leading-[2.8rem] sm:text-5xl lg:text-7xl xl:text-8xl font-Akira font-extrabold">
                Your body!
              </h1>
            </div>
          </div>
          <div className="flex flex-row lg:gap-x-2 justify-start w-full lg:justify-end items-center lg:w-3/5 xl:w-3/5 h-full mb-3">
            <div className="xl:px-2">
              <FaAnglesRight className="text-xl xss:text-4xl xs:text-3xl lg:text-5xl xl:text-6xl text-secondary" />
            </div>
            <button className="rounded-full font-Akira text-2xl xss:text-2xl xs:text-3xl sm:text-4xl lg:text-3xl xl:text-[2.8rem] py-6 px-12 font-bold text-white bg-secondary">
              Join Now
            </button>
          </div>
        </div>
        <p className="text-xl lg:text-4xl xl:text-5xl mb-6 lg:mb-12 lg:mt-6">
          Lets show you how...
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between gap-4 lg:gap-8 items-center min-h-[70vh] lg:h-[70vh] lg:mb-6 xl:mb-8">
          <div className="flex flex-col justify-between gap-4 lg:gap-7 items-center h-full w-full lg:w-[40%]">
            <div className="rounded-[3rem] overflow-hidden w-full">
              <img
                src="/Images/gym1.jpg"
                alt=""
                className="h-full w-full object-cover object-center mix-blend-darken scale-125"
              />
            </div>
            <div className="flex-1 flex flex-row justify-between items-center w-full gap-x-1 lg:gap-x-4">
              <div className="sm:p-2 lg:p-4 xl:p-8 bg-secondary text-white rounded-full">
                <FaAnglesRight className="text-lg xss:text-xl xs:text-3xl sm:text-3xl lg:text-6xl xl:text-7xl" />
              </div>
              <button className="rounded-full w-full text-2xl xss:text-2xl sm:text-4xl lg:text-4xl xl:text-[2.5rem] font-Akira font-bold text-white bg-black p-2 xss:p-2 xs:p-2 sm:p-2 lg:p-6 xl:py-12 xl:px-2">
                Gallery
              </button>
            </div>
          </div>
          <div className="h-[70vh] lg:h-full w-full rounded-[3rem] overflow-hidden relative">
            <img
              src="/Images/gym2.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute bottom-6 left-2 lg:left-10 w-4/5 lg:max-w-md">
              <p className="text-xs sm:text-xs xl:text-base text-white">
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

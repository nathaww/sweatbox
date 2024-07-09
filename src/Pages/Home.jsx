import { FaAnglesRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-white rounded-[3rem] w-full overflow-hidden p-4 xxs:p-6 xs:p-6 py-10 lg:p-10 xl:p-12">
        <div className="flex flex-col lg:flex-row xl:flex-row items-end gap-y-4">
          <div className="w-full h-full flex flex-col justify-end">
            <div className="overflow-hidden uppercase w-max">
              <h1 className="text-4xl xxs:text-[2.7rem] xs:text-[3.2rem] xs:leading-[2.8rem] sm:text-5xl lg:text-8xl xl:text-[9rem] font-extrabold">
                You control
              </h1>
            </div>
            <div className="overflow-hidden uppercase w-max">
              <h1 className="text-4xl xxs:text-[2.7rem] xs:text-[3.2rem] xs:leading-[2.8rem] sm:text-5xl lg:text-8xl xl:text-[9rem] font-extrabold">
                Your body!
              </h1>
            </div>
          </div>
          <div className="flex flex-row lg:gap-x-2 justify-start w-full lg:justify-end items-center lg:w-3/5 xl:w-3/5 h-full">
            <div className="px-4">
              <FaAnglesRight className="text-xl xss:text-4xl xs:text-3xl lg:text-5xl xl:text-8xl text-secondary" />
            </div>
            <button className="rounded-full w-full text-2xl xss:text-2xl xs:text-3xl sm:text-4xl lg:text-7xl font-bold text-white bg-secondary p-2 xs:p-2 sm:p-4 lg:p-6 xl:p-10">
              Join Now
            </button>
          </div>
        </div>
        <p className="text-xl lg:text-4xl xl:text-4xl  my-4 g:my-8">
          Lets show you how...
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between gap-3 lg:gap-6 items-center min-h-[70vh]">
          <div className="flex flex-col justify-between gap-4 lg:gap-7 items-center h-full w-full lg:w-[40%]">
            <div className="rounded-[2rem] overflow-hidden w-full">
              <img
                src="/Images/gym1.jpg"
                alt=""
                className="h-full w-full object-cover object-center mix-blend-darken"
              />
            </div>
            <div className="flex-1 flex flex-row justify-between items-center w-full gap-x-1 lg:gap-x-3">
              <div className="p-4 sm:p-4 lg:p-6 bg-secondary text-white rounded-full">
                <FaAnglesRight className="text-lg xss:text-xl xs:text-3xl sm:text-3xl lg:text-4xl xl:text-9xl" />
              </div>
              <button className="rounded-full w-full text-2xl xss:text-2xl sm:text-4xl lg:text-7xl font-bold text-white bg-primary p-2 xss:p-2 xs:p-4 sm:p-4 lg:p-6 xl:p-10">
                Gallery
              </button>
            </div>
          </div>
          <div className="h-[70vh] lg:h-full w-full rounded-[2rem] overflow-hidden relative">
            <img
              src="/Images/gym2.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute bottom-6 left-2 lg:left-10 w-4/5 lg:max-w-xs">
              <p className="text-xs sm:text-xs xl:text-sm text-white">
                At Sweatbox, we’re not your average gym. As Addis Ababa’s
                premier performance center, we’re here to supercharge your
                fitness journey. Picture a life filled with energy and
                strength—that’s what we offer
              </p>
              <p className="uppercase font-bold text-base sm:text-lg lg:text-2xl xl:text-3xl text-white mt-2">
                A state of mind
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

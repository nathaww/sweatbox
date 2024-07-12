import { useRef } from "react";

const Gallery = () => {
  let gallerySection = useRef(null);

  return (
    <div
      ref={(el) => (gallerySection = el)}
      className="py-8 ss:py-10 sm:py-10 lg:py-20 w-full"
    >
      <div className="overflow-hidden mb-6">
        <p className="sectionH1 font-Akira font-bold pointer-events-none  xxs:text-2xl ss:text-5xl sm:text-6xl lg:text-7xl xl:text-[7rem] xs:leading-6 leading-[5rem] uppercase text-center text-white">
          Gallery
        </p>
      </div>

      <div className="h-[150vh] lg:w-[90%] mx-auto grid ss:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 place-items-center gap-6">
        <div className="rounded-[2rem] w-full h-full overflow-hidden">
          <img
            src="/Images/gym1.jpg"
            alt="sweatbox gallery"
            className="galleryImg w-full h-full object-cover object-center"
          />
        </div>
        <div className="rounded-[2rem] w-full h-full overflow-hidden">
          <img
            src="/Images/gym1.jpg"
            alt="sweatbox gallery"
            className="galleryImg w-full h-full object-cover object-center"
          />
        </div>
        <div className="rounded-[2rem] w-full h-full overflow-hidden">
          <img
            src="/Images/gym1.jpg"
            alt="sweatbox gallery"
            className="galleryImg w-full h-full object-cover object-center"
          />
        </div>
        <div className="rounded-[2rem] w-full h-full overflow-hidden">
          <img
            src="/Images/gym1.jpg"
            alt="sweatbox gallery"
            className="galleryImg w-full h-full object-cover object-center"
          />
        </div>
        <div className="rounded-[2rem] w-full h-full overflow-hidden">
          <img
            src="/Images/gym1.jpg"
            alt="sweatbox gallery"
            className="galleryImg w-full h-full object-cover object-center"
          />
        </div>
        <div className="rounded-[2rem] w-full h-full overflow-hidden">
          <img
            src="/Images/gym1.jpg"
            alt="sweatbox gallery"
            className="galleryImg w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

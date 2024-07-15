import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  let gallerySection = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({
        defaults: {
          ease: "expo.inOut",
        },
      })
      .from(".galleryImg", {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
      });

    let size = gsap.matchMedia();

    size.add("(max-width: 425px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: gallerySection,
            start: "top center",
            scrub: 1.9,
          },
        })
        .to(".galleryImg", {
          scale: 1.2,
        });
    });

    size.add("(min-width: 640px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: gallerySection,
            start: "top center",
            scrub: 1.9,
          },
        })
        .to(".galleryImg", {
          y: -105,
        });
    });
  });

  return (
    <div
    id="gallery"
      ref={(el) => (gallerySection = el)}
      className="py-8 ss:py-10 sm:py-10 lg:py-18 xl:py-20 w-full"
    >
      <div className="overflow-hidden mb-6">
        <p className="galleryH1 font-Akira font-bold pointer-events-none mb-2 xxs:text-2xl xs:text-4xl ss:text-5xl sm:text-6xl lg:text-7xl xl:text-[7rem] xs:leading-6 leading-[5rem] uppercase text-center text-white">
          Gallery
        </p>
      </div>

      <div className="ss:h-screen sm:h-screen lg:h-[150vh] lg:w-[90%] mx-auto grid grid-cols-2 ss:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 place-items-center gap-2 xs:gap-3 ss:gap-4 sm:gap-5 lg:gap-6">
        <div className="rounded-[2rem] w-full h-full overflow-hidden relative">
          <img
            src="/Images/Gallery/1.webp"
            alt="sweatbox gallery"
            className="galleryImg w-full h-[130%] object-cover object-center "
          />
        </div>
        <div className="rounded-[2rem] w-full h-full overflow-hidden relative">
          <img
            src="/Images/Gallery/2.webp"
            alt="sweatbox gallery"
            className="galleryImg w-full h-[130%] object-cover object-center "
          />
        </div>
        <div className="rounded-[2rem] w-full h-full overflow-hidden relative">
          <img
            src="/Images/Gallery/3.webp"
            alt="sweatbox gallery"
            className="galleryImg w-full h-[130%] object-cover object-center "
          />
        </div>
        <div className="rounded-[2rem] w-full h-full overflow-hidden relative">
          <img
            src="/Images/Gallery/4.webp"
            alt="sweatbox gallery"
            className="galleryImg w-full h-[130%] object-cover object-center "
          />
        </div>
        <div className="rounded-[2rem] w-full h-full overflow-hidden relative">
          <img
            src="/Images/Gallery/5.webp"
            alt="sweatbox gallery"
            className="galleryImg w-full h-[130%] object-cover object-center "
          />
        </div>
        <div className="rounded-[2rem] w-full h-full overflow-hidden relative">
          <img
            src="/Images/Gallery/1.webp"
            alt="sweatbox gallery"
            className="galleryImg w-full h-[130%] object-cover object-center "
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

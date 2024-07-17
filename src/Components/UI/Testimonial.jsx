import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { SuccessStories } from "../../data";

const TestimonialSlider = () => {
  const [open, setOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

//   const handleReadMore = (testimonial) => {
//     setSelectedTestimonial(testimonial);
//     setOpen(true);
//   };

  const handleClose = () => {
    setOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <div className="w-full mx-auto">
      <div className="overflow-hidden mb-8 ss:mb-12 sm:mb-12 lg:mb-12">
        <p className="serviceSectionH1 font-Akira font-bold pointer-events-none xxs:text-2xl xs:text-3xl ss:text-5xl sm:text-6xl lg:text-7xl xl:text-[6rem] xs:leading-7 leading-[5rem] uppercase text-center text-white">
          Success Stories
        </p>
      </div>
      <Carousel swipeable={false} infiniteLoop={true} autoPlay={true} showStatus={false} showIndicators={false}>
        {SuccessStories.map((testimonial, index) => (
          <div
            key={index}
            className="p-4 w-11/12 mx-auto bg-white rounded-[3rem] h-max ss:h-[85vh] sm:h-[85vh] lg:h-[85vh] flex flex-col-reverse ss:flex-row sm:flex-row lg:flex-row items-center"
          >
            <div className=" w-full ss:w-1/2 sm:w-2/3 lg:w-2/3 h-full flex flex-col justify-center gap-2 xl:gap-4 p-4">
              <h1 className="text-2xl xs:text-3xl ss:text-3xl sm:text-5xl lg:text-5xl xl:text-7xl font-Akira text-start">
                Meet <span className="text-secondary">{testimonial.name}</span>
              </h1>
              <h2 className="text-base xs:text-lg ss:text-xl sm:text-2xl lg:text-2xl xl:text-4xl font-Akira text-start">
                {testimonial.title}
              </h2>
              <p className="text-left my-4 font-Sora text-xs ss:text-xs sm:text-sm lg:text-sm xl:text-base">
                {testimonial.description}
              </p>
              <p className="text-left w-full mx-auto font-Akira text-sm xs:text-base ss:text-xl sm:text-2xl lg:text-2xl xl:text-4xl">
                {testimonial.message}
              </p>
            </div>
            <div className="imgCar w-full ss:w-1/2 sm:w-1/3 lg:w-1/3 h-full flex justify-center items-center overflow-hidden">
              <Carousel
                showArrows={false}
                showThumbs={false}
                showIndicators={true}
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                dynamicHeight={false}
              >
                {testimonial.img.map((item, index) => (
                  <img
                    key={index}
                    src={item.img}
                    alt="testimonial images sweatbox"
                    className="w-full h-full mx-auto object-cover rounded-[3rem] object-center"
                  />
                ))}
              </Carousel>
            </div>
          </div>
        ))}
      </Carousel>

      {selectedTestimonial && (
        <Modal open={open} onClose={handleClose} center>
          <div className="p-4">
            <img
              src={selectedTestimonial.image}
              alt="testimonial"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <p className="text-center">{selectedTestimonial.fullDescription}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default TestimonialSlider;
